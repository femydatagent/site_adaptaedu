import type { ReactNode } from 'react';

/**
 * O layout de verdade (com <html lang>) fica em [locale]/layout.tsx, para que o
 * idioma da página defina o `lang`. Este só existe porque o not-found da raiz
 * precisa de um layout acima dele.
 */
export default function RootLayout({ children }: { children: ReactNode }) {
  return children;
}
