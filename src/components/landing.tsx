import { useTranslations } from 'next-intl';
import FadeIn from './fade-in';
import SiteHeader from './landing/site-header';
import Hero from './landing/hero';
import Pipeline from './landing/pipeline';
import Profiles from './landing/profiles';
import SectionHeading from './landing/section-heading';
import ContentDemo from './landing/content-demo';
import SchoolsSection from './landing/schools-section';
import LegalSection from './landing/legal-section';
import Testimonials, { Stats } from './landing/testimonials';
import Plans from './landing/plans';
import FinalCta from './landing/final-cta';
import Faq from './landing/faq';
import SiteFooter from './landing/site-footer';
import Whatsapp from './whatsapp';
import Aee from './aee';
import QuemSomos from './quem-somos';
import { richTags } from './i18n/rich';

function ContentSection() {
  const t = useTranslations('contentSection');
  return (
    <section id="conteudo" className="py-24 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading badge={t('badge')} title={t.rich('title', richTags)} subtitle={t('subtitle')} />
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <ContentDemo />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

/**
 * Página inicial (/, /en, /es). Renderizada no servidor; só o cabeçalho, a
 * demonstração de conteúdo e os botões que abrem modais rodam no navegador.
 */
export default function Landing() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />
      <main id="conteudo-principal" className="flex-1">
        <Hero />
        <Whatsapp />
        <Pipeline />
        <Profiles />
        <ContentSection />
        <SchoolsSection />
        <LegalSection />
        <Aee />
        <QuemSomos />
        <Stats />
        <Testimonials />
        <Plans />
        <FinalCta />
        <Faq />
      </main>
      <SiteFooter />
    </div>
  );
}
