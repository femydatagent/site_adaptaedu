'use client';

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
import FadeIn from './fade-in';

/**
 * Seção da página "Para Escolas" sobre o custo da sobrecarga do professor:
 * o efeito dominó que vai da hora extra adaptando material até o prejuízo da
 * escola. O texto fica nas constantes abaixo — é o único lugar a editar.
 */

type Elo = {
  titulo: string;
  texto: string;
  icon: LucideIcon;
};

const efeitoDomino: Elo[] = [
  {
    titulo: 'Sobrecarga',
    texto: 'Noites e fins de semana adaptando atividade por atividade, aluno por aluno.',
    icon: Clock,
  },
  {
    titulo: 'Saúde',
    texto: 'O cansaço vira exaustão. A exaustão vira ansiedade, insônia, burnout.',
    icon: HeartPulse,
  },
  {
    titulo: 'Afastamento',
    texto: 'Chegam os atestados, as licenças — e, às vezes, o pedido de demissão.',
    icon: UserMinus,
  },
  {
    titulo: 'Ruptura',
    texto: 'A turma perde a referência. O aluno perde quem conhecia o jeito dele de aprender.',
    icon: Unlink,
  },
  {
    titulo: 'Prejuízo',
    texto: 'Substituto, cobertura, recrutamento, treinamento — e famílias que percebem.',
    icon: TrendingDown,
  },
];

type Perda = {
  quem: string;
  perde: string[];
  icon: LucideIcon;
};

const perdas: Perda[] = [
  {
    quem: 'O professor',
    perde: ['A saúde', 'A motivação', 'A carreira que escolheu'],
    icon: User,
  },
  {
    quem: 'O aluno e a turma',
    perde: ['O vínculo construído', 'A continuidade do plano de ensino', 'O progresso conquistado no AEE'],
    icon: GraduationCap,
  },
  {
    quem: 'A escola',
    perde: [
      'O custo de substituir e de repor quem sai',
      'O conhecimento que vai embora com o professor',
      'A confiança das famílias — e, no fim, matrículas',
    ],
    icon: Building2,
  },
];

function EfeitoDomino() {
  return (
    <ol className="grid grid-cols-1 lg:grid-cols-5 gap-3 lg:gap-0">
      {efeitoDomino.map((elo, i) => {
        const ultimo = i === efeitoDomino.length - 1;
        return (
          <li key={elo.titulo} className="relative">
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
                <h3 className={`font-bold mb-1.5 ${ultimo ? 'text-rose-200' : 'text-white'}`}>{elo.titulo}</h3>
                <p className="text-sm text-white/65 leading-relaxed">{elo.texto}</p>
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
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {perdas.map((p, i) => (
        <FadeIn key={p.quem} delay={i * 0.1} className="h-full">
          <div
            className={`h-full p-6 rounded-2xl border ${
              i === perdas.length - 1 ? 'border-amber-400/40 bg-amber-400/10' : 'border-white/10 bg-white/[0.03]'
            }`}
          >
            <p.icon className="w-5 h-5 text-amber-300 mb-3" aria-hidden="true" />
            <h3 className="font-bold text-white mb-3">{p.quem} perde</h3>
            <ul className="space-y-1.5">
              {p.perde.map(item => (
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

export default function EscolasSobrecarga({ onAgendarDemo }: { onAgendarDemo: () => void }) {
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
              O custo que não aparece na planilha
            </p>
            <h2 id="sobrecarga-titulo" className="text-3xl sm:text-5xl font-bold leading-tight mb-6">
              Professor sobrecarregado não é um problema só do professor.
            </h2>
            <p className="text-lg text-white/70 leading-relaxed">
              Toda escola inclusiva precisa de material adaptado. Quando essa conta cai inteira no colo do professor —
              depois da aula, depois de corrigir provas, no domingo à noite — ela não fica só com ele.{' '}
              <span className="text-white font-medium">Ela se espalha pela escola inteira.</span>
            </p>
          </div>
        </FadeIn>

        <FadeIn>
          <p className="text-sm font-semibold text-white/50 mb-4">O efeito dominó</p>
        </FadeIn>
        <EfeitoDomino />

        <div className="mt-16 mb-14">
          <FadeIn>
            <p className="text-sm font-semibold text-white/50 mb-4">Quando um professor adoece, todo mundo perde</p>
          </FadeIn>
          <QuemPerde />
        </div>

        <FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 items-center p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-teal-500 to-emerald-600">
            <div>
              <p className="text-2xl sm:text-3xl font-bold leading-snug mb-3">
                Cuidar do professor é cuidar da escola — e do caixa.
              </p>
              <p className="text-white/90 leading-relaxed max-w-2xl">
                O AdaptaEDU tira das costas da equipe a parte mais repetitiva da inclusão: transformar cada material em
                versões acessíveis para cada perfil de aluno. O professor continua no comando pedagógico — só que sem
                levar trabalho para casa.
              </p>
            </div>
            <button
              type="button"
              onClick={onAgendarDemo}
              className="w-full lg:w-auto px-7 py-4 text-base font-semibold bg-white text-teal-700 rounded-xl shadow-lg hover:shadow-xl hover:bg-teal-50 transition-all inline-flex items-center justify-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-teal-600"
            >
              Agendar demonstração <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
