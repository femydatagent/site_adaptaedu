import { Eye, Target, Quote } from 'lucide-react';
import { useTranslations } from 'next-intl';
import FadeIn from './fade-in';
import { richTags } from './i18n/rich';

/**
 * Seção "Quem somos": missão, visão e as pessoas por trás do AdaptaEDU.
 *
 * Os dados fixos (nome, foto, links) ficam em `equipe` abaixo; cargo,
 * credencial e biografia ficam em messages/<idioma>.json (`quemSomos.people`,
 * pela mesma chave `id`). Cada pessoa só
 * aparece quando tem conteúdo de verdade, então publicar antes de a biografia
 * ficar pronta mostra a seção íntegra, sem cartão pela metade.
 */

type Pessoa = {
  /** Chave da pessoa em `quemSomos.people` nas mensagens. */
  id: string;
  nome: string;
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

/** Textos traduzidos de uma pessoa. */
type PessoaTexto = {
  cargo: string;
  credencial: string;
  bio: string[];
};

const equipe: Pessoa[] = [
  { id: 'andrea', nome: 'Andréa Monteiro', citacao: '', foto: '/equipe/andrea.jpg', linkedin: '', tom: 'teal' },
  { id: 'fernando', nome: 'Fernando Outa', citacao: '', foto: '/equipe/fernando.jpg', linkedin: '', tom: 'amber' },
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

function temConteudo(texto: PessoaTexto): boolean {
  return Boolean(texto.cargo || texto.credencial || texto.bio.length > 0);
}

type CartaoProps = { pessoa: Pessoa; texto: PessoaTexto };

function CartaoPessoa({ pessoa, texto }: CartaoProps) {
  const t = useTranslations('quemSomos');
  return (
    <div className="h-full rounded-2xl bg-card border border-border shadow-sm p-8">
      <div className="flex items-center gap-5 mb-6">
        {pessoa.foto ? (
          <img
            src={pessoa.foto}
            alt={t('portraitAlt', { name: pessoa.nome })}
            width={80}
            height={80}
            className="w-20 h-20 rounded-2xl object-cover object-top border border-border flex-shrink-0"
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
          {texto.cargo && (
            <p className="text-sm font-semibold text-amber-600 mt-1">{texto.cargo}</p>
          )}
          {texto.credencial && (
            <p className="text-sm text-muted-foreground mt-0.5">{texto.credencial}</p>
          )}
        </div>
      </div>

      {texto.bio.length > 0 && (
        <div className="space-y-3">
          {texto.bio.map((paragrafo, i) => (
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
          {t('linkedin')}
        </a>
      )}
    </div>
  );
}

export default function QuemSomos() {
  const t = useTranslations('quemSomos');
  const pessoasVisiveis = equipe
    .map(pessoa => ({ pessoa, texto: t.raw(`people.${pessoa.id}`) as PessoaTexto }))
    .filter(({ texto }) => temConteudo(texto));

  return (
    <section id="quem-somos" className="py-24 md:py-32 overflow-x-clip">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="inline-flex items-center justify-center rounded-md border font-medium mb-4 border-teal-500/30 bg-teal-500/10 text-teal-700 px-3 py-1 text-xs">
              {t('badge')}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t.rich('title', richTags)}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('subtitle')}
            </p>
          </div>
        </FadeIn>

        {/* Missão e visão: tratamento visual distinto entre si, não dois cartões iguais */}
        <div className="grid md:grid-cols-2 gap-6 mb-20 max-w-5xl mx-auto">
          <FadeIn direction="right">
            <div className="h-full rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 p-8 text-white shadow-lg">
              <Target className="w-7 h-7 mb-4 opacity-90" aria-hidden="true" />
              <h3 className="text-xl font-bold mb-3">{t('missionTitle')}</h3>
              <p className="leading-relaxed text-amber-50">
                {t('mission')}
              </p>
            </div>
          </FadeIn>

          <FadeIn direction="left">
            <div className="h-full rounded-2xl bg-card border border-border p-8 shadow-sm">
              <Eye className="w-7 h-7 mb-4 text-teal-600" aria-hidden="true" />
              <h3 className="text-xl font-bold mb-3 text-foreground">{t('visionTitle')}</h3>
              <p className="leading-relaxed text-muted-foreground">
                {t('vision')}
              </p>
            </div>
          </FadeIn>
        </div>

        {pessoasVisiveis.length > 0 && (
          <FadeIn>
            <div className="max-w-5xl mx-auto">
              <h3 className="text-center text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-8">
                {t('teamTitle')}
              </h3>
              <div
                className={`grid gap-6 ${pessoasVisiveis.length > 1 ? 'md:grid-cols-2' : 'max-w-2xl mx-auto'}`}
              >
                {pessoasVisiveis.map(({ pessoa, texto }) => (
                  <CartaoPessoa key={pessoa.id} pessoa={pessoa} texto={texto} />
                ))}
              </div>
            </div>
          </FadeIn>
        )}
      </div>
    </section>
  );
}
