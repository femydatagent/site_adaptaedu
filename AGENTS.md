# PROJECT KNOWLEDGE BASE

**Generated:** 2026-06-04
**Commit:** 5758841
**Branch:** main

## OVERVIEW

AdaptaIA — Next.js 16 + React 19 + Tailwind v4 + shadcn/ui landing site for an AI-powered educational content accessibility platform. Two-page SPA (Landing + Escolas) with client-side routing via `useState`.

## STRUCTURE

```
site_adapataai/
├── src/app/          # Next.js App Router root (layout, page, globals.css, API route)
├── src/components/   # Page-level components (landing.tsx, escolas.tsx, fade-in.tsx)
├── src/components/ui/ # shadcn/ui primitives (48 files — DO NOT hand-edit)
├── src/hooks/        # use-mobile.ts, use-toast.ts
├── src/lib/          # db.ts (Prisma), utils.ts (cn helper)
├── prisma/           # Prisma schema
├── public/           # Static assets
├── examples/         # WebSocket spike (not production)
└── .zscripts/        # Dev scripts
```

## WHERE TO LOOK

| Task | Location |
|------|----------|
| Page content / copy | `src/components/landing.tsx`, `src/components/escolas.tsx` |
| Site metadata / SEO | `src/app/layout.tsx` |
| Global CSS / design tokens | `src/app/globals.css` |
| Color palette / CSS vars | `src/app/globals.css` `:root` block |
| Routing between pages | `src/app/page.tsx` — `useState` toggle, NOT Next.js router |
| shadcn/ui components | `src/components/ui/` |
| DB access | `src/lib/db.ts` (Prisma client singleton) |
| API endpoint | `src/app/api/route.ts` |
| Animations | `framer-motion` via `FadeIn` wrapper in `src/components/fade-in.tsx` |

## CRITICAL CONVENTIONS

- **No Next.js router** — page switching is `useState<'home' | 'escolas'>` in `page.tsx`. Adding new pages requires extending this union and the conditional render.
- **`src/` alias** — imports use `@/` (maps to `./src/`). Never use relative `../../`.
- **shadcn/ui** — components in `src/components/ui/` are generated. Re-run `npx shadcn add <component>` to update; do NOT hand-edit.
- **Tailwind v4** — uses `@import "tailwindcss"` in CSS, not `@tailwind` directives. Config in `tailwind.config.ts` but v4 also reads CSS `@theme` block in `globals.css`.
- **CSS vars are hex, not HSL** — `globals.css` defines `--background: #fffbf5` (hex), but `tailwind.config.ts` wraps them as `hsl(var(...))`. This mismatch is intentional and works because the hex values happen to be valid inside `hsl()` only if you use the raw var. **Do not add new colors via `hsl(var(--x))`** — use direct hex or Tailwind palette classes.
- **`typescript.ignoreBuildErrors: true`** in `next.config.ts` — TS errors won't fail the build. Still fix them.
- **`reactStrictMode: false`** — double-render in dev is disabled.
- **Bun** is the package manager and runtime. Use `bun` not `npm`/`yarn`.

## ANTI-PATTERNS (THIS PROJECT)

- Do NOT use Next.js `<Link>` or `useRouter` for page navigation — the routing is state-based.
- Do NOT add `"use server"` — no server actions are used; all data flows through the API route.
- Do NOT import from `src/components/ui/` directly in `page.tsx` — compose via page-level components.
- Do NOT add dark mode — `darkMode: "class"` is configured but no dark theme vars exist; toggling `.dark` will break the UI.
- Do NOT use `console.log` in production components.

## COMMANDS

```bash
bun dev          # Dev server on :3000 (logs to dev.log)
bun build        # Production build (standalone output)
bun start        # Serve standalone build
bun lint         # ESLint
bun db:push      # Prisma db push
bun db:generate  # Prisma client generation
```

## NOTES

- The favicon is an external SVG from `z-cdn.chatglm.cn` — replace with a local asset before production.
- `examples/websocket/` is a spike, not wired into the app.
- `mini-services/` directory exists but is empty.
- Footer copyright says "2026" in landing, "2025" in escolas — inconsistency.
- All CTA buttons are non-functional (no `href` or `onClick` handlers pointing to real flows).
- Social proof numbers (500+ schools, 12K students) are hardcoded marketing copy.
