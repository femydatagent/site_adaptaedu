import { createTranslator } from 'next-intl';
import pt from '../../messages/pt.json';
import en from '../../messages/en.json';
import es from '../../messages/es.json';
import { routing, type Locale } from '@/i18n/routing';

/**
 * Mensagens importadas diretamente, para rotas que rodam fora de uma
 * requisição de página (imagem OG, llms.txt): ali `getTranslations` tentaria
 * ler os headers e quebraria a geração estática.
 */
export type Messages = typeof pt;

const MESSAGES: Record<Locale, Messages> = { pt, en: en as Messages, es: es as Messages };

export function staticTranslator(locale: string) {
  const safeLocale = (routing.locales as readonly string[]).includes(locale) ? (locale as Locale) : routing.defaultLocale;
  return createTranslator({ locale: safeLocale, messages: MESSAGES[safeLocale] });
}

export type StaticTranslator = ReturnType<typeof staticTranslator>;
