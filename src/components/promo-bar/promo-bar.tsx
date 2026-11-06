'use client';

import { useEffect, useSyncExternalStore } from 'react';
import { X } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { getActivePromo } from './promo-config';

/**
 * Faixa fina de novidades e promoções, fixa no topo e ocupando toda a largura.
 *
 * A altura é publicada em `--promo-bar-h`, consumida pelos cabeçalhos fixos e
 * pelo padding do body. Sem promoção ativa, ou após o visitante fechar, a
 * variável volta a 0 e o layout fica idêntico ao de antes.
 *
 * Para mudar a espessura, altere BAR_HEIGHT_PX — é o único lugar. Acima de
 * 24px o botão de fechar passa a atender ao alvo mínimo do WCAG 2.2 (2.5.8).
 */

const BAR_HEIGHT_PX = 15;

/** Área clicável do "fechar": estreita na vertical, generosa na horizontal. */
const CLOSE_HIT_WIDTH_PX = 44;

const DISMISS_KEY_PREFIX = 'adaptaedu.promo-dismissed.';

/** Emitido ao fechar a faixa, para os assinantes relerem o armazenamento. */
const DISMISS_EVENT = 'adaptaedu:promo-dispensada';

/** Instantâneo do servidor: esconde a faixa até saber a escolha do visitante. */
const SERVER_SNAPSHOT = 'servidor';

function setBarHeight(px: number) {
  document.documentElement.style.setProperty('--promo-bar-h', `${px}px`);
}

function subscribeToDismissal(onChange: () => void): () => void {
  window.addEventListener(DISMISS_EVENT, onChange);
  window.addEventListener('storage', onChange);
  return () => {
    window.removeEventListener(DISMISS_EVENT, onChange);
    window.removeEventListener('storage', onChange);
  };
}

function readDismissed(promoId: string): string {
  try {
    return window.localStorage.getItem(`${DISMISS_KEY_PREFIX}${promoId}`) === '1'
      ? 'dispensada'
      : 'visivel';
  } catch {
    return 'visivel';
  }
}

export default function PromoBar() {
  const t = useTranslations('promo');
  const promo = getActivePromo();
  const promoId = promo?.id ?? '';

  // Lê o armazenamento como fonte externa: no servidor devolve o sentinela,
  // então nada é renderizado e não há divergência de hidratação.
  const status = useSyncExternalStore(
    subscribeToDismissal,
    () => (promoId ? readDismissed(promoId) : 'dispensada'),
    () => SERVER_SNAPSHOT,
  );
  const isVisible = status === 'visivel';

  // Publica a altura para os cabeçalhos fixos e o padding do body.
  useEffect(() => {
    setBarHeight(isVisible ? BAR_HEIGHT_PX : 0);
    return () => setBarHeight(0);
  }, [isVisible]);

  if (!promo || !isVisible) return null;

  // Textos traduzidos por id da campanha; sem tradução, vale o texto da config.
  const key = `items.${promo.id}`;
  const translated = t.has(key);
  const badge = translated && t.has(`${key}.badge`) ? t(`${key}.badge`) : promo.badge;
  const message = translated ? t(`${key}.message`) : promo.message;
  const linkLabel = translated && t.has(`${key}.linkLabel`) ? t(`${key}.linkLabel`) : promo.linkLabel;

  const dismiss = () => {
    try {
      window.localStorage.setItem(`${DISMISS_KEY_PREFIX}${promo.id}`, '1');
    } catch {
      // Sem armazenamento: a faixa volta na próxima visita.
    }
    window.dispatchEvent(new CustomEvent(DISMISS_EVENT));
  };

  const content = (
    <>
      {badge && <strong className="font-extrabold tracking-wide">{badge}</strong>}
      <span className="truncate">{message}</span>
      {promo.href && linkLabel && (
        <span className="hidden sm:inline whitespace-nowrap font-bold underline underline-offset-2">
          {linkLabel} →
        </span>
      )}
    </>
  );

  const innerClasses =
    'flex h-full w-full items-center justify-center gap-1.5 px-12 text-[10px] leading-none tracking-tight';

  return (
    <aside
      aria-label={t('regionLabel')}
      style={{ height: BAR_HEIGHT_PX }}
      className="fixed top-0 inset-x-0 z-[60] overflow-hidden bg-gradient-to-r from-amber-800 via-orange-700 to-amber-800 text-white"
    >
      {promo.href ? (
        <a href={promo.href} className={`${innerClasses} hover:bg-white/10 transition-colors`}>
          {content}
        </a>
      ) : (
        <p className={innerClasses}>{content}</p>
      )}

      <button
        type="button"
        onClick={dismiss}
        aria-label={t('close')}
        style={{ width: CLOSE_HIT_WIDTH_PX }}
        className="absolute right-0 top-0 flex h-full items-center justify-center text-white/75 hover:bg-white/20 hover:text-white transition-colors"
      >
        <X className="h-2.5 w-2.5" aria-hidden="true" />
      </button>
    </aside>
  );
}
