'use client';

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
import FadeIn from './fade-in';

/**
 * Seção "AEE na prática": os quatro passos para adaptar uma atividade no
 * Atendimento Educacional Especializado. O conteúdo fica nas constantes abaixo
 * — é o único lugar a editar o texto.
 */

const APP_SIGNUP_URL = 'https://app.adaptaedu.com/auth/sign-up';

type Barreira = {
  nome: string;
  sinal: string;
  icon: LucideIcon;
};

const barreiras: Barreira[] = [
  { nome: 'Cognitiva', sinal: 'Há dificuldade para entender o conteúdo ou o que se pede.', icon: Brain },
  { nome: 'Sensorial', sinal: 'Materiais ou estímulos incomodam ou impedem.', icon: Waves },
  { nome: 'Motora', sinal: 'Escrever, segurar ou manusear é difícil.', icon: Hand },
  { nome: 'De comunicação', sinal: 'Ele sabe a resposta, mas não consegue expressá-la.', icon: MessageCircle },
];

type Papel = {
  quem: string;
  faz: string;
  icon: LucideIcon;
};

const papeis: Papel[] = [
  {
    quem: 'Professor da sala comum',
    faz: 'Conduz a aula e adapta o conteúdo da turma.',
    icon: School,
  },
  {
    quem: 'Professor do AEE',
    faz: 'Atua nos bastidores e no contraturno: orienta, produz materiais acessíveis e sugere estratégias.',
    icon: HeartHandshake,
  },
];

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
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-5">
      {barreiras.map(b => (
        <li
          key={b.nome}
          className="flex items-start gap-3 p-4 rounded-xl border border-border bg-card hover:border-amber-300 hover:shadow-sm transition-all"
        >
          <div className="w-9 h-9 rounded-lg bg-amber-100 flex items-center justify-center flex-shrink-0">
            <b.icon className="w-4 h-4 text-amber-700" aria-hidden="true" />
          </div>
          <div>
            <p className="font-semibold text-sm text-foreground">{b.nome}</p>
            <p className="text-sm text-muted-foreground leading-snug">{b.sinal}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

function Papeis() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-5">
      {papeis.map((p, i) => (
        <div
          key={p.quem}
          className={`p-5 rounded-xl border ${i === 0 ? 'border-amber-200 bg-amber-50/70' : 'border-teal-200 bg-teal-50/70'}`}
        >
          <p.icon className={`w-5 h-5 mb-3 ${i === 0 ? 'text-amber-600' : 'text-teal-600'}`} aria-hidden="true" />
          <p className="font-semibold text-sm text-foreground mb-1">{p.quem}</p>
          <p className="text-sm text-muted-foreground leading-relaxed">{p.faz}</p>
        </div>
      ))}
    </div>
  );
}

type Passo = {
  titulo: string;
  texto: string;
  detalhe: React.ReactNode;
};

const passos: Passo[] = [
  {
    titulo: 'Comece pelo aluno, não pela atividade',
    texto:
      'Antes de mexer em qualquer folha, olhe para quem vai recebê-la. A adaptação certa nasce das respostas a três perguntas:',
    detalhe: (
      <Lista
        itens={[
          'O que ele já faz com autonomia?',
          'Quais habilidades ainda estão em construção?',
          'De que forma ele aprende melhor?',
        ]}
      />
    ),
  },
  {
    titulo: 'Dê nome à barreira',
    texto:
      'Quando a atividade não funciona, quase nunca o problema é o aluno — é algo no caminho entre ele e o conteúdo. E cada barreira pede uma resposta diferente.',
    detalhe: <Barreiras />,
  },
  {
    titulo: 'Adapte sem perder o significado',
    texto:
      'Menos questões, enunciados mais diretos, outro formato: tudo vale, desde que o objetivo pedagógico continue lá. Adaptar é mudar o caminho, nunca o destino.',
    detalhe: (
      <Lista
        itens={[
          'Reduza a quantidade ou a complexidade — nunca o objetivo essencial.',
          'Use apoios visuais e materiais concretos.',
          'Conte com tecnologia assistiva: teclados adaptados, mouses especiais, softwares de leitura.',
        ]}
      />
    ),
  },
  {
    titulo: 'Faça junto',
    texto: 'Inclusão não é tarefa de uma pessoa só. Cada professor tem seu papel — e é a parceria que faz o aluno avançar.',
    detalhe: <Papeis />,
  },
];

export default function Aee() {
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
              Atendimento Educacional Especializado
            </span>
            <h2 id="aee-titulo" className="text-3xl md:text-4xl font-bold mb-4">
              Adaptar não é facilitar. <span className="text-gradient-warm">É abrir caminho.</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              O AEE existe para que todo estudante tenha acesso ao que a turma inteira aprende. Mas, na correria da
              semana, fica a pergunta: por onde começar? Aqui estão os quatro passos que fazem uma adaptação dar certo.
            </p>
          </div>
        </FadeIn>

        <ol className="max-w-4xl mx-auto">
          {passos.map((passo, i) => {
            const ultimo = i === passos.length - 1;
            return (
              <li key={passo.titulo} className="relative grid grid-cols-[auto_1fr] gap-x-5 md:gap-x-8">
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
                    Passo {i + 1}
                  </p>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">{passo.titulo}</h3>
                  <p className="text-muted-foreground leading-relaxed">{passo.texto}</p>
                  {passo.detalhe}
                </FadeIn>
              </li>
            );
          })}
        </ol>

        <FadeIn>
          <div className="max-w-4xl mx-auto mt-16 rounded-2xl bg-gradient-to-br from-stone-900 to-stone-800 text-white p-8 md:p-10 shadow-xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-amber-400 mb-3">Onde o AdaptaEDU entra</p>
            <p className="text-xl md:text-2xl font-bold leading-snug mb-4">
              O passo 3 é o que mais consome tempo. Deixe esse com a gente.
            </p>
            <p className="text-white/75 leading-relaxed mb-8 max-w-2xl">
              Envie o material, escolha o perfil do aluno e receba a versão adaptada — com o objetivo pedagógico
              preservado — em minutos. Sobra tempo para o que nenhuma IA substitui: conhecer o aluno e planejar junto.
            </p>
            <a
              href={APP_SIGNUP_URL}
              className="inline-flex items-center gap-2 h-11 px-5 rounded-lg text-sm font-semibold bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-900"
            >
              Adaptar meu primeiro material <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
