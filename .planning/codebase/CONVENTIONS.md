---
date: 2026-06-05
---

# Conventions — AdaptaIA

## TypeScript Configuration

| Setting | Value | Notes |
|---------|-------|-------|
| `strict` | true | All strict mode flags enabled |
| `noImplicitAny` | false | Allows `any` in non-explicit positions |
| `isolatedModules` | true | Required for Next.js |
| `target` | ES2017 | Compiled down to ES2017 |
| `paths` | `@/*` → `./src/*` | Absolute path aliases via `@/` |
| `jsx` | `react-jsx` | Automatic JSX runtime (React 17+) |

## ESLint Rules — Almost All Disabled

`eslint.config.mjs` disables 25+ rules including:
- All `@typescript-eslint/*` rules (no type safety checks)
- `react-hooks/exhaustive-deps`, `react-hooks/purity` (no hook dependency validation)
- `no-unused-vars`, `prefer-const` (no unused var enforcement)
- `no-console` (console.log allowed)
- `no-empty`, `no-irregular-whitespace`, `no-case-declarations`, `no-fallthrough`

This effectively means **ESLint provides no linting** beyond the base Next.js rules from `eslint-config-next`.

## CSS & Styling Conventions

### Tailwind v4 Usage

- No `@tailwind` directives — uses `@import "tailwindcss"` in CSS
- No `@apply` directive except in `@layer base` base styles
- Color palette defined via CSS custom properties in `:root` block in `globals.css`
- All color vars use **hex values** (`#fffbf5`, `#1c1917`, `#f59e0b`)
- Custom utility classes: `.text-gradient-warm`, `.warm-glow`, `.bg-pattern-dots`, `.bg-pattern-grid`
- Global: `scroll-behavior: smooth`

### Tailwind Config Pattern

`tailwind.config.ts` maps CSS custom properties to logical names (`primary`, `secondary`, `muted`, `destructive`, `foreground`, `background`) using `hsl(var(--name))`.

### shadcn/ui

- 48 component primitives installed in `src/components/ui/`
- Style: "new-york" (as of `components.json`)
- Icon library: `lucide`
- CSS variables: enabled
- **However**: Page-level components (`landing.tsx`, `escolas.tsx`) do **NOT** use these shadcn components — they use raw Tailwind utility classes directly

## React Component Patterns

### Component Shape

All components use simple prop interfaces:
```typescript
export default function Landing({ onNavigateEscolas }: { onNavigateEscolas: () => void })
export default function Escolas({ onNavigateHome }: { onNavigateHome: () => void })
```

Only two props exist across the entire app: navigation callbacks.

### State Management

- `useState` for local UI state (scroll tracking, mobile menu, content selection)
- No `useContext`, no Redux, no Zustand usage in components
- No server state management (TanStack Query installed but unused)

### Animation

- All animations go through `FadeIn` wrapper from `src/components/fade-in.tsx`
- Uses `framer-motion` `whileInView` with staggered delay prop
- Custom floating animations use `motion.animate` directly for badge elements
- No CSS transitions outside of Tailwind utility classes

### Server/Client Boundaries

| File | Type | Reason |
|------|------|--------|
| `src/app/page.tsx` | Client | Uses `useState` |
| `src/app/layout.tsx` | Server | Default — metadata, no hooks |
| `src/app/blog/[slug]/page.tsx` | Server | Default |
| `src/app/blog/page.tsx` | Server | Default |
| `src/app/api/route.ts` | Server | API route (edge runtime) |
| `src/components/landing.tsx` | Client | Uses `useState`, `useEffect`, event handlers |
| `src/components/escolas.tsx` | Client | Uses `useState`, event handlers |
| `src/components/fade-in.tsx` | Client | Uses `framer-motion` |
| `src/hooks/use-mobile.ts` | Client | Browser API (`matchMedia`) |
| `src/hooks/use-toast.ts` | Client | DOM manipulation |
| `src/lib/db.ts` | Server | Prisma client |

## Error Handling

- No error boundaries
- No try/catch in page components
- No error toast handling
- No error page (`error.tsx`, `not-found.tsx`) defined
- The only error handling is in the `scroll` event cleanup in `landing.tsx`

## Date Handling

- `date-fns` installed but unused
- Blog post dates stored as ISO strings in `posts.ts`
- No date formatting library in use on pages
