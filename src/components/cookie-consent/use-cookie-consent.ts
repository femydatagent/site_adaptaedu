'use client';

import { useCallback, useEffect, useMemo, useState, useSyncExternalStore } from 'react';

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

/** Emitido quando a decisão muda, para os assinantes relerem o armazenamento. */
export const CONSENT_CHANGED_EVENT = 'adaptaedu:consentimento-alterado';

/** Instantâneo do servidor: ainda não há como saber a decisão do visitante. */
const SERVER_SNAPSHOT = '\u0000servidor';

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

/** Assina mudanças da decisão, nesta aba e nas demais. */
function subscribeToConsent(onChange: () => void): () => void {
  window.addEventListener(CONSENT_CHANGED_EVENT, onChange);
  window.addEventListener('storage', onChange);
  return () => {
    window.removeEventListener(CONSENT_CHANGED_EVENT, onChange);
    window.removeEventListener('storage', onChange);
  };
}

/** Valor bruto guardado — string estável, exigida por useSyncExternalStore. */
function getRawConsent(): string {
  try {
    return window.localStorage.getItem(CONSENT_STORAGE_KEY) ?? '';
  } catch {
    return '';
  }
}

function getServerRawConsent(): string {
  return SERVER_SNAPSHOT;
}

export function useCookieConsent() {
  const raw = useSyncExternalStore(subscribeToConsent, getRawConsent, getServerRawConsent);
  const [isReopened, setIsReopened] = useState(false);

  useEffect(() => {
    const reopen = () => setIsReopened(true);
    window.addEventListener(OPEN_PREFERENCES_EVENT, reopen);
    return () => window.removeEventListener(OPEN_PREFERENCES_EVENT, reopen);
  }, []);

  const consent = useMemo<ConsentRecord | null>(() => {
    if (raw === SERVER_SNAPSHOT || raw === '') return null;
    try {
      const parsed: unknown = JSON.parse(raw);
      return isValidRecord(parsed) ? parsed : null;
    } catch {
      return null;
    }
  }, [raw]);

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
    setIsReopened(false);
    window.dispatchEvent(new CustomEvent(CONSENT_CHANGED_EVENT));
  }, []);

  const acceptAll = useCallback(() => save(ALL_GRANTED), [save]);
  const rejectAll = useCallback(() => save(ALL_DENIED), [save]);

  // No servidor nada é renderizado, evitando divergência de hidratação.
  const isReady = raw !== SERVER_SNAPSHOT;
  const isOpen = isReady && (isReopened || consent === null);

  return { consent, isReady, isOpen, save, acceptAll, rejectAll };
}
