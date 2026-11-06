import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';

/**
 * Páginas que existem só em português (legais e blog). Em /en e /es viram 404:
 * a versão juridicamente válida dos documentos é a em português, e o blog
 * ainda não tem tradução editorial.
 */
export async function requirePortuguese(params: Promise<{ locale: string }>): Promise<void> {
  const { locale } = await params;
  if (locale !== 'pt') notFound();
  setRequestLocale(locale);
}
