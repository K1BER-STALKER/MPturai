# MPturai

Informational site for our 3D real-estate scanning work: Matterport tour
portfolio, services, and contact details. Site copy is in Lithuanian.

Next.js 16 (App Router) · TypeScript · Tailwind CSS 4 · deployed on Vercel.

Frontend only for now — properties live in `src/data/properties.ts`. A real
backend gets added later without touching the pages.

> **Conventions are in [AGENTS.md](AGENTS.md) — read it before editing.**
> Claude Code loads it automatically through `CLAUDE.md`, so all three of us
> get the same rules.

## Getting started

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000.

## Adding a property

Edit **`src/data/properties.ts`** and nothing else. The listing page, the
`/objektai/<slug>` page and its metadata are all generated from that array.

`matterportId` is the `m=` value from a Matterport share link:
`https://my.matterport.com/show/?m=SxQL3iGyoDo` → `"SxQL3iGyoDo"`.

Photos are optional — drop them in `public/objektai/` and set `image`.
Without one, the card falls back to a colour placeholder.

⚠️ The file currently holds **example** entries marked `PAVYZDYS`. Replace them
with real tours before showing the site to clients.

## Scripts

| Command             | What it does                           |
| ------------------- | -------------------------------------- |
| `npm run dev`       | Dev server with hot reload             |
| `npm run build`     | Production build (same as Vercel runs) |
| `npm run start`     | Serve the production build             |
| `npm run lint`      | ESLint                                 |
| `npm run typecheck` | TypeScript, no output                  |
| `npm run format`    | Prettier, writes changes               |

Run all of them before pushing — CI runs the same checks and will fail the PR
otherwise.

## Structure

```
src/
  app/                      routes — folder + page.tsx = a URL
    layout.tsx              shell: header + footer, wraps every page
    page.tsx                /
    objektai/page.tsx       /objektai         — portfolio list
    objektai/[slug]/page.tsx  /objektai/<slug> — one tour, generated per property
    paslaugos/page.tsx      /paslaugos        — services
    kontaktai/page.tsx      /kontaktai        — contact details
    error.tsx               shown when a page throws
    loading.tsx             shown while a page's data loads
    not-found.tsx           404
    globals.css             design tokens + Tailwind import
  components/
    ui/                     button, card, container
    layout/                 site header, site footer
    property-card.tsx       portfolio card
    matterport-embed.tsx    responsive 3D tour iframe
  data/
    properties.ts           the tours — content, not code
  lib/
    config.ts               company name, contacts, nav
    properties.ts           data access (swap for a real backend here)
    utils.ts                cn(), formatDate()
  types/                    shared TypeScript types
```

## Styling

Colours are CSS variables in `src/app/globals.css`, exposed to Tailwind through
`@theme inline`. Use `bg-surface`, `text-muted`, `border-border`, `text-accent`.
Never hardcode a hex value in a component — add a token instead and dark mode
keeps working for free.

## Deployment

Every branch gets a Vercel **preview URL** on its pull request. Merging to
`main` deploys to production. Environment variables are set in the Vercel
dashboard — `.env.local` is local-only and never committed.

## Team

See [CONTRIBUTING.md](CONTRIBUTING.md) for the branch/PR workflow.
