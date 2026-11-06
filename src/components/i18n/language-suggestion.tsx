'use client';

import { useSyncExternalStore } from 'react';
import { useLocale } from 'next-intl';
import { X } from 'lucide-react';
import { Link, usePathname } from '@/i18n/navigation';
import { HTML_LANG, routing, type AppPathname, type Locale } from '@/i18n/routing';

/**
 * Sugestão discreta de idioma, no lugar de um redirecionamento automático.
 *
 * Aparece só depois da hidratação, só quando o idioma preferido do navegador é
 * outro idioma do site, e some para sempre ao ser dispensada. Robôs de busca
 * não executam essa lógica nem são redirecionados: cada URL serve sempre o
 * mesmo idioma. O texto fica aqui, e não nas mensagens, porque precisa estar
 * no idioma do visitante, não no da página.
 */

const COPY: Record<Locale, { message: string; action: string; dismiss: string }> = {
  pt: { message: 'Este site também está disponível em português.', action: 'Ver em português', dismiss: 'Dispensar' },
  en: { message: 'This site is also available in English.', action: 'View in English', dismiss: 'Dismiss' },
  es: { message: 'Este sitio también está disponible en español.', action: 'Ver en español', dismiss: 'Cerrar' },
};

const DISMISS_KEY = 'adaptaedu.language-suggestion-dismissed';
const DISMISS_EVENT = 'adaptaedu:language-suggestion-dismissed';

function preferredLocale(): Locale | null {
  for (const tag of navigator.languages ?? [navigator.language]) {
    const base = tag.toLowerCase().split('-')[0];
    const match = routing.locales.find(l => l === base);
    if (match) return match;
  }
  return null;
}

function readDismissed(): boolean {
  try {
    return window.localStorage.getItem(DISMISS_KEY) === '1';
  } catch {
    return false;
  }
}

function subscribe(onChange: () => void) {
  window.addEventListener(DISMISS_EVENT, onChange);
  window.addEventListener('storage', onChange);
  return () => {
    window.removeEventListener(DISMISS_EVENT, onChange);
    window.removeEventListener('storage', onChange);
  };
}

/** Snapshot estável (string) para o useSyncExternalStore. */
function clientSnapshot(): string {
  if (readDismissed()) return '';
  return preferredLocale() ?? '';
}

const serverSnapshot = () => '';

function isTranslatedPath(pathname: string): pathname is AppPathname {
  return pathname in routing.pathnames;
}

export default function LanguageSuggestion() {
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const suggested = useSyncExternalStore(subscribe, clientSnapshot, serverSnapshot) as Locale | '';

  if (!suggested || suggested === locale) return null;

  const copy = COPY[suggested];
  // Páginas só em português (legais, blog) não têm versão traduzida: vai para a home.
  const href: AppPathname = isTranslatedPath(pathname) ? pathname : '/';

  const dismiss = () => {
    try {
      window.localStorage.setItem(DISMISS_KEY, '1');
    } catch {
      // Sem armazenamento (aba anônima, bloqueio): some só nesta visita.
    }
    window.dispatchEvent(new Event(DISMISS_EVENT));
  };

  return (
    <aside
      lang={HTML_LANG[suggested]}
      aria-label={copy.message}
      style={{ top: 'calc(var(--promo-bar-h, 0px) + 4.75rem)' }}
      className="fixed left-3 right-3 sm:left-auto sm:right-4 sm:max-w-sm z-[90] rounded-xl border border-border bg-white shadow-xl p-4 flex items-start gap-3"
    >
      <p className="text-sm text-foreground flex-1">
        {copy.message}{' '}
        <Link
          href={href}
          locale={suggested}
          onClick={dismiss}
          className="font-semibold text-amber-700 underline underline-offset-4 hover:text-amber-800"
        >
          {copy.action}
        </Link>
      </p>
      <button
        type="button"
        onClick={dismiss}
        aria-label={copy.dismiss}
        className="text-muted-foreground hover:text-foreground rounded p-0.5"
      >
        <X className="w-4 h-4" aria-hidden="true" />
      </button>
    </aside>
  );
}
