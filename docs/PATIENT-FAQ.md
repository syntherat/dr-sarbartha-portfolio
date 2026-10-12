# Patient FAQ Guidelines

Last updated: 2026-10-12

Rules for writing and building the patient question pages (one page per cancer type, plus shared pages). Source: Dr. Sarbartha Kumar Pratihar's "Patient FAQ Question Bank" (2026-10-05) and "Patient FAQ Answer Outlines" (2026-10-08). Read this file before adding or editing any FAQ content or FAQ component.

Status: all eight cancer sets and both shared pages built (2026-10-12). Content is added only from the owner's paste for that cancer.

## 1. Editorial rules (from the doctor)

1. **Journey stages.** Every cancer's questions are grouped into four stages: "Is it cancer?" (symptoms, causes, risk), "Tests and reports", "Treatment choices and surgery", "Life after treatment". Robotic surgery and the common questions use their own groups (see section 3).
2. **Starred questions first.** Questions marked with a star are written first and each gets its own page. The rest go in the FAQ on that cancer's page.
3. **Patient wording is the visible question.** Keep the question exactly as a patient or relative would type it. Bring in the medical term in the first line of the answer, for example "Removing the prostate (radical prostatectomy) ...".
4. **Relative's voice and report values are deliberate.** Questions like "My father is 76, PSA 9 ..." stay as written. Do not rewrite them into generic form.
5. **Answer shape, always in this order:**
   1. A direct reply of 2 to 3 sentences (search snippets and AI answers lift this part).
   2. Detail (the outline bullets, expanded).
   3. "When should you see a specialist?"
6. **Every page carries:** FAQPage structured data (JSON-LD), the doctor's name and credentials, and a "Medically reviewed on" date.
7. **Never use:** "best", "100% cure", guaranteed outcomes, or patient testimonials on these pages. They clash with Indian medical ethics rules on self-promotion.
8. **Cost and access questions** name the city ("in Delhi"), give price ranges with what changes them, and are updated yearly.
9. **Placeholders.** Text in square brackets in the outlines (for example `[₹ range]`, `[Your typical stay.]`, `[hospital]`) is for the doctor to fill. Render it exactly as written, brackets included; never hide it and never invent the figure. After building each set, list every bracketed placeholder for the owner, who will get the figures from the doctor.
10. **Figures.** Survival figures are approximate until a dated source is cited. Policy points (IRDAI, PM-JAY, visas) were checked on 2026-10-08 and must be re-checked yearly. Keep the source list with the content.
11. **Languages.** English first. Hindi and Hinglish versions of the starred pages come next (both built) (the Hinglish phrasings map to existing answers, translate those, do not write new answers). Bengali, Arabic and Russian after that, for patients travelling from abroad.
    - **Built (2026-10-12):** Hindi in Devanagari for all 50 starred questions (pages at `/hi/...`) and for every non-starred question shown in "More on this topic" (`data/faq/hi/`). Owner decision: non-starred translations appear only in "More on this topic"; they get no page and no link elsewhere. Non-starred questions in stages without a starred question never appear there and are not translated. Agent drafts, translated from the English without adding content; every page shows "[Hindi translation pending medical review]" until the doctor or a medical translator approves it, then remove `pendingReview` for that language in `translations.js` (or add a per-question reviewed flag).
    - **Hinglish (owner decision 2026-10-12, revised the same day):** a separate language, built like Hindi: Hindi in Latin script, pages at `/hinglish/...` (`lang="hi-Latn"`), data in `data/faq/hinglish/`, the same 248 questions as Hindi, and its own "[Hinglish translation pending medical review]" mark. It replaces the earlier decision that Hinglish was not a separate language. The doctor's 14 phrasings are kept as written (em dashes replaced) in the `hinglish` field of the matching Hinglish question (no longer on Hindi pages), shown under the question ("Mareez aise bhi poochhte hain") and used as its title. Two phrasings map to non-starred answers ("PSA kitna hona chahiye?", "Prostate cancer ka ilaj bina operation ke ho sakta hai?"); they show at the top of their opened answer in "More on this topic" on Hinglish pages. The full robotic cost phrasing, including the Ayushman card part, is on the starred cost page.
    - **Translation rules:** keep the doctor's bracketed placeholders in English; keep medical acronyms (PSA, MRI, BCG) in Latin script; use gender-neutral wording unless the cancer affects only men; "(source)" becomes "(स्रोत)" in Hindi and stays "(source)" in Hinglish. Hinglish uses everyday Roman spelling (no diacritics) and keeps English words patients use themselves (surgery, report, biopsy, catheter, insurance); ranges are written "4 se 10", not with a dash.
    - **Next:** Bengali, Arabic (right-to-left) and Russian, added as new languages in `translations.js` with their own `data/faq/<lang>/` files and a loader and title per set in `catalog.js`.
12. **Do not reword, cut or skip anything.** The question bank and answer outlines come from the doctor and are used as written: every question, every bullet, including questions about sexual function, erections, ejaculation, fertility and the penile cancer section (owner decision 2026-10-12; the earlier "no 18+ or sex-related wording" rule is withdrawn). Only punctuation changes required by the site rules are allowed.
13. **Reviewer block placeholders.** Until the owner supplies them, the doctor's credentials line and the review date render as `[credentials]` and `[review date]`, and are listed with the other placeholders.
14. **Site rules still apply:** no em dashes (the source documents use them; convert every one to a comma, colon, period or parentheses), and every change logged per `AGENTS.md`.

## 2. Content sets

| Set | Groups | Has its own page? |
| --- | --- | --- |
| Prostate cancer | 4 journey stages | Yes, `/services/prostate-cancer` (built, `data/faq/prostate.js`) |
| Kidney cancer | 4 journey stages | Yes, `/services/kidney-cancer` (built, `data/faq/kidney.js`) |
| Urinary bladder cancer | 4 journey stages | Yes, `/services/urinary-bladder-cancer` (built, `data/faq/bladder.js`) |
| Ureter and renal pelvis cancer (upper tract urothelial) | 4 journey stages | Yes, `/services/ureter-renal-pelvis-cancer` (built, `data/faq/upperTract.js`; service added 2026-10-12) |
| Penile cancer | 4 journey stages | Yes, `/services/penile-cancer` (built, `data/faq/penile.js`) |
| Testicular cancer | 4 journey stages | Yes, `/services/testicular-cancer` (built, `data/faq/testicular.js`) |
| Adrenal tumours and adrenal cancer | 4 journey stages | Yes, `/services/adrenal-cancer` (built, `data/faq/adrenal.js`) |
| Retroperitoneal tumours and sarcoma | 4 journey stages | Yes, `/services/retroperitoneal-cancer` (built, `data/faq/retroperitoneal.js`) |
| Robotic surgery | Understanding, Safety and choosing a surgeon, Cost and insurance, Recovery | Shared page, `/patient-questions/robotic-surgery` (built, `data/faq/robotic.js`) |
| Common to all urological cancers | Choosing care, Family and emotional concerns, Myths, Money and paperwork, Travelling from another city or country | Shared page, `/patient-questions/common-questions` (built, `data/faq/common.js`), linked from every cancer page |

## 3. Page structure

- **Cancer page** (`/services/:slug`), questions first: the hero lists the first 3 starred questions (2 when the set has only 3: ureter and renal pelvis, adrenal) under "Patients often ask" (with "See every question" to `#faq`), then **Key questions** (an editorial numbered index, one entry per starred question, each linking to its own page), then the "Ask the doctor" FAQ (design B, see below) with the four journey stages as the topic list and **only the non-starred questions** (owner decision 2026-10-12, matching rule 2), then the existing service content under "From the doctor" / "How care is planned", then "Questions for every cancer" (`SharedFaqLinks`), linking to both shared pages.
  - **Why questions first (from the doctor's feedback that the page should open with questions patients relate to; approved by the owner 2026-10-12, on all eight cancer pages):** hero with 3 starred questions ("Patients often ask"), Key questions, Ask the doctor, then the service content under "From the doctor", then the shared links. Before this, the service content came first, straight after the hero.
- **Starred question page** (`/services/:slug/:questionId`, for example `/services/prostate-cancer/psa-high`): one question with its short answer and numbered detail, reviewer byline, FAQPage schema, page `<title>`, "More on this topic" (the same stage's non-starred questions, expandable), a contents list of the set's key questions, booking block, and previous / next links. Minimal editorial style without rules or grid lines. Only starred questions have a page; other ids show the not-found view.
- **Shared pages** (`/patient-questions/:slug`): robotic surgery and common questions. Title header, Key questions, the same "Ask the doctor" component with their own groups as topics, then links to the other shared page and every cancer FAQ. Starred questions have pages at `/patient-questions/:slug/:questionId`. Answers that cite "(source)" render the word as written; the source list is in section 6.
- **Where the shared pages are linked from:** every cancer page ("Questions for every cancer"), the navbar ("Patient Questions"), the footer ("Patient Questions" column), the home page line under Specialized Care, the aside of every starred question page, and the doctor's "(see Robotic surgery)" cross-references (linked by `FaqText`).

## 4. UI: "Ask the doctor" (design B)

Component `AskTheDoctor` (see `docs/COMPONENTS.md`). Three columns on desktop: topic sidebar (dark green; eyebrow, heading, the set's intro line, the stage buttons with question counts, a general-guidance note and the reviewer line), question list ("Q" badges, a star on starred questions), answer panel styled as consultation notes (patient bubble, doctor reply with "SP" avatar). In the doctor's reply the opening sentence is the large serif text and the bullets sit in the sage box (the design's "In short" box); there is no "In short" label because the outlines have no separate summary. Starred questions are not in this component. A "Book a consultation" strip links to `/#schedule`. Below 900px the stages become horizontally scrolling chips and the list and answer stack; tapping a question scrolls to the answer. Placeholders are highlighted by `FaqText`. Design references: design canvas artifact `project/Consult.dc.html`, `design-videos/B-ask-the-doctor.mp4`.

The outlines do not contain a separate "When should you see a specialist?" part for each answer; none is written by agents. If the doctor supplies them, add a field and render it after the bullets.

## 5. Data shape

One file per content set in `client/src/data/faq/` (for example `prostate.js`), registered in `data/faq/catalog.js` (slug, titles, question count and loaders; the set is downloaded only on its own pages). The set's `slug` must match the service slug in `data/services.js`:

```js
export const prostateFaq = {
  slug: "prostate-cancer",
  title: "Prostate cancer",
  intro: "Prostate questions cluster around ...",
  credentials: "[credentials]",
  reviewedOn: "[review date]",
  stages: [
    {
      id: "is-it-cancer",
      title: "Is it cancer? PSA, symptoms and risk",
      questions: [
        {
          id: "psa-high",
          starred: true,
          question: "My PSA is high: does that mean I have prostate cancer?",
          answer: "Not necessarily: most men with a raised PSA do not have prostate cancer.",
          points: ["...", "..."],
        },
      ],
    },
  ],
};
```

`question` is the visible question, `answer` the opening sentence, `points` the outline bullets, `starred` marks a question with its own page; `id` is the URL segment of that page. Text is copied from the outlines unchanged. Bracketed placeholders stay in the text and are rendered as written.

After adding a set, compare it line by line with the owner's paste (question, opening sentence, bullets, ignoring only the em dash replacements) before reporting it done.

## 6. Sources (from the outlines, 2026-10-08)

- IRDAI 2019 rules: robotic surgery as a modern treatment (Business Today)
- IRDAI Master Circular on Health Insurance, 29 May 2024 (summary by freefincal)
- Delhi adopts PM-JAY with ₹10 lakh family cover (News On AIR, 5 April 2025)
- Ayushman Vay Vandana card for people aged 70+ (Deccan Chronicle, 9 December 2024)
- Medical and medical attendant visas (Embassy of India, Athens)
