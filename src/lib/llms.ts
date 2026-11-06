import { routing, type Locale } from '@/i18n/routing';
import { staticTranslator, type StaticTranslator as Translator } from './static-messages';
import { PRICES, PROFILE_IDS, SITE_NAME, SITE_URL } from './facts';
import { absoluteUrl } from './seo';

/**
 * Gera o /llms.txt e o /llms-full.txt (https://llmstxt.org) a partir das mesmas
 * mensagens que a página usa. Preço, perfis e FAQ citados por uma IA são,
 * por construção, os mesmos que o visitante lê — nos três idiomas.
 */

type FaqItem = { q: string; a: string };
type Step = { title: string; text: string };

const translator = (locale: Locale): Translator => staticTranslator(locale);

function stripTags(text: string): string {
  return text.replace(/<\/?[a-z]+>/g, '');
}

function planLines(t: Translator, locale: Locale): string[] {
  const fmt = new Intl.NumberFormat(locale === 'pt' ? 'pt-BR' : locale);
  return [
    t('llms.planProfessor', {
      price: fmt.format(PRICES.professor.monthly),
      adaptations: PRICES.professor.adaptations,
      trial: PRICES.professor.trialAdaptations,
    }),
    t('llms.planEscola', {
      price: fmt.format(PRICES.escola.monthly),
      adaptations: PRICES.escola.adaptations,
      trial: PRICES.escola.trialAdaptations,
    }),
    t('llms.planRede'),
  ];
}

function pagesSection(t: Translator, locale: Locale): string[] {
  return [
    `## ${t('llms.pagesTitle')} — ${t('llms.languageName')}`,
    '',
    `- [${t('llms.homeLabel')}](${absoluteUrl(locale, '/')}): ${t('llms.homeDesc')}`,
    `- [${t('llms.schoolsLabel')}](${absoluteUrl(locale, '/escolas')}): ${t('llms.schoolsDesc')}`,
    '',
  ];
}

/** Índice curto: resumo, fatos e links por idioma. */
export function buildLlmsTxt(): string {
  const t = translator('pt');
  const lines = [
    `# ${SITE_NAME}`,
    '',
    `> ${t('llms.summary')}`,
    '',
    `## ${t('llms.factsTitle')}`,
    '',
    ...(t.raw('llms.facts') as string[]).map(f => `- ${f}`),
    ...planLines(t, 'pt').map(p => `- ${p}`),
    '',
  ];
  for (const locale of routing.locales) lines.push(...pagesSection(translator(locale), locale));
  lines.push(
    `## ${t('llms.optionalTitle')}`,
    '',
    `- [${t('llms.fullLabel')}](${SITE_URL}/llms-full.txt): ${t('llms.fullDesc')}`,
    `- [Blog](${SITE_URL}/blog): ${t('llms.blogDesc')}`,
    `- [Privacidade](${SITE_URL}/privacidade), [Termos](${SITE_URL}/termos), [LGPD](${SITE_URL}/lgpd): ${t('llms.legalDesc')}`,
    '',
  );
  return lines.join('\n');
}

function fullSection(locale: Locale): string[] {
  const t = translator(locale);
  const faq = t.raw('faq.items') as FaqItem[];
  const steps = t.raw('whatsapp.steps') as Step[];
  const aeeSteps = ['aluno', 'barreira', 'adapte', 'junto'];

  return [
    `# ${SITE_NAME} — ${t('llms.languageName')}`,
    '',
    `URL: ${absoluteUrl(locale, '/')}`,
    '',
    `> ${t('llms.summary')}`,
    '',
    `## ${t('llms.factsTitle')}`,
    '',
    ...(t.raw('llms.facts') as string[]).map(f => `- ${f}`),
    '',
    `## ${t('llms.profilesTitle')}`,
    '',
    ...PROFILE_IDS.map(
      id => `- ${t(`profiles.items.${id}.name`)} (${t(`profiles.items.${id}.full`)}): ${t(`profiles.items.${id}.desc`)}`,
    ),
    '',
    `## ${t('llms.howTitle')}`,
    '',
    ...steps.map((s, i) => `${i + 1}. ${s.title}: ${s.text}`),
    '',
    `## ${t('llms.plansTitle')}`,
    '',
    ...planLines(t, locale).map(p => `- ${p}`),
    '',
    `## ${t('llms.aeeTitle')}`,
    '',
    stripTags(t('aee.subtitle')),
    '',
    ...aeeSteps.map((id, i) => `${i + 1}. ${t(`aee.steps.${id}.title`)}: ${t(`aee.steps.${id}.text`)}`),
    '',
    `## ${t('llms.faqTitle')}`,
    '',
    ...faq.flatMap(item => [`### ${item.q}`, '', item.a, '']),
    `## ${t('llms.schoolsLabel')}`,
    '',
    `URL: ${absoluteUrl(locale, '/escolas')}`,
    '',
    stripTags(t('schoolsPage.hero.subtitle')),
    '',
    stripTags(t('overload.ctaText')),
    '',
  ];
}

/** Conteúdo completo, idioma por idioma. */
export function buildLlmsFullTxt(): string {
  return routing.locales.flatMap(locale => [...fullSection(locale), '---', '']).join('\n');
}
