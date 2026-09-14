'use client';

import { useCallback, useEffect, useState } from 'react';

/**
 * Consentimento de cookies.
 *
 * A escolha é guardada em localStorage, e não em cookie: registrar o aceite de
 * cookies gravando um cookie seria contraditório, e o site não define nenhum.
 */

export const CONSENT_STORAGE_KEY = 'adaptaedu.cookie-consent';

/** Incrementar quando as categorias mudarem, para voltar a perguntar. */
export const CONSENT_VERSION = 1;

/** Evento interno que reabre o banner a partir de qualquer página. */
export const OPEN_PREFERENCES_EVENT = 'adaptaedu:abrir-preferencias-cookies';

export type ConsentCategory = 'necessarios' | 'preferencias' | 'analiticos' | 'publicidade';

export type ConsentChoices = Record<ConsentCategory, boolean>;

export type ConsentRecord = {
  version: number;
  decidedAt: string;
  choices: ConsentChoices;
};

/** Cookies necessários não são opcionais: sem eles não há autenticação. */
export const REQUIRED_CATEGORIES: readonly ConsentCategory[] = ['necessarios'];

export const OPTIONAL_CATEGORIES: readonly ConsentCategory[] = [
  'preferencias',
  'analiticos',
  'publicidade',
];

export const ALL_DENIED: ConsentChoices = {
  necessarios: true,
  preferencias: false,
  analiticos: false,
  publicidade: false,
};

export const ALL_GRANTED: ConsentChoices = {
  necessarios: true,
  preferencias: true,
  analiticos: true,
  publicidade: true,
};

export const CATEGORY_LABELS: Record<ConsentCategory, { title: string; description: string }> = {
  necessarios: {
    title: 'Necessários',
    description:
      'Autenticação, segurança e funcionamento básico da plataforma. Sem eles não é possível manter você conectado à sua conta.',
  },
  preferencias: {
    title: 'Preferências',
    description: 'Lembram escolhas de exibição e configurações de interface entre visitas.',
  },
  analiticos: {
    title: 'Analíticos',
    description:
      'Medem o uso das páginas de forma agregada, para entendermos o que funciona e o que atrapalha.',
  },
  publicidade: {
    title: 'Publicidade',
    description: 'Personalizam anúncios e medem o resultado de campanhas.',
  },
};

function isValidRecord(value: unknown): value is ConsentRecord {
  if (typeof value !== 'object' || value === null) return false;
  const record = value as Partial<ConsentRecord>;
  return (
    record.version === CONSENT_VERSION &&
    typeof record.decidedAt === 'string' &&
    typeof record.choices === 'object' &&
    record.choices !== null
  );
}

/** Lê a decisão guardada. Devolve null se não houver, for inválida ou antiga. */
export function readConsent(): ConsentRecord | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;
    const parsed: unknown = JSON.parse(raw);
    return isValidRecord(parsed) ? parsed : null;
  } catch {
    // Navegação privativa, armazenamento bloqueado ou JSON corrompido.
    return null;
  }
}

/**
 * Verifica se uma categoria foi autorizada. Use antes de carregar qualquer
 * script não essencial:
 *
 *     if (hasConsent('analiticos')) { carregarAnalytics(); }
 *
 * Retorna false quando ainda não há decisão — o padrão é não carregar.
 */
export function hasConsent(category: ConsentCategory): boolean {
  if (REQUIRED_CATEGORIES.includes(category)) return true;
  return readConsent()?.choices[category] === true;
}

/** Reabre o banner para o usuário rever a decisão (LGPD, art. 8º, § 5º). */
export function openCookiePreferences(): void {
  if (typeof window === 'undefined') return;
  window.dispatchEvent(new CustomEvent(OPEN_PREFERENCES_EVENT));
}

export function useCookieConsent() {
  const [consent, setConsent] = useState<ConsentRecord | null>(null);
  const [isReady, setIsReady] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Só após a montagem, para não divergir do HTML renderizado no servidor.
  useEffect(() => {
    const stored = readConsent();
    setConsent(stored);
    setIsOpen(stored === null);
    setIsReady(true);
  }, []);

  useEffect(() => {
    const reopen = () => setIsOpen(true);
    window.addEventListener(OPEN_PREFERENCES_EVENT, reopen);
    return () => window.removeEventListener(OPEN_PREFERENCES_EVENT, reopen);
  }, []);

  const save = useCallback((choices: ConsentChoices) => {
    const record: ConsentRecord = {
      version: CONSENT_VERSION,
      decidedAt: new Date().toISOString(),
      choices: { ...choices, necessarios: true },
    };
    try {
      window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(record));
    } catch {
      // Sem armazenamento disponível: a decisão vale para esta sessão.
    }
    setConsent(record);
    setIsOpen(false);
  }, []);

  const acceptAll = useCallback(() => save(ALL_GRANTED), [save]);
  const rejectAll = useCallback(() => save(ALL_DENIED), [save]);

  return { consent, isReady, isOpen, save, acceptAll, rejectAll };
}
