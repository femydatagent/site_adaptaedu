import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/facts';

/**
 * Buscadores e assistentes de IA podem ler o site inteiro, exceto a API.
 *
 * `/_next/` NÃO é bloqueado: é de lá que vêm o CSS e o JS, e o Google precisa
 * deles para renderizar a página como o visitante a vê.
 *
 * Os robôs de IA aparecem nomeados para deixar a intenção explícita (e para
 * que um bloqueio futuro seja uma decisão consciente, robô a robô):
 * - treino/indexação: GPTBot, ClaudeBot, Google-Extended, Applebot-Extended, CCBot…
 * - busca e citação em tempo real: OAI-SearchBot, ChatGPT-User, Claude-SearchBot,
 *   Claude-User, PerplexityBot, Perplexity-User.
 */
const AI_CRAWLERS = [
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'ClaudeBot',
  'Claude-SearchBot',
  'Claude-User',
  'anthropic-ai',
  'PerplexityBot',
  'Perplexity-User',
  'Google-Extended',
  'Applebot-Extended',
  'Meta-ExternalAgent',
  'Amazonbot',
  'DuckAssistBot',
  'MistralAI-User',
  'cohere-ai',
  'YouBot',
  'CCBot',
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/', disallow: '/api/' },
      { userAgent: AI_CRAWLERS, allow: '/', disallow: '/api/' },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
