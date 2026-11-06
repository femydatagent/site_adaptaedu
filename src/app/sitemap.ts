import type { MetadataRoute } from 'next';
import { posts } from '@/lib/posts';
import { SITE_URL } from '@/lib/facts';
import { absoluteUrl, languageAlternates } from '@/lib/seo';
import { routing, type AppPathname } from '@/i18n/routing';

/** Páginas traduzidas: uma entrada por idioma, cada uma com todas as alternativas (hreflang). */
const TRANSLATED_PAGES: { href: AppPathname; changeFrequency: 'weekly' | 'monthly'; priority: number }[] = [
  { href: '/', changeFrequency: 'weekly', priority: 1.0 },
  { href: '/escolas', changeFrequency: 'monthly', priority: 0.9 },
];

/** Páginas só em português (legais e blog). */
const PT_ONLY_LEGAL = ['privacidade', 'termos', 'lgpd', 'acessibilidade', 'cookies'];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  const translated: MetadataRoute.Sitemap = TRANSLATED_PAGES.flatMap(page =>
    routing.locales.map(locale => ({
      url: absoluteUrl(locale, page.href),
      lastModified: now,
      changeFrequency: page.changeFrequency,
      priority: locale === routing.defaultLocale ? page.priority : page.priority - 0.1,
      alternates: { languages: languageAlternates(page.href) },
    })),
  );

  const blog: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    ...posts.map(post => ({
      url: `${SITE_URL}/blog/${post.slug}`,
      lastModified: new Date(post.date).toISOString(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ];

  const legal: MetadataRoute.Sitemap = PT_ONLY_LEGAL.map(slug => ({
    url: `${SITE_URL}/${slug}`,
    lastModified: now,
    changeFrequency: 'yearly' as const,
    priority: 0.3,
  }));

  return [...translated, ...blog, ...legal];
}
