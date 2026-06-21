# src/components

## OVERVIEW
Page-level React components for the two-page SPA. Three files total — keep it flat.

## FILES
| File | Purpose |
|------|---------|
| `landing.tsx` | Main landing page (777 lines) — hero, pipeline, profiles, plans, testimonials, footer |
| `escolas.tsx` | Schools management page (687 lines) — dashboard mockup, features, packages |
| `fade-in.tsx` | Reusable `FadeIn` wrapper using framer-motion `whileInView` |

## CONVENTIONS
- All components are `'use client'` — no RSC here.
- Props interface is minimal: `onNavigateEscolas` / `onNavigateHome` callbacks only.
- Data arrays (profiles, plans, testimonials) are module-level constants, not fetched.
- Icons come from `lucide-react`. Custom SVG icons (e.g. `EarIcon`) are defined inline at top of file.
- Animations: wrap sections in `<FadeIn delay={n}>` — never use `motion.*` directly in landing/escolas except for floating badges.

## ANTI-PATTERNS
- Do NOT add state beyond UI interaction (content type selector, adaptation toggles).
- Do NOT fetch data inside these components — all content is static copy.
- Do NOT import from `../ui/` directly — use Tailwind classes instead of shadcn primitives here.
- Do NOT split into sub-components unless a section exceeds ~200 lines and is clearly reusable.
