import type { ReactNode } from 'react';

type Chunks = (chunks: ReactNode) => ReactNode;

/**
 * Marcações usadas dentro das mensagens traduzidas (`t.rich`). Ficam aqui para
 * que o mesmo `<hl>` tenha o mesmo visual em todas as seções.
 */
export const richTags: Record<'hl' | 'strong' | 'nowrap', Chunks> = {
  hl: chunks => <span className="text-gradient-warm">{chunks}</span>,
  strong: chunks => <strong className="text-foreground">{chunks}</strong>,
  nowrap: chunks => <span className="whitespace-nowrap">{chunks}</span>,
};

/** Variante com destaque em cor sólida, para fundos escuros ou páginas teal. */
export function highlightTag(className: string): Chunks {
  return chunks => <span className={className}>{chunks}</span>;
}
