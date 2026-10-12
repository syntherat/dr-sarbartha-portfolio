// Light list of every FAQ set: what links, menus and counts need without
// downloading the set itself. The question text lives in the set files, which
// are loaded only on the page that shows them (one chunk per set and
// language). Titles and counts must match the set files; in development
// `loadFaq` and `loadTranslation` warn when they drift.

export const faqCatalog = [
  {
    slug: "prostate-cancer",
    title: "Prostate cancer",
    titles: { hi: "प्रोस्टेट कैंसर", hinglish: "Prostate cancer" },
    questionCount: 47,
    load: () => import("./prostate").then((m) => m.prostateFaq),
    translations: {
      hi: () => import("./hi/prostate").then((m) => m.prostateHi),
      hinglish: () => import("./hinglish/prostate").then((m) => m.prostateHinglish),
    },
  },
  {
    slug: "kidney-cancer",
    title: "Kidney cancer",
    titles: { hi: "किडनी (गुर्दे) का कैंसर", hinglish: "Kidney cancer" },
    questionCount: 33,
    load: () => import("./kidney").then((m) => m.kidneyFaq),
    translations: {
      hi: () => import("./hi/kidney").then((m) => m.kidneyHi),
      hinglish: () => import("./hinglish/kidney").then((m) => m.kidneyHinglish),
    },
  },
  {
    slug: "urinary-bladder-cancer",
    title: "Urinary bladder cancer",
    titles: { hi: "मूत्राशय (ब्लैडर) का कैंसर", hinglish: "Urinary bladder cancer" },
    questionCount: 37,
    load: () => import("./bladder").then((m) => m.bladderFaq),
    translations: {
      hi: () => import("./hi/bladder").then((m) => m.bladderHi),
      hinglish: () => import("./hinglish/bladder").then((m) => m.bladderHinglish),
    },
  },
  {
    slug: "ureter-renal-pelvis-cancer",
    title: "Ureter and renal pelvis cancer",
    titles: {
      hi: "यूरेटर और रीनल पेल्विस का कैंसर",
      hinglish: "Ureter aur renal pelvis cancer",
    },
    questionCount: 20,
    load: () => import("./upperTract").then((m) => m.upperTractFaq),
    translations: {
      hi: () => import("./hi/upperTract").then((m) => m.upperTractHi),
      hinglish: () =>
        import("./hinglish/upperTract").then((m) => m.upperTractHinglish),
    },
  },
  {
    slug: "penile-cancer",
    title: "Penile cancer",
    titles: { hi: "लिंग (पेनाइल) कैंसर", hinglish: "Penile cancer" },
    questionCount: 25,
    load: () => import("./penile").then((m) => m.penileFaq),
    translations: {
      hi: () => import("./hi/penile").then((m) => m.penileHi),
      hinglish: () => import("./hinglish/penile").then((m) => m.penileHinglish),
    },
  },
  {
    slug: "testicular-cancer",
    title: "Testicular cancer",
    titles: { hi: "अंडकोष (टेस्टिकुलर) कैंसर", hinglish: "Testicular cancer" },
    questionCount: 30,
    load: () => import("./testicular").then((m) => m.testicularFaq),
    translations: {
      hi: () => import("./hi/testicular").then((m) => m.testicularHi),
      hinglish: () =>
        import("./hinglish/testicular").then((m) => m.testicularHinglish),
    },
  },
  {
    slug: "adrenal-cancer",
    title: "Adrenal tumours and adrenal cancer",
    titles: {
      hi: "एड्रिनल ट्यूमर और एड्रिनल कैंसर",
      hinglish: "Adrenal tumours aur adrenal cancer",
    },
    questionCount: 23,
    load: () => import("./adrenal").then((m) => m.adrenalFaq),
    translations: {
      hi: () => import("./hi/adrenal").then((m) => m.adrenalHi),
      hinglish: () => import("./hinglish/adrenal").then((m) => m.adrenalHinglish),
    },
  },
  {
    slug: "retroperitoneal-cancer",
    title: "Retroperitoneal tumours and sarcoma",
    titles: {
      hi: "रेट्रोपेरिटोनियल ट्यूमर और सार्कोमा",
      hinglish: "Retroperitoneal tumours aur sarcoma",
    },
    questionCount: 19,
    load: () => import("./retroperitoneal").then((m) => m.retroperitonealFaq),
    translations: {
      hi: () => import("./hi/retroperitoneal").then((m) => m.retroperitonealHi),
      hinglish: () =>
        import("./hinglish/retroperitoneal").then(
          (m) => m.retroperitonealHinglish,
        ),
    },
  },
  {
    slug: "robotic-surgery",
    shared: true,
    title: "Robotic surgery",
    titles: { hi: "रोबोटिक सर्जरी", hinglish: "Robotic surgery" },
    questionCount: 28,
    load: () => import("./robotic").then((m) => m.roboticFaq),
    translations: {
      hi: () => import("./hi/robotic").then((m) => m.roboticHi),
      hinglish: () => import("./hinglish/robotic").then((m) => m.roboticHinglish),
    },
  },
  {
    slug: "common-questions",
    shared: true,
    title: "Questions common to all urological cancers",
    titles: {
      hi: "सभी यूरोलॉजिकल कैंसर के आम सवाल",
      hinglish: "Sabhi urological cancers ke aam sawaal",
    },
    questionCount: 28,
    load: () => import("./common").then((m) => m.commonFaq),
    translations: {
      hi: () => import("./hi/common").then((m) => m.commonHi),
      hinglish: () => import("./hinglish/common").then((m) => m.commonHinglish),
    },
  },
];
