import type { ReactNode } from 'react';
import FadeIn from '../fade-in';

type SectionHeadingProps = {
  badge: string;
  title: ReactNode;
  subtitle?: ReactNode;
  /** Cor do selo: âmbar (padrão) ou teal. */
  tone?: 'amber' | 'teal';
  id?: string;
  className?: string;
};

const BADGE_TONE = {
  amber: 'border-amber-500/30 bg-amber-500/10 text-amber-700',
  teal: 'border-teal-500/30 bg-teal-500/10 text-teal-700',
} as const;

/** Selo + título + subtítulo centralizados, o cabeçalho padrão das seções da home. */
export default function SectionHeading({
  badge,
  title,
  subtitle,
  tone = 'amber',
  id,
  className = 'mb-16',
}: SectionHeadingProps) {
  return (
    <FadeIn>
      <div className={`text-center ${className}`}>
        <span className={`inline-flex items-center justify-center rounded-md border font-medium mb-4 px-3 py-1 text-xs ${BADGE_TONE[tone]}`}>
          {badge}
        </span>
        <h2 id={id} className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
        {subtitle && <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>}
      </div>
    </FadeIn>
  );
}
