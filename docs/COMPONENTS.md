# Components, Pages, and Data

Last updated: 2026-10-04

All paths are relative to `client/src/`. Each component lives in `components/<Name>/` with a matching `.css` file.

## Layout (every route)

### Navbar
`components/Navbar/Navbar.jsx`

- Brand block (name plus "URO-ONCOLOGY & ROBOTIC SURGERY") linking to `/`.
- Links: Home (`/`), About (`/about`), Our Services (`/#services`), Media (`/#media`), Contact (`/#contact`).
- Route links use `NavLink` for active styling; hash links use `Link`.
- Mobile menu toggled with `lucide-react` `Menu` / `X` icons; state in `isMobileMenuOpen`, closes on link click.

### Footer
`components/Footer/Footer.jsx` (section id `contact`)

- Link groups (`footerLinks`): site sections, service pages, clinic and booking links.
- Social links (`socialLinks`): LinkedIn, Instagram, YouTube, X, Facebook, using `react-icons/fa6`. Open in a new tab with `rel="noopener noreferrer"`.
- Bottom bar: copyright, developer credit (`.footer-credit`, links to https://sounakpal.dev in a new tab), and tagline.

## Home page sections (`/`, in render order)

| Component | Section id | Summary |
| --- | --- | --- |
| `Hero` | none | Headline, intro copy, portrait (`assets/doc-placeholder-nobg.png`). CTAs are `Link`s: "Book Appointment" to `/#schedule`, "View Profile" to `/about` |
| `Reviews` | `reviews` | "Voices of Healing" testimonial grid. `ReviewCard` has read-more expand state; `getTimeAgo()` formats review dates |
| `Timeline` | none | Career timeline driven by GSAP `ScrollTrigger`. Desktop (`min-width: 901px`) and mobile (`max-width: 900px`) animations set up via `gsap.matchMedia()` inside `useLayoutEffect` |
| `Services` | `services` | "Specialized Care" bento grid built from `data/services.js`; cards link to `/services/:slug`. Includes `ServicesDivider` |
| `CaseStudies` | `case-studies` | "Clinical Paths, Clearly Mapped": static `caseStudies` array |
| `CaseMediaDivider` | none | Decorative divider, `aria-hidden` |
| `MediaUpdates` | `media` | "Conferences, Talks & Clinic Notes": `updates` array with icons per type (`typeIcons`) |
| `Schedule` | `schedule` | "Consultation Schedule" for the RGCIRC Rohini clinic (`clinic` object). Shows the next three days using `Intl.DateTimeFormat("en-IN")` |

## Pages

### AboutPage
`pages/About/AboutPage.jsx` (route `/about`)

Data arrays at the top of the file: `aboutSummary`, `aboutHighlights`, `procedurePillars`, `techniqueNotes`, `education`, `experience`, `journeyHighlights`, `journeyStats`, `academicHonors`, `conferenceHonors`, `featuredHonors`, `publications`, `publicationFolders`, `memberships`, `stats`.

Sections in order: hero, profile, specialized (procedure pillars), education, experience, journey, awards, publications (research folders), memberships. Uses a shared `SectionHeader` helper and a `ProfilePracticeMark` SVG. Society logos come from `assets/`.

### ServiceDetail
`components/ServiceDetail/ServiceDetail.jsx` (route `/services/:slug`)

- Receives a `service` prop resolved in `App.jsx` by `ServiceDetailRoute`.
- Sections: hero (title, category, image), content (overview, focus, care path), related services ("Urologic oncology expertise").

### Not-found views
Defined in `App.jsx`, styled by `App.css` (`.service-not-found`):

- `ServiceNotFound`: unknown service slug, links back to `/#services`.
- `NotFound`: any unknown route, links to `/`.

## Routing helpers (`App.jsx`)

- `HomePage`: composes the home sections listed above.
- `ScrollToRouteTarget`: manual scroll restoration, scroll to top on navigation, smooth scroll to hash target.
- `ServiceDetailRoute`: reads `:slug`, calls `getServiceBySlug()`.

## Data

### `data/services.js`

- `services`: array of service objects with fields `id`, `slug`, `title`, `category`, `summary`, `image`, `imageAlt`, `focus[]`, `overview`, `carePath[]`.
- `getServiceBySlug(slug)`: returns the matching service or `undefined`.

Current slugs: `prostate-cancer`, `urinary-bladder-cancer`, `kidney-cancer`, `testicular-cancer`, `penile-cancer`, `adrenal-cancer`, `retroperitoneal-cancer`.

## Assets (`assets/`)

| File | Used by |
| --- | --- |
| `doc-placeholder-nobg.png` | Hero |
| `drskp-pfp.jpg` | Timeline, AboutPage |
| `assam-urological-society.png`, `association-of-surgeons.png`, `eau.png`, `siu.jpg`, `usi.jpg` | AboutPage memberships |
| `doctor_placeholder.png`, `hero.png` | Not currently imported |
