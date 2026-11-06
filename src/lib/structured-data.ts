import { HTML_LANG, type AppPathname, type Locale } from '@/i18n/routing';
import { FOUNDING_YEAR, PRICE_CURRENCY, PRICES, SITE_NAME, SITE_URL } from './facts';
import { absoluteUrl } from './seo';
import { CONTATO } from '@/components/legal/empresa';

type Node = Record<string, unknown>;

const ORGANIZATION_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const SOFTWARE_ID = `${SITE_URL}/#software`;

/** Textos que os schemas usam, vindos de messages/<locale>.json (namespace `schema`). */
export type SchemaTexts = {
  organizationDescription: string;
  knowsAbout: string[];
  softwareDescription: string;
  featureList: string[];
  offers: { professor: OfferText; escola: OfferText; rede: OfferText };
  audience: string[];
};

type OfferText = { name: string; description: string };

export function organizationSchema(texts: Pick<SchemaTexts, 'organizationDescription' | 'knowsAbout'>): Node {
  return {
    '@type': 'Organization',
    '@id': ORGANIZATION_ID,
    name: SITE_NAME,
    url: SITE_URL,
    logo: { '@type': 'ImageObject', url: `${SITE_URL}/logo.svg` },
    description: texts.organizationDescription,
    foundingDate: FOUNDING_YEAR,
    areaServed: { '@type': 'Country', name: 'Brazil' },
    knowsAbout: texts.knowsAbout,
    founder: [
      { '@type': 'Person', name: 'Andréa Monteiro' },
      { '@type': 'Person', name: 'Fernando Outa' },
    ],
    address: { '@type': 'PostalAddress', addressLocality: 'São Paulo', addressRegion: 'SP', addressCountry: 'BR' },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      email: CONTATO.suporte,
      availableLanguage: ['Portuguese'],
    },
  };
}

export function websiteSchema(): Node {
  return {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: SITE_URL,
    name: SITE_NAME,
    inLanguage: ['pt-BR', 'en', 'es'],
    publisher: { '@id': ORGANIZATION_ID },
  };
}

export function softwareSchema(locale: Locale, texts: SchemaTexts): Node {
  const url = absoluteUrl(locale, '/');
  return {
    '@type': 'SoftwareApplication',
    '@id': SOFTWARE_ID,
    name: SITE_NAME,
    applicationCategory: 'EducationalApplication',
    applicationSubCategory: 'Assistive Technology',
    operatingSystem: 'Web, WhatsApp',
    description: texts.softwareDescription,
    url,
    inLanguage: HTML_LANG[locale],
    offers: [
      {
        '@type': 'Offer',
        name: texts.offers.professor.name,
        description: texts.offers.professor.description,
        price: PRICES.professor.monthly.toFixed(2),
        priceCurrency: PRICE_CURRENCY,
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: PRICES.professor.monthly.toFixed(2),
          priceCurrency: PRICE_CURRENCY,
          unitCode: 'MON',
        },
        url,
      },
      {
        '@type': 'Offer',
        name: texts.offers.escola.name,
        description: texts.offers.escola.description,
        price: PRICES.escola.monthly.toFixed(2),
        priceCurrency: PRICE_CURRENCY,
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: PRICES.escola.monthly.toFixed(2),
          priceCurrency: PRICE_CURRENCY,
          unitCode: 'MON',
        },
        url,
      },
      {
        '@type': 'Offer',
        name: texts.offers.rede.name,
        description: texts.offers.rede.description,
        url,
      },
    ],
    featureList: texts.featureList,
    audience: {
      '@type': 'EducationalAudience',
      educationalRole: texts.audience,
    },
    publisher: { '@id': ORGANIZATION_ID },
  };
}

export type FaqItem = { q: string; a: string };

export function faqSchema(locale: Locale, href: AppPathname, items: FaqItem[]): Node {
  return {
    '@type': 'FAQPage',
    '@id': `${absoluteUrl(locale, href)}#faq`,
    inLanguage: HTML_LANG[locale],
    mainEntity: items.map(item => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };
}

export function webPageSchema(locale: Locale, href: AppPathname, name: string, description: string): Node {
  const url = absoluteUrl(locale, href);
  return {
    '@type': 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name,
    description,
    inLanguage: HTML_LANG[locale],
    isPartOf: { '@id': WEBSITE_ID },
    about: { '@id': SOFTWARE_ID },
    publisher: { '@id': ORGANIZATION_ID },
  };
}

export function breadcrumbSchema(locale: Locale, crumbs: { name: string; href: AppPathname }[]): Node {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((crumb, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: crumb.name,
      item: absoluteUrl(locale, crumb.href),
    })),
  };
}
