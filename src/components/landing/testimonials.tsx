import { useTranslations } from 'next-intl';
import { Quote } from 'lucide-react';
import FadeIn from '../fade-in';
import SectionHeading from './section-heading';
import { richTags } from '../i18n/rich';

type Depoimento = {
  /** Parágrafos do depoimento, na fala da pessoa. */
  texto: string[];
  nome: string;
  iniciais: string;
  papel: string;
  /** Trecho em destaque, usado só no depoimento principal. */
  destaque?: string;
};

type Stat = { value: string; label: string };

function Autor({ t }: { t: Depoimento }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
        {t.iniciais}
      </div>
      <div>
        <p className="text-sm font-semibold text-foreground">{t.nome}</p>
        <p className="text-xs text-muted-foreground">{t.papel}</p>
      </div>
    </div>
  );
}

export function Stats() {
  const t = useTranslations();
  const stats = t.raw('stats') as Stat[];

  return (
    <section className="py-16 bg-gradient-to-r from-amber-500 to-orange-500">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
          {stats.map((stat, i) => (
            <FadeIn key={stat.label} delay={i * 0.1}>
              <div>
                <p className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</p>
                <p className="text-sm text-white/80">{stat.label}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Depoimentos reais. Fora do português, levam o aviso de que foram traduzidos. */
export default function Testimonials() {
  const t = useTranslations('testimonials');
  // O primeiro item é o depoimento principal, exibido em largura total.
  const [principal, ...outros] = t.raw('items') as Depoimento[];
  const translatedNote = t.has('translatedNote') ? t('translatedNote') : null;

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading badge={t('badge')} title={t.rich('title', richTags)} subtitle={t('subtitle')} />

        <FadeIn>
          <figure className="relative overflow-hidden rounded-2xl border border-amber-200 bg-gradient-to-br from-amber-50 via-card to-card p-8 md:p-10 mb-6 grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-8 lg:gap-12">
            <div className="flex flex-col">
              <Quote className="w-10 h-10 text-amber-400 mb-5 flex-shrink-0" aria-hidden="true" />
              <p className="text-2xl md:text-3xl font-bold leading-snug text-foreground mb-8 flex-grow">
                “{principal.destaque}”
              </p>
              <figcaption>
                <Autor t={principal} />
              </figcaption>
            </div>
            <blockquote className="space-y-4 text-sm md:text-base text-muted-foreground leading-relaxed lg:border-l lg:border-amber-200 lg:pl-12">
              {principal.texto.map(paragrafo => (
                <p key={paragrafo}>{paragrafo}</p>
              ))}
            </blockquote>
          </figure>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {outros.map((d, i) => (
            <FadeIn key={d.nome} delay={i * 0.1} className="h-full">
              <figure className="p-6 rounded-xl border border-border bg-card h-full flex flex-col hover:border-amber-200 hover:shadow-md transition-all">
                <Quote className="w-7 h-7 text-amber-300 mb-4 flex-shrink-0" aria-hidden="true" />
                <blockquote className="space-y-3 text-sm text-muted-foreground leading-relaxed flex-grow mb-6">
                  {d.texto.map(paragrafo => (
                    <p key={paragrafo}>{paragrafo}</p>
                  ))}
                </blockquote>
                <figcaption className="pt-4 border-t border-border">
                  <Autor t={d} />
                </figcaption>
              </figure>
            </FadeIn>
          ))}
        </div>

        {translatedNote && <p className="mt-8 text-center text-xs text-muted-foreground italic">{translatedNote}</p>}
      </div>
    </section>
  );
}
