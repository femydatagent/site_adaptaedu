import type { Metadata } from 'next';
import { getPathname } from '@/i18n/navigation';
import { HTML_LANG, OG_LOCALE, routing, type AppPathname, type Locale } from '@/i18n/routing';
import { SITE_NAME, SITE_URL } from './facts';

export const OG_IMAGE_SIZE = { width: 1200, height: 630 };

/** Imagem de compartilhamento do idioma (src/app/og/[image]/route.tsx). */
export function ogImage(locale: Locale, alt: string) {
  return { url: `${SITE_URL}/og/${locale}.png`, ...OG_IMAGE_SIZE, alt, type: 'image/png' };
}

/** URL absoluta de uma página num idioma, já com o caminho traduzido (/en/schools). */
export function absoluteUrl(locale: Locale, href: AppPathname): string {
  const path = getPathname({ locale, href });
  return path === '/' ? SITE_URL : `${SITE_URL}${path}`;
}

/** `hreflang` de uma página que existe nos três idiomas, com x-default no português. */
export function languageAlternates(href: AppPathname): Record<string, string> {
  const languages: Record<string, string> = {};
  for (const locale of routing.locales) {
    languages[HTML_LANG[locale]] = absoluteUrl(locale, href);
  }
  languages['x-default'] = absoluteUrl(routing.defaultLocale, href);
  return languages;
}

type PageMetadataInput = {
  locale: Locale;
  href: AppPathname;
  title: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
  /** Texto alternativo da imagem de compartilhamento. */
  imageAlt: string;
  /** Título já completo, sem o sufixo "| AdaptaEDU" do template. */
  absoluteTitle?: boolean;
};

/** Metadata de uma página traduzida: canonical, hreflang, Open Graph e Twitter. */
export function buildPageMetadata(input: PageMetadataInput): Metadata {
  const { locale, href, title, description, ogTitle, ogDescription, imageAlt, absoluteTitle } = input;
  const image = ogImage(locale, imageAlt);
  const url = absoluteUrl(locale, href);

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: {
      canonical: url,
      languages: languageAlternates(href),
    },
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      url,
      siteName: SITE_NAME,
      locale: OG_LOCALE[locale],
      alternateLocale: routing.locales.filter(l => l !== locale).map(l => OG_LOCALE[l]),
      type: 'website',
      images: [image],
    },
    twitter: {
      card: 'summary_large_image',
      title: ogTitle,
      description: ogDescription,
      images: [image],
    },
  };
}
