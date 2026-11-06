type JsonLdProps = {
  /** Um ou mais nós schema.org; viram um único `@graph`. */
  data: Record<string, unknown>[];
};

/**
 * Dados estruturados (schema.org) num `<script type="application/ld+json">`.
 *
 * O conteúdo vem só de constantes e dos arquivos de tradução do próprio site,
 * nunca de entrada do usuário. Mesmo assim o `<` é escapado, para que nenhum
 * texto consiga fechar a tag `</script>`.
 */
export default function JsonLd({ data }: JsonLdProps) {
  const json = JSON.stringify({ '@context': 'https://schema.org', '@graph': data }).replace(/</g, '\\u003c');
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}
