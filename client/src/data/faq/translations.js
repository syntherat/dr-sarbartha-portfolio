import { faqCatalog } from "./catalog";
import { loadOnce } from "./index";

// Languages a question page can be shown in. English is the source; the
// others are drafts until the doctor reviews them.
export const languages = {
  en: { label: "English", htmlLang: "en" },
  hi: { label: "हिन्दी", htmlLang: "hi" },
  hinglish: { label: "Hinglish", htmlLang: "hi-Latn" },
};

const translatedLanguages = Object.keys(languages).filter((lang) => lang !== "en");

// Loads one language's translation of a set (null when there is none). Each
// set and language is its own chunk, downloaded only when a page needs it.
export const loadTranslation = (lang, faq) =>
  loadOnce(`${lang}:${faq.slug}`, async () => {
    const entry = faqCatalog.find((item) => item.slug === faq.slug);
    const load = entry?.translations?.[lang];

    if (!load) {
      return null;
    }

    const translation = await load();

    if (import.meta.env.DEV && translation.title !== entry.titles[lang]) {
      console.warn(`FAQ catalog ${lang} title is out of date for "${faq.slug}".`);
    }

    return translation;
  });

// Every translation of a set, as { hi: set or null, hinglish: set or null }.
export const loadTranslations = (faq) =>
  loadOnce(`translations:${faq.slug}`, async () => {
    const sets = await Promise.all(
      translatedLanguages.map((lang) => loadTranslation(lang, faq)),
    );

    return Object.fromEntries(
      translatedLanguages.map((lang, index) => [lang, sets[index]]),
    );
  });

// Languages other than English that have this question translated, given
// the set's loaded translations.
export const getQuestionLanguages = (translations, questionId) =>
  translatedLanguages.filter((lang) => translations[lang]?.questions[questionId]);

// A set's title in a language, from the catalog (no download needed).
export const getSetTitle = (lang, entry) =>
  lang === "en" ? entry.title : (entry.titles?.[lang] ?? entry.title);

// URL prefix for a language: English pages have none, others "/hi",
// "/hinglish" etc.
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
    searchedAs: null,
    pendingReview: "[Hindi translation pending medical review]",
  },
  hinglish: {
    keyQuestion: "Key question",
    keyQuestions: "Key questions",
    reviewed: "Medically reviewed",
    topic: "Topic",
    shortAnswer: "Short mein jawab",
    inDetail: "Detail mein",
    note: "Yeh jawab general jaankari ke liye hain, taaki aap doctor se milne ki taiyari kar sakein.",
    moreOnTopic: "Is topic par aur",
    relatedInEnglish: "Inmein se kuch jawab abhi sirf English mein hain.",
    consultation: "Consultation",
    notHere: "Aapka sawaal yahan nahi hai?",
    book: "Consultation book karein",
    morePatientQuestions: "Mareezon ke aur sawaal",
    previous: "Pichhla",
    next: "Agla",
    allQuestions: "Saare sawaal (English)",
    askTheDoctor: "Doctor se poochhein",
    searchedAs: "Mareez aise bhi poochhte hain",
    pendingReview: "[Hinglish translation pending medical review]",
  },
};
