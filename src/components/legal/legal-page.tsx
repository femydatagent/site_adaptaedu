import type { ReactNode } from 'react';
import Link from 'next/link';

type LegalPageProps = {
  title: string;
  subtitle: string;
  updatedAt: string;
  toc: { id: string; label: string }[];
  children: ReactNode;
};

/** Casca compartilhada das páginas legais: cabeçalho, sumário, conteúdo e rodapé. */
export default function LegalPage({ title, subtitle, updatedAt, toc, children }: LegalPageProps) {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="border-b border-border bg-white/80 backdrop-blur-lg sticky top-0 z-50">
        <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-lg" aria-label="AdaptaEDU — página inicial">
            <img src="/logo-mark.svg" alt="" aria-hidden="true" width={32} height={32} className="w-8 h-8" />
            <span>Adapta<span className="text-orange-500">EDU</span></span>
          </Link>
          <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            ← Voltar ao site
          </Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-12 flex-1 w-full">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3 leading-tight">{title}</h1>
        <p className="text-base text-muted-foreground leading-relaxed border-l-4 border-amber-400 pl-4 mb-4">
          {subtitle}
        </p>
        <p className="text-xs text-muted-foreground mb-10">
          Última atualização: <time dateTime={updatedAt}>{formatDate(updatedAt)}</time>
        </p>

        <nav aria-label="Sumário" className="mb-12 rounded-xl border border-border bg-muted/40 p-5">
          <h2 className="text-sm font-semibold text-foreground mb-3">Nesta página</h2>
          <ol className="space-y-1.5 text-sm">
            {toc.map((item, i) => (
              <li key={item.id} className="flex gap-2">
                <span className="text-muted-foreground tabular-nums">{i + 1}.</span>
                <a href={`#${item.id}`} className="text-muted-foreground hover:text-amber-600 transition-colors">
                  {item.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {children}
      </main>

      <footer className="border-t border-border py-8">
        <div className="max-w-3xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© 2026 AdaptaEDU. Todos os direitos reservados.</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/privacidade" className="hover:text-amber-600 transition-colors">Privacidade</Link>
            <Link href="/termos" className="hover:text-amber-600 transition-colors">Termos de Uso</Link>
            <Link href="/lgpd" className="hover:text-amber-600 transition-colors">LGPD</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

function formatDate(iso: string) {
  return new Date(`${iso}T12:00:00`).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });
}
