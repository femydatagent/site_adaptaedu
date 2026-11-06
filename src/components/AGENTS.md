# src/components

## OVERVIEW
Componentes das páginas. Renderizados no servidor por padrão; só o que tem estado ou evento é `'use client'`.

## ARQUIVOS
| Caminho | O que é |
|---------|---------|
| `landing.tsx` | Composição da home; as seções ficam em `landing/`. |
| `landing/` | Seções da home (hero, pipeline, perfis, planos, FAQ, rodapé…). `site-header.tsx` e `content-demo.tsx` são cliente. |
| `escolas.tsx` + `schools/` | Página para escolas. `floating-badge.tsx` é o único uso direto de framer-motion. |
| `aee.tsx`, `whatsapp.tsx`, `quem-somos.tsx`, `escolas-sobrecarga.tsx` | Seções servidor. |
| `actions/` | Ilhas cliente: `DemoButton` (abre a agenda), `VideoButton`, `SupportLink` (abre o chat da Ana). |
| `i18n/` | `LanguageSwitcher`, `LanguageSuggestion` e `richTags` (marcações `<hl>`, `<strong>`, `<nowrap>` das mensagens). |
| `seo/json-ld.tsx` | Saída de dados estruturados (`@graph`). |
| `fade-in.tsx` | Animação de entrada (cliente); recebe filhos renderizados no servidor. |

## CONVENÇÕES
- Texto vem de `useTranslations('namespace')` (funciona em componente servidor não-async). Listas: `t.raw('chave')`.
- Ícones, cores e ordem ficam no componente; o texto fica nas mensagens, ligado por id.
- Um componente cliente só lê namespaces listados em `CLIENT_NAMESPACES` (`src/app/[locale]/layout.tsx`). Namespace novo usado no cliente precisa entrar lá.
- Animações: envolva seções em `<FadeIn>`.

## ANTI-PADRÕES
- Não marque uma seção inteira como `'use client'` por causa de um botão: extraia o botão para `actions/`.
- Não importe de `ui/` nas seções da landing; use classes Tailwind.
- Não busque dados nesses componentes — o conteúdo é estático.
