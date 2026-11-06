import { useTranslations } from 'next-intl';
import { FileCheck, Scale, Shield } from 'lucide-react';
import FadeIn from '../fade-in';
import SectionHeading from './section-heading';
import { richTags } from '../i18n/rich';

export default function LegalSection() {
  const t = useTranslations('legal');

  return (
    <section id="legal" className="py-24 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading badge={t('badge')} title={t.rich('title', richTags)} subtitle={t('subtitle')} />

        <FadeIn>
          <div className="max-w-3xl mx-auto bg-card rounded-2xl border border-border p-8 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <Scale className="w-5 h-5 text-amber-500" />
              <span className="text-sm font-semibold text-foreground">{t('cardTitle')}</span>
            </div>
            <p className="text-xs text-muted-foreground mb-4">{t('according')}</p>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">{t('p1')}</p>
            <blockquote className="border-l-4 border-amber-400 pl-4 py-2 mb-4">
              <p className="text-sm text-muted-foreground italic leading-relaxed mb-2">&ldquo;{t('quote1')}&rdquo;</p>
              <cite className="text-xs font-semibold text-foreground not-italic">— Malala Yousafzai</cite>
            </blockquote>
            <blockquote className="border-l-4 border-teal-400 pl-4 py-2 mb-6">
              <p className="text-sm text-muted-foreground italic leading-relaxed mb-2">&ldquo;{t('quote2')}&rdquo;</p>
              <cite className="text-xs font-semibold text-foreground not-italic">— Maria Teresa Eglér Mantoan</cite>
            </blockquote>
            <p className="text-sm text-muted-foreground leading-relaxed">{t('p2')}</p>
          </div>
        </FadeIn>

        <FadeIn>
          <div className="flex flex-wrap items-center justify-center gap-6 mt-12">
            <div className="flex items-center gap-2 text-sm">
              <Shield className="w-4 h-4 text-teal-600" />
              <span className="font-medium">{t('lgpd')}</span>
              <span className="text-muted-foreground">— {t('lgpdSub')}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <FileCheck className="w-4 h-4 text-teal-600" />
              <span className="font-medium">{t('evidence')}</span>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
