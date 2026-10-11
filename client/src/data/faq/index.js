import { adrenalFaq } from "./adrenal";
import { bladderFaq } from "./bladder";
import { commonFaq } from "./common";
import { kidneyFaq } from "./kidney";
import { penileFaq } from "./penile";
import { prostateFaq } from "./prostate";
import { retroperitonealFaq } from "./retroperitoneal";
import { roboticFaq } from "./robotic";
import { testicularFaq } from "./testicular";
import { upperTractFaq } from "./upperTract";

export const doctorName = "Dr. Sarbartha Kumar Pratihar";

export const faqSets = [
  prostateFaq,
  kidneyFaq,
  bladderFaq,
  upperTractFaq,
  penileFaq,
  testicularFaq,
  adrenalFaq,
  retroperitonealFaq,
];

// Shared sets are not tied to one cancer: they have their own pages under
// /patient-questions and are linked from every cancer page.
export const sharedFaqSets = [roboticFaq, commonFaq];

export const getFaqBySlug = (slug) => faqSets.find((faq) => faq.slug === slug);

export const getSharedFaqBySlug = (slug) =>
  sharedFaqSets.find((faq) => faq.slug === slug);

// Page that holds a set's FAQ; starred question pages sit under it.
export const getFaqPath = (faq) =>
  sharedFaqSets.includes(faq)
    ? `/patient-questions/${faq.slug}`
    : `/services/${faq.slug}`;

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
