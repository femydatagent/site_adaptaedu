import type { ReactNode } from 'react';

/** Primitivas tipográficas compartilhadas pelas páginas legais. */

export function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24 mb-10">
      <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4 pb-2 border-b border-border">
        {title}
      </h2>
      <div className="space-y-4">{children}</div>
    </section>
  );
}

export function SubTitle({ children }: { children: ReactNode }) {
  return <h3 className="text-base font-semibold text-foreground mt-6 mb-2">{children}</h3>;
}

export function P({ children }: { children: ReactNode }) {
  return <p className="text-sm md:text-[15px] text-muted-foreground leading-relaxed">{children}</p>;
}

export function List({ items }: { items: ReactNode[] }) {
  return (
    <ul className="space-y-2 pl-1">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3 text-sm md:text-[15px] text-muted-foreground leading-relaxed">
          <span aria-hidden="true" className="mt-2 w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

/** Tabela responsiva — rola horizontalmente em telas estreitas. */
export function Table({ head, rows }: { head: string[]; rows: ReactNode[][] }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-border">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="bg-muted/60">
            {head.map(h => (
              <th key={h} scope="col" className="text-left font-semibold text-foreground px-4 py-3 whitespace-nowrap">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-t border-border align-top">
              {row.map((cell, j) => (
                <td key={j} className="px-4 py-3 text-muted-foreground leading-relaxed">{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function Callout({ tone = 'amber', title, children }: { tone?: 'amber' | 'teal'; title: string; children: ReactNode }) {
  const tones = {
    amber: 'bg-amber-50 border-amber-300',
    teal: 'bg-teal-50 border-teal-300',
  } as const;
  return (
    <div className={`border-l-4 rounded-r-xl px-5 py-4 ${tones[tone]}`}>
      <p className="text-sm font-semibold text-foreground mb-1">{title}</p>
      <div className="text-sm text-muted-foreground leading-relaxed space-y-2">{children}</div>
    </div>
  );
}

/** Marca um dado que a AdaptaEDU precisa preencher antes da publicação. */
export function Fill({ children }: { children: ReactNode }) {
  return (
    <mark className="bg-rose-100 text-rose-900 px-1.5 py-0.5 rounded font-medium not-italic">
      [PREENCHER: {children}]
    </mark>
  );
}
