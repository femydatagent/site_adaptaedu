import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { posts, getPostBySlug } from '../posts';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} | AdaptaEDU`,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: `https://adaptaia.com.br/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: ['AdaptaEDU'],
      tags: post.keywords,
    },
  };
}

const categoryColors: Record<string, string> = {
  TEA: 'bg-blue-100 text-blue-700',
  TDAH: 'bg-orange-100 text-orange-700',
  Dislexia: 'bg-rose-100 text-rose-700',
  Legislação: 'bg-amber-100 text-amber-700',
  Tecnologia: 'bg-teal-100 text-teal-700',
};

function renderContent(content: string) {
  const lines = content.trim().split('\n');
  const elements: React.ReactNode[] = [];
  let key = 0;

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) { elements.push(<div key={key++} className="h-2" />); continue; }
    if (trimmed.startsWith('### ')) {
      elements.push(<h3 key={key++} className="text-lg font-bold text-foreground mt-6 mb-2">{trimmed.slice(4)}</h3>);
    } else if (trimmed.startsWith('## ')) {
      elements.push(<h2 key={key++} className="text-2xl font-bold text-foreground mt-10 mb-3">{trimmed.slice(3)}</h2>);
    } else if (trimmed.startsWith('**') && trimmed.endsWith('**')) {
      elements.push(<p key={key++} className="font-semibold text-foreground mb-2">{trimmed.slice(2, -2)}</p>);
    } else {
      // inline bold
      const parts = trimmed.split(/(\*\*[^*]+\*\*)/g);
      elements.push(
        <p key={key++} className="text-muted-foreground leading-relaxed mb-3">
          {parts.map((part, i) =>
            part.startsWith('**') && part.endsWith('**')
              ? <strong key={i} className="text-foreground font-semibold">{part.slice(2, -2)}</strong>
              : part
          )}
        </p>
      );
    }
  }
  return elements;
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 2);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    author: { '@type': 'Organization', name: 'AdaptaEDU', url: 'https://adaptaia.com.br' },
    publisher: { '@type': 'Organization', name: 'AdaptaEDU', url: 'https://adaptaia.com.br' },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `https://adaptaia.com.br/blog/${post.slug}` },
    keywords: post.keywords.join(', '),
  };

  return (
    <div className="min-h-screen bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Header */}
      <header className="border-b border-border bg-white/80 backdrop-blur-lg sticky top-0 z-50">
        <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-lg">
            <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white text-sm">A</span>
            Adapta<span className="text-orange-500">IA</span>
          </Link>
          <Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            ← Blog
          </Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-12">
        {/* Meta */}
        <div className="flex items-center gap-3 mb-6">
          <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${categoryColors[post.category] ?? 'bg-slate-100 text-slate-600'}`}>
            {post.category}
          </span>
          <span className="text-xs text-muted-foreground">{post.readTime} de leitura</span>
          <span className="text-xs text-muted-foreground">
            {new Date(post.date).toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">{post.title}</h1>
        <p className="text-lg text-muted-foreground mb-10 leading-relaxed border-l-4 border-amber-400 pl-4">{post.description}</p>

        {/* Content */}
        <article className="prose-custom">
          {renderContent(post.content)}
        </article>

        {/* CTA */}
        <div className="mt-14 p-8 bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 rounded-2xl text-center">
          <h3 className="text-xl font-bold text-foreground mb-2">Automatize a adaptação de conteúdo</h3>
          <p className="text-sm text-muted-foreground mb-5">
            O AdaptaEDU aplica todas essas estratégias automaticamente. Teste grátis com 3 adaptações.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold hover:from-amber-600 hover:to-orange-600 transition-all"
          >
            Testar o AdaptaEDU grátis →
          </Link>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div className="mt-14">
            <h3 className="text-lg font-bold text-foreground mb-5">Artigos relacionados</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/blog/${r.slug}`}
                  className="group p-4 border border-border rounded-xl hover:border-amber-300 hover:shadow-md transition-all bg-card"
                >
                  <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${categoryColors[r.category] ?? 'bg-slate-100 text-slate-600'}`}>
                    {r.category}
                  </span>
                  <p className="font-semibold text-sm text-foreground mt-2 group-hover:text-amber-600 transition-colors leading-snug">
                    {r.title}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </main>

      <footer className="border-t border-border mt-16 py-8 text-center text-sm text-muted-foreground">
        <p>© 2026 AdaptaEDU. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
