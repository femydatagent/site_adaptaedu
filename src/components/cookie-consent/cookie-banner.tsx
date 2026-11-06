'use client';

import { useId, useState } from 'react';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import {
  useCookieConsent,
  OPTIONAL_CATEGORIES,
  ALL_DENIED,
  type ConsentCategory,
  type ConsentChoices,
} from './use-cookie-consent';

/**
 * Banner de consentimento de cookies.
 *
 * Decisões deliberadas:
 * - "Aceitar" e "Rejeitar" têm o mesmo peso visual. A ANPD trata um botão de
 *   aceite destacado ao lado de uma recusa discreta como consentimento inválido.
 * - Nenhuma categoria opcional vem pré-marcada: consentimento é opt-in.
 * - Não é modal e não captura o foco — informa sem sequestrar a navegação.
 * - Não fecha sozinho: sem decisão, nada opcional é carregado.
 */
export default function CookieBanner() {
  const t = useTranslations('cookies');
  const isPt = useLocale() === 'pt';
  const { isReady, isOpen, acceptAll, rejectAll, save } = useCookieConsent();
  const [showDetails, setShowDetails] = useState(false);
  const [choices, setChoices] = useState<ConsentChoices>(ALL_DENIED);
  const titleId = useId();
  const descriptionId = useId();

  if (!isReady || !isOpen) return null;

  const toggle = (category: ConsentCategory) =>
    setChoices(current => ({ ...current, [category]: !current[category] }));

  return (
    <div className="fixed inset-x-0 bottom-0 z-[100] p-3 sm:p-4 pointer-events-none">
      <section
        role="region"
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
        className="pointer-events-auto mx-auto w-full max-w-3xl rounded-2xl border border-border bg-white shadow-2xl shadow-black/10 p-5 sm:p-6"
      >
        <h2 id={titleId} className="text-base font-bold text-foreground mb-2">
          {t('title')}
        </h2>
        <p id={descriptionId} className="text-sm text-muted-foreground leading-relaxed mb-4">
          {t('body')}{' '}
          {/* A política existe só em português; o link não leva prefixo de idioma. */}
          <Link
            href="/cookies"
            hrefLang={isPt ? undefined : 'pt-BR'}
            className="text-amber-600 underline underline-offset-4 hover:text-amber-700"
          >
            {t('policyLink')}
          </Link>
          .
        </p>

        {showDetails && (
          <ul className="space-y-3 mb-5 border-t border-border pt-4">
            <li className="flex gap-3">
              <input
                type="checkbox"
                checked
                disabled
                aria-describedby={`${titleId}-necessarios`}
                className="mt-1 h-4 w-4 flex-shrink-0 accent-amber-500"
              />
              <span>
                <span className="block text-sm font-semibold text-foreground">
                  {t('categories.necessarios.title')}{' '}
                  <span className="font-normal text-muted-foreground">{t('alwaysOn')}</span>
                </span>
                <span id={`${titleId}-necessarios`} className="block text-xs text-muted-foreground leading-relaxed mt-0.5">
                  {t('categories.necessarios.description')}
                </span>
              </span>
            </li>

            {OPTIONAL_CATEGORIES.map(category => (
              <li key={category} className="flex gap-3">
                <input
                  id={`${titleId}-${category}`}
                  type="checkbox"
                  checked={choices[category]}
                  onChange={() => toggle(category)}
                  className="mt-1 h-4 w-4 flex-shrink-0 accent-amber-500 cursor-pointer"
                />
                <label htmlFor={`${titleId}-${category}`} className="cursor-pointer">
                  <span className="block text-sm font-semibold text-foreground">
                    {t(`categories.${category}.title`)}
                  </span>
                  <span className="block text-xs text-muted-foreground leading-relaxed mt-0.5">
                    {t(`categories.${category}.description`)}
                  </span>
                </label>
              </li>
            ))}
          </ul>
        )}

        <div className="flex flex-col sm:flex-row gap-2.5">
          {/* Aceitar e Rejeitar: mesmo tamanho, mesmo destaque. */}
          <button
            type="button"
            onClick={acceptAll}
            className="flex-1 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-amber-600 hover:bg-amber-700 transition-colors"
          >
            {t('acceptAll')}
          </button>
          <button
            type="button"
            onClick={rejectAll}
            className="flex-1 px-5 py-2.5 rounded-xl text-sm font-semibold text-amber-800 bg-amber-100 hover:bg-amber-200 border border-amber-300 transition-colors"
          >
            {t('rejectOptional')}
          </button>
          {showDetails ? (
            <button
              type="button"
              onClick={() => save(choices)}
              className="flex-1 px-5 py-2.5 rounded-xl text-sm font-semibold text-foreground bg-secondary hover:bg-muted border border-border transition-colors"
            >
              {t('save')}
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setShowDetails(true)}
              aria-expanded={false}
              className="flex-1 px-5 py-2.5 rounded-xl text-sm font-semibold text-foreground bg-secondary hover:bg-muted border border-border transition-colors"
            >
              {t('customize')}
            </button>
          )}
        </div>
      </section>
    </div>
  );
}
