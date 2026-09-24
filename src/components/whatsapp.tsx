'use client';

import { Camera, Send, Sparkles, Clock, CheckCheck, MessageCircle } from 'lucide-react';
import FadeIn from './fade-in';
import { WHATSAPP, linkWhatsapp } from './legal/empresa';

/**
 * Seção do diferencial: adaptar pelo WhatsApp.
 *
 * Fundo escuro de propósito — a seção fica entre blocos de fundo creme, e o
 * contraste é o que faz o diferencial parar o olho. O verde do WhatsApp
 * aparece só dentro da simulação de conversa, onde tem função de
 * reconhecimento; fora dali a paleta da marca continua mandando.
 */

const PASSOS = [
  {
    icone: Camera,
    titulo: 'Fotografe',
    texto: 'A página do livro, a lista de exercícios, a prova. Direto da mesa, com o celular.',
  },
  {
    icone: Send,
    titulo: 'Envie',
    texto: 'Manda no WhatsApp do AdaptaEDU e diz o perfil: "adaptar para dislexia".',
  },
  {
    icone: Sparkles,
    titulo: 'Receba adaptado',
    texto: 'Volta pronto para qualquer um dos 9 perfis, em minutos, no mesmo lugar.',
  },
];

function BolhaRecebida({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-[82%] rounded-2xl rounded-tl-sm bg-white px-3 py-2 text-[13px] leading-snug text-slate-800 shadow-sm">
      {children}
    </div>
  );
}

function BolhaEnviada({ children }: { children: React.ReactNode }) {
  return (
    <div className="ml-auto max-w-[82%] rounded-2xl rounded-tr-sm bg-[#d9fdd3] px-3 py-2 text-[13px] leading-snug text-slate-800 shadow-sm">
      {children}
      <span className="mt-1 flex items-center justify-end gap-1 text-[10px] text-slate-500">
        14:32 <CheckCheck className="h-3 w-3 text-sky-500" aria-hidden="true" />
      </span>
    </div>
  );
}

export default function Whatsapp() {
  return (
    <section id="whatsapp" className="relative overflow-hidden bg-slate-900 py-24 md:py-32">
      {/* brilho de fundo, para o aparelho não flutuar sobre um retângulo chapado */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 h-[640px] w-[640px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/10 blur-[130px]"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
        <FadeIn direction="right">
          <div>
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
              <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
              O jeito mais rápido de adaptar
            </span>

            <h2 className="mb-5 text-3xl font-bold leading-tight text-white md:text-4xl">
              Adaptação na palma da mão,{' '}
              <span className="text-emerald-400">pelo WhatsApp</span>
            </h2>

            <p className="mb-10 text-lg leading-relaxed text-slate-300">
              Não precisa abrir o computador, escanear nada, nem sair do aplicativo que você já usa o
              dia inteiro. Fotografou, mandou, recebeu adaptado — para qualquer um dos 9 perfis de
              acessibilidade.
            </p>

            <ol className="space-y-6">
              {PASSOS.map((passo, i) => {
                const Icone = passo.icone;
                return (
                  <li key={passo.titulo} className="flex gap-4">
                    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-400">
                      <Icone className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">
                        <span className="mr-2 text-emerald-400/70">{i + 1}.</span>
                        {passo.titulo}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-slate-400">{passo.texto}</p>
                    </div>
                  </li>
                );
              })}
            </ol>

            <div className="mt-10">
              <a
                href={linkWhatsapp()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-xl bg-emerald-500 px-7 py-4 text-base font-semibold text-slate-900 transition-colors hover:bg-emerald-400"
              >
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                Adaptar pelo WhatsApp
              </a>
              <p className="mt-3 text-sm text-slate-400">
                {WHATSAPP.exibicao} — abre a conversa já com a mensagem pronta.
              </p>
              <p className="mt-4 flex items-center gap-2 text-sm text-slate-400">
                <Clock className="h-4 w-4 text-emerald-400" aria-hidden="true" />
                Da foto ao material pronto, sem trocar de tela.
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Simulação da conversa */}
        <FadeIn direction="left">
          <div className="mx-auto w-full max-w-[320px]">
            <div className="rounded-[2.2rem] border-[10px] border-slate-800 bg-slate-800 shadow-2xl">
              <div className="overflow-hidden rounded-[1.5rem] bg-[#efeae2]">
                {/* cabeçalho da conversa */}
                <div className="flex items-center gap-3 bg-[#075e54] px-4 py-3">
                  <img
                    src="/logo-mark.svg"
                    alt=""
                    aria-hidden="true"
                    width={32}
                    height={32}
                    className="h-8 w-8 rounded-full bg-white p-0.5"
                  />
                  <div className="leading-tight">
                    <p className="text-sm font-semibold text-white">AdaptaEDU</p>
                    <p className="text-[11px] text-emerald-100">online</p>
                  </div>
                </div>

                <div className="space-y-2.5 px-3 py-4">
                  <BolhaEnviada>
                    <span className="mb-1.5 flex h-24 items-center justify-center rounded-lg bg-slate-200 text-[11px] text-slate-500">
                      <Camera className="mr-1.5 h-4 w-4" aria-hidden="true" />
                      foto da página 47
                    </span>
                    Adaptar para dislexia
                  </BolhaEnviada>

                  <BolhaRecebida>
                    Recebi! Adaptando a página para <strong>Dislexia</strong> — fonte ampliada,
                    espaçamento maior e frases mais curtas. Só um instante.
                  </BolhaRecebida>

                  <BolhaRecebida>
                    <span className="mb-1.5 flex items-center gap-2 rounded-lg bg-slate-100 px-2.5 py-2">
                      <span className="text-base" aria-hidden="true">
                        📄
                      </span>
                      <span className="leading-tight">
                        <span className="block text-[12px] font-medium text-slate-700">
                          pagina-47-dislexia.pdf
                        </span>
                        <span className="text-[10px] text-slate-500">PDF · 2 páginas</span>
                      </span>
                    </span>
                    Pronto! Quer o mesmo conteúdo em outro perfil?
                  </BolhaRecebida>
                </div>
              </div>
            </div>

            <p className="mt-5 text-center text-xs text-slate-500">
              Ilustração do fluxo de conversa
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
