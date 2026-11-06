import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  // Tudo, menos API, arquivos internos do Next e caminhos com extensão
  // (sitemap.xml, robots.txt, llms.txt, imagens).
  matcher: '/((?!api|_next|_vercel|.*\\..*).*)',
};
