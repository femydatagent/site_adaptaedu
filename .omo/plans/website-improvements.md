# Website Improvements & Corrections Plan
**Project:** AdaptaIA Landing Site
**Date:** 2026-06-04
**Stack:** Next.js 16 + React 19 + Tailwind v4 + shadcn/ui + framer-motion

---

## FINDINGS SUMMARY

### Bugs / Corrections (must fix)
1. **Footer copyright year mismatch** — `landing.tsx:765` says "2026", `escolas.tsx:681` says "2025"
2. **External favicon** — `layout.tsx:25` points to `z-cdn.chatglm.cn` (third-party CDN, breaks offline, privacy risk)
3. **All CTA buttons non-functional** — no `href` or `onClick` handlers on any primary action button
4. **Header transparent on scroll** — nav has `bg-transparent` class but no scroll listener to add background; content bleeds through on scroll
5. **Mobile nav missing** — header hides nav links on mobile (`hidden md:flex`) with no hamburger/drawer fallback
6. **`tailwind.config.ts` content paths wrong** — points to `./pages/**`, `./components/**`, `./app/**` (no `src/` prefix) — Tailwind v4 may not purge correctly
7. **`text-gradient-warm` in footer on dark bg** — `bg-clip-text` with `text-transparent` on `bg-slate-900` footer renders invisible in some browsers without explicit color fallback

### UX / Quality Improvements (high value)
8. **Hero image placeholder** — the "AdaptaIA em ação" box is a placeholder with no real screenshot or demo
9. **Interactive demo section non-functional** — content type selector and adaptation toggles have state but no visual output/feedback
10. **No scroll-to-top button** — long single-page with no way to return to top
11. **No mobile menu** — mobile users see only logo + CTA button, no navigation
12. **Missing `aria-label` on icon-only buttons** — "Entrar" and CTA buttons lack accessible labels
13. **No `rel="noopener noreferrer"` on footer social links** — `target="_blank"` without rel (security)
14. **Footer links all `href="#"`** — Privacidade, Termos, LGPD, social links all dead
15. **`FadeIn` wraps non-semantic divs** — adds extra `<div>` wrappers that break flex/grid layouts in some sections

### Performance / Technical Debt
16. **`typescript.ignoreBuildErrors: true`** — masks real TS errors; should be removed after fixing any existing errors
17. **`reactStrictMode: false`** — should be enabled; was disabled to hide double-render issues
18. **No `viewport` meta tag** — `layout.tsx` metadata missing `viewport` for mobile optimization
19. **No OG/Twitter meta tags** — missing social sharing metadata
20. **Unused dependencies** — `@dnd-kit/*`, `@mdxeditor/editor`, `next-auth`, `next-intl`, `next-themes`, `recharts`, `zustand` etc. installed but not used in the landing site

---

## TODOs

### Phase 1 — Bug Fixes (Corrections)

- [x] 1. Fix footer copyright year — Change `escolas.tsx:681` from "2025" to "2026" to match landing.tsx
- [x] 2. Replace external favicon — Create/add local SVG favicon to `public/favicon.svg`, update `layout.tsx` icon reference
- [x] 3. Fix Tailwind content paths — Update `tailwind.config.ts` content array to include `src/` prefix: `./src/pages/**`, `./src/components/**`, `./src/app/**`
- [x] 4. Fix header scroll behavior — Add scroll listener in `landing.tsx` header to toggle `bg-white/80 backdrop-blur-lg border-b border-border shadow-sm` class when `scrollY > 10`
- [x] 5. Add `rel="noopener noreferrer"` to footer social links — Fix `landing.tsx` footer LinkedIn, Instagram, YouTube, Fale Conosco links

### Phase 2 — UX Improvements

- [x] 6. Add mobile navigation drawer — Add hamburger button + Sheet/drawer from shadcn/ui in `landing.tsx` header for mobile nav links
- [x] 7. Add scroll-to-top button — Floating button that appears after scrolling 400px, smooth-scrolls to top
- [x] 8. Add `aria-label` to icon-only and ambiguous buttons — "Entrar", CTA buttons, social links
- [x] 9. Add viewport and OG meta tags — Update `layout.tsx` metadata with `viewport`, `openGraph`, `twitter` fields
- [x] 10. Make interactive demo section give visual feedback — When content type is selected + adaptations chosen, show a preview card with sample adapted text output

### Phase 3 — Polish & SEO

- [x] 11. Add real hero screenshot/mockup — Replace placeholder `aspect-video` box with a more detailed UI mockup component
- [x] 12. Fix `text-gradient-warm` in dark footer — Add explicit color fallback for browsers that don't support `bg-clip-text`
- [x] 13. Add structured data (JSON-LD) — Add `SoftwareApplication` schema to `layout.tsx` for SEO
- [x] 14. Enable `reactStrictMode` — Set `reactStrictMode: true` in `next.config.ts` and fix any double-render issues

## Final Verification Wave

- [x] F1. Build passes — `bun build` exits 0 with no errors
- [x] F2. Lint passes — `bun lint` exits 0
- [x] F3. Visual review — All pages render correctly on mobile (375px) and desktop (1440px), no broken layouts
- [x] F4. Accessibility check — No missing aria-labels, all interactive elements keyboard-navigable

---

## IMPLEMENTATION NOTES

### Task 4 — Header scroll (pattern)
```tsx
const [scrolled, setScrolled] = useState(false);
useEffect(() => {
  const handler = () => setScrolled(window.scrollY > 10);
  window.addEventListener('scroll', handler, { passive: true });
  return () => window.removeEventListener('scroll', handler);
}, []);
// Apply: className={`fixed top-0 ... transition-all ${scrolled ? 'bg-white/80 backdrop-blur-lg border-b border-border shadow-sm' : 'bg-transparent'}`}
```

### Task 6 — Mobile nav (use shadcn Sheet)
```tsx
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
// Hamburger button visible on mobile, Sheet slides in with nav links
```

### Task 9 — Metadata additions
```tsx
export const metadata: Metadata = {
  // existing...
  openGraph: {
    title: 'AdaptaIA - Educação de qualidade para todos',
    description: '...',
    type: 'website',
    locale: 'pt_BR',
  },
  twitter: { card: 'summary_large_image' },
};
```

### Priority Order
1. Tasks 1, 3, 5 — trivial, zero risk
2. Tasks 4, 2 — low risk, high impact
3. Tasks 6, 7, 8, 9 — medium effort, high value
4. Tasks 10, 11, 12, 13, 14 — polish/optional
