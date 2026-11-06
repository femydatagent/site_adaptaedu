import type { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import Landing from '@/components/landing';
import JsonLd from '@/components/seo/json-ld';
import type { Locale } from '@/i18n/routing';
import { buildPageMetadata } from '@/lib/seo';
import { getSchemaTexts } from '@/lib/schema-texts';
import { faqSchema, softwareSchema, webPageSchema, type FaqItem } from '@/lib/structured-data';

type PageProps = { params: Promise<{ locale: Locale }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const [t, tImage] = await Promise.all([
    getTranslations({ locale, namespace: 'meta.home' }),
    getTranslations({ locale, namespace: 'meta.ogImage' }),
  ]);
  return buildPageMetadata({
    locale,
    href: '/',
    title: t('title'),
    description: t('description'),
    ogTitle: t('ogTitle'),
    ogDescription: t('ogDescription'),
    imageAlt: tImage('alt'),
    absoluteTitle: true,
  });
}

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  const [tMeta, tFaq, schemaTexts] = await Promise.all([
    getTranslations({ locale, namespace: 'meta.home' }),
    getTranslations({ locale, namespace: 'faq' }),
    getSchemaTexts(locale),
  ]);

  return (
    <>
      <JsonLd
        data={[
          webPageSchema(locale, '/', tMeta('title'), tMeta('description')),
          softwareSchema(locale, schemaTexts),
          faqSchema(locale, '/', tFaq.raw('items') as FaqItem[]),
        ]}
      />
      <Landing />
    </>
  );
}
