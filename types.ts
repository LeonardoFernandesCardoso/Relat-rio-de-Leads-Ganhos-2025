
export interface LeadData {
  titulo: string;
  etapa: string;
  quantidadeLicencas: number;
  status: string;
  ganhoEm: string;
  criadoEm: string;
  equipeOriginal: string;
  equipePrincipal: string;
  segmento: string;
  justificativa: string;
  motivoCancelamento: string;
  categoria: 'Base' | 'Onboarding' | 'Cancelado' | 'Outros';
  diasParaFechar: number;
}

export interface TeamPerformance {
  equipe: string;
  base: number;
  onboarding: number;
  cancelado: number;
  total: number;
  taxaConversao: number;
  taxaChurn: number;
  mediaDiasFechamento: number;
}

export interface OnboardingJustification {
  reason: string;
  count: number;
}

export interface CancellationReason {
  reason: string;
  count: number;
}
