import { hasLocale } from 'next-intl';
import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

export default getRequestConfig(async ({ locale: explicitLocale, requestLocale }) => {
  // Quem passa o idioma explicitamente (rotas de metadados, como a imagem OG)
  // não tem contexto de requisição: ler `requestLocale` ali chamaria headers().
  const requested = explicitLocale ?? (await requestLocale);
  const locale = hasLocale(routing.locales, requested) ? requested : routing.defaultLocale;

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
