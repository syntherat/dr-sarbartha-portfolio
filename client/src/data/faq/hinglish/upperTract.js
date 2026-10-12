// Hinglish (Hindi in Latin script) draft of the ureter and renal pelvis
// answers, translated from the doctor's English text without adding content.
// Not yet medically reviewed. Square brackets are the doctor's placeholders
// and stay in English.

export const upperTractHinglish = {
  title: "Ureter aur renal pelvis cancer",
  stages: {
    "is-it-cancer": "Kya yeh cancer hai? Lakshan aur kaaran",
    "tests-and-reports": "Tests aur reports",
    "treatment-choices": "Ilaj ke options aur surgery",
    "life-after-treatment": "Ilaj ke baad ki zindagi",
  },
  questions: {
    "why-remove-whole-kidney": {
      question: "Chhote tumour ke liye poori kidney aur ureter kyon nikaalni padti hai?",
      answer:
        "Yeh cancer drainage system ki poori parat mein wapas aane ki aadat rakhta hai, isliye high-risk tumour mein kidney, poora ureter aur bladder ka ek cuff nikaalna (radical nephroureterectomy) standard hai.",
      points: [
        "Ureter ka hissa chhod dene se bache hue stump mein cancer wapas aane ka risk rehta hai.",
        "Kidney bachane wala ilaj sirf dhyan se chune gaye low-risk tumour mein safe hai.",
        "Faisle mein cancer ke risk ko kidney ke kaam ke muqable tola jata hai.",
      ],
    },
    "laser-treatment": {
      question: "Kya laser (endoscopic) treatment se meri kidney bachayi ja sakti hai?",
      answer:
        "Haan, low-risk tumour mein: ureteroscope se laser treatment kidney bachate hue cancer control kar sakta hai.",
      points: [
        "High-risk tumour mein bhi iske baare mein socha jata hai jab kidney nikalne ka matlab dialysis ho.",
        "Ismein sakht aur baar baar ureteroscopy follow-up chahiye, kyonki cancer ka wapas aana aam hai.",
        "Ureter ke sirf affected neeche wale hisse ko nikaalna ek aur kidney bachane wala vikalp hai.",
      ],
    },
    "bladder-cuff": {
      question: "Bladder ka chhota hissa bhi kyon nikaala jata hai?",
      answer:
        "Ureter ka aakhri hissa bladder ki deewar se hokar jata hai; ise bladder ke cuff ke saath nikaalne se us bache hue hisse mein cancer wapas nahi aata.",
      points: [
        "Bladder ko taankon se band kiya jata hai aur yeh achhe se bhar jata hai.",
        "Bharne tak lagbhag ek hafte catheter rehta hai.",
      ],
    },
    "robotic-and-recovery": {
      question: "Kya yeh surgery robotic tareeke se ho sakti hai? Recovery kitni lambi hai?",
      answer:
        "Haan: robotic nephroureterectomy, bladder cuff nikalne samet, keyhole cuts se hoti hai.",
      points: [
        "Zyadatar mareez 2 se 4 din rukte hain aur 3 se 4 hafton mein normal kaam par laut aate hain.",
        "Catheter aam taur par lagbhag ek hafte rehta hai.",
        "[Your typical stay.]",
      ],
    },
    "single-dose-chemo": {
      question: "Surgery ke baad bladder mein chemotherapy ki ek dose kyon daali jati hai?",
      answer:
        "Surgery ke jaldi baad bladder mein chemotherapy ki ek dose, jaise mitomycin, baad mein bladder mein cancer aane ka chance kam karti hai.",
      points: [
        "Iske bina lagbhag 3 mein se 1 mareez ko bladder tumour ho jata hai.",
        "Yeh catheter se di jati hai aur lagbhag ek ghante rokkar rakhi jati hai.",
      ],
    },
    "chemo-before-or-after": {
      question: "Kya mujhe surgery se pehle ya baad mein chemotherapy chahiye hogi?",
      answer:
        "Tumour advanced ho (muscle ya usse aage, ya lymph nodes mein) to surgery ke baad chemotherapy ki salah di jati hai kyonki yeh cancer wapas aane ka risk kam karti hai.",
      points: [
        "Kuch centres high-risk tumour mein ise surgery se pehle dete hain, jab dono kidneys abhi kaam kar rahi hoti hain.",
        "Kuch chune hue high-risk mareezon ko surgery ke baad immunotherapy ki salah di ja sakti hai.",
        "Surgery ke baad kidney ka kaam tay karta hai ki kaunsi dawaiyan di ja sakti hain.",
      ],
    },
    "one-or-weak-kidneys": {
      question:
        "Meri sirf ek kidney hai ya kidneys kamzor hain: mere paas kya vikalp hain? Kya dialysis lagega?",
      answer:
        "Jahan sambhav ho kidney bachane wale ilaj behtar hain: laser ablation, ureter ke ek hisse ko nikaalna, ya kidney mein dawa daalna.",
      points: [
        "Ikloti kidney nikalne ka matlab zindagi bhar dialysis hai, isliye yeh sirf tab kiya jata hai jab cancer control ke liye zaroori ho.",
        "Baar baar ureteroscopy follow-up chahiye.",
        "Plan mein nephrologist shaamil hone chahiye.",
      ],
    },
    "cost-delhi": {
      question: "Delhi mein robotic nephroureterectomy ka kharcha kitna hai?",
      answer:
        "[hospital] mein robotic nephroureterectomy ka package lagbhag [₹ range] hai.",
      points: [
        "Kharcha kis par depend karta hai: kitne din rukna, room category, robotic consumables, chemotherapy dose.",
        "Zyadatar health policies robotic surgery cover karti hain, kuch sub-limit ke saath; pre-authorisation lein.",
      ],
    },
    "regular-cystoscopy": {
      question: "Ureter cancer surgery ke baad regular cystoscopy kyon zaroori hai?",
      answer:
        "Lagbhag 3 mein se 1 mareez ko baad mein bladder mein tumour hota hai, aur regular cystoscopy ise jaldi pakad leti hai, jab iska ilaj aasaan hota hai.",
      points: [
        "Aam taur par pehle saal har 3 mahine mein, phir kam baar, kam se kam 5 saal tak.",
        "CT urography doosri kidney check karti hai, aur failaav ke liye chest ka scan hota hai.",
        "Peshab mein naya khoon dikhe to turant batayein.",
      ],
    },
    "other-kidney": {
      question: "Kya cancer doosri kidney mein wapas aa sakta hai?",
      answer:
        "Aisa kam hota hai: sirf kuch percent mareezon ko doosri taraf tumour hota hai.",
      points: [
        "Regular CT urography bachi hui kidney aur ureter par nazar rakhti hai.",
        "Agar aisa ho to dialysis se bachne ke liye kidney bachane wala ilaj behtar hai.",
      ],
    },
    "protect-remaining-kidney": {
      question: "Apni bachi hui kidney ko kaise bachayein: diet, paani, dawaiyan?",
      answer:
        "BP aur sugar control mein rakhein, kaafi paani piyein, bina zaroorat painkillers aur herbal nuskhon se bachein, aur kidney function regular check karayein.",
      points: [
        "NSAIDs aur aisi kisi bhi cheez se bachein jismein aristolochic acid ho sakta hai.",
        "Smoking na karein.",
        "Nayi dawa ya contrast scan se pehle har doctor ko batayein ki aapki ek kidney hai.",
      ],
    },
    "survival-rate": {
      question: "Survival rate kya hai?",
      answer:
        "Jab cancer deewar mein gehra nahi gaya ho, to zyadatar mareez 5 saal par zinda aur theek hote hain; gehre failaav aur lymph node tak failaav ke saath survival kam hota hai.",
      points: [
        "Muscle tak nahi pahuncha: 5 saal par lagbhag 10 mein se 9 (lagbhag, surgical series).",
        "Deewar paar karke aas-paas ki charbi tak: lagbhag aadhe (lagbhag).",
        "Lymph node tak failaav: lagbhag 3 mein se 1 (lagbhag).",
        "Pathology report mein aakhri grade aur stage sabse saaf tasveer dete hain.",
      ],
    },
  },
};
