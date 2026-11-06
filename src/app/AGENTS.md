# src/app

## OVERVIEW
Next.js App Router com i18n (next-intl). Três idiomas: `pt` (padrão, sem prefixo), `en` (`/en`) e `es` (`/es`).

## ESTRUTURA
| Caminho | O que é |
|---------|---------|
| `layout.tsx` | Repassa `children`; o layout real (com `<html lang>`) é `[locale]/layout.tsx`. |
| `[locale]/layout.tsx` | Layout por idioma: fonte, metadata base, JSON-LD de Organization/WebSite, chat da Ana, providers. |
| `[locale]/page.tsx` | Home (`/`, `/en`, `/es`). Metadata, hreflang e JSON-LD (WebPage, SoftwareApplication com preços, FAQPage). |
| `[locale]/escolas/page.tsx` | Página para escolas: `/escolas`, `/en/schools`, `/es/escuelas` (caminhos em `src/i18n/routing.ts`). |
| `[locale]/{privacidade,termos,lgpd,acessibilidade,cookies,blog}` | Só em português: `requirePortuguese()` devolve 404 em `/en` e `/es`. |
| `[locale]/opengraph-image.tsx` | Imagem de compartilhamento por idioma. |
| `sitemap.ts`, `robots.ts` | Sitemap com alternates por idioma; robots liberando buscadores e robôs de IA. |
| `llms.txt/`, `llms-full.txt/` | Resumo e conteúdo completo para IAs, gerados das mensagens (`src/lib/llms.ts`). |
| `api/` | Rotas de API — fora do proxy de idioma. |

## CONVENÇÕES
- Textos ficam em `/messages/{pt,en,es}.json`. Nunca escreva texto visível direto no componente.
- Toda página traduzida exporta `generateMetadata` usando `buildPageMetadata` (`src/lib/seo.ts`) e chama `setRequestLocale(locale)`.
- Página nova traduzida: crie a pasta em `[locale]/`, registre o caminho em `routing.pathnames` e adicione em `TRANSLATED_PAGES` do `sitemap.ts`.
- Links internos entre páginas traduzidas usam `Link` de `@/i18n/navigation` (gera o caminho do idioma). Páginas só em português usam `<a href>` simples.
- Fatos (preços, URLs, perfis) ficam em `src/lib/facts.ts` — fonte única para página, JSON-LD e llms.txt.

## ANTI-PADRÕES
- Não redirecione por idioma do navegador (`localeDetection` fica `false`); use a sugestão em `LanguageSuggestion`.
- Não bloqueie `/_next/` no robots: o Google precisa do CSS/JS para renderizar.
- Não declare `aggregateRating` ou avaliações no JSON-LD sem avaliações reais e visíveis na página.
- Não adicione dark mode: `.dark` não tem tema definido. Cores em hex, não `hsl(var(--x))`.
