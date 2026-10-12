import { faqCatalog } from "./catalog";

export const doctorName = "Dr. Sarbartha Kumar Pratihar";

// Shown under the name in the reviewer byline, one line each.
export const doctorCredentials = ["Consultant", "Uro-Oncology & Robotic Surgery"];

// Catalog entries (slug, titles, question count, loaders), not the question
// text: that is loaded per set with `loadFaq`.
export const faqSets = faqCatalog.filter((entry) => !entry.shared);

// Shared sets are not tied to one cancer: they have their own pages under
// /patient-questions and are linked from every cancer page.
export const sharedFaqSets = faqCatalog.filter((entry) => entry.shared);

export const getFaqBySlug = (slug) => faqSets.find((faq) => faq.slug === slug);

export const getSharedFaqBySlug = (slug) =>
  sharedFaqSets.find((faq) => faq.slug === slug);

// Page that holds a set's FAQ; starred question pages sit under it. Takes a
// catalog entry or a loaded set.
export const getFaqPath = (faq) =>
  faq.shared ? `/patient-questions/${faq.slug}` : `/services/${faq.slug}`;

const countQuestions = (faq) =>
  faq.stages.reduce((total, stage) => total + stage.questions.length, 0);

// One promise per key, so React's `use()` gets the same promise on every
// render and a set is downloaded once. A failed download is forgotten so the
// next render can try again.
const loaded = new Map();

export const loadOnce = (key, load) => {
  if (!loaded.has(key)) {
    const promise = load().catch((error) => {
      loaded.delete(key);
      throw error;
    });
    loaded.set(key, promise);
  }

  return loaded.get(key);
};

// Loads a set's questions for its catalog entry. The result is the set file
// plus `shared` and `titles` from the catalog.
export const loadFaq = (entry) =>
  loadOnce(`en:${entry.slug}`, () =>
    entry.load().then((faq) => {
      if (
        import.meta.env.DEV &&
        (faq.title !== entry.title || countQuestions(faq) !== entry.questionCount)
      ) {
        console.warn(`FAQ catalog is out of date for "${entry.slug}".`);
      }

      return { ...faq, shared: Boolean(entry.shared), titles: entry.titles };
    }),
  );

export const findFaqQuestion = (faq, questionId) => {
  for (const stage of faq.stages) {
    const question = stage.questions.find((item) => item.id === questionId);

    if (question) {
      return { stage, question };
    }
  }

  return null;
};

// Stages as shown in the FAQ: starred questions have their own pages, so they
// are left out, and stages left empty are dropped.
export const getFaqListStages = (faq) =>
  faq.stages
    .map((stage) => ({
      ...stage,
      questions: stage.questions.filter((question) => !question.starred),
    }))
    .filter((stage) => stage.questions.length > 0);

export const getStarredWithStage = (faq) =>
  faq.stages.flatMap((stage) =>
    stage.questions
      .filter((question) => question.starred)
      .map((question) => ({ stage, question })),
  );

export const getStarredQuestions = (faq) =>
  faq.stages.flatMap((stage) =>
    stage.questions.filter((question) => question.starred),
  );

const answerText = (question) =>
  [question.answer, ...question.points].join(" ");

// FAQPage structured data (schema.org) for search engines. `inLanguage` is
// set for translated pages.
export const buildFaqSchema = (questions, inLanguage) =>
  JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    ...(inLanguage && { inLanguage }),
    mainEntity: questions.map((question) => ({
      "@type": "Question",
      name: question.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answerText(question),
      },
    })),
  }).replace(/</g, "\\u003c");
