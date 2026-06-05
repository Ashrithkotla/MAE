# Maharshi Advanced English

Premium English coaching institute website for Vizianagaram, Andhra Pradesh — built to feel like a technology company (Stripe/Linear quality), not a coaching institute.

## Run & Operate

- `pnpm --filter @workspace/mae-website run dev` — run the website (via workflow)
- `pnpm --filter @workspace/api-server run dev` — run the API server (port varies)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React + Vite + Tailwind CSS
- Routing: wouter
- Animations: framer-motion
- Icons: lucide-react, react-icons
- UI: shadcn/ui components
- Fonts: DM Sans (headings) + Inter (body) from Google Fonts
- API: Express 5 (api-server)
- DB: PostgreSQL + Drizzle ORM (provisioned separately if needed)

## Where things live

- `artifacts/mae-website/src/` — main website source
  - `src/pages/` — page components (Home, Courses, About, etc.)
  - `src/components/` — shared components (Navbar, Footer, etc.)
  - `src/data/` — static data files (courses, testimonials, blog, faq)
  - `src/assets/` — local images (logo.png, hero.png, img1-5, trianer1.png)
  - `src/index.css` — design tokens (CSS variables), Google Fonts import
  - `src/App.tsx` — router setup with all page routes
- `artifacts/api-server/src/` — Express API server
- `lib/api-spec/openapi.yaml` — API contract (source of truth)

## Architecture decisions

- Static-first: all business content (courses, testimonials, FAQs, blogs) is hardcoded in `src/data/` TypeScript files — no backend needed for read-only content
- Design philosophy: Stripe/Linear quality — minimal, editorial, premium. 95% white/gray/near-black, indigo accent only where attention required
- Typography: DM Sans for display headings + Inter for body text — both large, generous whitespace
- Animations: framer-motion throughout — scroll-reveal, staggered counters, micro-interactions — no flashy glow or gimmicks
- Section variety enforced: no two adjacent sections use the same layout pattern (card grid prohibited back-to-back)

## Product

Multi-page marketing website for Maharshi Advanced English:
- **Home** — editorial hero, social proof, bento "Why Us", courses preview, timeline, gallery, testimonials, blog preview, FAQ accordion, CTA
- **Courses** — 4 programs: Spoken English (2mo), Grammar Mastery (8wk), Professional English (4wk), Interview Prep (3wk)
- **About** — Founder story (Ramesh Maharshi, 25yr experience), mission, impact stats
- **Success Stories** — Transformation stories, career placements, before/after
- **Blog** — Article listing + individual post pages
- **FAQ** — Accordion FAQ
- **Contact** — Lead generation: WhatsApp, phone, contact form, location map

## Business Info

- Phone/WhatsApp: +91 7286 066 661
- Email: maharshisoftskills@gmail.com
- Address: Beside Mayura Tiffins, SVB Complex, Vizianagaram - 535001, AP
- Stats: 10,000+ students, 25+ years, 98% satisfaction, 5,000+ placements

## User preferences

- Complete visual reinvention from original site — treat old site as content database only
- Design benchmark: Stripe, Linear, Vercel, Notion, Framer, Apple
- Must NOT feel like: WordPress template, coaching institute site, Bootstrap landing page
- No emojis in the UI
- Color: 95% white/gray/near-black, indigo accent only where needed
- Fonts: DM Sans + Inter, large typography, generous whitespace

## Gotchas

- Google Fonts @import must be THE VERY FIRST LINE of index.css (before @import "tailwindcss")
- All CSS custom property values are space-separated HSL (no hsl() wrapper): `--primary: 245 58% 51%`
- Images are local files at src/assets/ — always import as ES modules, not external URLs
- Do NOT explicitly import React in tsx files (Vite JSX transform handles it)
- wouter Router uses base={import.meta.env.BASE_URL.replace(/\/$/, "")} — preserve this in App.tsx

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
- Design brief preserved in attached_assets/Pasted--MAHARSHI-ADVANCED-ENGLISH-COMPLETE-DESIGN-REINVENTION-_1780657299966.txt
