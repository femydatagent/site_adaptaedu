import {
  ArrowRight,
  Building2,
  Clock,
  GraduationCap,
  HeartPulse,
  TrendingDown,
  Unlink,
  User,
  UserMinus,
  type LucideIcon,
} from 'lucide-react';
import { useTranslations } from 'next-intl';
import FadeIn from './fade-in';
import DemoButton from './actions/demo-button';

/**
 * Seção da página "Para Escolas" sobre o custo da sobrecarga do professor:
 * o efeito dominó que vai da hora extra adaptando material até o prejuízo da
 * escola. O texto fica em messages/<idioma>.json (namespace `overload`); aqui
 * ficam só a ordem e os ícones.
 */

const DOMINO: { id: string; icon: LucideIcon }[] = [
  { id: 'sobrecarga', icon: Clock },
  { id: 'saude', icon: HeartPulse },
  { id: 'afastamento', icon: UserMinus },
  { id: 'ruptura', icon: Unlink },
  { id: 'prejuizo', icon: TrendingDown },
];

const LOSSES: { id: string; icon: LucideIcon }[] = [
  { id: 'professor', icon: User },
  { id: 'turma', icon: GraduationCap },
  { id: 'escola', icon: Building2 },
];

function EfeitoDomino() {
  const t = useTranslations('overload.domino');
  return (
    <ol className="grid grid-cols-1 lg:grid-cols-5 gap-3 lg:gap-0">
      {DOMINO.map((elo, i) => {
        const ultimo = i === DOMINO.length - 1;
        return (
          <li key={elo.id} className="relative">
            <FadeIn delay={i * 0.12} className="h-full">
              <div
                className={`h-full p-5 rounded-2xl lg:rounded-none border lg:border-y lg:border-l ${
                  ultimo
                    ? 'lg:rounded-r-2xl lg:border-r bg-rose-500/15 border-rose-400/40'
                    : 'bg-white/[0.04] border-white/10'
                } ${i === 0 ? 'lg:rounded-l-2xl' : ''}`}
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-mono text-white/40">{String(i + 1).padStart(2, '0')}</span>
                  <elo.icon
                    className={`w-4 h-4 ${ultimo ? 'text-rose-300' : 'text-amber-300'}`}
                    aria-hidden="true"
                  />
                </div>
                <h3 className={`font-bold mb-1.5 ${ultimo ? 'text-rose-200' : 'text-white'}`}>{t(`${elo.id}.title`)}</h3>
                <p className="text-sm text-white/65 leading-relaxed">{t(`${elo.id}.text`)}</p>
              </div>
            </FadeIn>
            {!ultimo && (
              <span
                aria-hidden="true"
                className="hidden lg:flex absolute top-1/2 -right-3 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-slate-900 border border-white/15 items-center justify-center"
              >
                <ArrowRight className="w-3 h-3 text-amber-300" />
              </span>
            )}
          </li>
        );
      })}
    </ol>
  );
}

function QuemPerde() {
  const t = useTranslations('overload');
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {LOSSES.map((p, i) => (
        <FadeIn key={p.id} delay={i * 0.1} className="h-full">
          <div
            className={`h-full p-6 rounded-2xl border ${
              i === LOSSES.length - 1 ? 'border-amber-400/40 bg-amber-400/10' : 'border-white/10 bg-white/[0.03]'
            }`}
          >
            <p.icon className="w-5 h-5 text-amber-300 mb-3" aria-hidden="true" />
            <h3 className="font-bold text-white mb-3">{t('losesSuffix', { who: t(`losses.${p.id}.who`) })}</h3>
            <ul className="space-y-1.5">
              {(t.raw(`losses.${p.id}.items`) as string[]).map(item => (
                <li key={item} className="text-sm text-white/70 leading-relaxed flex gap-2">
                  <span aria-hidden="true" className="text-amber-300/70">—</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      ))}
    </div>
  );
}

export default function EscolasSobrecarga() {
  const t = useTranslations('overload');
  return (
    <section
      aria-labelledby="sobrecarga-titulo"
      className="relative py-20 md:py-28 bg-slate-950 text-white overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[48rem] h-[24rem] bg-amber-500/10 rounded-full blur-3xl pointer-events-none"
      />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="max-w-3xl mb-14">
            <p className="text-xs font-semibold uppercase tracking-wider text-amber-300 mb-4">
              {t('eyebrow')}
            </p>
            <h2 id="sobrecarga-titulo" className="text-3xl sm:text-5xl font-bold leading-tight mb-6">
              {t('title')}
            </h2>
            <p className="text-lg text-white/70 leading-relaxed">
              {t.rich('subtitle', { strong: chunks => <span className="text-white font-medium">{chunks}</span> })}
            </p>
          </div>
        </FadeIn>

        <FadeIn>
          <p className="text-sm font-semibold text-white/50 mb-4">{t('dominoTitle')}</p>
        </FadeIn>
        <EfeitoDomino />

        <div className="mt-16 mb-14">
          <FadeIn>
            <p className="text-sm font-semibold text-white/50 mb-4">{t('lossesTitle')}</p>
          </FadeIn>
          <QuemPerde />
        </div>

        <FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 items-center p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-teal-500 to-emerald-600">
            <div>
              <p className="text-2xl sm:text-3xl font-bold leading-snug mb-3">
                {t('ctaTitle')}
              </p>
              <p className="text-white/90 leading-relaxed max-w-2xl">
                {t('ctaText')}
              </p>
            </div>
            <DemoButton
              className="w-full lg:w-auto px-7 py-4 text-base font-semibold bg-white text-teal-700 rounded-xl shadow-lg hover:shadow-xl hover:bg-teal-50 transition-all inline-flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-teal-600"
            >
              {t('ctaButton')} <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </DemoButton>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
