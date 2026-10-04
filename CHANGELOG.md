# Changelog

All changes to this project are recorded here, no matter how small. Every AI agent and contributor must add an entry for each change (see `AGENTS.md`).

Format: entries are grouped under `## [Unreleased]` until the owner asks for a release heading. Groups: Added, Changed, Fixed, Removed, Docs, Chore. Each entry lists the date (YYYY-MM-DD) and the files touched.

## [Unreleased]

### Added
- 2026-10-04: Developer credit "Designed & built by Sounak Pal" in the footer bottom bar, linking to https://sounakpal.dev in a new tab, with a `.footer-credit` link style. Files: `client/src/components/Footer/Footer.jsx`, `client/src/components/Footer/Footer.css`.

### Fixed
- 2026-10-04: Hero "Book Appointment" and "View Profile" buttons did nothing. They are now router links to `/#schedule` and `/about`, styled as inline-flex so the label stays centered (including full width on mobile). Files: `client/src/components/Hero/Hero.jsx`, `client/src/components/Hero/Hero.css`.
- 2026-10-04: Facebook social link was labeled "X", giving it the wrong `aria-label` and a duplicate React `key` with the X link. Relabeled to "Facebook". Files: `client/src/components/Footer/Footer.jsx`.
- 2026-10-04: Footer Contact links (Book Appointment, Online Consultation, Media Updates) used `#schedule` / `#media` without a leading `/`, so they did nothing off the home page. Changed to `/#schedule` and `/#media`. Files: `client/src/components/Footer/Footer.jsx`.

### Docs
- 2026-10-04: Documented the Hero call-to-action links. Files: `docs/COMPONENTS.md`.
- 2026-10-04: Documented the footer developer credit. Files: `docs/COMPONENTS.md`.
- 2026-10-04: Removed the two fixed Footer bugs from Known notes. Files: `docs/CONTEXT.md`.
- 2026-10-04: Added `AGENTS.md` with mandatory rules for all AI agents: no em dashes, document every change, never commit without explicit instruction, no co-author or agent attribution. Files: `AGENTS.md`.
- 2026-10-04: Added agent entry points that point to `AGENTS.md`. Files: `CLAUDE.md`, `GEMINI.md`, `.cursorrules`, `.windsurfrules`, `.github/copilot-instructions.md`.
- 2026-10-04: Added project context and component reference docs. Files: `docs/CONTEXT.md`, `docs/COMPONENTS.md`.
- 2026-10-04: Added this changelog, backfilled from git history. Files: `CHANGELOG.md`.

### Chore
- 2026-10-04: Disabled Claude Code commit and PR attribution for this project. Files: `.claude/settings.json`.
- 2026-10-04: Audited the repository for em dashes (literal and escaped forms). None found, nothing replaced.

## History (backfilled from git, pre-changelog)

### 2026-05-20
- `7633715` Changed: scrolling behavior and performance using `useLayoutEffect` in `ScrollToRouteTarget` and `Timeline`; added `ProfilePracticeMark` SVG to `AboutPage`.
- `081b729` Added: `AboutPage` with profile, expertise, education, experience, and publications.
- `3c3c97c` Fixed: social media links open in a new tab with security attributes.
- `0ef2c40` Added: Facebook link in `Footer` social section.
- `172f1f5` Changed: `Navbar` and `Footer` responsive layout adjustments.
- `897629d` Changed: responsive design and layout adjustments across components.
- `ef0e84a` Added: `Footer` component with navigation and social links.
- `5dc39e7` Added: `CaseMediaDivider` on the home page. Changed: `CaseStudies`, `MediaUpdates`, and `Schedule` styles and SVG elements.
- `b4e2f87` Added: `MediaUpdates` component.
- `54429f8` Added: `Schedule` component for clinic availability.
- `60c617a` Changed: `CaseStudies` and `Services` layout and animations.
- `da3fa3c` Added: service detail page. Changed: reviews.

### 2026-05-10
- `c6e1c5e` Added: `Reviews` and bento-grid `Services` components.

### 2026-05-05
- `d5f053a` Changed: code structure refactor for readability.
- `71dbf60` Added: `Timeline` component with GSAP animations.
- `65c9ea8` Added: `Reviews` testimonial grid with read-more.
- `92c969b` Added: responsive `Navbar`.
- `e00bec4` Added: React client initialized with Vite, base components, and assets.
- `b1c5b59` Initial commit.
