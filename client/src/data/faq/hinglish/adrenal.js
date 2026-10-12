// Hinglish (Hindi in Latin script) draft of the adrenal answers, translated
// from the doctor's English text without adding content. Not yet medically
// reviewed. Square brackets are the doctor's placeholders and stay in English.

export const adrenalHinglish = {
  title: "Adrenal tumours aur adrenal cancer",
  stages: {
    "is-it-cancer": "Kya yeh cancer hai? Lakshan aur kaaran",
    "tests-and-reports": "Tests aur reports",
    "treatment-choices": "Ilaj ke options aur surgery",
    "life-after-treatment": "Ilaj ke baad ki zindagi",
  },
  questions: {
    "found-by-chance": {
      question:
        "CT scan mein sanyog se meri adrenal gland mein tumour mila hai: kya yeh cancer hai?",
      answer:
        "Aam taur par nahi; sanyog se mile zyadatar adrenal tumour benign adenoma hote hain, lekin har ek ke liye do checks zaroori hain: kya yeh hormones bana raha hai, aur kya scan mein yeh shaky dikhta hai?",
      points: [
        "Hormone tests: cortisol (dexamethasone suppression test), metanephrines, aur BP high ho to aldosterone aur renin.",
        "Fat content aur size jaisi CT ki khaasiyatein benign aur shaky tumour mein farq karti hain.",
        "Jinhe kahin aur cancer pata hai, unmein yeh failaav (metastasis) ho sakta hai.",
      ],
    },
    "what-the-adrenal-does": {
      question: "Adrenal gland kya kaam karti hai? Kya main iske bina jee sakta/sakti hoon?",
      answer:
        "Adrenal glands kidneys ke upar hoti hain aur aise hormones banati hain jo BP, namak ka santulan, stress response aur metabolism control karte hain, jaise cortisol, aldosterone aur adrenaline.",
      points: [
        "Normal zindagi ke liye ek swasth adrenal gland kaafi hai.",
        "Dono glands nikaalne ka matlab hai zindagi bhar hormone replacement.",
      ],
    },
    "mostly-harmless": {
      question: "Kya zyadatar adrenal tumour nuksaan nahi karte?",
      answer:
        "Haan: zyadatar benign adenoma hote hain jo kabhi dikkat nahi karte.",
      points: [
        "Kuch zyada hormones banate hain, jo BP, blood sugar aur haddiyon par asar daal sakte hain.",
        "Adrenal cancer rare hai.",
      ],
    },
    "high-bp-low-potassium": {
      question:
        "Meri umar kam hai aur BP high hai, potassium kam hai: kya iski wajah adrenal tumour ho sakta hai?",
      answer:
        "Ho sakta hai: primary aldosteronism (Conn's syndrome), aksar adrenal adenoma se, high BP ka ek aam aur theek hone wala kaaran hai.",
      points: [
        "Shaq karein agar kam umar mein BP high ho, teen dawaon se bhi BP control na ho, ya potassium kam ho.",
        "Screening blood test aldosterone-to-renin ratio hai.",
        "Surgery se pehle adrenal vein sampling batata hai ki ek gland zimmedaar hai ya nahi.",
      ],
    },
    "weight-gain-diabetes": {
      question: "Kya adrenal tumour se wazan badhna, diabetes ya gol chehra ho sakta hai?",
      answer:
        "Haan: cortisol banane wala adrenal tumour (Cushing's syndrome) dhad ke aas-paas wazan badhna, gol chehra, diabetes, high BP, kamzor haddiyan aur aasaani se neel padna kar sakta hai.",
      points: [
        "Bina saaf lakshanon ke halka cortisol excess zyada aam hai aur phir bhi BP, sugar aur haddiyon par asar daalta hai.",
        "Tests: overnight dexamethasone suppression test, der raat ka ya urine cortisol, ACTH.",
      ],
    },
    "pheochromocytoma-symptoms": {
      question:
        "Achanak sar dard, paseena, dhadkan tez hona aur bahut high BP ke daure: kya yeh pheochromocytoma ho sakta hai?",
      answer:
        "Yeh pheochromocytoma ke classic lakshan hain, jo adrenaline banane wala tumour hai; yeh rare hai lekin iska diagnosis zaroori hai.",
      points: [
        "Blood ya urine metanephrine tests ise confirm karte hain.",
        "Kisi bhi surgery ya delivery se pehle iska ilaj zaroori hai, kyonki bina ilaj ka tumour BP mein khatarnak uchaal la sakta hai.",
        "Lagbhag ek tihaai khaandani gene changes se jude hote hain.",
      ],
    },
    "hereditary": {
      question: "Kya yeh khaandani hai? Kya mere bachchon ka test hona chahiye?",
      answer:
        "Zyadatar adrenal adenoma khaandani nahi hote, lekin pheochromocytoma aur paraganglioma aksar hote hain.",
      points: [
        "Pheochromocytoma ya paraganglioma wale har vyakti ke liye genetic testing ki salah di jati hai.",
        "Gene change mile to rishtedaaron ka test aur screening ho sakti hai.",
        "Kuch syndromes, jaise MEN2, VHL aur NF1, doosre organs ko bhi affect karte hain.",
      ],
    },
    "every-tumour-surgery": {
      question: "Kya har adrenal tumour ki surgery zaroori hai?",
      answer:
        "Nahi: zyadatar adrenal tumour chhote, benign aur inactive hote hain, aur unhe surgery ki zaroorat nahi hoti.",
      points: [
        "Surgery ki salah hormone banane wale, bade (lagbhag 4 cm se zyada), shaky ya badhte hue tumour mein di jati hai.",
        "Halke cortisol excess mein surgery tab sochi jati hai jab yeh BP, sugar ya haddiyon par asar daale.",
      ],
    },
    "robotic-adrenalectomy": {
      question:
        "Laparoscopic ya robotic adrenalectomy kya hai? Recovery kitni lambi hai?",
      answer:
        "Ismein chhote keyhole cuts se adrenal gland nikaali jati hai; zyadatar adrenal tumour ke liye yahi standard tareeka hai.",
      points: [
        "Hospital mein aam taur par 1 se 3 din rukna, aur lagbhag 2 hafte mein normal kaam.",
        "Robotic madad bade tumour, motape wale mareezon ya partial adrenalectomy mein kaam aati hai.",
        "[Your typical stay.]",
      ],
    },
    "bp-tablets-before-surgery": {
      question:
        "Pheochromocytoma surgery se pehle 1 se 2 hafte BP ki tablets kyon leni padti hain?",
      answer:
        "Alpha-blocker tablets, jaise prazosin ya phenoxybenzamine, khoon ki naliyon ko dheela karti hain aur surgery ke dauraan BP ke khatarnak uchaal ko rokti hain.",
      points: [
        "Extra namak aur paani khoon ki matra wapas laane mein madad karte hain.",
        "Tez dhadkan ke liye beta-blockers baad mein jode ja sakte hain, kabhi pehle nahi.",
        "Khade hone par chakkar aur band naak batate hain ki dawa kaam kar rahi hai.",
      ],
    },
    "bp-after-surgery": {
      question:
        "Kya surgery ke baad mera BP normal ho jayega? Kya main BP ki dawaiyan band kar sakta/sakti hoon?",
      answer:
        "Aldosterone ya adrenaline banane wala tumour nikalne ke baad zyadatar mareezon ka BP behtar hota hai, aur kai log dawaiyan kam ya band kar dete hain.",
      points: [
        "Conn's syndrome: lagbhag sabhi mareezon mein potassium normal ho jata hai; lagbhag ek tihaai mein BP theek ho jata hai aur baaki zyadatar mein behtar.",
        "Pheochromocytoma: BP aam taur par normal ho jata hai.",
        "Lambe samay ka high BP ya kidney ka nuksaan ho to kuch BP ke liye ilaj ki zaroorat reh sakti hai.",
      ],
    },
    "steroids-after-surgery": {
      question: "Kya surgery ke baad steroid tablets chahiye hongi, aur kab tak?",
      answer:
        "Sirf cortisol banane wala tumour nikalne ke baad: doosri adrenal gland dabi hui hoti hai aur use theek hone mein samay lagta hai.",
      points: [
        "Steroid tablets mahino mein, kabhi ek saal ya zyada mein, dheere dheere kam ki jati hain.",
        "Steroid card saath rakhein aur bimari ke dauraan dose badhane ke sick-day rules maanein.",
        "Steroids kabhi achanak band na karein.",
      ],
    },
    "adrenocortical-carcinoma": {
      question:
        "Adrenal cancer (adrenocortical carcinoma): kya yeh theek ho sakta hai? Mitotane kya hai?",
      answer:
        "Adrenocortical carcinoma rare aur aggressive hai, lekin shuruaati stage mein poori tarah nikaalne se yeh theek ho sakta hai.",
      points: [
        "Shaky cancer mein phatne se bachane ke liye aam taur par open surgery behtar maani jati hai; experienced surgeon se poori tarah nikalwana sabse zaroori hai.",
        "Mitotane, ek tablet, aksar surgery ke baad cancer wapas aane ka risk kam karne ke liye, aur advanced bimari mein di jati hai.",
        "Scans ke saath kareeb se follow-up zaroori hai.",
      ],
    },
    "large-tumour-robotic": {
      question: "Kya bada adrenal tumour robotic tareeke se nikaala ja sakta hai?",
      answer:
        "Aksar haan: benign dikhne wale lagbhag 6 se 8 cm tak ke tumour experienced surgeons robotic ya laparoscopic tareeke se nikaal sakte hain.",
      points: [
        "Shaky cancer, ya paas ke organs tak failaav mein aam taur par open surgery chahiye.",
        "Faisla CT ki khaasiyaton par depend karta hai, sirf size par nahi.",
      ],
    },
    "cost-delhi": {
      question: "Delhi mein robotic adrenalectomy ka kharcha kitna hai?",
      answer:
        "[hospital] mein robotic adrenalectomy ka package lagbhag [₹ range] hai.",
      points: [
        "Kharcha kis par depend karta hai: surgery se pehle ki taiyari (khaaskar pheochromocytoma mein), ICU mein rukna, room category.",
        "Zyadatar health policies robotic surgery cover karti hain, kuch sub-limit ke saath.",
      ],
    },
  },
};
