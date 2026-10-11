# Changelog

All changes to this project are recorded here, no matter how small. Every AI agent and contributor must add an entry for each change (see `AGENTS.md`).

Format: entries are grouped under `## [Unreleased]` until the owner asks for a release heading. Groups: Added, Changed, Fixed, Removed, Docs, Chore. Each entry lists the date (YYYY-MM-DD) and the files touched.

## [Unreleased]

### Added
- 2026-10-12: "Key questions" row of cards above the "Ask the doctor" FAQ on cancer pages (`KeyQuestions`): one numbered card per starred question, showing its stage and question and linking to its own page. Five columns on desktop, three under 1180px, a horizontal snap-scrolling row under 760px. Files: `client/src/components/KeyQuestions/KeyQuestions.jsx`, `client/src/components/KeyQuestions/KeyQuestions.css`, `client/src/components/ServiceDetail/ServiceDetail.jsx`, `client/src/data/faq/index.js`.
- 2026-10-12: Prostate cancer patient FAQ ("Ask the doctor", design B) on `/services/prostate-cancer` (section `#faq`): 47 questions in 4 stages from the doctor's question bank and answer outlines, used as written (only em dashes replaced). Topic sidebar, question list and consultation-notes answer panel; stacks with scrolling stage chips under 900px. FAQPage JSON-LD for all questions. Bracketed placeholders, credentials and review date render highlighted via `FaqText`. Each of the 10 starred questions has its own page at `/services/prostate-cancer/:questionId` with a reviewer block, page title, single-question JSON-LD, booking strip and links to the other starred questions. Files: `client/src/data/faq/prostate.js`, `client/src/data/faq/index.js`, `client/src/components/AskTheDoctor/AskTheDoctor.jsx`, `client/src/components/AskTheDoctor/AskTheDoctor.css`, `client/src/components/FaqText/FaqText.jsx`, `client/src/components/FaqText/FaqText.css`, `client/src/pages/FaqQuestion/FaqQuestionPage.jsx`, `client/src/pages/FaqQuestion/FaqQuestionPage.css`, `client/src/components/ServiceDetail/ServiceDetail.jsx`, `client/src/App.jsx`.
- 2026-10-04: About page Education & Career timeline (`CareerTimeline`): a top-to-bottom timeline with education cards left of the spine and career cards right, grouped by start year. The spine is a thick tube whose striped fill flows downward with moving light sparks inside, and fills with scroll. A circular avatar of the doctor travels down the spine with scroll, showing the current year, and each year marker lights up with a ring burst as the avatar reaches it. Cards swing in from their side with staggered content. On screens up to 760px the spine moves to the left and cards stack. Respects `prefers-reduced-motion`. Files: `client/src/components/CareerTimeline/CareerTimeline.jsx`, `client/src/components/CareerTimeline/CareerTimeline.css`, `client/src/pages/About/AboutPage.jsx`.
- 2026-10-04: Developer credit "Designed & built by Sounak Pal" in the footer bottom bar, linking to https://sounakpal.dev in a new tab, with a `.footer-credit` link style. Files: `client/src/components/Footer/Footer.jsx`, `client/src/components/Footer/Footer.css`.
- 2026-10-04: Dev server launch config (`client`, port 5173) for the Claude desktop browser preview. Files: `.claude/launch.json`.

### Changed
- 2026-10-12: Removed the double rule and hairline around the Key questions header. The hairline dividers between entries stay (removed, then restored at the owner's request). Files: `client/src/components/KeyQuestions/KeyQuestions.css`.
- 2026-10-12: Redesigned the starred question pages (`FaqQuestionPage`) in a minimal editorial style with no rules or grid lines: running head (back link, "Key question 03 / 10"), large italic numeral beside the stage and question, a tinted byline band (doctor, credentials, review date, topic), "The short answer" and numbered "In detail" points, the general-guidance note, "More on this topic" (the same stage's non-starred questions as expandable answers), a sticky aside with the key questions contents list (current one marked) and a booking block, and previous / next page links (the last links back to the FAQ). Single column under 980px. Only the doctor's existing text is used. Files: `client/src/pages/FaqQuestion/FaqQuestionPage.jsx`, `client/src/pages/FaqQuestion/FaqQuestionPage.css`.
- 2026-10-12: Removed the "Each answer has its own page." line and the entry count from the Key questions header. Files: `client/src/components/KeyQuestions/KeyQuestions.jsx`, `client/src/components/KeyQuestions/KeyQuestions.css`.
- 2026-10-12: Restyled Key questions from rounded white cards into a minimal editorial index, like a journal contents page: double rule above the header, "Each answer has its own page." in italic with an entry count, a two-column list (one column under 860px, no sideways scrolling on phones) with large italic serif numerals, small-caps stage labels and hairline dividers. No boxes, rounded corners or shadows; on hover the numeral darkens, an underline draws under the question and the arrow nudges. Files: `client/src/components/KeyQuestions/KeyQuestions.jsx`, `client/src/components/KeyQuestions/KeyQuestions.css`.
- 2026-10-12: Starred questions are no longer listed in the "Ask the doctor" FAQ (they live in Key questions and on their own pages, per the doctor's rules). The FAQ now shows the 37 non-starred prostate questions (stage counts 8, 7, 11, 11), its FAQPage JSON-LD covers only those, empty stages are dropped, and the star icon and "Open this answer as a page" link were removed. Files: `client/src/components/AskTheDoctor/AskTheDoctor.jsx`, `client/src/components/AskTheDoctor/AskTheDoctor.css`, `client/src/data/faq/index.js`.
- 2026-10-12: "Ask the doctor" question list shows a "N more questions" pill at the bottom while questions are hidden below on desktop. It counts the hidden questions, updates on scroll and resize (`ResizeObserver`), scrolls the list down when clicked, and hides at the end of the list and on stacked layouts. Its arrow nudge is off for reduced motion. Files: `client/src/components/AskTheDoctor/AskTheDoctor.jsx`, `client/src/components/AskTheDoctor/AskTheDoctor.css`.
- 2026-10-12: "Ask the doctor" FAQ is now a fixed-height panel on desktop (fits the screen, 620 to 860px tall) instead of growing with the longest question list. The question list scrolls inside its column with soft top and bottom fades, the sidebar and answer stay in place, and switching stage or question resets the inner scroll. Under 900px the stacked layout is unchanged. Fixes the sidebar content sliding away and leaving an empty green column while scrolling. Files: `client/src/components/AskTheDoctor/AskTheDoctor.jsx`, `client/src/components/AskTheDoctor/AskTheDoctor.css`.
- 2026-10-04: Added more GSAP motion to the Education & Career section: masked title word reveal, spinning column icons, a glowing head that travels down each rail and lights up dots (with a ring burst) as it reaches them, 3D swing plus clip-path card entrances with staggered content, counting period years, and a pointer-following card tilt with a spotlight on hover. Animations replay in reverse when scrolling back up and stay off for reduced motion. Files: `client/src/components/Timeline/Timeline.jsx`, `client/src/components/Timeline/Timeline.css`.
- 2026-10-04: Redesigned the home page Education & Career section. Replaced the pinned horizontal scroller with repeated portrait placeholders by two side-by-side columns (Education, Career), each with a vertical rail and dated cards. GSAP: header fades up, each rail draws itself as you scroll (scrubbed), and each milestone dot pops before its card slides in. Respects `prefers-reduced-motion`. Columns stack on screens up to 900px. Career entries now have real descriptions instead of "Lorem Ipsum", the DaVinci entry gained an institution, and the placeholder image imports were removed. Files: `client/src/components/Timeline/Timeline.jsx`, `client/src/components/Timeline/Timeline.css`.

### Removed
- 2026-10-04: Education & Career section removed from the home page, and the `Timeline` component deleted (its content now lives in the About page `CareerTimeline`). Files: `client/src/App.jsx`, `client/src/components/Timeline/Timeline.jsx`, `client/src/components/Timeline/Timeline.css`.
- 2026-10-04: About page "Training Path" (education cards) and "Clinical Roles" (experience list) sections, their `education` and `experience` data arrays, the unused `Briefcase` import, and their now-unused styles (`.about-record-*`, `.clinical-track*`, `.about-experience-section` decorations), replaced by `CareerTimeline`. Files: `client/src/pages/About/AboutPage.jsx`, `client/src/pages/About/AboutPage.css`.

### Fixed
- 2026-10-04: Hero "Book Appointment" and "View Profile" buttons did nothing. They are now router links to `/#schedule` and `/about`, styled as inline-flex so the label stays centered (including full width on mobile). Files: `client/src/components/Hero/Hero.jsx`, `client/src/components/Hero/Hero.css`.
- 2026-10-04: Facebook social link was labeled "X", giving it the wrong `aria-label` and a duplicate React `key` with the X link. Relabeled to "Facebook". Files: `client/src/components/Footer/Footer.jsx`.
- 2026-10-04: Footer Contact links (Book Appointment, Online Consultation, Media Updates) used `#schedule` / `#media` without a leading `/`, so they did nothing off the home page. Changed to `/#schedule` and `/#media`. Files: `client/src/components/Footer/Footer.jsx`.

### Docs
- 2026-10-12: Documented the prostate FAQ build: `AskTheDoctor`, `FaqText`, `FaqQuestionPage`, `FaqQuestionRoute`, `data/faq/`, the new route, placeholder and SPA notes; marked the FAQ page structure, UI mapping and data shape as built. Files: `docs/COMPONENTS.md`, `docs/CONTEXT.md`, `docs/PATIENT-FAQ.md`.
- 2026-10-12: Patient FAQ rules: credentials and review date render as `[credentials]` and `[review date]` until supplied. Files: `docs/PATIENT-FAQ.md`.
- 2026-10-12: Patient FAQ rules updated per owner: bracketed placeholders are shown as written (not hidden) and listed after each build; the doctor's content is used without rewording, cuts or skips, including sexual-health questions (the earlier no-18+ rule is withdrawn). Files: `docs/PATIENT-FAQ.md`.
- 2026-10-12: Added `docs/PATIENT-FAQ.md` with the doctor's rules for the patient FAQ pages (journey stages, starred questions, answer shape, schema and review date, no promotional wording, placeholders, languages) and the proposed page structure, UI and data shape. Linked it from the repository layout and conventions. Files: `docs/PATIENT-FAQ.md`, `docs/CONTEXT.md`.
- 2026-10-05: Added `.gitignore` and `design-videos/` to the repository layout. Files: `docs/CONTEXT.md`.
- 2026-10-04: Documented `CareerTimeline`, the About page section change, and the home page removal; moved the footer credit changelog entry back under Added. Files: `docs/COMPONENTS.md`, `docs/CONTEXT.md`, `CHANGELOG.md`.
- 2026-10-04: Documented the new Timeline animations. Files: `docs/COMPONENTS.md`, `docs/CONTEXT.md`.
- 2026-10-04: Updated the Timeline entry, removed it from the `drskp-pfp.jpg` asset users, dropped the fixed triple-import known note, and added notes on career copy and the launch config. Files: `docs/COMPONENTS.md`, `docs/CONTEXT.md`.
- 2026-10-04: Documented the Hero call-to-action links. Files: `docs/COMPONENTS.md`.
- 2026-10-04: Documented the footer developer credit. Files: `docs/COMPONENTS.md`.
- 2026-10-04: Removed the two fixed Footer bugs from Known notes. Files: `docs/CONTEXT.md`.
- 2026-10-04: Added `AGENTS.md` with mandatory rules for all AI agents: no em dashes, document every change, never commit without explicit instruction, no co-author or agent attribution. Files: `AGENTS.md`.
- 2026-10-04: Added agent entry points that point to `AGENTS.md`. Files: `CLAUDE.md`, `GEMINI.md`, `.cursorrules`, `.windsurfrules`, `.github/copilot-instructions.md`.
- 2026-10-04: Added project context and component reference docs. Files: `docs/CONTEXT.md`, `docs/COMPONENTS.md`.
- 2026-10-04: Added this changelog, backfilled from git history. Files: `CHANGELOG.md`.

### Chore
- 2026-10-05: Added six walkthrough videos of the patient Q&A design concepts (A to F) in `design-videos/`, and a root `.gitignore` that keeps that folder out of git. Files: `.gitignore`, `design-videos/*.mp4` (untracked).
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
