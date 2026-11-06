import { useTranslations } from 'next-intl';
import { BarChart3, Building2, CheckCircle2, Layers, School, Shield, Sparkles, Users } from 'lucide-react';
import FadeIn from '../fade-in';
import DemoButton from '../actions/demo-button';
import SectionHeading from './section-heading';
import { highlightTag, richTags } from '../i18n/rich';
import { Link } from '@/i18n/navigation';

/** Visual dos três públicos, na ordem de `schoolsSection.types`. */
const TYPE_STYLE = [
  { icon: Building2, color: 'from-amber-400 to-orange-500', border: 'border-amber-200' },
  { icon: School, color: 'from-teal-400 to-emerald-500', border: 'border-teal-200' },
  { icon: Users, color: 'from-violet-400 to-purple-500', border: 'border-violet-200' },
];
const CTA_FEATURE_ICONS = [Users, Shield, Layers, BarChart3];

type SchoolType = { title: string; desc: string; features: string[] };

export default function SchoolsSection() {
  const t = useTranslations('schoolsSection');
  const types = t.raw('types') as SchoolType[];
  const ctaFeatures = t.raw('cta.features') as string[];

  return (
    <section id="escolas" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading badge={t('badge')} tone="teal" title={t.rich('title', richTags)} subtitle={t('subtitle')} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {types.map((st, i) => {
            const style = TYPE_STYLE[i];
            return (
              <FadeIn key={st.title} delay={i * 0.1}>
                <div className={`relative rounded-2xl border ${style.border} bg-card hover:shadow-xl transition-all duration-300 h-full flex flex-col overflow-hidden group`}>
                  <div className={`h-1.5 w-full bg-gradient-to-r ${style.color}`} />
                  <div className="p-7 flex flex-col flex-1">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${style.color} flex items-center justify-center mb-5 shadow-md group-hover:scale-105 transition-transform`}>
                      <style.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="font-bold text-xl text-foreground mb-3">{st.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-6">{st.desc}</p>
                    <ul className="space-y-2.5 mt-auto">
                      {st.features.map(f => (
                        <li key={f} className="flex items-center gap-2.5 text-sm text-foreground">
                          <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${style.color} flex items-center justify-center flex-shrink-0`}>
                            <CheckCircle2 className="w-3 h-3 text-white" />
                          </div>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>

        <FadeIn>
          <div className="relative overflow-hidden bg-gradient-to-br from-teal-700 via-teal-600 to-emerald-600 rounded-2xl p-8 md:p-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="relative flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1 text-center md:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/15 rounded-full text-white/90 text-xs font-medium mb-4">
                  <Building2 className="w-3.5 h-3.5" />
                  {t('cta.eyebrow')}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight">
                  {t.rich('cta.title', { hl: highlightTag('text-amber-300') })}
                </h3>
                <p className="text-teal-100 text-sm leading-relaxed mb-6 max-w-md">{t('cta.desc')}</p>
                <div className="grid grid-cols-2 gap-3 max-w-sm mx-auto md:mx-0">
                  {ctaFeatures.map((f, i) => {
                    const Icon = CTA_FEATURE_ICONS[i];
                    return (
                      <div key={f} className="flex items-center gap-2">
                        <Icon className="w-4 h-4 text-amber-300 flex-shrink-0" />
                        <span className="text-xs text-teal-100">{f}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="flex flex-col items-center gap-3 flex-shrink-0">
                <Link
                  href="/escolas"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-teal-700 font-bold text-base shadow-lg hover:bg-amber-50 transition-all hover:scale-105"
                >
                  <Building2 className="w-5 h-5" />
                  {t('cta.seeSolution')}
                </Link>
                <DemoButton className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-teal-900 font-semibold text-sm transition-all">
                  <Sparkles className="w-4 h-4" />
                  {t('cta.scheduleDemo')}
                </DemoButton>
                <p className="text-teal-200 text-xs">{t('cta.note')}</p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
