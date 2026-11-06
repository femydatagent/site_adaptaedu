import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Geist } from 'next/font/google';
import { hasLocale, NextIntlClientProvider, type AbstractIntlMessages } from 'next-intl';
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server';
import '../globals.css';
import { Toaster } from '@/components/ui/toaster';
import PromoBar from '@/components/promo-bar/promo-bar';
import CookieBanner from '@/components/cookie-consent/cookie-banner';
import MarketingTags from '@/components/cookie-consent/marketing-tags';
import LanguageSuggestion from '@/components/i18n/language-suggestion';
import JsonLd from '@/components/seo/json-ld';
import { HTML_LANG, OG_LOCALE, routing, type Locale } from '@/i18n/routing';
import { SITE_NAME, SITE_URL } from '@/lib/facts';
import { getSchemaTexts } from '@/lib/schema-texts';
import { ogImage } from '@/lib/seo';
import { organizationSchema, websiteSchema } from '@/lib/structured-data';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

/**
 * Namespaces que componentes cliente leem. Só eles vão para o navegador; o
 * resto do texto é renderizado no servidor e não pesa no bundle.
 */
const CLIENT_NAMESPACES = [
  'header',
  'languageSwitcher',
  'demoModal',
  'videoModal',
  'contentDemo',
  'cookies',
  'promo',
  'support',
] as const;

function pickClientMessages(messages: AbstractIntlMessages): AbstractIntlMessages {
  return Object.fromEntries(
    CLIENT_NAMESPACES.filter(ns => ns in messages).map(ns => [ns, messages[ns]]),
  );
}

export function generateStaticParams() {
  return routing.locales.map(locale => ({ locale }));
}

type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: LayoutProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'meta' });

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: t('home.title'),
      template: `%s | ${SITE_NAME}`,
    },
    description: t('home.description'),
    keywords: t.raw('keywords') as string[],
    authors: [{ name: SITE_NAME, url: SITE_URL }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-snippet': -1,
        'max-image-preview': 'large',
        'max-video-preview': -1,
      },
    },
    icons: {
      icon: '/favicon.svg',
      shortcut: '/favicon.svg',
    },
    // Padrão para páginas sem Open Graph próprio (legais, blog).
    openGraph: {
      siteName: SITE_NAME,
      locale: OG_LOCALE[locale as Locale],
      type: 'website',
      images: [ogImage(locale as Locale, t('ogImage.alt'))],
    },
    twitter: { card: 'summary_large_image', images: [ogImage(locale as Locale, t('ogImage.alt'))] },
  };
}

// ─── Web bubble de atendimento ────────────────────────────────────────────────
// Versão fixada: @latest mudaria o código em produção sem passar por aqui.
const CHATBOX_SRC =
  'https://cdn.jsdelivr.net/npm/@mydataagent/embeds@1.0.214/dist/chatbox/index.js';
// O pacote tem o host antigo fixo no código e não aceita outro. As chamadas
// dele são redirecionadas para o v2, onde o agente está publicado.
const CHATBOX_LEGACY_API = 'https://app.mydatagent.ai';
const CHATBOX_API = 'https://app.v2.mydatagent.ai';
const CHATBOX_AGENT_ID = 'cmv9o1xtl0001f2l5qnd0dc3s';

function chatboxScript(initialMessages: string[]): string {
  return `const legacyApi = "${CHATBOX_LEGACY_API}";
const rewrite = (url) => (url.startsWith(legacyApi) ? "${CHATBOX_API}" + url.slice(legacyApi.length) : url);
const nativeFetch = window.fetch.bind(window);
window.fetch = (input, init) => nativeFetch(input instanceof Request ? input : rewrite(String(input)), init);
const nativeOpen = XMLHttpRequest.prototype.open;
XMLHttpRequest.prototype.open = function (method, url, ...rest) {
  return nativeOpen.call(this, method, rewrite(String(url)), ...rest);
};
const { default: Chatbox } = await import("${CHATBOX_SRC}");
Chatbox.initBubble({
  agentId: "${CHATBOX_AGENT_ID}",
  initialMessages: ${JSON.stringify(initialMessages)},
}).catch((error) => console.error("Falha ao iniciar o chat da Ana", error));`;
}

export default async function LocaleLayout({ children, params }: LayoutProps) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);

  const [messages, tSupport, schemaTexts] = await Promise.all([
    getMessages(),
    getTranslations({ locale, namespace: 'support' }),
    getSchemaTexts(locale as Locale),
  ]);

  return (
    <html lang={HTML_LANG[locale as Locale]} suppressHydrationWarning>
      <head>
        <JsonLd data={[organizationSchema(schemaTexts), websiteSchema()]} />
        {/* Web bubble da Ana, agente de atendimento (MyDataAgent) */}
        <script
          type="module"
          dangerouslySetInnerHTML={{ __html: chatboxScript(tSupport.raw('chatInitialMessages') as string[]) }}
        />
      </head>
      <body className={`${geistSans.variable} antialiased bg-background text-foreground`}>
        <NextIntlClientProvider locale={locale} messages={pickClientMessages(messages)}>
          <PromoBar />
          {children}
          <Toaster />
          <CookieBanner />
          <MarketingTags />
          <LanguageSuggestion />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
