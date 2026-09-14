'use client';

import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
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

function setBarHeight(px: number) {
  document.documentElement.style.setProperty('--promo-bar-h', `${px}px`);
}

export default function PromoBar() {
  const promo = getActivePromo();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!promo) return;

    let dismissed = false;
    try {
      dismissed = window.localStorage.getItem(`${DISMISS_KEY_PREFIX}${promo.id}`) === '1';
    } catch {
      // Armazenamento indisponível: mostra a faixa normalmente.
    }

    setIsVisible(!dismissed);
    if (!dismissed) setBarHeight(BAR_HEIGHT_PX);

    return () => setBarHeight(0);
  }, [promo]);

  if (!promo || !isVisible) return null;

  const dismiss = () => {
    try {
      window.localStorage.setItem(`${DISMISS_KEY_PREFIX}${promo.id}`, '1');
    } catch {
      // Sem armazenamento: a faixa volta na próxima visita.
    }
    setIsVisible(false);
    setBarHeight(0);
  };

  const content = (
    <>
      {promo.badge && <strong className="font-extrabold tracking-wide">{promo.badge}</strong>}
      <span className="truncate">{promo.message}</span>
      {promo.href && promo.linkLabel && (
        <span className="hidden sm:inline whitespace-nowrap font-bold underline underline-offset-2">
          {promo.linkLabel} →
        </span>
      )}
    </>
  );

  const innerClasses =
    'flex h-full w-full items-center justify-center gap-1.5 px-12 text-[10px] leading-none tracking-tight';

  return (
    <aside
      aria-label="Novidades e promoções"
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
        aria-label="Fechar aviso de promoção"
        style={{ width: CLOSE_HIT_WIDTH_PX }}
        className="absolute right-0 top-0 flex h-full items-center justify-center text-white/75 hover:bg-white/20 hover:text-white transition-colors"
      >
        <X className="h-2.5 w-2.5" aria-hidden="true" />
      </button>
    </aside>
  );
}
