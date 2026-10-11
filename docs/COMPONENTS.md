# Components, Pages, and Data

Last updated: 2026-10-12

All paths are relative to `client/src/`. Each component lives in `components/<Name>/` with a matching `.css` file.

## Layout (every route)

### Navbar
`components/Navbar/Navbar.jsx`

- Brand block (name plus "URO-ONCOLOGY & ROBOTIC SURGERY") linking to `/`.
- Links: Home (`/`), About (`/about`), Our Services (`/#services`), Patient Questions (`/patient-questions/common-questions`, shown active on any path starting with `/patient-questions` via `activePrefix`), Media (`/#media`), Contact (`/#contact`).
- Route links use `NavLink` for active styling; hash links use `Link`.
- Mobile menu toggled with `lucide-react` `Menu` / `X` icons; state in `isMobileMenuOpen`, closes on link click.

### Footer
`components/Footer/Footer.jsx` (section id `contact`)

- Link groups (`footerLinks`): Explore (site sections), Cancer Care (service pages), Patient Questions (robotic surgery and common questions pages), Contact (clinic and booking links). Four columns above 1280px, two from 1280px down, one under 640px.
- Social links (`socialLinks`): LinkedIn, Instagram, YouTube, X, Facebook, using `react-icons/fa6`. Open in a new tab with `rel="noopener noreferrer"`.
- Bottom bar: copyright, developer credit (`.footer-credit`, links to https://sounakpal.dev in a new tab), and tagline.

## Home page sections (`/`, in render order)

| Component | Section id | Summary |
| --- | --- | --- |
| `Hero` | none | Headline, intro copy, portrait (`assets/doc-placeholder-nobg.png`). CTAs are `Link`s: "Book Appointment" to `/#schedule`, "View Profile" to `/about` |
| `Reviews` | `reviews` | "Voices of Healing" testimonial grid. `ReviewCard` has read-more expand state; `getTimeAgo()` formats review dates |
| `Services` | `services` | "Specialized Care" bento grid built from `data/services.js` (eight cards; `bentoSizes`: feature, tall, then six compact); cards link to `/services/:slug`. Below the grid, a line (`.services-patient-questions`) links to both shared patient question pages. Includes `ServicesDivider` |
| `CaseStudies` | `case-studies` | "Clinical Paths, Clearly Mapped": static `caseStudies` array |
| `CaseMediaDivider` | none | Decorative divider, `aria-hidden` |
| `MediaUpdates` | `media` | "Conferences, Talks & Clinic Notes": `updates` array with icons per type (`typeIcons`) |
| `Schedule` | `schedule` | "Consultation Schedule" for the RGCIRC Rohini clinic (`clinic` object). Shows the next three days using `Intl.DateTimeFormat("en-IN")` |

## Pages

### AboutPage
`pages/About/AboutPage.jsx` (route `/about`)

Data arrays at the top of the file: `aboutSummary`, `aboutHighlights`, `procedurePillars`, `techniqueNotes`, `journeyHighlights`, `journeyStats`, `academicHonors`, `conferenceHonors`, `featuredHonors`, `publications`, `publicationFolders`, `memberships`, `stats`.

Sections in order: hero, profile, specialized (procedure pillars), education and career (`CareerTimeline`, inside `.about-education-section`), journey, awards, publications (research folders), memberships. Uses a shared `SectionHeader` helper and a `ProfilePracticeMark` SVG. Society logos come from `assets/`.

### CareerTimeline
`components/CareerTimeline/CareerTimeline.jsx` (used by AboutPage)

- Data: `timelineData` (items with `start`, `period`, `title`, `institution`, `type` of `education` or `career`, `description`), grouped by start year into `timelineRows`.
- Desktop: three-column rows, education card left, year marker on the center spine, career card right. Up to 760px: spine on the left, cards stacked on the right, empty sides hidden.
- Spine: thick tube (`.career-timeline-spine`) with a gradient fill, striped flow layer and light sparks that loop downward.
- GSAP (`gsap.matchMedia()` with `isDesktop` / `isMobile` conditions, off for reduced motion): fill clip-path and avatar (`assets/drskp-pfp.jpg`) position are scrubbed so the avatar stays at the viewport center while moving down the spine; markers get `.is-reached` with a ring burst and update the avatar year chip; cards swing in from their side (all from the right on mobile) with staggered content.

### ServiceDetail
`components/ServiceDetail/ServiceDetail.jsx` (route `/services/:slug`)

- Receives a `service` prop resolved in `App.jsx` by `ServiceDetailRoute`.
- Sections: hero (title, category, image), content (overview, focus, care path), `KeyQuestions` and the `AskTheDoctor` FAQ when `getFaqBySlug(service.slug)` returns a set (FAQ keyed by slug), related services ("Urologic oncology expertise").

### AskTheDoctor
`components/AskTheDoctor/AskTheDoctor.jsx` (section id `faq`, used by ServiceDetail)

- Prop `faq`: a set from `data/faq/`. Shows `getFaqListStages(faq)`: starred questions are left out (they are in `KeyQuestions`) and empty stages dropped. State: `stageIndex`, `questionIndex`; picking a stage resets to its first question.
- Three columns (topic sidebar, question list, answer panel) in a fixed-height panel on desktop (`clamp(620px, 100dvh - 3rem, 860px)`); each column scrolls on its own, the question list with top and bottom fades. Changing stage resets the list and answer scroll; changing question resets the answer scroll. A "N more questions" pill (`hiddenBelow` state, recounted on list scroll and by a `ResizeObserver`) sits at the bottom of the list while questions are hidden below and scrolls the list when clicked. Up to 1180px the columns narrow; up to 900px they stack, stages become horizontally scrolling chips, and picking a question smooth-scrolls to the answer.
- Stage and question buttons are real `<button>`s with `aria-pressed`; the answer panel is `aria-live="polite"`.
- Conversation motion: picking a different question or stage calls `startReply()`, which sets `isTyping` and clears it after `TYPING_DELAY` (1100ms, timer in a ref, cleared on new picks and unmount). The question bubble, typing bubble (three dots, visually hidden "is typing" text) and reply card are keyed by question id so their CSS entrance animations replay; reply points stagger via `--point-index`. Reduced motion skips the typing state and all animations. The first question on load shows without typing.
- Renders FAQPage JSON-LD for the questions it lists (`buildFaqSchema`).
- "Book a consultation" links to `/#schedule`.
- Rules for its content: `docs/PATIENT-FAQ.md`.

### KeyQuestions
`components/KeyQuestions/KeyQuestions.jsx` (used by ServiceDetail, above `AskTheDoctor`)

- Prop `faq`. Renders nothing if the set has no starred questions.
- Editorial index style: header (set title eyebrow and "Key questions", no rules), then an ordered list from `getStarredWithStage(faq)` with hairline dividers between entries. Each row is a link to `/services/:slug/:questionId` with an italic serif numeral, the stage title in small caps, the question, and an arrow.
- Two columns, one column up to 860px. Hover darkens the numeral, draws an underline under the question and nudges the arrow (off for reduced motion).

### SharedFaqLinks
`components/SharedFaqLinks/SharedFaqLinks.jsx` (used by ServiceDetail and SharedFaqPage)

- Props `exclude` (a shared set slug to leave out), `withCancers` (also list every cancer set). Two-column hairline list in the Key questions style; each row shows the question count and set title and links to `getFaqPath(faq)#faq`.
- On cancer pages: heading "Questions for every cancer", both shared sets. On shared pages: heading "More questions", the other shared set plus all cancer sets.

### SharedFaqPage
`pages/SharedFaq/SharedFaqPage.jsx` (route `/patient-questions/:slug`, resolved by `SharedFaqRoute` in `App.jsx`)

- Prop `faq` (a shared set). Header (back link to `/#services`, "Patient questions" eyebrow, title as `h1`), `KeyQuestions`, `AskTheDoctor`, `SharedFaqLinks exclude withCancers`. Sets the document `<title>`.

### FaqText
`components/FaqText/FaqText.jsx`

- Prop `text`. Renders FAQ copy and wraps every `[bracketed]` placeholder in `<mark class="faq-placeholder">` so unfilled figures stay visible.
- Cross-references (`crossReferences`): "Robotic surgery" inside "(see Robotic surgery)" or "(details under Robotic surgery)" becomes a `Link` (`.faq-cross-link`) to `/patient-questions/robotic-surgery#faq`; the text itself is unchanged.

### FaqQuestionPage
`pages/FaqQuestion/FaqQuestionPage.jsx` (route `/services/:slug/:questionId`)

- Props `faq`, `stage`, `question`, resolved in `App.jsx` by `FaqQuestionRoute`; non-starred or unknown ids render `NotFound`.
- Minimal editorial layout with no rules or grid lines (classes prefixed `kq-`): running head (back link to `/services/:slug#faq`, "Key question NN / NN"), italic numeral with stage and question as `h1`, tinted byline band (name, credentials, review date, topic), "The short answer", numbered "In detail" points, the general-guidance note, "More on this topic" (`<details>` for the same stage's non-starred questions with their answers), a sticky aside (key questions contents with `aria-current`, booking block to `/#schedule`, "More patient questions" links to the shared pages other than the current set), and previous / next links (the last one links to the FAQ). Single column up to 980px.
- Sets the document `<title>` and renders FAQPage JSON-LD for the single question.

### Not-found views
Defined in `App.jsx`, styled by `App.css` (`.service-not-found`):

- `ServiceNotFound`: unknown service slug, links back to `/#services`.
- `NotFound`: any unknown route, links to `/`.

## Routing helpers (`App.jsx`)

- `HomePage`: composes the home sections listed above.
- `ScrollToRouteTarget`: manual scroll restoration, scroll to top on navigation, smooth scroll to hash target.
- `ServiceDetailRoute`: reads `:slug`, calls `getServiceBySlug()`.
- `FaqQuestionRoute`: prop `getFaq` (`getFaqBySlug` or `getSharedFaqBySlug`); reads `:slug` and `:questionId`, resolves them with `getFaq()` and `findFaqQuestion()`, renders `FaqQuestionPage` for starred questions only.
- `SharedFaqRoute`: resolves `/patient-questions/:slug` with `getSharedFaqBySlug()`, renders `SharedFaqPage` or `NotFound`.

## Data

### `data/services.js`

- `services`: array of service objects with fields `id`, `slug`, `title`, `category`, `summary`, `image`, `imageAlt`, `focus[]`, `overview`, `carePath[]`.
- `getServiceBySlug(slug)`: returns the matching service or `undefined`.

Current slugs: `prostate-cancer`, `urinary-bladder-cancer`, `kidney-cancer`, `ureter-renal-pelvis-cancer`, `testicular-cancer`, `penile-cancer`, `adrenal-cancer`, `retroperitoneal-cancer`.

### `data/faq/`

Patient FAQ content, one file per set (rules and shape: `docs/PATIENT-FAQ.md`).

- `prostate.js`: `prostateFaq` (slug `prostate-cancer`, 4 stages, 47 questions, 10 starred).
- `kidney.js`: `kidneyFaq` (slug `kidney-cancer`, 4 stages, 33 questions, 4 starred).
- `bladder.js`: `bladderFaq` (slug `urinary-bladder-cancer`, 37 questions, 7 starred).
- `upperTract.js`: `upperTractFaq` (slug `ureter-renal-pelvis-cancer`, 20 questions, 3 starred).
- `penile.js`: `penileFaq` (slug `penile-cancer`, 25 questions, 4 starred).
- `testicular.js`: `testicularFaq` (slug `testicular-cancer`, 30 questions, 5 starred).
- `adrenal.js`: `adrenalFaq` (slug `adrenal-cancer`, 23 questions, 3 starred).
- `retroperitoneal.js`: `retroperitonealFaq` (slug `retroperitoneal-cancer`, 19 questions, 4 starred).
- `robotic.js`: `roboticFaq` (shared, slug `robotic-surgery`, 4 groups, 28 questions, 5 starred).
- `common.js`: `commonFaq` (shared, slug `common-questions`, 5 groups, 28 questions, 5 starred).
- `index.js`: `doctorName`, `faqSets` (cancer sets), `sharedFaqSets`, `getFaqBySlug(slug)` (cancer sets only), `getSharedFaqBySlug(slug)`, `getFaqPath(faq)` (`/services/:slug` or `/patient-questions/:slug`), `findFaqQuestion(faq, questionId)` (returns `{ stage, question }` or `null`), `getFaqListStages(faq)` (stages without starred questions, empty stages dropped), `getStarredWithStage(faq)` (`{ stage, question }` for each starred question), `getStarredQuestions(faq)`, `buildFaqSchema(questions)` (FAQPage JSON-LD string).

## Assets (`assets/`)

| File | Used by |
| --- | --- |
| `doc-placeholder-nobg.png` | Hero |
| `drskp-pfp.jpg` | AboutPage, CareerTimeline avatar |
| `assam-urological-society.png`, `association-of-surgeons.png`, `eau.png`, `siu.jpg`, `usi.jpg` | AboutPage memberships |
| `doctor_placeholder.png`, `hero.png` | Not currently imported |
