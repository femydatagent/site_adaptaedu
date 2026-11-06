'use client';

import type { ReactNode } from 'react';
import { CONTATO } from '../legal/empresa';
import { abrirAtendente } from '@/lib/atendente';

type SupportLinkProps = {
  children: ReactNode;
  className?: string;
};

/** Abre o chat da Ana; sem a bolha carregada, segue para o e-mail de suporte. */
export default function SupportLink({ children, className }: SupportLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (abrirAtendente()) e.preventDefault();
  };
  return (
    <a href={`mailto:${CONTATO.suporte}`} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
