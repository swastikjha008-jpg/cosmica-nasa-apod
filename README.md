# Cosmica

A cinematic, NASA-inspired space exploration site. A WebGL black hole hero
leads into a gallery built on NASA's Astronomy Picture of the Day (APOD)
API, with a small styled-components ripple loader for the loading states.

## Tech stack

- Next.js (App Router) + TypeScript
- Tailwind CSS
- React
- NASA Open API (APOD)
- pnpm

Frontend-only. No database, no authentication.

## NASA API setup

1. Get a free API key at https://api.nasa.gov (instant, email only).
2. Copy `.env.example` to `.env.local`:

   ```bash
   cp .env.example .env.local
   ```

3. Set your key:

   ```
   NASA_API_KEY=your_real_key_here
   ```

   Without a key, the app falls back to NASA's shared `DEMO_KEY`, which
   works for local development but is rate-limited — use a real key before
   deploying.

## Development

```bash
pnpm install
pnpm dev
```

Open http://localhost:3000.

## Data & caching

All NASA requests go through `lib/nasa.ts`, a single service layer with
three functions: `getAPOD()`, `getAPODByDate(date)`, and
`getRecentAPODs(days)`. Every request is cached with
`next: { revalidate: 86400 }`, so the gallery is refetched from NASA at
most once every 24 hours — a browser refresh never triggers a new request.

## Build

```bash
pnpm build
pnpm start
```

## Deployment (Vercel)

1. Push this repo to GitHub.
2. Import it into Vercel.
3. Add an environment variable: `NASA_API_KEY` = your key.
4. Deploy. No other configuration is required.

## Structure

```
app/
  page.tsx                homepage (black-hole hero + gallery)
  explore/
    page.tsx               full APOD gallery + search
    [date]/page.tsx         single APOD detail view
components/
  ui/                       drop-in third-party components, kept as-given
    loader-4.tsx             styled-components ripple loader
    demo.tsx                 usage example for loader-4
  BlackHoleHeroSection.tsx  WebGL black-hole hero (unmodified)
  StyledComponentsRegistry.tsx  SSR registry for styled-components
  Logo.tsx                  Cosmica logomark (SVG)
  Navbar.tsx
  HeroContent.tsx
  SearchBar.tsx
  APODCard.tsx
  APODGrid.tsx
  GallerySection.tsx        client-side search + grid wiring
  LoadingState.tsx           wraps the ripple loader for Suspense fallbacks
  EmptyState.tsx
  ErrorState.tsx
  Footer.tsx
lib/
  nasa.ts                   NASA API service layer + caching
```

## Component library conventions

This project isn't a shadcn/ui project — there's no `components.json` and
no shadcn CLI in the dependency tree. `components/ui/` exists anyway,
following the same convention shadcn uses: it's the folder for drop-in,
third-party or design-system components that should be kept close to how
they were given, separate from `components/`, which holds this app's own
composed components. If you do want actual shadcn/ui components later:

```bash
pnpm dlx shadcn@latest init
pnpm dlx shadcn@latest add button
```

The CLI will detect Tailwind and TypeScript are already set up and will
write new primitives straight into `components/ui/` alongside `loader-4.tsx`.

## Styled-components

`loader-4.tsx` uses `styled-components` rather than Tailwind, so it needs:

- the `styledComponents: true` compiler flag in `next.config.ts` (already set)
- `components/StyledComponentsRegistry.tsx`, wrapped around `children` in
  `app/layout.tsx`, so the CSS it generates is flushed into the initial
  server-rendered HTML instead of flashing in after hydration

Both are already wired up — no extra setup needed to use `Loader` elsewhere.
