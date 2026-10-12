// Hinglish (Hindi in Latin script) draft of the kidney answers, translated
// from the doctor's English text without adding content. Not yet medically
// reviewed. Square brackets are the doctor's placeholders and stay in English.

export const kidneyHinglish = {
  title: "Kidney cancer",
  stages: {
    "is-it-cancer": "Kya yeh cancer hai? Lakshan aur kaaran",
    "tests-and-reports": "Tests aur reports",
    "treatment-choices": "Ilaj ke options aur surgery",
    "life-after-treatment": "Ilaj ke baad ki zindagi",
  },
  questions: {
    "kidney-mass-on-ultrasound": {
      hinglish: "Kidney (gurde) mein gaanth hai: kya yeh cancer hai?",
      question: "Ultrasound mein meri kidney mein gaanth (mass) mili hai: kya yeh cancer hai?",
      answer:
        "Hamesha nahi, lekin kidney ki solid gaanth ke liye contrast CT ya MRI zaroori hai, kyonki kai solid gaanthein cancer hoti hain.",
      points: [
        "Saadharan paani bhari cysts, jo sabse aam finding hain, nuksaan nahi karti.",
        "Solid ya complex gaanth ka faisla cross-sectional imaging se hota hai.",
        "Lagbhag 5 mein se 1 chhoti solid gaanth (4 cm se kam) benign nikalti hai.",
        "CT ya MRI ki report aur images uro-oncologist ke paas lekar aayein.",
      ],
    },
    "benign-tumours-angiomyolipoma": {
      question:
        "Kya kidney ka har tumour cancer hota hai? Angiomyolipoma kya hai, aur kya iski surgery zaroori hai?",
      answer:
        "Nahi: kidney ke kuch tumour benign hote hain, jaise angiomyolipoma aur oncocytoma.",
      points: [
        "Angiomyolipoma mein fat hota hai, isliye CT aam taur par bina biopsy ke ise pehchaan leta hai.",
        "Chhote angiomyolipoma par nazar rakhi jati hai; bade (lagbhag 4 cm se zyada), badhte hue ya bleed karne wale ka ilaj hota hai, aksar embolisation ya partial nephrectomy se.",
        "Oncocytoma scans mein cancer jaisa dikhta hai; dono mein farq karne ke liye aksar biopsy ya surgery chahiye.",
      ],
    },
    "cyst-or-tumour-bosniak": {
      question:
        "Kidney cyst ya kidney tumour: kya farq hai? Kya cyst cancer ban sakti hai? Bosniak 3 ya 4 ka kya matlab hai?",
      answer:
        "Zyadatar kidney cysts saadharan paani ki thailiyan hoti hain jo kabhi cancer nahi banti; Bosniak score batata hai ki complex cyst kitni shaky dikhti hai.",
      points: [
        "Bosniak 1 se 2: benign, follow-up ki zaroorat nahi. Bosniak 2F: follow-up scans.",
        "Bosniak 3: pakka nahi, lagbhag aadhi cancer hoti hain; ilaj ya surveillance par baat hoti hai.",
        "Bosniak 4: zyadatar cancer hoti hain aur inka ilaj solid tumour ki tarah hota hai.",
        "Cysts mein bane cancer aam taur par low grade hote hain, aur outlook bahut achha hota hai.",
      ],
    },
    "symptoms": {
      question: "Kidney cancer ke lakshan kya hain? Kya yeh chupchaap badh sakta hai?",
      answer:
        "Haan: aaj zyadatar kidney cancer koi lakshan nahi dete aur kisi aur wajah se kiye gaye scans mein sanyog se milte hain.",
      points: [
        "Sambhav lakshan: peshab mein khoon, side (pasli ke neeche) mein dard, pet mein gaanth.",
        "Aur: wazan ghatna, bukhar, thakaan, ya mardon mein scrotum ki nason mein nayi sujan.",
        "Peshab mein kisi bhi tarah ka khoon ho to jaanch zaroori hai.",
      ],
    },
    "blood-in-urine-or-side-pain": {
      question: "Peshab mein khoon ya side mein dard: kya yeh kidney cancer ho sakta hai?",
      answer:
        "Aam taur par nahi (pathri aur infection kahin zyada aam kaaran hain), lekin peshab mein khoon ho to tests hamesha zaroori hain.",
      points: [
        "Peshab mein dikhne wala khoon, ek baar bhi, ho to ultrasound ya CT aur aksar cystoscopy chahiye.",
        "Bukhar ke saath side ka dard infection ki taraf ishara karta hai; marod wala dard pathri ki taraf.",
        "Tests: urine examination, ultrasound, CT urography.",
      ],
    },
    "causes-and-risk-factors": {
      question:
        "Kidney cancer kis wajah se hota hai: smoking, motapa, high BP, lambe samay ka dialysis? Kya kidney stones se ho sakta hai?",
      answer:
        "Main jaane-maane risk factors hain smoking, motapa, high blood pressure aur lambe samay ka dialysis.",
      points: [
        "Smoking risk badhati hai; chhodne se samay ke saath risk kam hota hai.",
        "Lambe samay ke dialysis se cysts ban sakti hain jo kabhi kabhi cancer ban jati hain.",
        "Von Hippel-Lindau syndrome jaisi khaandani conditions mein cancer kam umar mein hota hai.",
        "Infection ke saath lambe samay ki pathri kidney ke drainage system ke ek rare cancer se judi hai, aam type se nahi.",
      ],
    },
    "cancer-vs-kidney-failure": {
      question: "Kya kidney cancer aur kidney failure ek hi cheez hai?",
      answer:
        "Nahi: kidney cancer ek tumour hai; kidney failure ka matlab hai kidney ka filter karne ka kaam band hona.",
      points: [
        "Kidney cancer wale zyadatar logon ki kidney normal kaam karti hai.",
        "Doosri kidney swasth ho to ek kidney nikalne se kidney failure kam hi hota hai.",
        "Jinhe pehle se kidney ki bimari hai, unke liye jahan sambhav ho kidney bachane wala ilaj chahiye.",
      ],
    },
    "hereditary": {
      question: "Kya kidney cancer khaandani hota hai? Kya mere bachchon ki screening honi chahiye?",
      answer:
        "Zyadatar kidney cancer khaandani nahi hote; lagbhag 3 se 5% khaandani syndromes se jude hote hain.",
      points: [
        "Shaq karein agar diagnosis lagbhag 46 saal se pehle hua, dono kidney mein ya kai tumour hain, ya parivaar mein history hai.",
        "Syndromes mein von Hippel-Lindau, hereditary papillary RCC, BHD aur HLRCC shaamil hain.",
        "Genetic counselling se tay hota hai ki rishtedaaron ko tests aur screening scans chahiye ya nahi.",
      ],
    },
    "remove-only-the-tumour": {
      question: "Kya sirf tumour nikaal kar baaki kidney bachayi ja sakti hai?",
      answer:
        "Haan: 4 cm tak ke zyadatar tumour, aur 7 cm tak ke kai tumour mein, partial nephrectomy sirf tumour ko normal tissue ki ek patli parat ke saath nikaalti hai.",
      points: [
        "Theek tumour mein cancer control poori kidney nikalne ke barabar hai.",
        "Isse kidney ka kaam bacha rehta hai, jo lambe samay tak dil aur kidney ki sehat ko bachata hai.",
        "Robotic surgery se complex partial nephrectomy zyada mareezon mein sambhav ho jati hai.",
      ],
    },
    "partial-or-complete-removal": {
      question: "Kidney ka hissa ya poori kidney nikalna: faisla kaise hota hai?",
      answer:
        "Chunaav tumour ke size, jagah aur gehrai, aapki kidney ke kaam aur surgeon ke experience par depend karta hai.",
      points: [
        "Technically safe ho to partial behtar hai, khaaskar diabetes, high BP ya kamzor doosri kidney mein.",
        "Poori kidney nikalna theek hai bade tumour mein jo kidney ka bada hissa le chuke hon, nas (vein) tak pahunche hon, ya beech ke tumour mein jahan partial safe nahi.",
        "Scoring systems (RENAL ya PADUA) complexity ka andaza lagane mein madad karte hain.",
      ],
    },
    "robotic-partial-nephrectomy": {
      question: "Robotic partial nephrectomy kya hai, aur iske kya fayde hain?",
      answer:
        "Ismein robotic instruments se keyhole cuts ke zariye tumour nikaala jata hai, phir baareek taankon se kidney ki marammat ki jati hai.",
      points: [
        "Open surgery ke muqable: kam khoon behna, kam dard, kam din rukna aur jaldi kaam par lautna.",
        "Kidney ki blood supply ko kam samay ya bilkul clamp kiye bina kaam ho sakta hai, jisse kidney ka kaam bachta hai.",
        "Risks: bleeding, urine leak, aur kabhi kabhaar total nephrectomy mein badalna.",
        "[Your typical stay and outcomes.]",
      ],
    },
    "watch-small-tumour": {
      question: "Mera tumour chhota hai: kya operation ki jagah sirf nazar rakh sakte hain?",
      answer:
        "Haan, kuch chune hue logon mein: 3 se 4 cm se chhote tumour, khaaskar badi umar ya kam fit mareezon mein, regular scans se monitor kiye ja sakte hain.",
      points: [
        "Chhote kidney tumour aam taur par dheere badhte hain, saal mein kuch millimetre, aur chhote rehte hue kam hi failte hain.",
        "Shuru mein har 3 se 6 mahine mein scan, phir kam baar.",
        "Agar yeh tezi se badhe (saal mein lagbhag 5 mm se zyada) ya 4 cm paar kare to ilaj ki salah di jati hai.",
        "Biopsy faisla lene mein madad kar sakti hai.",
      ],
    },
    "ablation-rfa-cryo": {
      question:
        "Kya chhote tumour ko surgery ki jagah jalaya ya jamaya (RFA ya cryoablation) ja sakta hai?",
      answer:
        "Haan: aam taur par 3 cm se chhote tumour ke liye radiofrequency, microwave ya cryoablation options hain, khaaskar badi umar ya kam fit mareezon ke liye.",
      points: [
        "CT ya ultrasound guidance mein needle se kiya jata hai, aksar thode din rukna padta hai.",
        "Tumour bache rehne ya wapas aane ka chance surgery se thoda zyada hai, lekin ablation dobara ho sakta hai.",
        "Diagnosis confirm karne ke liye usi baar biopsy li jati hai.",
      ],
    },
    "tumour-in-only-kidney": {
      question: "Tumour meri ikloti kidney mein hai: kya bina dialysis ke ilaj ho sakta hai?",
      answer:
        "Aam taur par haan: partial nephrectomy, ablation ya surveillance ka maksad cancer hatana aur itni kidney bachana hai ki dialysis na lage.",
      points: [
        "Ek kidney mein partial nephrectomy complex hai aur experienced team se karana sabse behtar hai.",
        "Kidney ke kaam mein kuch kami ki ummeed hoti hai; kuch logon ko temporary dialysis chahiye hota hai.",
        "Chhote tumour mein ablation ek vikalp hai.",
      ],
    },
    "nephrectomy-after-spread": {
      question: "Cancer fail chuka hai: kya kidney nikalna ab bhi kaam ka hai?",
      answer:
        "Kabhi kabhi: achhi sehat aur kam failaav wale kuch chune hue mareezon mein dawa ke ilaj ke saath kidney nikalna madad karta hai.",
      points: [
        "Faisla tumour board risk group aur bimari kitni hai, iske aadhar par karta hai.",
        "Aksar pehle dawa ka ilaj hota hai, aur response achha ho to baad mein surgery.",
        "Failaav ke akele spots, jaise phephde ya adrenal mein, kabhi kabhi nikaale ja sakte hain.",
      ],
    },
    "immunotherapy-targeted-tablets": {
      question:
        "Kya advanced kidney cancer mein immunotherapy aur targeted tablets kaam karti hain? Inka kharcha kitna hai?",
      answer:
        "Haan: immunotherapy combinations aur targeted tablets ne advanced kidney cancer ke nateejon ko badal diya hai.",
      points: [
        "Aam pehla ilaj: do immunotherapy dawaiyan, ya immunotherapy ke saath ek targeted tablet.",
        "Kuch mareezon mein lambe samay tak response rehta hai; kuch mein bimari poori tarah gaayab ho jati hai.",
        "High-risk tumour mein surgery ke baad bhi immunotherapy ki salah di ja sakti hai.",
        "[Cost range in India, generic options and patient-assistance programmes.]",
      ],
    },
    "chemotherapy-radiation": {
      question: "Kya kidney cancer mein chemotherapy ya radiation kaam karte hain?",
      answer:
        "Kidney cancer ke aam types mein standard chemotherapy kam kaam karti hai, isliye iska use kam hi hota hai.",
      points: [
        "Haddiyon ya dimaag tak failaav se hone wale dard ya bleeding ko radiation control karta hai; stereotactic radiation kuch chune hue spots ka ilaj kar sakta hai.",
        "Main ilaj surgery, ablation, immunotherapy aur targeted tablets hain.",
      ],
    },
    "robotic-surgery-cost-delhi": {
      question:
        "Delhi mein kidney cancer ki robotic surgery ka kharcha kitna hai? Kya insurance mein cover hota hai?",
      answer:
        "[hospital] mein robotic partial ya total nephrectomy ka package lagbhag [₹ range] hai.",
      points: [
        "Kharcha kis par depend karta hai: complexity, kitne din rukna, room category, robotic consumables.",
        "Zyadatar health policies robotic surgery cover karti hain, kuch sub-limit ke saath; pre-authorisation lein (dekhein: Robotic surgery).",
        "Package mein kya shaamil hai aur kya nahi, iski list banayein.",
      ],
    },
    "life-with-one-kidney": {
      hinglish: "Kya ek kidney ke saath normal zindagi jee sakte hain?",
      question:
        "Kya main ek kidney ke saath normal zindagi jee sakta/sakti hoon? Kya isse meri umar kam hogi?",
      answer:
        "Haan: ek swasth kidney normal zindagi ke liye kaafi hai; jaise kidney donors normal umar jeete hain.",
      points: [
        "Bachi hui kidney badi ho jati hai aur kaam ka bada hissa sambhal leti hai.",
        "Ise bachayein: BP aur sugar control karein, baar baar painkillers na lein, paani peete rahein, har saal kidney function check karayein.",
        "Baad mein kidney ki bimari ka risk thoda zyada hai, khaaskar diabetes ya high BP mein (yeh ek wajah hai ki jahan sambhav ho partial nephrectomy behtar maani jati hai).",
      ],
    },
    "dialysis-and-creatinine": {
      question:
        "Kya kidney nikalne ke baad dialysis lagega? Surgery ke baad mera creatinine badh gaya: kya yeh normal hai?",
      answer:
        "Doosri kidney swasth ho to dialysis kam hi lagta hai; surgery ke baad creatinine ka badhna ummeed ke mutaabik hai.",
      points: [
        "Total nephrectomy ke baad eGFR aksar ek chauthai se ek tihaai tak girta hai, phir hafton se mahino mein kuch had tak sudhar jata hai.",
        "Creatinine ek naye baseline par tik jata hai jo aapka reference ban jata hai.",
        "Peshab kam hona, sujan ya saans phoolna ho to turant batayein.",
      ],
    },
    "diet-with-one-kidney": {
      question:
        "Ek kidney ke saath kya khayein ya na khayein? Kya low-protein diet zaroori hai? Kitna paani piyein?",
      answer:
        "Ek swasth kidney wale zyadatar logon ko kisi khaas diet ki zaroorat nahi, bas santulit aur kam namak wali diet.",
      points: [
        "Normal protein theek hai; bahut high-protein diet aur protein supplements se bachein.",
        "Itna piyein ki peshab halka peela rahe (Indian garmiyon mein aksar din mein 2 se 3 litre), jab tak doctor paani kam karne ko na kahein.",
        "Namak aur processed food kam karein; bina doctor ki salah ke herbal ya bodybuilding supplements na lein.",
        "Kidney ka kaam kam ho to dietitian diet tay karte hain.",
      ],
    },
    "safe-painkillers": {
      question: "Ek kidney ke saath kaunse painkillers safe hain?",
      answer:
        "Paracetamol rozmarra ka sabse safe painkiller hai; ibuprofen, diclofenac ya nimesulide jaise NSAIDs ka regular use na karein.",
      points: [
        "NSAIDs kidney tak khoon ka flow kam karte hain, khaaskar jab sharir mein paani kam ho.",
        "Kidney ka kaam normal ho to thode din ke course ki ijaazat mil sakti hai: pehle doctor se poochhein.",
        "Nayi dawa, contrast scan ya antibiotics se pehle har doctor ko batayein ki aapki ek kidney hai.",
      ],
    },
    "exercise-and-sports": {
      question: "Kya ek kidney ke saath exercise, weight lifting ya sports kar sakte hain?",
      answer:
        "Haan: regular exercise, gym aur zyadatar sports safe hain aur inki salah di jati hai.",
      points: [
        "Robotic surgery ke baad: lagbhag 2 hafte par halki activity, 4 se 6 hafte baad bhaari wazan uthana.",
        "Kuch doctor boxing ya martial arts jaise zyada takkar wale sports mein saavdhaani ya padding ki salah dete hain.",
        "Exercise BP, wazan aur kidney ki sehat ke liye achhi hai.",
      ],
    },
    "marriage-and-pregnancy": {
      question:
        "Kya ek kidney ke saath shaadi aur bachche ho sakte hain? Kya ek kidney wali aurat ki pregnancy normal ho sakti hai?",
      answer:
        "Haan: ek kidney se fertility, sex life ya shaadi par asar nahi padta, aur ek swasth kidney wali zyadatar auraton ki pregnancy normal hoti hai.",
      points: [
        "Pregnancy mein BP aur kidney ki zyada kareeb se monitoring chahiye.",
        "Cancer ke ilaj ke baad pregnancy ke samay ke baare mein apne oncologist se baat karein.",
        "Kuch cancer dawaon mein ilaj ke dauraan contraception zaroori hai.",
      ],
    },
    "recurrence-and-scans": {
      question:
        "Kya surgery ke baad kidney cancer wapas aa sakta hai? Kitni baar scans karane honge?",
      answer:
        "Zyadatar chhote, low-grade cancer kabhi wapas nahi aate; bada size, zyada grade aur zyada stage ke saath risk badhta hai.",
      points: [
        "Cancer usi jagah, doosri kidney mein, ya phephdon ya haddiyon mein wapas aa sakta hai.",
        "Chest aur pet ke CT scans risk ke hisaab se schedule par hote hain, aam taur par kam se kam 5 saal tak.",
        "Jaldi pakde gaye recurrence ka aksar surgery, ablation ya dawaon se ilaj ho sakta hai.",
      ],
    },
    "survival-rate": {
      question: "Kidney cancer surgery ke baad survival rate kya hai?",
      answer:
        "Kidney tak seemit cancer mein lagbhag 10 mein se 9 log 5 saal par zinda hain (lagbhag, US registry data).",
      points: [
        "Paas ke tissue ya lymph nodes tak failaav mein: lagbhag 10 mein se 7 (lagbhag).",
        "Door tak failaav mein: pehle lagbhag 5 mein se 1 (lagbhag), ab immunotherapy se behtar ho raha hai.",
        "Jaldi nikaale gaye chhote tumour ka outlook bahut achha hai.",
      ],
    },
    "hospital-stay-and-recovery": {
      question:
        "Robotic kidney surgery ke baad hospital mein kitne din rukna padta hai aur recovery kitni lambi hai?",
      answer:
        "Zyadatar log 2 se 3 din rukte hain aur 2 se 4 hafton mein normal kaam par laut aate hain.",
      points: [
        "Surgery ke agle din se chalna; 1 se 2 din mein normal khana.",
        "Drain aur catheter aam taur par 1 se 2 din mein nikal jate hain.",
        "4 se 6 hafte tak bhaari wazan na uthayein.",
        "[Your typical stay.]",
      ],
    },
  },
};
