
// Configurações de Cores
const STATUS_COLORS = {
  Base: '#002855',      // Azul Marinho Profundo
  Onboarding: '#3b82f6', // Azul Oceano
  Cancelado: '#d62828',  // Alerta Vermelho
  Others: '#1e293b'      // Slate Dark
};

const RAW_CSV = `"Negócio - Título","Negócio - Etapa","Negócio - ⭐ Quantidade de Licenças / Veículos contratados","Negócio - Status","Negócio - Ganho em","Negócio - ⭐🔵 Tipo de Equipe (Teams)","Negócio - ⭐ Segmento do Cliente","Negócio - ⚠️ Justificativa Onboarding","Negócio - Motivo do Cancelamento","Negócio - Negócio criado em"
"Negócio Condoseg (Cancelado)","CANCELADO GE","4","Ganho","2025-10-14 00:00:00","Técnicos","Segurança Eletrônica","","","2021-05-05 14:40:24"
"SSGR TECNOLOGIA","BASE GE","7","Ganho","2025-06-25 10:51:01","Técnicos","Tecnologia, Serviços","","Redução de Custos","2021-08-26 18:56:16"
"ELETRICIDADE MICLOS E SOARES LTDA - ELETRO - MICLOS & ABREU","BASE GE","4","Ganho","2025-10-14 00:00:00","Técnicos","Inst. Manutenção Elétrica, Energia","","Inadimplência (Jurídico)","2022-03-17 23:51:48"
"De Raiz Construtora e Instaladora Industrial LTDA (Cancelado) (Cancelado)","CANCELADO GE","4","Ganho","2025-02-05 10:57:05","Técnicos","","","Redução de Custos","2023-06-05 09:27:14"
"Nobre Arte - FERNANDO LOPES MIRANDA MACHADO","ETAPA 4: 46 a 60 DIAS","4","Ganho","2025-10-31 00:00:00","Vendedores","OUTROS","","","2024-02-01 18:11:21"
"Lacca Móveis - Lacca S/A Industria e Comercio de Moveis","ETAPA 5: > 60 DIAS","10","Ganho","2025-05-02 09:49:07","Técnicos","Serviços, OUTROS","Ainda não estão fazendo visitas em 100% dos casos, boa parte é teste, tendo apenas 1 usuário que fizeram reais.","","2024-03-18 10:28:41"
"VERTIS ELEVADORES / Vertis Elevadores - Conservacao, Manutencao e Modernizacao de Elevadores e Escadas Rolantes LTDA","ETAPA 5: > 60 DIAS","4","Ganho","2025-09-29 14:26:39","Técnicos","Elevadores","","","2024-08-21 09:54:57"
"VIGODENT INDUSTRIA E COMERCIO LTDA","BASE GE","15","Ganho","2025-03-06 00:00:00","Vendedores","Distribuidora","","","2024-08-21 15:43:40"
"EleR - Maya Takebe (ELE. R.)","ETAPA 2: 16 a 30 DIAS","5","Ganho","2025-11-25 15:53:26","Técnicos","Manutenção","","","2024-08-22 13:42:05"
"Farmácia Personale","BASE GE","5","Ganho","2025-02-10 16:10:47","Representantes","Saúde","","","2024-10-10 09:42:07"
"MUTUARIA PAX UNIAO LTDA - Rosa Mística Telemedicina (Cancelado)","CANCELADO GE","5","Ganho","2025-01-15 13:35:11","Vendedores, Promotores","Saúde","","Inadimplência (Jurídico)","2024-11-04 14:34:08"
"MPX Piscinas (Cancelado) (Cancelado)","CANCELADO GE","4","Ganho","2025-05-12 08:24:52","Técnicos","Piscinas","","Inadimplência (Jurídico)","2024-11-04 16:11:16"
"GETNET ADQUIRENCIA E SERVIÇOS PARA MEIOS DE PAGAMENTO S.A. (Cancelado)","CANCELADO GE","60","Ganho","2025-05-30 15:47:51","Vendedores, Representantes","Bancário","","Fiquei sem equipe (GE)","2024-11-08 15:34:01"
"Staff Force","BASE GE","10","Ganho","2025-01-23 18:35:20","Representantes","Alimentos, Serviços, OUTROS","","","2024-11-09 14:22:02"
"COFEMA ATACADISTA LTDA (Cancelado)","CANCELADO GE","50","Ganho","2025-01-08 17:58:28","Vendedores, Representantes","Distribuidora, Construção Civil","","Mudança de Estratégia da Empresa","2024-11-12 08:43:48"
"Jd Tecnologia (Cancelado)","CANCELADO GE","4","Ganho","2025-02-24 00:00:00","Técnicos","Tecnologia","","Inadimplência (Jurídico)","2024-11-13 13:07:21"
"kitFilter Com Filtros Ltda","BASE GE","5","Ganho","2025-02-19 00:00:00","Técnicos","Refrigeração","","","2024-11-14 11:48:07"
"WILMAR ANDRES VARGAS TISOY 71280736127 - CREDITOSQUINDIO","BASE GE","29","Ganho","2025-01-22 17:37:01","","OUTROS","","","2024-11-15 14:48:53"
"Deli - Comandarina Brasil LTDA (Cancelado)","CANCELADO GE","18","Ganho","2025-02-28 18:32:07","Vendedores","","","Falta de Função","2024-11-15 17:17:11"
"AUTO PECAS PADRE CICERO LTDA (Cancelado)","CANCELADO GE","10","Ganho","2025-02-03 16:34:02","Vendedores, Promotores","Automotivo","","","2024-11-19 08:28:30"
"HEALTHYCANN BRASIL LTDA (Cancelado)","CANCELADO GE","8","Ganho","2025-04-22 16:15:49","Representantes","Saúde","Equipe em congresso, por isso a queda nas visitas.","Não aceitação por parte da equipe (GE)","2024-11-21 12:20:28"
"GLOBAL INTERMEDIACOES E NEGOCIOS LTDA","BASE GE","4","Ganho","2025-01-30 08:41:35","Vendedores","OUTROS","","","2024-11-22 10:47:40"
"Clean Lab Indústria Óptica","BASE GE","4","Ganho","2025-02-19 00:00:00","Representantes","","","","2024-11-27 10:15:56"
"Farmacotecnica Inst de Manipulacoes Farmaceuticas Ltda (Cancelado)","CANCELADO GE","8","Ganho","2025-03-27 17:17:01","Representantes","Saúde","","Dificuldade de uso do sistema","2024-11-29 08:56:15"
"Roccovia Perfumaria Ltda - CP Rocco (Oboticario)","BASE GE","13","Ganho","2025-02-04 16:58:18","Consultores","OUTROS","","","2024-11-29 15:11:23"
"R&G Representação","BASE GE","5","Ganho","2025-02-11 00:00:00","Vendedores, Promotores","Serviços","","","2024-12-03 18:38:09"
"Promoup Produções (Cancelado)","CANCELADO GE","4","Ganho","2025-01-10 17:07:29","Técnicos","Serviços","","Inadimplência (Jurídico)","2024-12-05 14:48:47"
"Oliveira - Segurança do Trabalho","BASE GE","4","Ganho","2025-01-23 18:02:16","Técnicos","Segurança","","","2024-12-13 16:53:19"
"SOMOS KAZA LTDA (Cancelado) (Cancelado)","CANCELADO GE","4","Ganho","2025-01-02 10:19:39","Vendedores","OUTROS","","Inadimplência (Jurídico)","2024-12-16 14:53:02"
"R.T.K (Naiak)","BASE GE","4","Ganho","2025-04-08 17:57:18","Vendedores","Distribuidora, Cosméticos, Saúde","","","2024-12-17 14:22:56"
"Moby Tecnologia (Cancelado)","CANCELADO GE","5","Ganho","2025-02-20 00:00:00","Técnicos","Tecnologia","","Contratei outro sistema, Problemas Técnicos Recorrentes","2024-12-19 11:56:02"
"EXTINGUEMAIS EXTINTORES LTDA (Cancelado)","CANCELADO GE","4","Ganho","2025-02-19 00:00:00","Vendedores","Distribuidora","","Redução de Custos","2024-12-20 08:49:23"
"Tio Dai Moveis Ltda - REDE BAIANA (Cancelado)","CANCELADO GE","4","Ganho","2025-01-29 15:11:45","Entregadores","Imobiliário","","Inadimplência (Jurídico)","2024-12-23 08:06:11"
"Fsa Service manutenção Condomnial","BASE GE","3","Ganho","2025-01-07 14:31:30","Técnicos","Serviços, Segurança Eletrônica","","","2025-01-02 18:45:02"
"Sae Importacao Exportacao Dolly Refrigerantes","BASE GE","20","Ganho","2025-04-29 17:00:38","Vendedores","Alimentos, Distribuidora","Insatisfação com a API e impossibilidade de gerir as rotas conforme a necessidade do projeto.","","2025-01-02 19:52:33"
"LEVEN - Felix & Ribeiro","BASE GE","4","Ganho","2025-03-19 00:00:00","Representantes","Farmacêutico","","","2025-01-03 16:09:33"
"Suprinet Telecom (Cancelado) (Cancelado)","CANCELADO GE","4","Ganho","2025-02-04 10:12:59","Vendedores","Telecomunicações","","Fiquei sem equipe (GE)","2025-01-06 11:05:42"
"APCP PARTICIPACOES SOCIETARIAS LTDA (Baterlife)","BASE GE","41","Ganho","2025-02-07 15:05:10","Vendedores","Distribuidora, Automotivo","","","2025-01-06 16:48:42"
"Be Automação","ETAPA 5: > 60 DIAS","6","Ganho","2025-02-19 18:01:18","Técnicos","Piscinas","Pretendem começar o uso somente em janeiro devido recesso.","","2025-01-08 11:52:46"
"Odontoart Planos Odontológicos Ltda","BASE GE","18","Ganho","2025-04-01 11:42:07","Vendedores","Saúde","Empresa com problemas internos e trocas de gestão.","","2025-01-08 14:46:35"
"SKYTEAM CONSOLIDADORA","BASE GE","24","Ganho","2025-02-14 12:07:02","Vendedores","Turismo","","","2025-01-09 10:47:59"
"Grupo Canarinho (Cancelado)","CANCELADO GE","4","Ganho","2025-03-10 11:51:30","Vendedores","Distribuidora","","Inadimplência (Jurídico)","2025-01-10 11:58:16"
"Farmafórmula Fortaleza (Cancelado)","CANCELADO GE","7","Ganho","2025-02-27 18:51:18","","Saúde","","Inadimplência (Jurídico)","2025-01-11 12:42:46"
"Lumatec informática e segurança","BASE GE","4","Ganho","2025-02-05 15:23:22","Técnicos","Informática","","","2025-01-13 16:28:49"
"ENW • Telecom, Segurança e Energia","BASE GE","12","Ganho","2025-03-26 10:11:39","Técnicos","Telecomunicações, Segurança, Energia","","","2025-01-13 16:58:00"
"Vetex Brasília","BASE GE","4","Ganho","2025-07-07 17:32:48","Entregadores","Animal/Veterinária","","","2025-01-14 15:18:19"
"Ampacck Representações","BASE GE","5","Ganho","2025-02-07 18:11:27","","Serviços, OUTROS","","","2025-01-14 16:28:57"
"Agabê Tecnologia Indústria e Comércio LTDA","BASE GE","12","Ganho","2025-01-28 15:58:44","Vendedores","Distribuidora, Industrial","","","2025-01-15 13:28:08"
"Ouro Verde","BASE GE","10","Ganho","2025-02-04 17:12:48","Vendedores","Cosméticos","","","2025-01-20 16:34:51"
"Imperial Comercio de Produtos Hospitalares LTDA","BASE GE","13","Ganho","2025-04-30 16:20:04","Mista (Técnicos/Vendedores)","Saúde","","","2025-01-23 08:09:46"
"Útil Informática (Cancelado)","CANCELADO GE","4","Ganho","2025-02-14 00:00:00","Técnicos","Tecnologia","","Falta de Função","2025-01-23 13:00:51"
"CGC Energia - CENTRAIS DE GERACAO COMPARTILHADA LTDA","BASE GE","6","Ganho","2025-02-27 00:00:00","Vendedores","Energia","","","2025-01-28 19:46:57"
"Maqplan (Cancelado)","CANCELADO GE","4","Ganho","2025-01-29 17:27:27","Entregadores","Tecnologia","","Mudança de Estratégia da Empresa","2025-01-29 11:23:24"
"COMPASSO MÍDIA EXTERIOR (Cancelado)","CANCELADO GE","6","Ganho","2025-02-07 18:10:08","Técnicos","Serviços, Marketing","","Fiquei sem equipe (GE)","2025-01-30 10:24:55"
"Comercio e Industria Optica Tavares","BASE GE","5","Ganho","2025-03-17 11:20:27","Vendedores","Saúde","","","2025-01-30 14:09:12"
"PRECISAO INOX INDUSTRIA DE MAQUINAS E EQUIPAMENTOS LTDA","BASE GE","4","Ganho","2025-02-07 17:18:39","Técnicos","Industrial","","","2025-02-01 15:08:14"
"VGX Contact Center Norte MG S.A","BASE GE","110","Ganho","2025-03-31 08:24:46","Vendedores, Consultores","Energia, OUTROS","","","2025-02-03 18:50:31"
"Tudor Baterias Piracicaba LTDA","BASE GE","8","Ganho","2025-03-18 10:13:31","Vendedores, Entregadores","Distribuidora, Automotivo","","","2025-02-04 16:39:33"
"Dseven7 empreendimentos imobiliários Ltda (Cancelado) (Cancelado)","CANCELADO GE","4","Ganho","2025-04-01 08:32:26","Técnicos","Imobiliário","Falta de aprovação da gestora.","Fiquei sem equipe (GE)","2025-02-07 08:13:34"
"CONSUNUTRI CONSULTORIA LTDA (Cancelado)","CANCELADO GE","4","Ganho","2025-05-27 13:51:59","Representantes, Consultores","Alimentos, Segurança","","Mudança de Estratégia da Empresa","2025-02-07 12:05:35"
"Termofort Importacao e Exportacao em Refrigeracao Ltda","BASE GE","6","Ganho","2025-02-18 17:49:15","Técnicos","Refrigeração, Industrial","","","2025-02-10 16:29:11"
"VSIT SOLUCOES COMERCIO E SERVICOS LTDA","BASE GE","4","Ganho","2025-03-18 12:32:22","Técnicos","Serviços","","","2025-02-10 18:45:34"
"Dryeration Ind Com Proj Ltda","BASE GE","20","Ganho","2025-06-16 10:34:44","Técnicos","Industrial","","","2025-02-11 16:32:35"
"ALTERNATIVA ELETRICA UBA LTDA (Racional Eletrica)","BASE GE","7","Ganho","2025-04-02 10:57:26","Técnicos","Serviços","","","2025-02-12 14:49:52"
"Florisa Veículos Ltda - Someval Caminhões","BASE GE","10","Ganho","2025-03-10 14:39:14","Vendedores","Automotivo","","","2025-02-12 17:50:02"
"S&S SEGURADORA (Cancelado)","CANCELADO GE","4","Ganho","2025-03-10 17:22:05","Representantes","Imobiliário","","Mudança de Estratégia da Empresa","2025-02-12 21:28:27"
"NEW ADVISORS LTDA","BASE GE","30","Ganho","2025-02-25 13:56:04","Vendedores","Energia","","","2025-02-13 06:46:32"
"Drovaget","BASE GE","5","Ganho","2025-03-10 13:58:55","Promotores","Animal/Veterinária","","","2025-02-13 10:45:52"
"Supplytech Soluções Técnicas","BASE GE","7","Ganho","2025-02-25 10:59:20","Técnicos","Tecnologia, Manutenção","","","2025-02-13 15:25:33"
"AMZ Tropical","BASE GE","5","Ganho","2025-03-12 18:23:17","Promotores","Distribuidora","Troca recente de gestão que não se manteve.","","2025-02-13 16:42:37"
"Web Rota Wr Tecnologia LTDA (Cancelado)","CANCELADO GE","3","Ganho","2025-06-09 08:43:14","Representantes","Serviços, OUTROS","","Mudança de Estratégia da Empresa","2025-02-17 14:16:39"
"T&C treinamento e consultoria (Cancelado) (Cancelado)","CANCELADO GE","5","Ganho","2025-05-22 18:19:57","Representantes","OUTROS","","Fiquei sem equipe (GE)","2025-02-18 09:17:21"
"RBF SISTEMAS DE SEGURANÇA CONTRA INCÊNDIO","BASE GE","4","Ganho","2025-03-25 08:31:19","Técnicos","Segurança, Services","","","2025-02-19 11:56:00"
"Iatagam comercio de produtos alimenticios","BASE GE","41","Ganho","2025-03-19 11:54:39","Mista (Técnicos/Vendedores)","Alimentos, Distribuidora","","","2025-02-20 11:17:06"
"P1LED COMERCIO E IMPORTACAO DE PRODUTOS ELETRICOS E SERVICOS LTDA","BASE GE","4","Ganho","2025-02-27 16:06:44","Técnicos","Serviços","","","2025-02-20 17:29:30"
"Coopema (Cancelado)","CANCELADO GE","5","Ganho","2025-03-17 11:22:20","Entregadores","Distribuidora","Sem uso do sistema, contato difícil.","","2025-02-20 18:34:17"
"Select Elevadores (Cancelado)","CANCELADO GE","4","Ganho","2025-02-25 11:45:28","Técnicos","","","Contratei outro sistema","2025-02-25 11:45:10"
"Servopa Administradora de Consórcio","BASE GE","45","Ganho","2025-06-27 10:06:49","Vendedores","Bancário","Pendências of automação and treinamento with the equipe.","","2025-02-25 12:13:46"
"Biomed Farma","BASE GE","4","Ganho","2025-03-19 17:23:36","Vendedores, Representantes","Saúde","","","2025-02-25 17:19:21"
"Clean Water Dedetizadora (Cancelado)","CANCELADO GE","4","Ganho","2025-02-27 16:27:43","Técnicos","","","Problemas Técnicos Recorrentes","2025-02-27 16:27:12"
"SALUBI LATICINIOS INDUSTRIA E COMERCIO LTDA","BASE GE","10","Ganho","2025-03-24 15:53:35","Promotores","Alimentos, Distribuidora","","","2025-02-28 12:17:40"
"LOGPISO COMERCIO LTDA","BASE GE","5","Ganho","2025-04-03 16:34:08","Vendedores","Distribuidora","","","2025-02-28 15:15:17"
"Canal service","BASE GE","4","Ganho","2025-05-06 08:47:17","Técnicos","Serviços, Facilities","","","2025-03-04 15:29:39"
"Canada Veículos - CANADÁ VEÍCULOS LTDA","BASE GE","4","Ganho","2025-05-26 17:19:59","Representantes","Automotivo","","","2025-03-07 09:01:15"
"ACM Santos","BASE GE","6","Ganho","2025-04-07 10:30:31","Entregadores","Distribuidora, Cosméticos","Aguardando retorno sobre o uso of reembolso.","","2025-03-13 09:33:36"
"Pro Solo (Cancelado) (Cancelado)","CANCELADO GE","4","Ganho","2025-04-03 10:52:18","Representantes","Agronegócio","","Inadimplência (Jurídico)","2025-03-14 08:08:24"
"PADRAO SEGURANCA E VIGILANCIA LTDA","BASE GE","41","Ganho","2025-04-11 16:34:46","Técnicos","Segurança Eletrônica","","","2025-03-17 11:16:18"
"NASA SECURITIZADORA S.A. (Cancelado) (Cancelado)","CANCELADO GE","4","Ganho","2025-04-24 18:02:30","Vendedores","Bancário","","Inadimplência (Jurídico)","2025-03-19 12:18:49"
"Orgânica Piscinas LTDA","BASE GE","12","Ganho","2025-04-30 13:24:24","Técnicos","Piscinas, Limpeza","Funcionários não estão aderindo a rotina.","","2025-03-21 09:26:28"
"MDSolar (Cancelado)","CANCELADO GE","6","Ganho","2025-04-01 18:03:11","Técnicos","Energia, Piscinas","","Mudança of Estratégia da Empresa","2025-03-21 17:09:15"
"Lizemed","BASE GE","6","Ganho","2025-05-14 17:06:55","Representantes","Saúde, Nutrição","","","2025-03-21 19:09:16"
"PC SOLUCOES - PC SUPORTE EM AUTOMAÇÃO CONTABIL LTDA","BASE GE","4","Ganho","2025-05-05 11:23:43","Vendedores","Tecnologia","","","2025-03-24 19:22:25"
"N P COUTO SISTEMAS E TECNOLOGIA DE INFORMATICA LTDA","BASE GE","4","Ganho","2025-05-22 10:49:51","Técnicos","Serviços, Segurança Eletrônica, Informática, Manutenção","Aguardando novos projetos para iniciar uso pleno.","","2025-03-25 09:50:15"
"Moderna Emprego","BASE GE","6","Ganho","2025-05-15 17:31:41","Consultores","Serviços","","","2025-03-26 15:59:16"
"LINE SERVICE TERCEIRIZACAO E SERVICOS LTDA","BASE GE","21","Ganho","2025-04-07 07:55:09","Técnicos","Serviços","","","2025-03-28 13:45:49"
"HUBEES TECNOLOGIA S.A","BASE GE","10","Ganho","2025-06-11 08:19:23","Técnicos, Consultores","Estacionamento","Equipe of TI with dificuldades técnicas na integração.","","2025-04-02 10:40:08"
"Buffalo Corretora de Seguros","ETAPA 5: > 60 DIAS","5","Ganho","2025-10-07 08:22:43","Vendedores","Serviços","","","2025-04-02 14:43:46"
"Fematic","BASE GE","4","Ganho","2025-04-14 08:17:44","Técnicos","Manutenção, Industrial, OUTROS","","","2025-04-03 11:09:46"
"Padrão geradores (JUNIOR FERNANDO ACKER)","BASE GE","4","Ganho","2025-05-05 09:11:42","Mista (Técnicos/Vendedores)","Manutenção","","","2025-04-03 19:33:38"
"SPINE CARE PRODUTOS MEDICOS LTDA","BASE GE","17","Ganho","2025-05-09 12:03:04","Vendedores","Distribuidora, Saúde","","","2025-04-04 10:32:49"
"Nexis Qualificação","ETAPA 2: 16 a 30 DIAS","4","Ganho","2025-11-21 17:37:42","Técnicos","Serviços","","","2025-04-04 13:39:18"
"BebFilter Serviço Autorizado","BASE GE","5","Ganho","2025-04-08 18:03:38","Técnicos","Manutenção","","","2025-04-07 16:49:56"
"BOXCHARGE LTDA (Cancelado)","CANCELADO GE","8","Ganho","2025-05-07 15:09:50","Técnicos","Manutenção","Dificuldade of adesão por parte dos técnicos em obras.","Contratei outro sistema","2025-04-07 17:44:56"
"PARCO AUTOMACAO E SERVICOS LTDA (Cancelado)","CANCELADO GE","10","Ganho","2025-04-08 17:21:04","Mista (Técnicos/Vendedores)","Tecnologia, Services","","Não aceitação por parte da equipe (GE)","2025-04-08 09:10:56"
"RiosVistorias (Cancelado) (Cancelado)","CANCELADO GE","4","Ganho","2025-05-12 10:35:23","Vendedores","Imobiliário","","Alteração do tipo of equipe (GE)","2025-04-08 14:02:15"
"Tudor Campinas Baterias LTDA","BASE GE","8","Ganho","2025-04-24 12:17:36","Vendedores, Entregadores","Distribuidora, Automotivo","","","2025-04-11 10:16:00"
"ROVITEX IND E COM DE MALHAS LTDA (Cancelado) (Cancelado)","CANCELADO GE","4","Ganho","2025-04-30 18:27:58","Vendedores, Representantes","Distribuidora, Têxtil","Pararam of usar and não atendem contatos.","","2025-04-11 10:53:41"
"Grupo Auge Segurança - Astromix","BASE GE","6","Ganho","2025-05-19 10:18:54","Técnicos","Segurança Eletrônica","","","2025-04-14 11:02:08"
"CTRLW SOLUTIONS (Cancelado) (Cancelado)","CANCELADO GE","4","Ganho","2025-06-23 18:40:31","Técnicos","Segurança Eletrônica","Não comparecem as reuniões of onboarding.","Contratei outro sistema","2025-04-14 12:30:08"
"Guanda Baterias","BASE GE","6","Ganho","2025-05-07 15:54:26","Vendedores","Distribuidora","","","2025-04-14 16:21:00"
"Pimpão Mini Mercado","BASE GE","5","Ganho","2025-05-20 00:00:00","Técnicos","Alimentos","","","2025-04-21 18:07:58"
"ACQUASUL POCOS ARTESIANOS","BASE GE","5","Ganho","2025-05-26 08:52:30","Vendedores","Serviços","","","2025-04-22 11:59:28"
"CleanRio Higienização (Cancelado) (Cancelado)","CANCELADO GE","4","Ganho","2025-05-06 16:50:40","Técnicos","Limpeza","","Falta of Função","2025-04-23 16:40:51"
"IMPERIAL COMERCIO E MANUTENÇAO","BASE GE","6","Ganho","2025-05-06 17:05:57","Técnicos","Inst. Manutenção Elétrica, Manutenção","Aguardando retorno sobre um projeto of engenharia.","","2025-04-25 11:16:19"
"HidroSoluções (Cancelado)","CANCELADO GE","4","Ganho","2025-05-21 15:17:01","Técnicos","Manutenção","","","2025-04-29 08:25:09"
"Amazon Cleaner","BASE GE","6","Ganho","2025-05-14 16:47:08","Mista (Técnicos/Vendedores)","Limpeza","","","2025-04-30 11:10:48"
"LOJAO DOS TRATORES (Cancelado)","CANCELADO GE","4","Ganho","2025-05-30 16:55:15","Vendedores","Agronegócio","","Fiquei sem equipe (GE)","2025-04-30 14:30:55"
"Wellvet Solucoes em Saude e Bem Estar Animal LTDA","BASE GE","14","Ganho","2025-05-21 12:01:33","Vendedores","Distribuidora, Animal/Veterinária","Mudança frequente of gestores atrasou o projeto.","","2025-05-03 10:31:10"
"Cartao BD Saude + LTDA (Cancelado) (Cancelado)","CANCELADO GE","4","Ganho","2025-06-12 18:28:36","Vendedores, Representantes","Saúde","Gestor with dificuldade of inserir rotina na equipe nova.","Inadimplência (Jurídico)","2025-05-04 08:21:44"
"Atacadão pai e filho","ETAPA 2: 16 a 30 DIAS","4","Ganho","2025-11-28 17:44:03","Vendedores","Alimentos","","","2025-05-05 09:17:19"
"Barrapower Distribuidora","ETAPA 5: > 60 DIAS","4","Ganho","2025-05-22 11:55:55","Vendedores","OUTROS","Gestor and supervisores sem disponibilidade por alta demanda.","","2025-05-06 10:08:09"
"Facile Alimentos","BASE GE","4","Ganho","2025-04-24 00:00:00","Promotores","Alimentos","","","2025-05-06 13:02:44"
"VNZ CORRETORA DE SEGUROS LTDA","ETAPA 5: > 60 DIAS","7","Ganho","2025-06-18 16:52:44","Vendedores","Bancário","Equipe realizando atividades internas and sem previsão of rotas externas.","","2025-05-07 17:10:36"
"Farmácia Definitiva (Cancelado)","CANCELADO GE","4","Ganho","2025-06-06 17:47:15","Representantes","Cosméticos","","Inadimplência (Juriddico)","2025-05-12 10:32:33"
"Solargrid Gestao de Energia","BASE GE","35","Ganho","2025-05-23 14:58:35","Vendedores","Energia","Gestor solicitou implantação em etapas and realiza muitas viagens.","","2025-05-12 11:29:39"
"Dcro Negocios Imobiliarios","BASE GE","3","Ganho","2025-06-16 10:26:49","Técnicos","Serviços","Validado rapidamente pois já conheciam o sistema.","","2025-05-12 15:57:26"
"Refrigeração Mendes","BASE GE","4","Ganho","2025-05-26 17:54:28","Técnicos","Refrigeração","","","2025-05-13 10:42:17"
"Prolink Network","ETAPA 5: > 60 DIAS","5","Ganho","2025-09-22 08:34:46","Técnicos","Segurança","Gestor em obra of larga escala, reagendando reunião.","","2025-05-15 09:43:03"
"Monza Travel Agencia de Viagens","BASE GE","20","Ganho","2025-08-01 11:22:09","Vendedores, Consultores","Turismo","Problemas técnicos pontuais with integração of terceiros.","","2025-05-15 12:33:50"
"Omini Representações","BASE GE","4","Ganho","2025-06-13 17:21:42","Representantes","Tecnologia","","","2025-05-15 14:26:16"
"Metro Imob","BASE GE","4","Ganho","2025-05-26 18:11:02","Representantes","Imobiliário","","","2025-05-15 15:25:25"
"Armazem Ribeira","BASE GE","3","Ganho","2025-05-27 17:27:36","Representantes, Entregadores","Distribuidora","","","2025-05-17 10:24:25"
"Azoia Comercio","BASE GE","7","Ganho","2025-05-29 00:00:00","Vendedores, Entregadores","Distribuidora","Cliente recusou reunião alegando já conhecer o sistema.","","2025-05-20 10:23:40"
"Raros Sorvetes","BASE GE","4","Ganho","2025-07-15 17:34:46","Vendedores","Alimentos","Acompanhando adesão of formulários pela equipe of campo.","","2025-05-20 11:08:08"
"Ultra vision","FECHAMENTO SEMANA","4","Ganho","2025-12-04 11:21:31","Técnicos","Segurança","Ajustes finais of hierarquia of usuários.","","2025-05-21 11:37:29"
"IRHPAG (Cancelado)","CANCELADO GE","4","Ganho","2025-05-29 14:58:38","Promotores","Tecnologia","Sem equipe of promotores no momento.","Fiquei sem equipe (GE)","2025-05-22 11:00:16"
"Grannero Presunto Cru","BASE GE","6","Ganho","2025-08-20 08:50:21","Vendedores, Representantes","Alimentos, Distribuidora","","","2025-05-22 11:30:51"
"ORIENTE POLPA DE FRUTAS","BASE GE","4","Ganho","2025-06-18 15:57:34","Vendedores","Alimentos, Distribuidora","","","2025-05-23 20:09:18"
"Rede Superlar Supermercados","BASE GE","4","Ganho","2025-06-26 18:22:09","Técnicos","Alimentos, Manutenção","","","2025-05-26 20:30:09"
"FNX Soluções em Segurança Ltda","BASE GE","11","Ganho","2025-06-16 11:14:57","Técnicos","Serviços, Segurança Eletrônica","","","2025-05-29 07:18:43"
"BCF Administradora de Bens LTDA","BASE GE","10","Ganho","2025-07-23 17:49:41","Motoristas","Serviços, Bancário","Reestruturação interna and troca of planilhas of agendamento.","","2025-05-30 14:02:15"
"ALFLEX EMBALAGENS LTDA - Alplastic","BASE GE","4","Ganho","2025-06-23 18:15:39","Vendedores","Distribuidora","","","2025-06-02 08:52:08"
"TAO Kombucha","BASE GE","4","Ganho","2025-06-17 11:58:47","Promotores","Alimentos, Distribuidora, Industrial","Gestora ausente para reuniões agendadas.","","2025-06-03 08:12:03"
"Portaz","BASE GE","4","Ganho","2025-07-23 10:45:58","Mista (Técnicos/Vendedores)","Manutenção","","","2025-06-03 12:33:14"
"INDUSTRIA LONART","BASE GE","5","Ganho","2025-06-10 18:26:14","Técnicos, Entregadores","OUTROS","","","2025-06-03 15:02:46"
"Fruta Industria e Comercio Ltda","BASE GE","7","Ganho","2025-07-16 16:51:25","Vendedores","Alimentos","Agenda concorrida das gestoras dificultando reuniões.","","2025-06-05 10:34:43"
"Br pesca","BASE GE","4","Ganho","2025-07-14 13:56:33","Vendedores, Representantes","Esportivo/Pesca","","","2025-06-06 15:59:09"
"Cimento Melo","BASE GE","5","Ganho","2025-06-10 16:04:49","Representantes","Distribuidora, Construção Civil","","","2025-06-10 09:24:31"
"Buy Food Service","BASE GE","7","Ganho","2025-07-16 11:31:19","Vendedores","Alimentos, Distribuidora","","","2025-06-10 16:04:51"
"BETPR CONCESSIONARIA","BASE GE","21","Ganho","2025-06-30 14:51:47","Vendedores","Bancário, OUTROS","Gestor não respondia and solicitou cancelamento do Fleet revertido.","","2025-06-12 12:17:22"
"Fibra Locações e Serviços","BASE GE","10","Ganho","2025-06-17 13:47:07","Motoristas","Serviços, Manutenção","","","2025-06-17 07:21:13"
"BRASIL TELECOM (TAHTO GETNET)","BASE GE","41","Ganho","2025-07-21 14:42:00","Vendedores","Bancário","Projeto complexo with múltiplos stakeholders and transição of gestores.","","2025-06-18 17:49:39"
"Carlito Autopeças","BASE GE","4","Ganho","2025-07-11 10:29:44","Promotores","Automotivo","Gestor resistente a colocar obrigatoriedade em formulários.","","2025-06-24 13:43:14"
"Don Luiz (Cancelado)","CANCELADO GE","4","Ganho","2025-07-30 18:21:27","Executivos","Bebidas","Dificuldade of contato with the directoria por gestão interna.","Inadimplência (Jurídico)","2025-06-25 14:30:27"
"REBELLO SF","BASE GE","5","Ganho","2025-08-01 17:38:06","Vendedores","Automotivo","","","2025-06-26 13:37:14"
"OK PROMOTORA","BASE GE","4","Ganho","2025-07-04 16:43:29","Promotores","Promotoria","","","2025-06-26 18:22:13"
"AXS Energia S/A","BASE GE","50","Ganho","2025-08-22 13:41:40","Vendedores","Energia","Validando solicitações finais da equipe of BI.","","2025-06-27 10:11:15"
"Midia1","BASE GE","4","Ganho","2025-07-01 13:53:10","Técnicos","Marketing","","","2025-06-30 09:50:15"
"ALFAMA","BASE GE","5","Ganho","2025-07-22 14:15:50","Entregadores","Distribuidora","","","2025-06-30 11:59:12"
"DADIVACRED","BASE GE","4","Ganho","2025-07-07 08:43:41","Vendedores","Bancário","","","2025-07-02 15:26:28"
"Fast Assistência Técnica","BASE GE","4","Ganho","2025-07-22 14:39:19","Técnicos","Inst. Manutenção Elétrica","Aguardando feedback final do proprietário.","","2025-07-02 16:18:00"
"BSB SOFTNEWS INFORMATICA LTDA","BASE GE","5","Ganho","2025-07-14 17:24:12","Vendedores","Tecnologia","","","2025-07-03 08:59:14"
"ATLAS PHARMA S.A.","BASE GE","20","Ganho","2025-10-27 16:07:14","Vendedores","Animal/Veterinária","","","2025-07-04 16:26:02"
"LeadsOK (Cancelado) (Cancelado)","CANCELADO GE","4","Ganho","2025-07-22 20:11:38","Vendedores","Tecnologia","","Inadimplência (Jurídico)","2025-07-05 16:01:07"
"Luck Viagens","BASE GE","4","Ganho","2025-09-26 17:38:03","Vendedores","Transportes","","","2025-07-07 10:57:08"
"Pro Aquários","BASE GE","4","Ganho","2025-07-30 12:01:05","Técnicos","Serviços, Manutenção","","","2025-07-07 14:38:31"
"Movelex","BASE GE","10","Ganho","2025-07-25 18:19:58","Vendedores","Imobiliário","","","2025-07-08 13:34:11"
"Central do Implante","BASE GE","4","Ganho","2025-07-22 20:12:50","Vendedores","Saúde","","","2025-07-08 14:46:54"
"QUALITRON","BASE GE","4","Ganho","2025-07-21 08:41:53","Técnicos","Manutenção","","","2025-07-08 15:42:53"
"VaiVem","BASE GE","5","Ganho","2025-07-24 11:49:12","Vendedores","Facilities","","","2025-07-09 17:07:53"
"Teletaxi Recife","ETAPA 5: > 60 DIAS","5","Ganho","2025-07-24 16:53:50","Entregadores","Transportes","Transição of sistemas gerenciais atrasando adesão do contele.","","2025-07-11 12:08:39"
"Masterop","BASE GE","10","Ganho","2025-07-30 16:43:56","Executivos","Turismo","","","2025-07-15 16:40:32"
"Vidromar","BASE GE","5","Ganho","2025-07-31 18:19:40","Técnicos","Construção Civil","","","2025-07-15 20:34:01"
"Conceito Adm","ETAPA 5: > 60 DIAS","4","Ganho","2025-08-01 17:54:40","Técnicos","","Gestor só inicia uso pleno a partir of setembro.","","2025-07-16 06:56:47"
"Global - TS","BASE GE","5","Ganho","2025-07-29 17:59:36","Técnicos","Segurança","","","2025-07-18 09:51:07"
"Urban Connect (Cancelado)","CANCELADO GE","4","Ganho","2025-07-30 11:26:05","Técnicos","Tecnologia","","Mudança of Estratégia da Empresa","2025-07-21 14:34:15"
"Di Cheff","BASE GE","4","Ganho","2025-07-31 09:07:54","Promotores","Alimentos, Distribuidora","","","2025-07-22 14:55:56"
"Metalmont (Cancelado) (Cancelado)","CANCELADO GE","3","Ganho","2025-08-19 17:14:50","Vendedores","Industrial","Reestruturando time comercial and encarregados.","Inadimplência (Jurídico)","2025-07-22 15:17:11"
"CuraAtiva","BASE GE","4","Ganho","2025-09-01 18:25:30","Promotores","Saúde","","","2025-07-24 14:35:49"
"ORIGINAL DISTRIBUIDORA","BASE GE","7","Ganho","2025-08-18 15:53:51","Vendedores, Motoristas","Distribuidora, Automotivo","","","2025-07-24 17:19:59"
"N & L INDUSTRIA (Grupo Jose Alves)","COMPRA ATÉ 90d","150","Ganho","2025-12-11 09:57:33","Vendedores, Promotores","Distribuidora, Limpeza","","","2025-07-25 12:24:31"
"Innovent Engenharia LTDA","BASE GE","7","Ganho","2025-08-18 18:19:14","Técnicos","Engenharia","","","2025-07-25 17:23:29"
"SOLSERV SERVICOS LTDA","ETAPA 3: 31 a 45 DIAS","21","Ganho","2025-11-13 16:45:25","Executivos, Consultores","Serviços, Facilities","Aguardando retorno do consultor em campo.","","2025-07-29 11:37:09"
"O Uirapuru Temperos","BASE GE","7","Ganho","2025-08-12 11:33:09","Entregadores","Alimentos","","","2025-07-29 14:28:51"
"Eletran Indústria","BASE GE","6","Ganho","2025-09-22 08:47:38","Vendedores","Distribuidora, Automotivo","","","2025-07-30 08:38:59"
"ADM Imagem e Eventos LTDA","BASE GE","11","Ganho","2025-08-13 17:21:43","Vendedores","Serviços","","","2025-07-30 09:02:10"
"Cime Distribuidora","BASE GE","4","Ganho","2025-09-29 11:03:24","Vendedores","Distribuidora, Construction","","","2025-07-30 10:37:43"
"Apex Tecnologia (Cancelado) (Cancelado)","CANCELADO GE","4","Ganho","2025-07-31 00:00:00","Técnicos","Informática","","Inadimplência (Jurídico)","2025-08-04 11:33:52"
"Gestway","BASE GE","6","Ganho","2025-08-19 17:48:15","Motoristas","Construção Civil","Cliente já possui ferramenta interna of checklist.","","2025-08-05 12:41:14"
"MB Protege","BASE GE","9","Ganho","2025-08-25 14:32:56","Vendedores","OUTROS","Gestora of férias atrasando a validação final.","","2025-08-05 21:13:59"
"Sempre limpa Piscinas","ETAPA 5: > 60 DIAS","5","Ganho","2025-10-08 10:14:18","Técnicos","Piscinas","","","2025-08-08 15:08:50"
"Master - MASTER DISTRIBUIDORA OTICA LTDA","BASE GE","5","Ganho","2025-08-18 08:38:55","Vendedores","Saúde","","","2025-08-12 17:34:20"
"QCP / QCP SOLUCOES LTDA","ETAPA 2: 16 a 30 DIAS","4","Ganho","2025-09-23 18:03:57","Técnicos","Energia, Manutenção, Industrial","","","2025-08-13 17:53:39"
"Park Plus Estacionamentos","BASE GE","3","Ganho","2025-09-18 08:12:05","Representantes","Estacionamento","","","2025-08-14 08:49:12"
"Grupo London","BASE GE","12","Ganho","2025-09-16 14:45:05","Técnicos, Representantes","Serviços","","","2025-08-15 11:34:06"
"LATASA GARIMPEIRO URBANO","BASE GE","6","Ganho","2025-08-15 16:29:39","Motoristas","Industrial","","","2025-08-15 16:22:46"
"MXL REPRESENTACOES (Lemax)","ETAPA 5: > 60 DIAS","7","Ganho","2025-09-16 13:52:42","Representantes","Têxtil","Aguardando início of nova coleção para usar o teams em pleno.","","2025-08-21 17:49:03"
"Metalúrgica Riosulense","BASE GE","7","Ganho","2025-08-27 10:21:13","Promotores","Industrial","","","2025-08-27 09:43:54"
"Quality Reformas e serviços","FECHAMENTO SEMANA","4","Ganho","2025-09-16 11:13:25","Técnicos","Imobiliário","","","2025-08-28 17:54:56"
"TEL CENTRO (Sabesp)","ETAPA 1: 15 DIAS","80","Ganho","2025-11-14 17:44:39","Técnicos, Consultores","Serviços, Facilities","","","2025-08-29 10:15:32"
"Prestart","ETAPA 5: > 60 DIAS","4","Ganho","2025-09-24 08:22:51","Consultores","Facilities","","","2025-09-02 10:49:41"
"Beach Park","BASE GE","4","Ganho","2025-10-09 08:42:41","Vendedores","Turismo","","","2025-09-02 16:41:23"
"REDE CICO BATERIAS LTDA","ETAPA 5: > 60 DIAS","18","Ganho","2025-10-10 10:00:23","Vendedores","Distribuidora","","","2025-09-03 15:26:48"
"Maq-larem Maquinas","ETAPA 2: 16 a 30 DIAS","6","Ganho","2025-11-28 09:09:23","Vendedores","Industrial","","","2025-09-04 16:25:54"
"CASA SATO DISTRIBUIDORA","BASE GE","5","Ganho","2025-09-16 11:55:57","Entregadores","Distribuidora","","","2025-09-04 16:56:14"
"Visao Industrial","BASE GE","4","Ganho","2025-10-07 08:06:18","Vendedores","OUTROS","","","2025-09-05 15:55:16"
"ORO GERADORES LTDA","ETAPA 5: > 60 DIAS","4","Ganho","2025-09-16 18:19:10","Técnicos","Energia, Manutenção","Gestor ainda estruturando a equipe técnica.","","2025-09-05 17:13:59"
"VETEX – Unidade Teresina","BASE GE","4","Ganho","2025-10-23 09:34:01","Entregadores","Animal/Veteridária","","","2025-09-09 11:08:03"
"Ecom Energia","BASE GE","7","Ganho","2025-10-10 17:52:21","Vendedores","Energia","","","2025-09-09 15:08:52"
"Webmotors S.A.","ETAPA 2: 16 a 30 DIAS","80","Ganho","2025-11-28 17:31:08","Vendedores","Automotivo","","","2025-09-09 19:35:38"
"B&F DIAS INDÚSTRIA","BASE GE","4","Ganho","2025-10-07 11:33:17","Entregadores","Serviços","Não vão usar formulário por já usarem checklist do fleet.","","2025-09-10 11:22:52"
"Equipeças Comércio","BASE GE","4","Ganho","2025-09-30 17:08:54","Vendedores","Automotivo","","","2025-09-11 09:12:39"
"Medchap Distribuidora","ETAPA 2: 16 a 30 DIAS","26","Ganho","2025-11-19 18:16:10","Representantes","","","","2025-09-11 14:06:34"
"Unatech","ETAPA 5: > 60 DIAS","5","Ganho","2025-09-26 18:04:12","Técnicos","Tecnologia","Dificuldade severa of contato with the Luiz.","","2025-09-11 20:57:49"
"M2 Rótulos (Cancelado) (Cancelado)","CANCELADO GE","4","Ganho","2025-10-03 08:36:12","","","","Inadimplência (Jurídico)","2025-09-12 08:28:39"
"Synox Industria","ETAPA 1: 15 DIAS","4","Ganho","2025-11-13 09:04:59","Vendedores","Construção Civil","","","2025-09-12 10:27:15"
"NU DESIGN","ETAPA 5: > 60 DIAS","9","Ganho","2025-10-07 17:46:10","Técnicos","Imobiliário","Gestor alega início pleno só para o ano que vem.","","2025-09-16 10:04:47"
"Tempo Geração","BASE GE","11","Ganho","2025-10-09 17:37:34","Representantes","Energia","","","2025-09-17 20:36:49"
"Instituto Conhecer Brasil","BASE GE","20","Ganho","2025-10-08 10:43:10","Técnicos","Provedor Internet","","","2025-09-18 08:48:50"
"Cooperativa Selita","BASE GE","5","Ganho","2025-11-07 17:38:41","Técnicos, Representantes","Alimentos","","","2025-09-18 09:58:34"
"RBL Distribuidora","BASE GE","13","Ganho","2025-10-13 08:34:08","Promotores","Animal/Veteridária","","","2025-09-18 11:52:00"
"Bluem brasil","BASE GE","8","Ganho","2025-10-01 08:51:03","Vendedores","Saúde","","","2025-09-18 14:46:52"
"GuaruSolar (Cancelado)","CANCELADO GE","4","Ganho","2025-09-29 16:17:22","Técnicos","Energia","","Mudança of Estratégia da Empresa","2025-09-18 17:39:36"
"R P Maquinas","BASE GE","9","Ganho","2025-09-29 08:43:39","Técnicos","Manutenção","","","2025-09-19 10:13:31"
"TEL CENTRO (Axs)","BASE GE","50","Ganho","2025-11-07 12:21:07","Vendedores","","","","2025-09-19 18:49:35"
"Metaclean","BASE GE","11","Ganho","2025-10-15 15:32:59","Representantes","Limpeza","","","2025-09-22 16:49:32"
"FGR Telecom (Cancelado)","CANCELADO GE","4","Ganho","2025-10-09 10:54:46","Vendedores","Telecom","Redução of custos and sem equipe técnica.","Redução of Custos","2025-09-23 12:08:08"
"Rodonorte Transportes","BASE GE","5","Ganho","2025-10-29 13:59:17","Vendedores","Agronegócio","","","2025-09-24 11:19:22"
"WJ Comércio e Serviços LTDA","ETAPA 5: > 60 DIAS","4","Ganho","2025-09-26 17:56:27","Técnicos","Manutenção","Gestor muito ausente devido a viagens of negócio.","","2025-09-24 14:59:23"
"KONEX","BASE GE","6","Ganho","2025-10-10 17:44:12","Representantes","Facilities","","","2025-09-25 10:16:07"
"System Frame","ETAPA 4: 46 a 60 DIAS","6","Ganho","2025-10-28 08:25:33","Técnicos","Segurança","","","2025-09-29 14:45:20"
"ECOH TECH LTDA","BASE GE","17","Ganho","2025-11-07 15:11:39","Técnicos","Tecnologia","","","2025-10-01 09:53:53"
"SGAS EQUIPAMENTOS","BASE GE","5","Ganho","2025-10-20 10:23:07","Vendedores","OUTROS","","","2025-10-03 11:30:36"
"AL Cosmeticos","ETAPA 2: 16 a 30 DIAS","4","Ganho","2025-12-02 18:09:44","Vendedores","Cosméticos","","","2025-10-03 15:38:01"
"Jwg Representações","FECHAMENTO SEMANA","4","Ganho","2025-12-17 17:22:06","Promotores","Promotoria","","","2025-10-15 09:26:50"
"K F da S B Lemos","ETAPA 2: 16 a 30 DIAS","4","Ganho","2025-10-28 09:23:35","Técnicos","Segurança","","","2025-10-16 09:25:42"
"PAYMINT GESTÃO","ETAPA 3: 31 a 45 DIAS","5","Ganho","2025-11-03 08:53:44","Executivos","Finanças","","","2025-10-20 14:27:46"
"Germano baterias","ETAPA 3: 31 a 45 DIAS","4","Ganho","2025-11-03 16:21:06","Vendedores","Distribuidora","","","2025-10-21 06:00:49"
"DrogaVET Nova Friburgo","ETAPA 1: 15 DIAS","4","Ganho","2025-12-01 08:55:37","Vendedores","Animal/Veteridária","","","2025-10-21 09:59:10"
"RIOQUIMICA S.A.","ETAPA 1: 15 DIAS","5","Ganho","2025-12-02 14:40:27","Técnicos","Manutenção","","","2025-10-21 10:05:58"
"BASE FACILITIES","ETAPA 2: 16 a 30 DIAS","4","Ganho","2025-11-28 17:58:33","Técnicos","Facilities","","","2025-10-21 13:13:23"
"VETEX (DROGAVET)","BASE GE","10","Ganho","2025-10-27 16:09:48","Vendedores","Animal/Veteridária","","","2025-10-27 12:07:07"
"Hidroluz - Projeto Piloto","BASE GE","1","Ganho","2025-10-27 17:40:43","","","","","2025-10-27 17:34:24"
"Ronaldo Almeida","ETAPA 4: 46 a 60 DIAS","","Ganho","2025-10-29 18:09:18","","","","","2025-10-29 16:44:18"
"Cervejaria AlceBier","ETAPA 2: 16 a 30 DIAS","4","Ganho","2025-11-27 14:23:32","Vendedores","Bebidas","","","2025-10-31 22:11:42"
"EB FARMACEUTICA","ETAPA 2: 16 a 30 DIAS","4","Ganho","2025-11-18 08:24:27","Representantes","Saúde","","","2025-11-02 04:09:50"
"ACQUA Soluções","ETAPA 1: 15 DIAS","4","Ganho","2025-11-14 09:15:43","Técnicos","Serviços","","","2025-11-03 11:28:48"
"ASSOCIACAO ABRASEL (RJ)","FECHAMENTO SEMANA","12","Ganho","2025-12-08 12:15:02","Vendedores, Consultores","Serviços","","","2025-11-05 17:47:58"
"Original Baterias Bahia","ETAPA 3: 31 a 45 DIAS","5","Ganho","2025-11-14 10:39:03","Vendedores, Motoristas","Logística","","","2025-11-06 16:51:10"
"Vigiseg","ETAPA 2: 16 a 30 DIAS","4","Ganho","2025-12-01 11:31:31","Técnicos","Segurança","","","2025-11-07 12:21:34"
"Lancare","ETAPA 1: 15 DIAS","6","Ganho","2025-11-18 13:39:39","Técnicos","Construção Civil","","","2025-11-12 11:15:11"
"NOVOS METAIS LTDA","FECHAMENTO SEMANA","4","Ganho","2025-12-05 09:20:00","Promotores","Industrial","","","2025-11-14 11:31:53"
"ALBUS DENTE","ETAPA 2: 16 a 30 DIAS","5","Ganho","2025-11-24 17:11:57","Promotores","Promotoria","","","2025-11-14 15:08:09"
"IG representações","ETAPA 1: 15 DIAS","4","Ganho","2025-11-28 08:31:28","Representantes","Automotivo","","","2025-11-17 14:57:53"
"MICROJET INDUSTRIAL","FECHAMENTO SEMANA","4","Ganho","2025-12-15 15:57:07","Técnicos","Manutenção","","","2025-11-18 23:19:07"
"Mailson Paulino","ETAPA 2: 16 a 30 DIAS","4","Ganho","2025-11-28 14:00:52","Técnicos","Serviços","","","2025-11-23 15:35:50"
"DMX Móveis","ETAPA 2: 16 a 30 DIAS","4","Ganho","2025-11-26 13:52:31","Vendedores","Móveis","","","2025-11-26 10:54:02"
"MG TINTAS LTDA","FECHAMENTO SEMANA","10","Ganho","2025-12-04 11:20:22","Vendedores, Representantes","Construção","","","2025-11-27 14:11:16"`;

function parseCSV(csv) {
    const lines = csv.split('\n');
    return lines.slice(1).filter(l => l.trim() !== '').map(line => {
        const parts = line.match(/(".*?"|[^",\s]+)(?=\s*,|\s*$)/g) || [];
        const clean = parts.map(p => p.replace(/^"|"$/g, '').trim());
        const ganhoStr = clean[4] || '';
        const criadoStr = clean[9] || '';
        const etapa = clean[1] || '';
        const equipe = clean[5] || 'Não Identificada';
        const equipePrincipal = equipe.split(',')[0].trim() || 'Não Identificada';

        let categoria = 'Outros';
        if (etapa === 'BASE GE') categoria = 'Base';
        else if (etapa === 'CANCELADO GE') categoria = 'Cancelado';
        else if (etapa.toUpperCase().includes('ETAPA')) categoria = 'Onboarding';

        let dias = 0;
        if (ganhoStr && criadoStr) {
            const diff = new Date(ganhoStr).getTime() - new Date(criadoStr).getTime();
            dias = Math.max(0, Math.floor(diff / (1000 * 3600 * 24)));
        }

        return {
            titulo: clean[0], etapa, quantidadeLicencas: parseInt(clean[2]) || 0,
            status: clean[3], ganhoEm: ganhoStr, criadoEm: criadoStr,
            equipePrincipal, motivoCancelamento: clean[8] || 'Não Informado',
            categoria, diasParaFechar: dias
        };
    });
}

function calculateKPIs(data) {
    const total = data.length;
    const base = data.filter(l => l.categoria === 'Base').length;
    const cancelled = data.filter(l => l.categoria === 'Cancelado').length;
    const onboarding = data.filter(l => l.categoria === 'Onboarding').length;
    const closed = data.filter(l => l.categoria === 'Base');
    const avgCloseTime = closed.length > 0 ? Math.round(closed.reduce((a, b) => a + b.diasParaFechar, 0) / closed.length) : 0;

    return { 
        total, base, cancelled, onboarding, 
        baseRate: total > 0 ? (base / total) * 100 : 0, 
        onbRate: total > 0 ? (onboarding / total) * 100 : 0,
        cancelRate: total > 0 ? (cancelled / total) * 100 : 0,
        avgCloseTime 
    };
}

function getTeamPerformance(data) {
    const teams = {};
    data.forEach(l => {
        const t = l.equipePrincipal;
        if (!teams[t]) teams[t] = { base: 0, onboarding: 0, cancelado: 0, total: 0, totalDias: 0, countFechados: 0 };
        teams[t].total++;
        if (l.categoria === 'Base') { teams[t].base++; teams[t].totalDias += l.diasParaFechar; teams[t].countFechados++; }
        if (l.categoria === 'Onboarding') teams[t].onboarding++;
        if (l.categoria === 'Cancelado') teams[t].cancelado++;
    });

    return Object.entries(teams)
        .filter(([name]) => name !== 'Não Identificada')
        .map(([equipe, s]) => ({
            equipe, ...s,
            conv: s.total > 0 ? (s.base / s.total) * 100 : 0,
            churn: s.total > 0 ? (s.cancelado / s.total) * 100 : 0,
            avg: s.countFechados > 0 ? Math.round(s.totalDias / s.countFechados) : 0
        }))
        .sort((a, b) => b.total - a.total);
}

function initDashboard() {
    const data = parseCSV(RAW_CSV);
    const kpis = calculateKPIs(data);
    const teams = getTeamPerformance(data);
    const cancelReasons = Object.entries(data.filter(l => l.categoria === 'Cancelado').reduce((acc, l) => {
        const r = l.motivoCancelamento || 'Não Informado';
        acc[r] = (acc[r] || 0) + 1;
        return acc;
    }, {})).sort((a, b) => b[1] - a[1]);

    // Lógica para o Campeão de Conversão considerando apenas equipes com >= 20 clientes
    const topTeam = [...teams]
        .filter(t => t.total >= 20)
        .sort((a, b) => b.conv - a.conv)[0] || teams[0];

    const app = document.getElementById('app');
    app.innerHTML = `
        <div class="min-h-screen bg-slate-50 p-4 md:p-8 text-slate-900">
            <header class="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-end border-b-2 border-slate-200 pb-12 gap-8">
                <div class="space-y-3">
                    <div class="flex items-center gap-4">
                        <div class="bg-blue-800 text-white p-4 rounded-3xl shadow-xl shadow-blue-200">
                            <i class="fa-solid fa-gauge-high text-3xl"></i>
                        </div>
                        <h1 class="text-5xl font-black text-blue-950 tracking-tighter uppercase italic">Analytics 2025</h1>
                    </div>
                    <p class="text-slate-500 font-bold ml-20 text-lg uppercase tracking-tight">Performance Operacional & Eficiência de Times</p>
                </div>

                <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 w-full lg:w-auto">
                    ${[
                        { label: 'Total de Leads', val: kpis.total, color: 'text-blue-900' },
                        { label: 'Porcentagem na Base', val: kpis.baseRate.toFixed(1) + '%', color: 'text-blue-800' },
                        { label: 'Porcentagem em Onboarding', val: kpis.onbRate.toFixed(1) + '%', color: 'text-blue-500' },
                        { label: 'Porcentagem em Cancelado', val: kpis.cancelRate.toFixed(1) + '%', color: 'text-red-600' },
                        { label: 'Tempo Médio Ciclo', val: kpis.avgCloseTime + 'd', color: 'text-blue-400' }
                    ].map(c => `
                        <div class="bg-white p-6 rounded-[2.5rem] border-2 border-slate-100 shadow-sm transition-all hover:shadow-xl group">
                            <span class="text-[9px] font-black text-slate-400 uppercase tracking-widest block mb-1 group-hover:text-blue-500">${c.label}</span>
                            <span class="text-xl font-black ${c.color}">${c.val}</span>
                        </div>
                    `).join('')}
                </div>
            </header>

            <main class="max-w-7xl mx-auto py-12 space-y-12">
                <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    <div class="lg:col-span-7 bg-white p-10 rounded-[3.5rem] shadow-sm border border-slate-200/50">
                        <h2 class="text-2xl font-black text-blue-950 mb-12 flex items-center gap-4 uppercase tracking-tighter italic">
                            <span class="w-3 h-10 bg-blue-800 rounded-full"></span> Saúde do Funil de Onboarding
                        </h2>
                        <div class="h-[450px]">
                            <canvas id="funnelChart"></canvas>
                        </div>
                    </div>

                    <div class="lg:col-span-5 space-y-8">
                        <h2 class="text-3xl font-black text-blue-950 flex items-center gap-4 uppercase tracking-tighter">
                            <span class="w-3 h-10 bg-blue-600 rounded-full shadow-lg shadow-blue-200"></span> Diagnóstico Gerencial
                        </h2>
                        
                        <div class="bg-white p-10 rounded-[3rem] shadow-sm border border-slate-100 group hover:border-blue-400 transition-all duration-500">
                            <div class="flex gap-8">
                                <div class="bg-blue-50 p-5 rounded-2xl h-fit group-hover:bg-blue-100 transition-colors">
                                    <i class="fa-solid fa-chart-line text-blue-800 text-2xl"></i>
                                </div>
                                <div class="space-y-4 flex-1">
                                    <h3 class="font-black text-blue-950 text-xs uppercase tracking-[0.2em]">Eficiência de Conversão</h3>
                                    <p class="text-slate-500 text-[13px] leading-relaxed font-semibold">Atualmente ${kpis.baseRate.toFixed(1)}% dos leads da base se tornaram Base GE.</p>
                                    <div class="bg-blue-50/70 p-5 rounded-[1.5rem] border border-blue-100">
                                        <p class="text-blue-900 text-[10px] font-black italic uppercase tracking-tighter flex items-center gap-3">
                                            <i class="fa-solid fa-lightbulb text-blue-600"></i> AÇÃO: FOCAR EM LEADS PARADOS PARA AUMENTAR ESSE ÍNDICE EM 10%.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="bg-white p-10 rounded-[3rem] shadow-sm border border-slate-100 group hover:border-blue-400 transition-all duration-500">
                            <div class="flex gap-8">
                                <div class="bg-blue-50 p-5 rounded-2xl h-fit group-hover:bg-blue-100 transition-colors">
                                    <i class="fa-solid fa-trophy text-blue-800 text-2xl"></i>
                                </div>
                                <div class="space-y-4 flex-1">
                                    <h3 class="font-black text-blue-950 text-xs uppercase tracking-[0.2em]">Campeão de Conversão</h3>
                                    <p class="text-slate-500 text-[13px] leading-relaxed font-semibold">A equipe de ${topTeam.equipe} lidera com ${topTeam.conv.toFixed(1)}% de aproveitamento.</p>
                                    <div class="bg-blue-50/70 p-5 rounded-[1.5rem] border border-blue-100">
                                        <p class="text-blue-900 text-[10px] font-black italic uppercase tracking-tighter flex items-center gap-3">
                                            <i class="fa-solid fa-lightbulb text-blue-600"></i> AÇÃO: REPLICAR O MODELO DE VENDAS CONSULTIVAS DESTE TIME PARA AS DEMAIS FRENTES.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="bg-white p-10 rounded-[3rem] shadow-sm border border-slate-100 group hover:border-blue-400 transition-all duration-500">
                            <div class="flex gap-8">
                                <div class="bg-blue-50 p-5 rounded-2xl h-fit group-hover:bg-blue-100 transition-colors">
                                    <i class="fa-solid fa-triangle-exclamation text-blue-800 text-2xl"></i>
                                </div>
                                <div class="space-y-4 flex-1">
                                    <h3 class="font-black text-blue-950 text-xs uppercase tracking-[0.2em]">Perda Financeira</h3>
                                    <p class="text-slate-500 text-[13px] leading-relaxed font-semibold">O motivo "${cancelReasons[0][0]}" é o maior driver de churn.</p>
                                    <div class="bg-blue-50/70 p-5 rounded-[1.5rem] border border-blue-100">
                                        <p class="text-blue-900 text-[10px] font-black italic uppercase tracking-tighter flex items-center gap-3">
                                            <i class="fa-solid fa-lightbulb text-blue-600"></i> AÇÃO: IMPLEMENTAR ALERTA DE INADIMPLÊNCIA PRECOCE NO 15º DIA DE CONTRATO.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="bg-white p-10 rounded-[3.5rem] shadow-sm border border-slate-200/50">
                    <h2 class="text-2xl font-black text-red-800 mb-10 flex items-center gap-4 uppercase tracking-tighter italic">
                        <span class="w-3 h-10 bg-red-600 rounded-full"></span> Análise Crítica de Churn
                    </h2>
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        ${cancelReasons.map(c => `
                            <div class="flex items-center justify-between p-6 bg-slate-50 rounded-[2rem] border border-slate-100 group hover:border-blue-200 transition-all">
                                <span class="text-[11px] font-black text-blue-950 uppercase truncate pr-4">${c[0]}</span>
                                <div class="flex items-center gap-3">
                                    <div class="h-2 w-16 bg-blue-100 rounded-full overflow-hidden">
                                        <div class="h-full bg-blue-800" style="width: ${(c[1]/kpis.cancelled)*100}%"></div>
                                    </div>
                                    <span class="text-xs font-black text-blue-800">${c[1]}</span>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <div class="bg-white rounded-[3.5rem] shadow-sm border border-slate-200/50 overflow-hidden">
                    <div class="p-10 border-b border-slate-100 flex justify-between items-center">
                        <h2 class="text-2xl font-black text-blue-950 uppercase tracking-tighter italic">Ranking de Performance Operacional</h2>
                        <div class="bg-blue-900 text-white px-8 py-3 rounded-full shadow-lg shadow-blue-100"><span class="text-[10px] font-black uppercase tracking-[0.3em]">Visão Consolidada</span></div>
                    </div>
                    <div class="overflow-x-auto">
                        <table class="w-full text-left">
                            <thead class="bg-slate-50/50 border-b border-slate-100">
                                <tr>
                                    <th class="px-12 py-10 text-[11px] font-black text-slate-400 uppercase tracking-[0.2em]">Equipe Principal</th>
                                    <th class="px-6 py-10 text-[11px] font-black text-blue-950 uppercase text-center">Total</th>
                                    <th class="px-6 py-10 text-[11px] font-black text-blue-800 uppercase text-center">Base</th>
                                    <th class="px-6 py-10 text-[11px] font-black text-blue-400 uppercase text-center">Onb.</th>
                                    <th class="px-6 py-10 text-[11px] font-black text-red-600 uppercase text-center">Canc.</th>
                                    <th class="px-6 py-10 text-[11px] font-black text-slate-500 uppercase">Conversão Base</th>
                                    <th class="px-6 py-10 text-[11px] font-black text-slate-500 uppercase">Cancelamento (%)</th>
                                    <th class="px-12 py-10 text-[11px] font-black text-slate-500 uppercase">Tempo Médio</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-slate-100">
                                ${teams.map((t, idx) => `
                                    <tr class="hover:bg-blue-50/40 group transition-colors">
                                        <td class="px-12 py-10">
                                            <div class="flex items-center gap-6">
                                                <span class="w-12 h-12 flex items-center justify-center bg-blue-50 text-blue-900 text-sm font-black rounded-2xl group-hover:bg-blue-950 group-hover:text-white transition-all shadow-sm">${idx+1}</span>
                                                <span class="font-black text-blue-950 uppercase text-xs tracking-tight">${t.equipe}</span>
                                            </div>
                                        </td>
                                        <td class="px-6 py-10 text-center font-bold text-slate-400">${t.total}</td>
                                        <td class="px-6 py-10 text-center font-black text-blue-950 text-base">${t.base}</td>
                                        <td class="px-6 py-10 text-center font-black text-blue-500 text-base">${t.onboarding}</td>
                                        <td class="px-6 py-10 text-center font-black text-red-500 text-base">${t.cancelado}</td>
                                        <td class="px-6 py-10 min-w-[180px]">
                                            <div class="flex items-center gap-4">
                                                <div class="flex-1 h-3 bg-slate-100 rounded-full overflow-hidden border border-slate-200">
                                                    <div class="h-full bg-blue-800 shadow-md transition-all duration-1000" style="width: ${t.conv}%"></div>
                                                </div>
                                                <span class="text-[11px] font-black text-blue-950 w-12">${t.conv.toFixed(1)}%</span>
                                            </div>
                                        </td>
                                        <td class="px-6 py-10 min-w-[180px]">
                                            <div class="flex items-center gap-4">
                                                <div class="flex-1 h-3 bg-slate-100 rounded-full overflow-hidden border border-slate-200">
                                                    <div class="h-full bg-red-600 shadow-md transition-all duration-1000" style="width: ${t.churn}%"></div>
                                                </div>
                                                <span class="text-[11px] font-black text-red-600 w-12">${t.churn.toFixed(1)}%</span>
                                            </div>
                                        </td>
                                        <td class="px-12 py-10">
                                            <div class="flex items-center gap-3">
                                               <div class="bg-blue-50 p-2.5 rounded-xl text-blue-800 font-black text-sm shadow-sm">${t.avg}d</div>
                                               <span class="text-[9px] font-black text-slate-400 uppercase tracking-tighter">Ciclo Médio</span>
                                            </div>
                                        </td>
                                    </tr>
                                `).join('')}
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>

            <footer class="max-w-7xl mx-auto text-center py-24 border-t-2 border-slate-200">
                <div class="w-48 h-2 bg-blue-950 mx-auto mb-10 rounded-full opacity-5"></div>
            </footer>
        </div>
    `;

    renderChart(kpis);
}

function renderChart(kpis) {
    const ctx = document.getElementById('funnelChart').getContext('2d');
    Chart.register(ChartDataLabels);

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Total Leads', 'Em Onboarding', 'Base GE (Sucesso)', 'Cancelados'],
            datasets: [{
                data: [kpis.total, kpis.onboarding, kpis.base, kpis.cancelled],
                backgroundColor: ['#1e293b', '#3b82f6', '#1e3a8a', '#d62828'],
                borderRadius: 25,
                barThickness: 55
            }]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
            layout: { padding: { right: 90 } },
            plugins: {
                legend: { display: false },
                datalabels: {
                    anchor: 'end',
                    align: 'right',
                    offset: 15,
                    color: '#0f172a',
                    font: { weight: 'bold', size: 28, family: 'system-ui' },
                    formatter: (value) => value
                }
            },
            scales: {
                x: { display: false, grid: { display: false } },
                y: { 
                    grid: { display: false }, 
                    ticks: { font: { weight: 'bold', size: 14 }, color: '#334155' } 
                }
            }
        }
    });
}

// Iniciar quando o documento carregar
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(initDashboard, 500); 
});
