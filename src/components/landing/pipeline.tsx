import { useTranslations } from 'next-intl';
import { Download, FileText, Merge, Search, Sparkles, Upload, Wand2 } from 'lucide-react';
import FadeIn from '../fade-in';
import SectionHeading from './section-heading';
import { richTags } from '../i18n/rich';

/** Ícones das 7 etapas, na mesma ordem de `pipeline.steps` nas mensagens. */
const STEP_ICONS = [Upload, Search, Merge, Wand2, FileText, Sparkles, Download];

type Step = { label: string; desc: string };

export default function Pipeline() {
  const t = useTranslations('pipeline');
  const steps = (t.raw('steps') as Step[]).map((step, i) => ({ ...step, icon: STEP_ICONS[i] }));

  return (
    <section id="pipeline" className="relative py-24 md:py-32 bg-pattern-grid">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading badge={t('badge')} title={t.rich('title', richTags)} subtitle={t('subtitle')} />

        {/* Desktop: etapas na horizontal */}
        <ol className="hidden md:grid grid-cols-7 gap-4">
          {steps.map((step, i) => (
            <li key={step.label}>
              <FadeIn delay={i * 0.08}>
                <div className="relative flex flex-col items-center text-center">
                  <div className="relative z-10 w-14 h-14 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg mb-4">
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-6 h-6 bg-white border-2 border-amber-400 rounded-full flex items-center justify-center text-xs font-bold text-amber-600 z-20">
                    {i + 1}
                  </span>
                  <h3 className="font-bold text-sm mb-1">{step.label}</h3>
                  <p className="text-xs text-muted-foreground">{step.desc}</p>
                </div>
              </FadeIn>
            </li>
          ))}
        </ol>

        {/* Mobile: empilhadas */}
        <ol className="md:hidden space-y-4">
          {steps.map((step, i) => (
            <li key={step.label}>
              <FadeIn delay={i * 0.05}>
                <div className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border">
                  <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <step.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm">{step.label}</h3>
                    <p className="text-xs text-muted-foreground">{step.desc}</p>
                  </div>
                </div>
              </FadeIn>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
