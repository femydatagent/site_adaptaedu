/**
 * Dados cadastrais que aparecem nas páginas legais.
 *
 * Fonte única: mudou o endereço, o encarregado ou o e-mail, muda aqui e as
 * cinco páginas acompanham.
 */

export const EMPRESA = {
  nomeFantasia: 'AdaptaEDU',
  razaoSocial: 'OUTA ADMINISTRAÇÃO E NEGÓCIOS LTDA',
  cnpj: '54.346.700/0001-61',
  endereco:
    'Rua Deputado Lacerda Franco, 144, apto 74, Pinheiros, São Paulo/SP, CEP 05418-000',
  /** Comarca do foro eleito nos Termos de Uso. */
  comarca: 'São Paulo/SP',
} as const;

export const CONTATO = {
  /** Canal único hoje; separar por assunto se o volume justificar. */
  geral: 'suporte@adaptaedu.com',
  privacidade: 'suporte@adaptaedu.com',
  acessibilidade: 'suporte@adaptaedu.com',
  suporte: 'suporte@adaptaedu.com',
} as const;

export const RESPONSAVEIS = {
  /** Encarregado pelo tratamento de dados pessoais (DPO), art. 41 da LGPD. */
  encarregado: 'Fernando Outa',
  /** Responsável técnica pelo conteúdo pedagógico da plataforma. */
  tecnica: 'Andrea Gonçalves Monteiro',
} as const;

export type Fornecedor = {
  categoria: string;
  finalidade: string;
  nome: string;
  /** País onde os dados são processados. */
  pais: string;
};

/**
 * Operadores que participam do funcionamento da plataforma, na ordem em que
 * um pedido passa por eles.
 *
 * Levantado em 2026-10-21 a partir do código do app (apps/api, workers/pipeline
 * e migrations): a Vercel hospeda só este site; a plataforma, a API, as filas
 * e as sessões temporárias rodam na Railway; os arquivos ficam na Backblaze
 * (endpoint s3.us-east-005); os modelos de texto e de leitura visual são
 * acessados via OpenRouter, com a Z.AI como contingência; as ilustrações saem
 * da OpenAI, com a Kling AI como contingência (endpoint api-singapore).
 */
export const FORNECEDORES: Fornecedor[] = [
  {
    categoria: 'Hospedagem do site institucional',
    finalidade: 'Servir as páginas de adaptaedu.com e o formulário de demonstração',
    nome: 'Vercel Inc.',
    pais: 'Estados Unidos (região iad1)',
  },
  {
    categoria: 'Hospedagem da plataforma',
    finalidade:
      'Executar app.adaptaedu.com, a API, as filas de processamento e a sessão temporária das conversas de WhatsApp',
    nome: 'Railway Corp.',
    pais: 'Estados Unidos',
  },
  {
    categoria: 'Banco de dados e autenticação',
    finalidade:
      'Armazenar contas, vínculos com escolas, números de WhatsApp cadastrados, metadados dos pedidos e registros de aceite dos termos',
    nome: 'Supabase Inc.',
    pais: 'Estados Unidos',
  },
  {
    categoria: 'Armazenamento de arquivos',
    finalidade:
      'Guardar os arquivos enviados, as imagens e textos intermediários, as ilustrações e as adaptações finais (DOCX/PDF)',
    nome: 'Backblaze Inc.',
    pais: 'Estados Unidos (região us-east-005)',
  },
  {
    categoria: 'Mensageria WhatsApp',
    finalidade:
      'Transportar as mensagens e arquivos trocados entre o professor e o número de WhatsApp Business da escola',
    nome: 'Meta Platforms, Inc. (WhatsApp)',
    pais: 'Estados Unidos',
  },
  {
    categoria: 'IA — adaptação do texto',
    finalidade: 'Reescrever e reorganizar o conteúdo conforme o perfil de acessibilidade escolhido',
    nome: 'Anthropic (Claude), acessada por meio da OpenRouter, Inc.',
    pais: 'Estados Unidos',
  },
  {
    categoria: 'IA — leitura visual',
    finalidade:
      'Transcrever páginas fotografiadas ou digitalizadas quando a extração automática não é suficiente, e verificar as ilustrações geradas',
    nome: 'Google (Gemini), acessada por meio da OpenRouter, Inc.',
    pais: 'Estados Unidos',
  },
  {
    categoria: 'IA — adaptação do texto (contingência)',
    finalidade: 'Substituir o modelo principal quando ele estiver indisponível',
    nome: 'Z.AI (Zhipu AI)',
    pais: 'China',
  },
  {
    categoria: 'IA — ilustrações',
    finalidade: 'Gerar ilustrações de apoio a partir de descrições do conteúdo adaptado',
    nome: 'OpenAI',
    pais: 'Estados Unidos',
  },
  {
    categoria: 'IA — ilustrações (contingência)',
    finalidade: 'Substituir o gerador principal de ilustrações quando ele estiver indisponível',
    nome: 'Kling AI (Kuaishou Technology)',
    pais: 'Singapura',
  },
  {
    categoria: 'Pictogramas',
    finalidade:
      'Buscar pictogramas ARASAAC a partir de palavras-chave do conteúdo, sem dados pessoais',
    nome: 'OpenSymbols',
    pais: 'Estados Unidos',
  },
  {
    categoria: 'E-mail transacional',
    finalidade: 'Enviar convites, confirmações de conta e avisos de cobrança e de período de teste',
    nome: 'Resend, Inc.',
    pais: 'Estados Unidos',
  },
  {
    categoria: 'Pagamentos',
    finalidade: 'Processar cobranças por PIX, boleto e cartão e emitir notas fiscais',
    nome: 'ASAAS',
    pais: 'Brasil',
  },
];

/** Ferramentas de análise de audiência e produto. Categoria "analíticos". */
export const FERRAMENTAS_ANALISE = [
  'Google Analytics',
  'PostHog',
  'HubSpot',
  'RD Station',
  'MyDataAgent',
] as const;

/** Ferramentas de campanha e anúncio. Categoria "publicidade". */
export const FERRAMENTAS_MARKETING = [
  'Google Ads',
  'Meta Ads',
  'TikTok Ads',
  'LinkedIn Ads',
] as const;

/** Processador de pagamentos. */
export const PROVEDOR_PAGAMENTO = 'ASAAS';

/**
 * WhatsApp de atendimento e adaptação.
 *
 * `numero` é o formato internacional exigido pelo link wa.me (55 + DDD +
 * assinante, só dígitos); `exibicao` é como aparece na tela.
 */
export const WHATSAPP = {
  numero: '551148633462',
  exibicao: '(11) 4863-3462',
  mensagemInicial: 'Olá! Quero adaptar um material com o AdaptaEDU.',
} as const;

/** Link pronto, com a mensagem já preenchida na conversa. */
export function linkWhatsapp(): string {
  return `https://wa.me/${WHATSAPP.numero}?text=${encodeURIComponent(WHATSAPP.mensagemInicial)}`;
}
