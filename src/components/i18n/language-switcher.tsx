'use client';

import { useEffect, useRef } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { Check, ChevronDown, Globe } from 'lucide-react';
import { Link, usePathname } from '@/i18n/navigation';
import { HTML_LANG, routing, type Locale } from '@/i18n/routing';

/** Nome de cada idioma escrito nele mesmo, como o visitante o reconhece. */
const NATIVE_NAMES: Record<Locale, string> = {
  pt: 'Português',
  en: 'English',
  es: 'Español',
};

type LanguageSwitcherProps = {
  className?: string;
  /** Cor de destaque: âmbar (home) ou teal (página de escolas). */
  tone?: 'amber' | 'teal';
};

/**
 * Seletor de idioma compacto ("PT ▾"). A lista usa <details>, então os links
 * para a mesma página nos outros idiomas (com o caminho traduzido, como
 * /escolas → /en/schools) já vêm no HTML e são rastreáveis sem JavaScript.
 */
export default function LanguageSwitcher({ className = '', tone = 'amber' }: LanguageSwitcherProps) {
  const t = useTranslations('languageSwitcher');
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const detailsRef = useRef<HTMLDetailsElement>(null);
  const ring = tone === 'teal' ? 'focus-visible:ring-teal-400' : 'focus-visible:ring-amber-400';
  const current = tone === 'teal' ? 'text-teal-700' : 'text-amber-700';

  // Fecha ao clicar fora ou apertar Esc.
  useEffect(() => {
    const close = (event: Event) => {
      const details = detailsRef.current;
      if (!details?.open) return;
      if (event instanceof KeyboardEvent && event.key !== 'Escape') return;
      if (event instanceof PointerEvent && details.contains(event.target as Node)) return;
      details.open = false;
    };
    document.addEventListener('pointerdown', close);
    document.addEventListener('keydown', close);
    return () => {
      document.removeEventListener('pointerdown', close);
      document.removeEventListener('keydown', close);
    };
  }, []);

  return (
    <details ref={detailsRef} className={`relative group ${className}`}>
      <summary
        aria-label={`${t('label')}: ${NATIVE_NAMES[locale]}. ${t('change')}`}
        className={`list-none [&::-webkit-details-marker]:hidden cursor-pointer inline-flex items-center gap-1 h-8 px-2 rounded-md text-xs font-semibold uppercase tracking-wide text-muted-foreground hover:text-foreground hover:bg-accent transition-colors focus-visible:outline-none focus-visible:ring-2 ${ring}`}
      >
        <Globe className="w-3.5 h-3.5" aria-hidden="true" />
        {locale}
        <ChevronDown className="w-3 h-3 transition-transform group-open:rotate-180" aria-hidden="true" />
      </summary>
      <ul className="absolute right-0 mt-1 min-w-[10rem] rounded-lg border border-border bg-white shadow-lg py-1 z-[70]">
        {routing.locales.map(code => {
          const isCurrent = code === locale;
          return (
            <li key={code}>
              <Link
                href={pathname}
                locale={code}
                hrefLang={HTML_LANG[code]}
                lang={HTML_LANG[code]}
                aria-current={isCurrent ? 'page' : undefined}
                onClick={() => {
                  if (detailsRef.current) detailsRef.current.open = false;
                }}
                className={`flex items-center justify-between gap-3 px-3 py-2 text-sm hover:bg-accent focus-visible:outline-none focus-visible:bg-accent ${isCurrent ? `font-semibold ${current}` : 'text-foreground'}`}
              >
                {NATIVE_NAMES[code]}
                {isCurrent && <Check className="w-3.5 h-3.5" aria-hidden="true" />}
              </Link>
            </li>
          );
        })}
      </ul>
    </details>
  );
}
