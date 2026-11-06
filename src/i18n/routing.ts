import { defineRouting } from 'next-intl/routing';

/**
 * Idiomas do site. O português fica sem prefixo (`/`), para manter as URLs já
 * indexadas e compartilhadas; inglês e espanhol ficam em `/en` e `/es`.
 *
 * `localeDetection: false` é deliberado: nem o Accept-Language nem o cookie
 * redirecionam a home. Robôs de busca rastreiam sem Accept-Language e o Google
 * recomenda não redirecionar por idioma; quem chega com o navegador em outro
 * idioma vê uma sugestão discreta (LanguageSuggestion) e o seletor no cabeçalho.
 *
 * `alternateLinks: false` porque os `hreflang` saem do `metadata` de cada
 * página (src/lib/seo.ts), que conhece as páginas só em português.
 */
export const routing = defineRouting({
  locales: ['pt', 'en', 'es'],
  defaultLocale: 'pt',
  localePrefix: 'as-needed',
  localeDetection: false,
  alternateLinks: false,
  pathnames: {
    '/': '/',
    '/escolas': {
      pt: '/escolas',
      en: '/schools',
      es: '/escuelas',
    },
  },
});

export type Locale = (typeof routing.locales)[number];
export type AppPathname = keyof typeof routing.pathnames;

/** Código BCP 47 usado em `<html lang>`, `hreflang` e `inLanguage`. */
export const HTML_LANG: Record<Locale, string> = {
  pt: 'pt-BR',
  en: 'en',
  es: 'es',
};

/** Código do Open Graph (`og:locale`). */
export const OG_LOCALE: Record<Locale, string> = {
  pt: 'pt_BR',
  en: 'en_US',
  es: 'es_LA',
};
