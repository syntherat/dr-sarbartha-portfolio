import { kidneyFaq } from "./kidney";
import { prostateFaq } from "./prostate";

export const doctorName = "Dr. Sarbartha Kumar Pratihar";

const faqSets = [prostateFaq, kidneyFaq];

export const getFaqBySlug = (slug) => faqSets.find((faq) => faq.slug === slug);

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

// FAQPage structured data (schema.org) for search engines.
export const buildFaqSchema = (questions) =>
  JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((question) => ({
      "@type": "Question",
      name: question.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answerText(question),
      },
    })),
  }).replace(/</g, "\\u003c");
