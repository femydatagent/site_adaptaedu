'use client';

import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { type ReactNode } from 'react';

interface FadeInProps {
  children: ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  delay?: number;
  duration?: number;
  className?: string;
}

export default function FadeIn({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.5,
  className = '',
}: FadeInProps) {
  const shouldReduceMotion = useReducedMotion();

  const directionMap = {
    up: { y: 40 },
    down: { y: -40 },
    left: { x: 40 },
    right: { x: -40 },
    none: {},
  };

  // Com movimento reduzido, mantém-se apenas o fade — sem deslocamento.
  const variants: Variants = {
    hidden: shouldReduceMotion ? { opacity: 0 } : { opacity: 0, ...directionMap[direction] },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: shouldReduceMotion
        ? { duration: 0 }
        : { duration, delay, ease: 'easeOut' },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}
