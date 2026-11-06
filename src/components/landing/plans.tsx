import { useTranslations } from 'next-intl';
import { CheckCircle2 } from 'lucide-react';
import FadeIn from '../fade-in';
import DemoButton from '../actions/demo-button';
import SectionHeading from './section-heading';
import { richTags } from '../i18n/rich';
import { APP_SIGNUP_URL } from '@/lib/facts';

const PLAN_IDS = ['professor', 'escola', 'rede'] as const;
const HIGHLIGHTED_PLAN = 'escola';
/** Planos com cadastro direto; os outros abrem a agenda de demonstração. */
const SELF_SERVE_PLANS = new Set<string>(['professor', 'escola']);

export default function Plans() {
  const t = useTranslations('plans');

  return (
    <section id="planos" className="py-24 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading badge={t('badge')} title={t.rich('title', richTags)} subtitle={t('subtitle')} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {PLAN_IDS.map((id, i) => {
            const isHighlight = id === HIGHLIGHTED_PLAN;
            const features = t.raw(`items.${id}.features`) as string[];
            const period = t.has(`items.${id}.period`) ? t(`items.${id}.period`) : null;
            return (
              <FadeIn key={id} delay={i * 0.15}>
                <div className={`relative p-8 rounded-2xl border-2 h-full flex flex-col ${isHighlight ? 'border-amber-400 bg-card shadow-xl' : 'border-border bg-card'}`}>
                  {isHighlight && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-semibold rounded-full whitespace-nowrap">
                      {t('popular')}
                    </div>
                  )}
                  <div className="mb-6">
                    <h3 className="text-xl font-bold text-foreground">{t(`items.${id}.name`)}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{t(`items.${id}.desc`)}</p>
                  </div>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-foreground">{t(`items.${id}.price`)}</span>
                    {period && <span className="text-muted-foreground">{period}</span>}
                  </div>
                  <ul className="space-y-3 mb-8 flex-grow">
                    {features.map(f => (
                      <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  {SELF_SERVE_PLANS.has(id) ? (
                    <a
                      href={APP_SIGNUP_URL}
                      className={`block w-full py-3 rounded-xl font-medium text-center transition-all ${
                        isHighlight ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-md warm-glow' : 'bg-secondary text-foreground hover:bg-amber-50'
                      }`}
                    >
                      {t(`items.${id}.cta`)}
                    </a>
                  ) : (
                    <DemoButton className="w-full py-3 rounded-xl font-medium transition-all bg-secondary text-foreground hover:bg-amber-50">
                      {t(`items.${id}.cta`)}
                    </DemoButton>
                  )}
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
