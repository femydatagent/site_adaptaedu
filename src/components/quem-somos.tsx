'use client';

import { Eye, Target, Quote } from 'lucide-react';
import FadeIn from './fade-in';

/**
 * Seção "Quem somos": missão, visão e as pessoas por trás do AdaptaEDU.
 *
 * Os dados ficam em `equipe` abaixo — é o único lugar a editar. Cada pessoa só
 * aparece quando tem conteúdo de verdade, então publicar antes de a biografia
 * ficar pronta mostra a seção íntegra, sem cartão pela metade.
 */

type Pessoa = {
  nome: string;
  /** Cargo ou papel. Ex.: 'Fundadora e CEO'. */
  cargo: string;
  /** Formação e atuação, uma linha. Ex.: 'Pedagoga, especialista em AEE'. */
  credencial: string;
  /** Parágrafos da biografia. Cada item vira um parágrafo. */
  bio: string[];
  /** Frase da pessoa, opcional — aparece destacada ao final. */
  citacao?: string;
  /**
   * Retrato em /public/equipe. Hoje aponta para um SVG provisório com as
   * iniciais — para usar a foto real, basta substituir o arquivo mantendo o
   * nome, ou apontar para o novo caminho aqui. Sem foto, cai nas iniciais.
   */
  foto?: string;
  /** Perfil público, opcional. */
  linkedin?: string;
  /** Cor do avatar de iniciais, quando não há foto. */
  tom: 'teal' | 'amber';
};

const equipe: Pessoa[] = [
  {
    nome: 'Andrea Gonçalves Monteiro',
    cargo: '',
    credencial: '',
    bio: [],
    citacao: '',
    foto: '/equipe/andrea.svg',
    linkedin: '',
    tom: 'teal',
  },
  {
    nome: 'Fernando Outa',
    cargo: 'CPO e Co-fundador da MyDataAgent',
    credencial: 'Python, IA generativa e automação',
    bio: [
      'Especializou-se em inteligência artificial no Canadá, em 2017. Dois anos depois fundou a Bettrads, hub de IA generativa cujos resultados superaram benchmarks do GPT-3.',
      'Hoje é CPO e co-fundador da MyDataAgent, primeira plataforma brasileira de agentes autônomos de IA. É dele a engenharia que faz a adaptação de um material acontecer em minutos — e continuar acontecendo quando são milhares deles.',
    ],
    citacao: '',
    foto: '/equipe/fernando.svg',
    linkedin: '',
    tom: 'amber',
  },
];

const avatarPorTom = {
  teal: 'bg-gradient-to-br from-teal-500 to-teal-700',
  amber: 'bg-gradient-to-br from-amber-500 to-orange-600',
} as const;

/** Iniciais do primeiro e do último nome, ignorando partículas ("de", "da"). */
function iniciaisDe(nome: string): string {
  const partes = nome.split(' ').filter(parte => parte.length > 2);
  return [partes.at(0), partes.at(-1)]
    .filter((parte): parte is string => Boolean(parte))
    .map(parte => parte[0])
    .join('');
}

function temConteudo(pessoa: Pessoa): boolean {
  return Boolean(pessoa.cargo || pessoa.credencial || pessoa.bio.length > 0);
}

function CartaoPessoa({ pessoa }: { pessoa: Pessoa }) {
  return (
    <div className="h-full rounded-2xl bg-card border border-border shadow-sm p-8">
      <div className="flex items-center gap-5 mb-6">
        {pessoa.foto ? (
          <img
            src={pessoa.foto}
            alt={`Retrato de ${pessoa.nome}`}
            width={80}
            height={80}
            className="w-20 h-20 rounded-2xl object-cover border border-border flex-shrink-0"
          />
        ) : (
          <div
            aria-hidden="true"
            className={`w-20 h-20 rounded-2xl flex-shrink-0 text-white flex items-center justify-center text-2xl font-bold ${avatarPorTom[pessoa.tom]}`}
          >
            {iniciaisDe(pessoa.nome)}
          </div>
        )}

        <div className="min-w-0">
          <h4 className="text-xl font-bold text-foreground leading-tight">{pessoa.nome}</h4>
          {pessoa.cargo && (
            <p className="text-sm font-semibold text-amber-600 mt-1">{pessoa.cargo}</p>
          )}
          {pessoa.credencial && (
            <p className="text-sm text-muted-foreground mt-0.5">{pessoa.credencial}</p>
          )}
        </div>
      </div>

      {pessoa.bio.length > 0 && (
        <div className="space-y-3">
          {pessoa.bio.map((paragrafo, i) => (
            <p key={i} className="text-sm text-muted-foreground leading-relaxed">
              {paragrafo}
            </p>
          ))}
        </div>
      )}

      {pessoa.citacao && (
        <blockquote className="mt-5 border-l-4 border-amber-400 pl-4 py-1">
          <Quote className="w-4 h-4 text-amber-500 mb-1" aria-hidden="true" />
          <p className="text-sm text-muted-foreground italic leading-relaxed">{pessoa.citacao}</p>
        </blockquote>
      )}

      {pessoa.linkedin && (
        <a
          href={pessoa.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 mt-5 text-sm font-medium text-teal-700 hover:text-teal-800 underline underline-offset-4"
        >
          Perfil no LinkedIn
        </a>
      )}
    </div>
  );
}

export default function QuemSomos() {
  const pessoasVisiveis = equipe.filter(temConteudo);

  return (
    <section id="quem-somos" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="inline-flex items-center justify-center rounded-md border font-medium mb-4 border-teal-500/30 bg-teal-500/10 text-teal-700 px-3 py-1 text-xs">
              Quem somos
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nascemos de uma <span className="text-gradient-warm">sala de aula</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              O AdaptaEDU existe porque adaptar material para cada aluno é trabalhoso demais para
              caber na rotina de um professor — e importante demais para ficar de fora dela.
            </p>
          </div>
        </FadeIn>

        {/* Missão e visão: tratamento visual distinto entre si, não dois cartões iguais */}
        <div className="grid md:grid-cols-2 gap-6 mb-20 max-w-5xl mx-auto">
          <FadeIn direction="right">
            <div className="h-full rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 p-8 text-white shadow-lg">
              <Target className="w-7 h-7 mb-4 opacity-90" aria-hidden="true" />
              <h3 className="text-xl font-bold mb-3">Missão</h3>
              <p className="leading-relaxed text-amber-50">
                Colocar material pedagógico acessível nas mãos de todo professor, em minutos — para
                que a adaptação deixe de depender do tempo que ninguém tem e passe a ser parte
                natural do preparo da aula.
              </p>
            </div>
          </FadeIn>

          <FadeIn direction="left">
            <div className="h-full rounded-2xl bg-card border border-border p-8 shadow-sm">
              <Eye className="w-7 h-7 mb-4 text-teal-600" aria-hidden="true" />
              <h3 className="text-xl font-bold mb-3 text-foreground">Visão</h3>
              <p className="leading-relaxed text-muted-foreground">
                Uma escola em que nenhum aluno fica de fora da aula por falta de material adequado
                ao seu jeito de aprender — e em que a acessibilidade é rotina, não exceção.
              </p>
            </div>
          </FadeIn>
        </div>

        {pessoasVisiveis.length > 0 && (
          <FadeIn>
            <div className="max-w-5xl mx-auto">
              <h3 className="text-center text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-8">
                Quem está por trás
              </h3>
              <div
                className={`grid gap-6 ${pessoasVisiveis.length > 1 ? 'md:grid-cols-2' : 'max-w-2xl mx-auto'}`}
              >
                {pessoasVisiveis.map(pessoa => (
                  <CartaoPessoa key={pessoa.nome} pessoa={pessoa} />
                ))}
              </div>
            </div>
          </FadeIn>
        )}
      </div>
    </section>
  );
}
