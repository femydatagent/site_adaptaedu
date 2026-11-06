/**
 * Fatos do AdaptaEDU que não mudam com o idioma: URLs, preços, números.
 *
 * Fonte única para a página, os dados estruturados (JSON-LD) e o llms.txt —
 * assim um preço alterado aqui chega igual ao Google, às IAs e ao visitante.
 * Textos traduzíveis ficam em /messages/{pt,en,es}.json.
 */

export const SITE_URL = 'https://adaptaedu.com';
export const SITE_NAME = 'AdaptaEDU';

export const APP_LOGIN_URL = 'https://app.adaptaedu.com/auth/login';
export const APP_SIGNUP_URL = 'https://app.adaptaedu.com/auth/sign-up';
export const CALENDLY_URL = 'https://calendly.com/fernando-outa-adaptaedu/30min';
export const DEMO_VIDEO_ID = 'OmWTVbUAGVk';

export const FOUNDING_YEAR = '2024';

/** Preços mensais em reais (BRL). */
export const PRICES = {
  professor: { monthly: 150, adaptations: 30, trialAdaptations: 3 },
  escola: { monthly: 1250, adaptations: 250, trialAdaptations: 5 },
} as const;

export const PRICE_CURRENCY = 'BRL';

/** Os 9 perfis, na ordem em que aparecem no site. */
export const PROFILE_IDS = ['tea', 'tdah', 'tpac', 'di', 'baixaVisao', 'dislexia', 'discalculia', 'disgrafia', 'ahsd'] as const;
export type ProfileId = (typeof PROFILE_IDS)[number];
