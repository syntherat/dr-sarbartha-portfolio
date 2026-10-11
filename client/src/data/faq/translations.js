import { hiSets } from "./hi";

// Languages a question page can be shown in. English is the source; the
// others are drafts until the doctor reviews them.
export const languages = {
  en: { label: "English", htmlLang: "en" },
  hi: { label: "हिन्दी", htmlLang: "hi" },
};

const translatedSets = { hi: hiSets };

export const getSetTranslation = (lang, faq) =>
  translatedSets[lang]?.[faq.slug] ?? null;

export const getQuestionTranslation = (lang, faq, questionId) =>
  getSetTranslation(lang, faq)?.questions[questionId] ?? null;

// Languages other than English that have this question translated.
export const getQuestionLanguages = (faq, questionId) =>
  Object.keys(translatedSets).filter((lang) =>
    getQuestionTranslation(lang, faq, questionId),
  );

// URL prefix for a language: English pages have none, others "/hi" etc.
export const langPrefix = (lang) => (lang === "en" ? "" : `/${lang}`);

// Interface labels on question pages.
export const uiText = {
  en: {
    keyQuestion: "Key question",
    keyQuestions: "Key questions",
    reviewed: "Medically reviewed",
    topic: "Topic",
    shortAnswer: "The short answer",
    inDetail: "In detail",
    note: "Answers are general guidance, written to help you prepare for your appointment.",
    moreOnTopic: "More on this topic",
    relatedInEnglish: null,
    consultation: "Consultation",
    notHere: "Have a question that is not here?",
    book: "Book a consultation",
    morePatientQuestions: "More patient questions",
    previous: "Previous",
    next: "Next",
    allQuestions: "All questions",
    askTheDoctor: "Ask the doctor",
    searchedAs: "Patients also ask",
    pendingReview: null,
  },
  hi: {
    keyQuestion: "मुख्य प्रश्न",
    keyQuestions: "मुख्य प्रश्न",
    reviewed: "चिकित्सकीय समीक्षा",
    topic: "विषय",
    shortAnswer: "संक्षिप्त उत्तर",
    inDetail: "विस्तार से",
    note: "ये उत्तर सामान्य जानकारी हैं, ताकि आप डॉक्टर से मिलने की तैयारी कर सकें।",
    moreOnTopic: "इस विषय पर और",
    relatedInEnglish: "इनमें से कुछ उत्तर अभी सिर्फ़ अंग्रेज़ी में हैं।",
    consultation: "परामर्श",
    notHere: "आपका सवाल यहाँ नहीं है?",
    book: "परामर्श बुक करें",
    morePatientQuestions: "मरीज़ों के और सवाल",
    previous: "पिछला",
    next: "अगला",
    allQuestions: "सभी प्रश्न (English)",
    askTheDoctor: "डॉक्टर से पूछें",
    searchedAs: "मरीज़ ऐसे भी पूछते हैं",
    pendingReview: "[Hindi translation pending medical review]",
  },
};
