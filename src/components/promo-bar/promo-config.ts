/**
 * Configuração da barra de novidades e promoções.
 *
 * Para trocar a mensagem, edite `promos` abaixo — é o único arquivo que
 * precisa mudar. A barra some sozinha quando nenhuma promoção está ativa.
 */

export type Promo = {
  /**
   * Identificador da campanha. Ao criar uma promoção nova, use um id novo:
   * quem já fechou a barra anterior volta a vê-la.
   */
  id: string;
  /** Texto principal, curto — a barra é estreita e há apenas uma linha. */
  message: string;
  /** Trecho destacado no início, opcional. Ex.: "NOVO", "-20%". */
  badge?: string;
  /** Destino ao clicar. Opcional: sem href, a barra é apenas informativa. */
  href?: string;
  /** Rótulo do link. Ignorado quando não há href. */
  linkLabel?: string;
  /** Data de início, ISO (yyyy-mm-dd). Opcional. */
  startsAt?: string;
  /** Data de término, ISO (yyyy-mm-dd), inclusiva. Opcional. */
  endsAt?: string;
  /** Desligue sem apagar a configuração. */
  isActive: boolean;
};

export const promos: Promo[] = [
  {
    id: 'lancamento-2026',
    badge: 'NOVO',
    message: 'Teste o AdaptaEDU com 3 adaptações gratuitas — sem cartão de crédito.',
    href: 'https://app.adaptaedu.com/auth/sign-up',
    linkLabel: 'Começar agora',
    isActive: true,
  },
];

function isWithinWindow(promo: Promo, now: Date): boolean {
  if (promo.startsAt && now < new Date(`${promo.startsAt}T00:00:00`)) return false;
  if (promo.endsAt && now > new Date(`${promo.endsAt}T23:59:59`)) return false;
  return true;
}

/** Primeira promoção ativa e dentro da janela de datas, ou null. */
export function getActivePromo(now: Date = new Date()): Promo | null {
  return promos.find(promo => promo.isActive && isWithinWindow(promo, now)) ?? null;
}
