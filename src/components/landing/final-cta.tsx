import { useTranslations } from 'next-intl';
import { ArrowRight } from 'lucide-react';
import FadeIn from '../fade-in';
import DemoButton from '../actions/demo-button';
import { richTags } from '../i18n/rich';
import { APP_SIGNUP_URL } from '@/lib/facts';

export default function FinalCta() {
  const t = useTranslations('finalCta');

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.rich('title', richTags)}</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">{t('subtitle')}</p>
          <p className="text-sm text-muted-foreground mb-6">{t('tagline')}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={APP_SIGNUP_URL} className="inline-flex items-center justify-center gap-2 font-medium shadow-xs bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white border-0 px-8 py-6 text-lg rounded-xl warm-glow">
              {t('primary')}
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
            <DemoButton className="inline-flex items-center justify-center gap-2 font-medium border bg-background shadow-xs hover:text-accent-foreground px-8 py-6 text-lg rounded-xl border-border hover:bg-secondary">
              {t('secondary')}
            </DemoButton>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
