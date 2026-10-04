# Project Context

Last updated: 2026-10-04

## What this is

A single-page-app portfolio website for Dr. Sarbartha Kumar Pratihar, a uro-oncology and robotic surgery specialist. It presents his profile, services, patient reviews, career timeline, case paths, media updates, consultation schedule, and contact links.

## Stack

| Area | Choice |
| --- | --- |
| Framework | React 19 (JSX, function components, hooks) |
| Build tool | Vite 8 with `@vitejs/plugin-react` |
| Routing | `react-router-dom` 7 (`BrowserRouter`) |
| Animation | GSAP 3 with `ScrollTrigger` (Timeline section) |
| Icons | `lucide-react`, `react-icons` (fa6, md) |
| Linting | ESLint 10 flat config with `react-hooks` and `react-refresh` plugins |
| Styling | Plain CSS, one stylesheet per component, global tokens in `index.css` |
| Language | JavaScript (no TypeScript) |

## Repository layout

```
.
├── AGENTS.md                 Mandatory rules for all AI agents
├── CLAUDE.md / GEMINI.md     Agent-specific entry points (point to AGENTS.md)
├── .cursorrules / .windsurfrules / .github/copilot-instructions.md
├── .claude/settings.json     Disables Claude commit/PR attribution
├── CHANGELOG.md              Log of every change
├── README.md
├── docs/
│   ├── CONTEXT.md            This file
│   └── COMPONENTS.md         Component, page, and data reference
└── client/                   The Vite app
    ├── index.html
    ├── vite.config.js
    ├── eslint.config.js
    ├── public/favicon.svg
    └── src/
        ├── main.jsx          React root (StrictMode)
        ├── App.jsx           Router, routes, scroll handling, home page composition
        ├── App.css           Not-found page styles
        ├── index.css         Global reset, fonts, design tokens
        ├── assets/           Images (portraits, society logos)
        ├── components/<Name>/<Name>.jsx + <Name>.css
        ├── pages/About/AboutPage.jsx + AboutPage.css
        └── data/services.js  Service catalog and getServiceBySlug()
```

## Scripts

Run from `client/`:

| Command | Purpose |
| --- | --- |
| `npm install` | Install dependencies |
| `npm run dev` | Start the Vite dev server |
| `npm run build` | Production build to `client/dist` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Run ESLint |

## Routes

| Path | Renders |
| --- | --- |
| `/` | `HomePage`: Hero, Reviews, Timeline, Services, CaseStudies, CaseMediaDivider, MediaUpdates, Schedule |
| `/about` | `AboutPage` |
| `/services/:slug` | `ServiceDetail` for a slug in `data/services.js`, otherwise `ServiceNotFound` |
| `*` | `NotFound` |

`Navbar` and `Footer` render on every route.

Hash links (for example `/#services`) are handled by `ScrollToRouteTarget` in `App.jsx`: it sets `history.scrollRestoration` to `manual`, scrolls to the top on every route change, then smooth-scrolls to the element whose id matches the hash.

## Design tokens

Defined in `client/src/index.css`:

| Token | Value | Use |
| --- | --- | --- |
| `--color-bg` | `#f8f5f2` | Page background |
| `--color-primary` | `#1f3d3b` | Text and primary brand color |
| `--color-accent` | `#e8a87c` | Highlights, eyebrows |
| `--color-secondary-accent` | `#a3b18a` | Secondary highlights |
| `--font-heading` | Faustina (serif) | Headings |
| `--font-body` | Outfit (sans-serif) | Body text, buttons |

Fonts load from Google Fonts in `index.css`.

## Conventions

- One folder per component under `components/`, containing `Name.jsx` and `Name.css`. Pages live under `pages/`.
- Components are arrow functions with a `default` export.
- Static content (reviews, timeline entries, case studies, media updates, about page data) is declared as arrays at the top of the component file. Shared data goes in `src/data/`.
- CSS class names are kebab-case and prefixed by the component (for example `case-studies-section`, `about-section-header`).
- JSX files use double quotes and semicolons (except the Vite-generated `main.jsx`).
- Layout must stay responsive with no horizontal overflow (global `overflow-x: clip`).
- External links open in a new tab with `target="_blank"` and `rel="noopener noreferrer"`.
- No em dashes anywhere (see `AGENTS.md`).

## Known notes

- `Timeline.jsx` imports `drskp-pfp.jpg` three times under different names as placeholders.
- Service images are remote Unsplash URLs.
- `README.md` is a placeholder title only.
