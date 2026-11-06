'use client';

import { useState, type ReactNode } from 'react';
import DemoModal from '../demo-modal';

type DemoButtonProps = {
  children: ReactNode;
  className?: string;
};

/** Botão que abre a agenda de demonstração. Cada botão cuida do próprio modal. */
export default function DemoButton({ children, className }: DemoButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button type="button" onClick={() => setIsOpen(true)} className={className}>
        {children}
      </button>
      <DemoModal open={isOpen} onOpenChange={setIsOpen} />
    </>
  );
}
