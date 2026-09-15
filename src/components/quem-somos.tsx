'use client';

import { Eye, Target, Quote } from 'lucide-react';
import FadeIn from './fade-in';

/**
 * Seção "Quem somos": missão, visão e a fundadora.
 *
 * Os dados da Andrea ficam em `fundadora` abaixo — é o único lugar a editar.
 * Campos de texto vazios simplesmente não são renderizados, então a seção
 * continua correta enquanto a biografia não estiver pronta.
 */

const fundadora = {
  nome: 'Andrea Gonçalves Monteiro',

  /** Cargo ou papel. Ex.: 'Fundadora e CEO'. */
  cargo: '',

  /** Formação e atuação, uma linha. Ex.: 'Pedagoga, especialista em AEE'. */
  credencial: '',

  /** Parágrafos da biografia. Cada item vira um parágrafo. */
  bio: [] as string[],

  /** Frase dela, opcional — aparece destacada ao final. */
  citacao: '',

  /** Foto em /public. Ex.: '/andrea.jpg'. Sem foto, mostra as iniciais. */
  foto: '',

  /** Perfil público, opcional. Ex.: 'https://linkedin.com/in/...'. */
  linkedin: '',
};

/** Iniciais do primeiro e do último nome, ignorando partículas ("de", "da"). */
const partesDoNome = fundadora.nome.split(' ').filter(parte => parte.length > 2);
const iniciais = [partesDoNome.at(0), partesDoNome.at(-1)]
  .filter(Boolean)
  .map(parte => parte![0])
  .join('');

const temBio = fundadora.bio.length > 0;

/**
 * O bloco da fundadora só aparece quando há conteúdo de verdade. Sem isso,
 * publicar antes de preencher mostraria um cartão com apenas um nome solto.
 */
const temFundadora = Boolean(fundadora.cargo || fundadora.credencial || temBio);

export default function QuemSomos() {
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

        {/* Missão e visão: dois painéis com tratamento distinto, não um grid uniforme */}
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

        {/* Fundadora */}
        {temFundadora && (
        <FadeIn>
          <div className="max-w-4xl mx-auto">
            <div className="rounded-2xl bg-card border border-border shadow-sm overflow-hidden">
              <div className="grid sm:grid-cols-[auto_1fr] gap-8 p-8 sm:p-10">
                <div className="flex sm:block justify-center">
                  {fundadora.foto ? (
                    <img
                      src={fundadora.foto}
                      alt={`Retrato de ${fundadora.nome}`}
                      width={128}
                      height={128}
                      className="w-32 h-32 rounded-2xl object-cover border border-border"
                    />
                  ) : (
                    <div
                      aria-hidden="true"
                      className="w-32 h-32 rounded-2xl bg-gradient-to-br from-teal-500 to-teal-700 text-white flex items-center justify-center text-4xl font-bold"
                    >
                      {iniciais}
                    </div>
                  )}
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-foreground">{fundadora.nome}</h3>

                  {fundadora.cargo && (
                    <p className="text-sm font-semibold text-amber-600 mt-1">{fundadora.cargo}</p>
                  )}

                  {fundadora.credencial && (
                    <p className="text-sm text-muted-foreground mt-1">{fundadora.credencial}</p>
                  )}

                  {temBio && (
                    <div className="mt-5 space-y-4">
                      {fundadora.bio.map((paragrafo, i) => (
                        <p key={i} className="text-sm md:text-[15px] text-muted-foreground leading-relaxed">
                          {paragrafo}
                        </p>
                      ))}
                    </div>
                  )}

                  {fundadora.citacao && (
                    <blockquote className="mt-6 border-l-4 border-amber-400 pl-4 py-1">
                      <Quote className="w-4 h-4 text-amber-500 mb-1" aria-hidden="true" />
                      <p className="text-sm text-muted-foreground italic leading-relaxed">
                        {fundadora.citacao}
                      </p>
                    </blockquote>
                  )}

                  {fundadora.linkedin && (
                    <a
                      href={fundadora.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 mt-5 text-sm font-medium text-teal-700 hover:text-teal-800 underline underline-offset-4"
                    >
                      Perfil no LinkedIn
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
        )}
      </div>
    </section>
  );
}
