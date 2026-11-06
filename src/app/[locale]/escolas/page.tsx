import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import Escolas from '@/components/escolas';
import JsonLd from '@/components/seo/json-ld';
import type { Locale } from '@/i18n/routing';
import { buildPageMetadata } from '@/lib/seo';
import { breadcrumbSchema, webPageSchema } from '@/lib/structured-data';

type PageProps = { params: Promise<{ locale: Locale }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const [t, tImage] = await Promise.all([
    getTranslations({ locale, namespace: 'meta.schools' }),
    getTranslations({ locale, namespace: 'meta.ogImage' }),
  ]);
  return buildPageMetadata({
    locale,
    href: '/escolas',
    title: t('title'),
    description: t('description'),
    ogTitle: t('ogTitle'),
    ogDescription: t('ogDescription'),
    imageAlt: tImage('alt'),
    absoluteTitle: true,
  });
}

export default async function SchoolsPage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'meta' });

  return (
    <>
      <JsonLd
        data={[
          webPageSchema(locale, '/escolas', t('schools.title'), t('schools.description')),
          breadcrumbSchema(locale, [
            { name: t('homeBreadcrumb'), href: '/' },
            { name: t('schools.breadcrumb'), href: '/escolas' },
          ]),
        ]}
      />
      <Escolas />
    </>
  );
}
