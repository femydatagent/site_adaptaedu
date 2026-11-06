import {
  ArrowRight,
  Brain,
  CheckCircle2,
  Waves,
  Hand,
  MessageCircle,
  School,
  HeartHandshake,
  type LucideIcon,
} from 'lucide-react';
import { useTranslations } from 'next-intl';
import FadeIn from './fade-in';
import { richTags } from './i18n/rich';
import { APP_SIGNUP_URL } from '@/lib/facts';

/**
 * Seção "AEE na prática": os quatro passos para adaptar uma atividade no
 * Atendimento Educacional Especializado. O texto fica em messages/<idioma>.json,
 * no namespace `aee`; aqui ficam só a ordem e os ícones.
 */

const BARRIER_ICONS: Record<string, LucideIcon> = {
  cognitiva: Brain,
  sensorial: Waves,
  motora: Hand,
  comunicacao: MessageCircle,
};

const ROLE_ICONS: Record<string, LucideIcon> = {
  comum: School,
  aee: HeartHandshake,
};

const STEP_IDS = ['aluno', 'barreira', 'adapte', 'junto'] as const;
type StepId = (typeof STEP_IDS)[number];

function Lista({ itens }: { itens: string[] }) {
  return (
    <ul className="space-y-2 mt-5">
      {itens.map(item => (
        <li key={item} className="flex items-start gap-2.5 text-sm text-foreground">
          <CheckCircle2 className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
          {item}
        </li>
      ))}
    </ul>
  );
}

function Barreiras() {
  const t = useTranslations('aee.barriers');
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-5">
      {Object.entries(BARRIER_ICONS).map(([id, Icon]) => (
        <li
          key={id}
          className="flex items-start gap-3 p-4 rounded-xl border border-border bg-card hover:border-amber-300 hover:shadow-sm transition-all"
        >
          <div className="w-9 h-9 rounded-lg bg-amber-100 flex items-center justify-center flex-shrink-0">
            <Icon className="w-4 h-4 text-amber-700" aria-hidden="true" />
          </div>
          <div>
            <p className="font-semibold text-sm text-foreground">{t(`${id}.name`)}</p>
            <p className="text-sm text-muted-foreground leading-snug">{t(`${id}.sign`)}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

function Papeis() {
  const t = useTranslations('aee.roles');
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-5">
      {Object.entries(ROLE_ICONS).map(([id, Icon], i) => (
        <div
          key={id}
          className={`p-5 rounded-xl border ${i === 0 ? 'border-amber-200 bg-amber-50/70' : 'border-teal-200 bg-teal-50/70'}`}
        >
          <Icon className={`w-5 h-5 mb-3 ${i === 0 ? 'text-amber-600' : 'text-teal-600'}`} aria-hidden="true" />
          <p className="font-semibold text-sm text-foreground mb-1">{t(`${id}.who`)}</p>
          <p className="text-sm text-muted-foreground leading-relaxed">{t(`${id}.does`)}</p>
        </div>
      ))}
    </div>
  );
}

function StepDetail({ id, items }: { id: StepId; items: string[] | null }) {
  if (id === 'barreira') return <Barreiras />;
  if (id === 'junto') return <Papeis />;
  return items ? <Lista itens={items} /> : null;
}

export default function Aee() {
  const t = useTranslations('aee');

  return (
    <section
      id="aee"
      aria-labelledby="aee-titulo"
      className="py-24 md:py-32 bg-gradient-to-b from-amber-50/60 via-background to-background"
    >
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="inline-flex items-center justify-center rounded-md border font-medium mb-4 border-teal-500/30 bg-teal-500/10 text-teal-700 px-3 py-1 text-xs">
              {t('badge')}
            </span>
            <h2 id="aee-titulo" className="text-3xl md:text-4xl font-bold mb-4">
              {t.rich('title', richTags)}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('subtitle')}
            </p>
          </div>
        </FadeIn>

        <ol className="max-w-4xl mx-auto">
          {STEP_IDS.map((id, i) => {
            const ultimo = i === STEP_IDS.length - 1;
            const items = t.has(`steps.${id}.items`) ? (t.raw(`steps.${id}.items`) as string[]) : null;
            return (
              <li key={id} className="relative grid grid-cols-[auto_1fr] gap-x-5 md:gap-x-8">
                <FadeIn delay={0.05} className="relative flex flex-col items-center">
                  <span
                    aria-hidden="true"
                    className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 text-white font-bold text-lg md:text-xl flex items-center justify-center shadow-md warm-glow"
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </FadeIn>
                {!ultimo && (
                  <span
                    aria-hidden="true"
                    className="absolute left-6 md:left-7 top-14 md:top-16 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b from-amber-300 to-amber-100"
                  />
                )}
                <FadeIn delay={0.1} className={ultimo ? 'pb-0' : 'pb-14'}>
                  <p className="text-xs font-semibold uppercase tracking-wider text-amber-700 mb-1">
                    {t('stepLabel', { number: i + 1 })}
                  </p>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">{t(`steps.${id}.title`)}</h3>
                  <p className="text-muted-foreground leading-relaxed">{t(`steps.${id}.text`)}</p>
                  <StepDetail id={id} items={items} />
                </FadeIn>
              </li>
            );
          })}
        </ol>

        <FadeIn>
          <div className="max-w-4xl mx-auto mt-16 rounded-2xl bg-gradient-to-br from-stone-900 to-stone-800 text-white p-8 md:p-10 shadow-xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-amber-400 mb-3">{t('cta.eyebrow')}</p>
            <p className="text-xl md:text-2xl font-bold leading-snug mb-4">
              {t('cta.title')}
            </p>
            <p className="text-white/75 leading-relaxed mb-8 max-w-2xl">
              {t('cta.text')}
            </p>
            <a
              href={APP_SIGNUP_URL}
              className="inline-flex items-center gap-2 h-11 px-5 rounded-lg text-sm font-semibold bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-900"
            >
              {t('cta.button')} <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
