import { getTranslations } from 'next-intl/server';
import type { Locale } from '@/i18n/routing';
import type { SchemaTexts } from './structured-data';

/** Textos do namespace `schema` das mensagens, já tipados para os builders de JSON-LD. */
export async function getSchemaTexts(locale: Locale): Promise<SchemaTexts> {
  const t = await getTranslations({ locale, namespace: 'schema' });
  return {
    organizationDescription: t('organizationDescription'),
    knowsAbout: t.raw('knowsAbout') as string[],
    softwareDescription: t('softwareDescription'),
    featureList: t.raw('featureList') as string[],
    offers: t.raw('offers') as SchemaTexts['offers'],
    audience: t.raw('audience') as string[],
  };
}
