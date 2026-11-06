import { useTranslations } from 'next-intl';
import { ChevronRight } from 'lucide-react';
import FadeIn from '../fade-in';
import SectionHeading from './section-heading';
import { richTags } from '../i18n/rich';
import type { FaqItem } from '@/lib/structured-data';

/**
 * Perguntas frequentes, em respostas curtas e autossuficientes — o formato que
 * buscadores e assistentes de IA citam. O mesmo texto alimenta o FAQPage do
 * JSON-LD da home (src/app/[locale]/page.tsx), então os dois nunca divergem.
 */
export default function Faq() {
  const t = useTranslations('faq');
  const items = t.raw('items') as FaqItem[];

  return (
    <section id="faq" aria-labelledby="faq-titulo" className="py-20 bg-muted/30">
      <div className="max-w-3xl mx-auto px-6">
        <SectionHeading id="faq-titulo" badge={t('badge')} title={t.rich('title', richTags)} className="mb-12" />
        <div className="space-y-4">
          {items.map((item, i) => (
            <FadeIn key={item.q} delay={i * 0.05}>
              <details className="group bg-card border border-border rounded-xl overflow-hidden">
                <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer font-semibold text-foreground text-sm list-none hover:bg-muted/50 transition-colors">
                  <h3>{item.q}</h3>
                  <ChevronRight className="w-4 h-4 text-muted-foreground flex-shrink-0 group-open:rotate-90 transition-transform" aria-hidden="true" />
                </summary>
                <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed border-t border-border pt-4">
                  <p>{item.a}</p>
                </div>
              </details>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
