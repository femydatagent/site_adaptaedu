# src/app

## OVERVIEW
Next.js App Router root. Four files — layout, page (router), globals.css, and one API route.

## FILES
| File | Purpose |
|------|---------|
| `layout.tsx` | Root layout — Geist font, metadata (title/desc/keywords), `lang="pt-BR"` |
| `page.tsx` | State-based router — `useState<'home' \| 'escolas'>` toggles between Landing and Escolas |
| `globals.css` | Tailwind v4 import, CSS vars (hex palette), custom utility classes |
| `api/route.ts` | Single API route — check before adding new endpoints |

## CONVENTIONS
- `page.tsx` is `'use client'` because it uses `useState`. This is intentional.
- To add a new page: extend the union type in `page.tsx` and add a conditional render branch.
- Metadata lives in `layout.tsx` `export const metadata`. No per-page metadata yet.
- `globals.css` defines: `.text-gradient-warm`, `.warm-glow`, `.bg-pattern-dots`, `.bg-pattern-grid`.

## ANTI-PATTERNS
- Do NOT use `useRouter` or `<Link>` — navigation is state-based.
- Do NOT add `"use server"` or server actions.
- Do NOT add dark mode CSS vars — `.dark` class has no theme defined.
- Do NOT add `hsl(var(--x))` for new colors — CSS vars are hex, not HSL values.
