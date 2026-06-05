import type { Metadata } from 'next';
import Link from 'next/link';
import { posts } from './posts';

export const metadata: Metadata = {
  title: 'Blog — Educação Inclusiva e Adaptação de Conteúdo | AdaptaIA',
  description:
    'Artigos práticos sobre educação inclusiva, adaptação de materiais para TEA, TDAH, Dislexia e mais. Para professores, coordenadores e diretores de escola.',
  alternates: { canonical: 'https://adaptaia.com.br/blog' },
};

const categoryColors: Record<string, string> = {
  TEA: 'bg-blue-100 text-blue-700',
  TDAH: 'bg-orange-100 text-orange-700',
  Dislexia: 'bg-rose-100 text-rose-700',
  Legislação: 'bg-amber-100 text-amber-700',
  Tecnologia: 'bg-teal-100 text-teal-700',
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-white/80 backdrop-blur-lg sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-lg">
            <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white text-sm">A</span>
            Adapta<span className="text-orange-500">IA</span>
          </Link>
          <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            ← Voltar ao site
          </Link>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-16">
        {/* Hero */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-700 mb-4">
            Blog AdaptaIA
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Educação inclusiva na{' '}
            <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
              prática
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Guias práticos, estratégias baseadas em evidências e tudo sobre adaptação de conteúdo educacional para professores e gestores escolares.
          </p>
        </div>

        {/* Posts grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block bg-card border border-border rounded-2xl overflow-hidden hover:shadow-lg hover:border-amber-300 transition-all"
            >
              {/* Color bar */}
              <div className="h-1.5 bg-gradient-to-r from-amber-400 to-orange-500" />
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${categoryColors[post.category] ?? 'bg-slate-100 text-slate-600'}`}>
                    {post.category}
                  </span>
                  <span className="text-xs text-muted-foreground">{post.readTime} de leitura</span>
                </div>
                <h2 className="font-bold text-lg text-foreground mb-2 group-hover:text-amber-600 transition-colors leading-snug">
                  {post.title}
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                  {post.description}
                </p>
                <div className="mt-4 flex items-center gap-1 text-sm font-medium text-amber-600">
                  Ler artigo
                  <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>

      {/* Footer simples */}
      <footer className="border-t border-border mt-20 py-8 text-center text-sm text-muted-foreground">
        <p>© 2026 AdaptaIA. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
