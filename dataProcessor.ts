
import { LeadData, TeamPerformance, OnboardingJustification, CancellationReason } from './types';

export const parseCSV = (csvText: string): LeadData[] => {
  const lines = csvText.split('\n');
  
  return lines.slice(1)
    .filter(line => line.trim() !== '')
    .map(line => {
      // Regex to handle commas inside quotes
      const parts = line.match(/(".*?"|[^",\s]+)(?=\s*,|\s*$)/g) || [];
      const cleanParts = parts.map(p => p.replace(/^"|"$/g, '').trim());
      
      const ganhoEmStr = cleanParts[4] || '';
      const criadoEmStr = cleanParts[9] || '';
      const etapaRaw = cleanParts[1] || '';
      const equipeRaw = cleanParts[5] || 'Não Identificada';
      
      // Removed the 2025-only filter to respect "consider all leads in the CSV"
      // if (!ganhoEmStr.startsWith('2025')) return null;

      const equipePrincipal = equipeRaw.split(',')[0].trim() || 'Não Identificada';

      let categoria: LeadData['categoria'] = 'Outros';
      if (etapaRaw === 'BASE GE') {
        categoria = 'Base';
      } else if (etapaRaw === 'CANCELADO GE') {
        categoria = 'Cancelado';
      } else if (etapaRaw.toUpperCase().includes('ETAPA')) {
        categoria = 'Onboarding';
      }

      // Calculate Days to Close
      let diasParaFechar = 0;
      if (ganhoEmStr && criadoEmStr) {
        const ganho = new Date(ganhoEmStr).getTime();
        const criado = new Date(criadoEmStr).getTime();
        if (!isNaN(ganho) && !isNaN(criado)) {
          diasParaFechar = Math.max(0, Math.floor((ganho - criado) / (1000 * 60 * 60 * 24)));
        }
      }

      return {
        titulo: cleanParts[0],
        etapa: etapaRaw,
        quantidadeLicencas: parseInt(cleanParts[2]) || 0,
        status: cleanParts[3],
        ganhoEm: ganhoEmStr,
        criadoEm: criadoEmStr,
        equipeOriginal: equipeRaw,
        equipePrincipal,
        segmento: cleanParts[6],
        justificativa: cleanParts[7] || '',
        motivoCancelamento: cleanParts[8] || 'Não Informado',
        categoria,
        diasParaFechar
      };
    })
    .filter((lead): lead is LeadData => lead !== null);
};

export const calculateTeamPerformance = (leads: LeadData[]): TeamPerformance[] => {
  const teamsMap = new Map<string, { base: number; onboarding: number; cancelado: number; total: number; totalDias: number; countFechados: number }>();

  leads.forEach(lead => {
    const team = lead.equipePrincipal;
    // User requested to remove "Não Identificada" from the composition chart but maybe keep it in stats? 
    // Usually, executive reports group unknown as "Outros/Não Identificado" or filter them.
    // Let's keep it but handle the sorting.
    if (!teamsMap.has(team)) {
      teamsMap.set(team, { base: 0, onboarding: 0, cancelado: 0, total: 0, totalDias: 0, countFechados: 0 });
    }
    const stats = teamsMap.get(team)!;
    stats.total++;
    if (lead.categoria === 'Base') {
      stats.base++;
      stats.totalDias += lead.diasParaFechar;
      stats.countFechados++;
    }
    if (lead.categoria === 'Onboarding') stats.onboarding++;
    if (lead.categoria === 'Cancelado') stats.cancelado++;
  });

  return Array.from(teamsMap.entries())
    .map(([equipe, stats]) => ({
      equipe,
      ...stats,
      taxaConversao: stats.total > 0 ? (stats.base / stats.total) * 100 : 0,
      taxaChurn: stats.total > 0 ? (stats.cancelado / stats.total) * 100 : 0,
      mediaDiasFechamento: stats.countFechados > 0 ? Math.round(stats.totalDias / stats.countFechados) : 0
    }))
    .filter(t => t.equipe !== 'Não Identificada') // Filter as requested for performance charts
    .sort((a, b) => b.total - a.total);
};

export const getOnboardingJustificationSummary = (leads: LeadData[]): OnboardingJustification[] => {
  const onboardingLeads = leads.filter(l => l.categoria === 'Onboarding' && l.justificativa.length > 2);
  
  const categories = [
    { label: 'Ajustes de Integração', keywords: ['integração', 'suporte', 'pontta', 'api', 'automática', 'desenvolver', 'projeto'] },
    { label: 'Aguardando Cliente', keywords: ['aguardando', 'viagem', 'gestor', 'validar', 'retorno', 'ausente', 'recesso', 'internado', 'férias', 'agenda'] },
    { label: 'Baixo Uso/Engajamento', keywords: ['não estão fazendo', 'sem uso', 'teste', 'aderindo', 'resistente', 'baixa utilização', 'desinteressado'] },
    { label: 'Reestruturação Interna', keywords: ['treinamento', 'novo responsável', 'mudança de gestor', 'equipe nova', 'demitido', 'reestruturando', 'transição'] },
    { label: 'Pendências Técnicas', keywords: ['erro', 'bug', 'configuração', 'divergência', 'problemas técnicos', 'falta de função'] },
  ];

  const counts: Record<string, number> = {};
  categories.forEach(c => counts[c.label] = 0);
  let otherCount = 0;

  onboardingLeads.forEach(lead => {
    const text = lead.justificativa.toLowerCase();
    let categorized = false;
    for (const cat of categories) {
      if (cat.keywords.some(kw => text.includes(kw))) {
        counts[cat.label]++;
        categorized = true;
        break;
      }
    }
    if (!categorized) otherCount++;
  });

  return Object.entries(counts)
    .map(([reason, count]) => ({ reason, count }))
    .concat(otherCount > 0 ? [{ reason: 'Outras Justificativas', count: otherCount }] : [])
    .sort((a, b) => b.count - a.count);
};

export const getCancellationReasonSummary = (leads: LeadData[]): CancellationReason[] => {
  const cancelledLeads = leads.filter(l => l.categoria === 'Cancelado');
  const counts: Record<string, number> = {};

  cancelledLeads.forEach(l => {
    const reason = l.motivoCancelamento || 'Não Informado';
    counts[reason] = (counts[reason] || 0) + 1;
  });

  return Object.entries(counts)
    .map(([reason, count]) => ({ reason, count }))
    .sort((a, b) => b.count - a.count);
};
