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
 * Operadores que participam do funcionamento da plataforma.
 *
 * Hospedagem confirmada na região iad1 da Vercel (Virgínia, EUA) pelos
 * metadados do deploy. Os provedores de IA foram informados pela AdaptaEDU.
 */
export const FORNECEDORES: Fornecedor[] = [
  {
    categoria: 'Hospedagem e entrega',
    finalidade: 'Servir o site e executar as funções da aplicação',
    nome: 'Vercel Inc.',
    pais: 'Estados Unidos (região iad1)',
  },
  {
    categoria: 'Banco de dados e autenticação',
    finalidade: 'Armazenar contas, registros da aplicação e sessões',
    nome: 'Supabase',
    pais: 'Estados Unidos',
  },
  {
    categoria: 'Processamento por IA',
    finalidade: 'Gerar a adaptação do material enviado',
    nome: 'Anthropic (Claude) e OpenAI',
    pais: 'Estados Unidos',
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
