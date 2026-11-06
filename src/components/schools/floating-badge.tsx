'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

type FloatingBadgeProps = {
  children: ReactNode;
  className: string;
  /** Deslocamento vertical em px; negativo sobe primeiro. */
  offset: number;
  duration: number;
};

/** Selo flutuante sobre o mockup do painel (único uso direto de motion). */
export default function FloatingBadge({ children, className, offset, duration }: FloatingBadgeProps) {
  return (
    <motion.div animate={{ y: [0, offset, 0] }} transition={{ duration, repeat: Infinity }} className={className}>
      {children}
    </motion.div>
  );
}
