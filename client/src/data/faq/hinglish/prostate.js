// Hinglish (Hindi in Latin script) draft of the prostate answers, translated
// from the doctor's English text without adding content. Not yet medically
// reviewed. Square brackets are the doctor's placeholders and stay in English.

export const prostateHinglish = {
  title: "Prostate cancer",
  stages: {
    "is-it-cancer": "Kya yeh cancer hai? PSA, lakshan aur risk",
    "tests-and-reports": "Tests aur reports",
    "treatment-choices": "Ilaj ke options aur surgery",
    "life-after-treatment": "Ilaj ke baad ki zindagi",
  },
  questions: {
    "psa-high": {
      question: "Mera PSA high hai: kya iska matlab hai ki mujhe prostate cancer hai?",
      answer:
        "Zaroori nahi: high PSA wale zyadatar mardon ko prostate cancer nahi hota.",
      points: [
        "PSA normal prostate tissue bhi banata hai; yeh prostate badhne (BPH), infection, sujan aur umar ke saath badhta hai.",
        "Ek baar PSA high aaye to kuch hafton baad dobara test karayein, saath mein infection check karne ke liye urine test bhi.",
        "Agar high hi rahe: examination, PSA density ya free PSA, phir biopsy ka faisla karne se pehle prostate ka MRI.",
        "Agar PSA aapki umar ki range se upar hai ya badhta ja raha hai, to uro-oncologist ko dikhayein.",
      ],
    },
    "normal-psa-for-age": {
      hinglish: "PSA kitna hona chahiye?",
      question:
        "Meri umar mein normal PSA kitna hota hai? Mera PSA 6 (ya 9, ya 15) hai: mujhe kitni chinta karni chahiye?",
      answer:
        "Koi ek normal value nahi hai; aam taur par 4 ng/mL cut-off maana jata hai, aur badi umar ke mardon mein isse upar ki limit bhi theek maani jati hai.",
      points: [
        "Umar ke hisaab se aam upper limits: 2.5 (40 se 49 saal), 3.5 (50 se 59 saal), 4.5 (60 se 69 saal), 6.5 (70 se 79 saal) ng/mL.",
        "PSA 4 se 10 ek grey zone hai: is range mein lagbhag 4 mein se 1 mard ki biopsy mein cancer milta hai.",
        "10 se upar yeh chance lagbhag aadha ya usse zyada ho jata hai; 20 se upar, agar cancer confirm ho, to spread dekhne ke liye aam taur par scans zaroori hote hain.",
        "Ek number jitna hi uska trend bhi maayne rakhta hai: lagatar badhta PSA zyada important hai.",
      ],
    },
    "psa-false-rise": {
      question:
        "Kya urine infection, haal mein sex ya cycling se PSA galat tareeke se badh sakta hai? Kya test se pehle khali pet rehna zaroori hai?",
      answer:
        "Haan: infection, ejaculation, lambi cycle ride aur catheter se PSA kuch samay ke liye badh sakta hai; khali pet rehna zaroori nahi hai.",
      points: [
        "Test se pehle 48 ghante tak ejaculation aur cycling se bachein.",
        "Urine infection ya prostatitis ke baad dobara test se pehle lagbhag 6 hafte rukein.",
        "Catheter, cystoscopy ya biopsy se PSA kai hafton tak badha reh sakta hai.",
        "Finasteride ya dutasteride PSA ko lagbhag aadha kar dete hain: agar aap yeh le rahe hain to doctor ko batayein.",
      ],
    },
    "bph-vs-cancer": {
      question:
        "Kya prostate badhna (BPH) aur prostate cancer ek hi cheez hai? Kya BPH cancer ban sakta hai?",
      answer:
        "Nahi: BPH bina cancer wala badhaav hai, aur yeh cancer nahi banta.",
      points: [
        "Dono 50 ke baad aam hain aur ek saath ho sakte hain, isliye BPH wale mardon ko bhi salah milne par PSA check karana chahiye.",
        "BPH mainly gland ke beech wale hisse mein badhta hai; zyadatar cancer bahar wale zone mein shuru hote hain.",
        "Peshab ki takleef cancer se kahin zyada BPH ki wajah se hoti hai.",
      ],
    },
    "night-urination": {
      question:
        "Mujhe raat mein kai baar peshab ke liye uthna padta hai: kya yeh cancer ho sakta hai? Kya prostate cancer mein koi lakshan na ho, aisa ho sakta hai?",
      answer:
        "Raat mein baar baar peshab aam taur par BPH, overactive bladder, diabetes ya der raat paani peene ki wajah se hota hai, shuruaati cancer se kabhi kabhaar.",
      points: [
        "Shuruaati prostate cancer mein aam taur par koi lakshan nahi hote; yeh PSA aur MRI se pakda jata hai.",
        "Peshab ya semen mein khoon, haddi mein dard, wazan ghatna ya kamzor dhaar ho to jaldi dikhayein.",
        "Cancer hai ya nahi, yeh lakshan nahi balki PSA test aur examination batate hain.",
      ],
    },
    "when-to-start-psa-testing": {
      question: "Mardon ko kis umar se PSA test shuru karna chahiye, aur kitni baar?",
      answer:
        "Lagbhag 50 saal ki umar se PSA test ke baare mein baat karein, ya agar aapko zyada risk hai to 40 se 45 saal se.",
      points: [
        "Zyada risk: pita ya bhai ko prostate cancer, pata hua BRCA2 mutation, African vansh.",
        "Pehla PSA kam ho (1 ng/mL se kam) to tests ke beech lamba gap rakh sakte hain; zyada value par har 1 se 2 saal mein check zaroori hai.",
        "70 ke baad test sehat aur life expectancy par depend karta hai.",
        "Yeh milkar liya jane wala faisla hai: test khatarnak cancer ko jaldi pakadta hai, lekin aise dheeme cancer bhi pakadta hai jinhe shayad kabhi ilaj ki zaroorat na pade.",
      ],
    },
    "family-history-risk": {
      question: "Mere pita ya bhai ko prostate cancer tha: kya mujhe zyada risk hai?",
      answer:
        "Haan: pita ya bhai ko prostate cancer ho to aapka risk lagbhag double ho jata hai.",
      points: [
        "Risk aur bhi zyada hai agar unhe 60 se pehle diagnosis hua tha, ya kai rishtedaar affected hain.",
        "PSA test 40 se 45 saal par shuru karein.",
        "Parivaar mein breast, ovarian ya pancreatic cancer BRCA genes ki taraf ishara kar sakta hai; genetic counselling ke baare mein sochein.",
      ],
    },
    "how-fast-it-grows": {
      question: "Prostate cancer kitni tezi se badhta aur failta hai?",
      answer:
        "Zyadatar prostate cancer kai saalon mein dheere dheere badhte hain, lekin high-grade cancer tezi se badh aur fail sakte hain.",
      points: [
        "Raftaar ka andaza Gleason score (Grade Group), PSA level aur MRI findings se lagaya jata hai.",
        "Low-risk cancer shayad mard ki poori zindagi mein koi nuksaan na kare aur aksar sirf monitor kiya ja sakta hai.",
        "Tests aur faislon mein kuch hafte lagna zyadatar mardon ke liye safe hai; high-risk cancer ko mahino tak intezaar nahi karna chahiye.",
        "Yeh sabse pehle paas ke lymph nodes aur haddiyon mein failta hai.",
      ],
    },
    "back-or-bone-pain": {
      question:
        "Mujhe kamar ya haddiyon mein dard hai: kya yeh failaa hua prostate cancer ho sakta hai?",
      answer:
        "Kamar dard bahut aam hai aur aam taur par reedh ki haddi ya muscles se hota hai, cancer se nahi.",
      points: [
        "Check karayein agar saath mein PSA high hai, prostate cancer pata hai, raat mein dard hota hai ya wazan ghat raha hai.",
        "Pairon mein nayi kamzori, sunnapan, ya peshab ya potty par control khona emergency hai (spinal cord compression ho sakta hai).",
        "Tests: PSA, bone scan ya PSMA PET-CT, aur zaroorat par spine MRI.",
      ],
    },
    "sex-and-cancer-risk": {
      question: "Kya baar baar sex ya masturbation se prostate cancer hota hai ya rukta hai?",
      answer: "Nahi: sex aur masturbation se prostate cancer nahi hota.",
      points: [
        "Kuch bade studies mein zyada baar ejaculate karne wale mardon mein risk thoda kam mila, lekin yeh pakki suraksha saabit nahi hai.",
        "Prostate cancer sex se partner ko nahi failta.",
        "PSA test se pehle 48 ghante tak ejaculation se bachein.",
      ],
    },
    "mri-before-biopsy": {
      question:
        "Kya prostate biopsy se pehle MRI zaroori hai? PI-RADS 3, 4 ya 5 ka kya matlab hai?",
      answer:
        "Haan: PSA badha ho to biopsy se pehle MRI ab standard pehla kadam hai.",
      points: [
        "Yeh shaky jagahein dikhata hai, targeted biopsy ko guide karta hai aur kuch mardon ko biopsy se bacha leta hai.",
        "PI-RADS significant cancer ki sambhavna ka score hai: 1 se 2 kam, 3 pakka nahi, 4 sambhav, 5 bahut sambhav.",
        "PI-RADS 4 se 5 mein aam taur par targeted biopsy chahiye; PI-RADS 3 mein faisla PSA density aur doosri baaton par depend karta hai.",
        "Normal MRI aur kam PSA density ho to biopsy ki jagah monitoring ho sakti hai.",
      ],
    },
    "is-biopsy-painful": {
      question: "Kya prostate biopsy mein dard hota hai? Kya yeh anaesthesia mein hoti hai?",
      answer:
        "Zyadatar mardon ko sirf halki takleef hoti hai; yeh local anaesthesia, sedation ya chhote general anaesthetic mein ki jati hai.",
      points: [
        "Ismein lagbhag 20 se 30 minute lagte hain; zyadatar mard usi din ghar chale jate hain.",
        "Baad mein kuch dinon se hafton tak peshab, potty ya semen mein khoon aana aam hai aur theek ho jata hai.",
        "Biopsy ke baad bukhar ya kanpkanpi ho to turant dikhayein.",
        "Khoon patla karne wali dawa sirf doctor ki salah par band karein. [Your anaesthesia and technique.]",
      ],
    },
    "can-biopsy-spread-cancer": {
      question: "Kya biopsy se prostate cancer fail sakta hai?",
      answer:
        "Nahi: iska koi achha saboot nahi hai ki prostate biopsy se cancer failta hai.",
      points: [
        "Cancer aur uska grade confirm karne ka ek hi tareeka biopsy hai, aur isi se ilaj tay hota hai.",
        "Asli khatra darr ki wajah se diagnosis mein der karna hai.",
        "Biopsy ke main risk bleeding aur infection hain.",
      ],
    },
    "transrectal-vs-transperineal": {
      question:
        "Transrectal ya transperineal biopsy: kaunsi zyada safe hai? Fusion biopsy kya hoti hai?",
      answer:
        "Transperineal biopsy, jo scrotum ke peeche ki skin se hoti hai, mein transrectal raste ke muqable infection ka risk kahin kam hai.",
      points: [
        "Transrectal mein needle rectum se hokar jaati hai, isliye serious infection (sepsis) ka chance zyada hai.",
        "Transperineal raste se prostate ke aage wale hisse ka sample bhi behtar milta hai.",
        "Fusion biopsy mein MRI ko live ultrasound par overlay kiya jata hai taaki needle shaky jagah ko target kare.",
        "[Which route and fusion system you use.]",
      ],
    },
    "negative-biopsy-rising-psa": {
      question: "Meri biopsy negative aayi lekin PSA badhta ja raha hai: ab kya karein?",
      answer:
        "Negative biopsy se cancer ka chance kam hota hai, lekin yeh use poori tarah rule out nahi karti.",
      points: [
        "MRI nahi hua hai to karayein; MRI-targeted repeat biopsy ki zaroorat pad sakti hai.",
        "BPH ka badhna aur chronic prostatitis bhi PSA badha sakte hain.",
        "PSA density, free PSA aur kuch chune hue mardon mein PSMA PET-CT faisla lene mein madad karte hain.",
        "Saaf biopsy ke baad bhi regular PSA check karate rahein.",
      ],
    },
    "gleason-score": {
      question:
        "Meri report mein Gleason 3+4=7 (Grade Group 2) ka kya matlab hai? Aur Gleason 8 ya 9 ka?",
      answer:
        "Gleason score batata hai ki cancer cells kitne aggressive dikhte hain; Grade Group (1 se 5) aasaan modern scale hai.",
      points: [
        "Gleason 6 (Grade Group 1): low grade, aksar monitoring ke liye theek.",
        "3+4=7 (Grade Group 2): zyadatar low-grade, kuch intermediate pattern ke saath; ilaj ya, kuch chune hue mardon mein, monitoring.",
        "4+3=7 (Grade Group 3): zyada aggressive pattern; aam taur par ilaj chahiye.",
        "Gleason 8 se 10 (Grade Groups 4 se 5): high grade; poori staging aur active ilaj chahiye.",
        "Kitne cores positive hain aur har ek mein cancer kitne percent hai, yeh bhi maayne rakhta hai.",
      ],
    },
    "stage-and-risk-groups": {
      question:
        "Mera cancer kis stage ka hai? Low-risk, intermediate-risk aur high-risk ka kya matlab hai?",
      answer:
        "Stage batata hai ki cancer kitna fail chuka hai; risk group PSA, grade aur stage ko milakar uske vyavhaar ka andaza deta hai.",
      points: [
        "Localised (prostate ke andar), locally advanced (capsule ke bahar ya seminal vesicles mein), metastatic (nodes ya haddiyan).",
        "Low risk: PSA 10 se kam, Gleason 6, chhota tumour. Intermediate: PSA 10 se 20 ya Gleason 7. High: PSA 20 se zyada, Gleason 8 se 10 ya locally advanced.",
        "Risk group se tay hota hai ki monitoring, ek ilaj ya combined ilaj hoga.",
      ],
    },
    "psma-pet-ct": {
      question: "PSMA PET-CT scan kya hai? Kya mujhe bone scan ki jagah yeh chahiye?",
      answer:
        "PSMA PET-CT poore sharir mein prostate cancer cells ko CT aur bone scan dono milakar se zyada sahi pakadta hai.",
      points: [
        "Sabse kaam ka high-risk ya unfavourable intermediate-risk cancer mein, aur ilaj ke baad PSA badhne par.",
        "Low-risk cancer mein aam taur par staging scan ki zaroorat nahi hoti.",
        "Ismein radioactive tracer ki chhoti dose use hoti hai aur yeh India ke kai centres mein milta hai. [Your typical cost.]",
      ],
    },
    "genetic-testing": {
      question: "Kya mujhe aur mere parivaar ko genetic testing, jaise BRCA ke liye, karani chahiye?",
      answer:
        "Metastatic ya high-risk cancer mein, ya parivaar mein prostate, breast, ovarian ya pancreatic cancer ki strong history ho to genetic testing ki salah di jati hai.",
      points: [
        "BRCA2 aur aise gene changes se ilaj ke extra options khul sakte hain, jaise PARP inhibitors.",
        "Positive result rishtedaaron ki madad karta hai: bhai aur bete PSA test jaldi shuru karte hain; auraton ki breast aur ovarian cancer ki screening ho sakti hai.",
        "Yeh blood ya saliva test hai, pehle aur baad mein counselling ke saath.",
      ],
    },
    "is-it-curable": {
      question: "Kya prostate cancer theek ho sakta hai?",
      answer:
        "Haan: jo prostate cancer abhi prostate ke andar hi pakda jaye, woh aam taur par theek ho sakta hai.",
      points: [
        "Theek karne wale options: robotic radical prostatectomy, radiation, aur kuch chune hue mardon ke liye focal therapy jaise HIFU.",
        "Kai locally advanced cancer bhi combined ilaj se theek ho sakte hain.",
        "Jo cancer haddiyon tak fail chuka hai woh aam taur par theek nahi hota, lekin saalon tak control kiya ja sakta hai.",
      ],
    },
    "surgery-or-radiation": {
      question: "Surgery ya radiation: mere liye kya behtar hai?",
      answer:
        "Localised cancer mein surgery aur radiation dono se theek hone ki dar milti-julti hai; chunaav umar, sehat, cancer ki khaasiyat aur aapke liye kaunse side effects zyada maayne rakhte hain, is par depend karta hai.",
      points: [
        "Surgery gland nikaal deti hai aur poori pathology deti hai; PSA undetectable ho jana chahiye. Main side effects: peshab leak hona aur erection ki dikkat.",
        "Radiation mein operation nahi hota, aksar mahino ke hormone injections ke saath; isse aanton aur bladder mein irritation ho sakti hai, aur erection ki dikkat dheere dheere aati hai.",
        "Kam umar ke, fit mard aksar surgery chunte hain; doosri bimariyon ya locally advanced disease wale mard aksar radiation chunte hain.",
        "Uro-oncologist aur radiation oncologist, dono ki raay lein.",
      ],
    },
    "active-surveillance": {
      question:
        "Active surveillance kya hai? Kya low-risk cancer ka ilaj na karna safe hai?",
      answer:
        "Active surveillance ka matlab hai low-risk cancer ko kareeb se monitor karna aur sirf badlaav aane par ilaj karna; low-risk disease ke liye yeh safe hai.",
      points: [
        "Follow-up: har 3 se 6 mahine mein PSA, MRI, aur tay samay par repeat biopsy.",
        "Kai mardon ko kabhi ilaj ki zaroorat nahi padti; jinhe padti hai unka ilaj aam taur par theek hone ke liye samay rehte ho jata hai.",
        "Isse ilaj ke side effects se bacha ya unhe taala ja sakta hai.",
        "Yeh \"watchful waiting\" se alag hai, jo badi umar ya kamzor mardon mein sirf lakshanon ke ilaj ke liye hota hai.",
      ],
    },
    "hifu-focal-therapy": {
      question:
        "HIFU ya focal therapy kya hai? Kya prostate ke sirf cancer wale hisse ka ilaj ho sakta hai?",
      answer:
        "Focal therapy prostate ke sirf us hisse ka ilaj karti hai jismein significant cancer hai; HIFU focused ultrasound se us jagah ko garam karke khatam karta hai.",
      points: [
        "Anaesthesia mein peeche ke raste se kiya jata hai, aam taur par day-care ya ek raat ka procedure.",
        "Hemiablation prostate ke ek aadhe hisse ka ilaj karta hai; focal ablation ek chhote zone ka.",
        "Maksad: cancer ko control karna aur peshab ka control aur erections bachana.",
        "Sahi MRI aur mapping biopsy zaroori hai. [Your HIFU device and experience.]",
      ],
    },
    "who-is-suitable-for-hifu": {
      question:
        "HIFU kiske liye theek hai? Peshab ke control aur erections ke liye yeh robotic surgery se kaisa hai?",
      answer:
        "HIFU sabse theek intermediate-risk (aur kuch chune hue low-risk) cancer ke liye hai jo ek jagah ya ek side tak seemit ho, MRI mein dikhe aur biopsy mein confirm ho.",
      points: [
        "Theek nahi: dono taraf kai jagah cancer, bade high-grade tumour, ya prostate ke bahar failaav.",
        "Surgery ke muqable: leak hone aur erection jaane ka risk kahin kam, aur jaldi recovery.",
        "Trade-off: lambe samay ke cancer-control ka data kam hai, aur kuch mardon ko dobara ilaj ya baad mein surgery chahiye hoti hai.",
        "PSA, MRI aur biopsy se follow-up zaroori hai.",
      ],
    },
    "can-hifu-be-repeated": {
      question:
        "Kya HIFU dobara ho sakta hai? Zaroorat padne par kya baad mein surgery ya radiation ho sakti hai?",
      answer:
        "Haan: HIFU dobara ho sakta hai, aur baad mein surgery ya radiation ka option bana rehta hai.",
      points: [
        "Kuch hi mardon ko doosre focal treatment ki zaroorat padti hai.",
        "HIFU ke baad surgery ho sakti hai lekin technically mushkil hoti hai; experience maayne rakhta hai.",
        "Regular follow-up se cancer wapas aaye to jaldi pakda jata hai.",
      ],
    },
    "robotic-radical-prostatectomy": {
      question:
        "Robotic radical prostatectomy kya hai? Nerve-sparing ka kya matlab hai?",
      answer:
        "Robotic radical prostatectomy mein poora prostate aur seminal vesicles 5 se 6 keyhole cuts se nikaale jate hain, aur surgeon robotic instruments ko control karte hain.",
      points: [
        "Bada kiya hua 3D view aur kalai jaise mudne wale instruments se baareek dissection hota hai.",
        "Nerve-sparing mein prostate ke paas ki baareek nerves bachayi jati hain jo erections control karti hain, jab cancer ijaazat de.",
        "Cancer ki jagah aur grade ke hisaab se ek ya dono side bachayi ja sakti hain.",
        "[Your typical operating time, hospital stay and catheter duration.]",
      ],
    },
    "lymph-node-removal": {
      question: "Prostate ke saath lymph nodes kyon nikaale jate hain?",
      answer:
        "Lymph nodes woh pehli jagah hain jahan prostate cancer failta hai; inhe nikaalne se failaav check hota hai aur chhote deposits bhi nikal sakte hain.",
      points: [
        "Intermediate aur high-risk cancer mein salah di jati hai jab node mein failne ka anumaanit risk maayne rakhta ho.",
        "Low-risk cancer mein aam taur par iski zaroorat nahi hoti.",
        "Sambhav side effects: lymph fluid ka jama hona (lymphocele) aur pair mein sujan.",
      ],
    },
    "too-old-for-surgery": {
      question:
        "Mere papa 76 saal ke hain: kya woh surgery ke liye zyada budhe hain? Kya unhe ilaj ki zaroorat bhi hai?",
      answer:
        "Sirf umar se faisla nahi hota; overall sehat, life expectancy aur cancer ka risk zyada maayne rakhte hain.",
      points: [
        "70 ki umar ke fit mardon ko aggressive cancer mein ilaj se fayda hota hai; 75 ke upar aksar hormones ke saath radiation chuna jata hai, kuch chune hue fit mardon mein surgery.",
        "Badi umar ke mard mein low-risk cancer ko aksar sirf monitoring chahiye.",
        "Doctor dil aur phephdon ki sehat, doosri bimariyan aur rozmarra ka kaam-kaaj dekhte hain.",
        "\"Mard prostate cancer ke saath marte hain, usse nahi\" low-risk cancer par laagu hota hai, high-grade cancer par nahi.",
      ],
    },
    "treatment-without-surgery": {
      hinglish: "Prostate cancer ka ilaj bina operation ke ho sakta hai?",
      question: "Kya prostate cancer ka ilaj bina surgery ke ho sakta hai?",
      answer: "Haan: kai asardaar ilaj hain jinmein operation nahi hota.",
      points: [
        "Radiation, high-risk cancer mein hormone therapy ke saath.",
        "Theek localised cancer ke liye focal therapy jaise HIFU.",
        "Low-risk cancer ke liye active surveillance.",
        "Advanced cancer ke liye hormone therapy aur nayi tablets.",
      ],
    },
    "hormone-therapy": {
      question: "Hormone therapy kya hai? Har 1, 3 ya 6 mahine mein injection kyon?",
      answer:
        "Hormone therapy (androgen deprivation) testosterone kam karti hai, jiski prostate cancer ko badhne ke liye zaroorat hoti hai.",
      points: [
        "1, 3 ya 6 mahine chalne wale depot injections se di jati hai, ya testicles nikaal kar.",
        "High-risk cancer mein radiation ke saath, aur cancer fail chuka ho to ilaj ki reedh ki haddi ke roop mein use hoti hai.",
        "Yeh cancer ko control karti hai lekin akele theek nahi karti.",
        "Gap sirf suvidha aur kharche ki baat hai; asar ek jaisa hai.",
      ],
    },
    "orchiectomy": {
      question:
        "Doctor ne testicles nikaalne (orchiectomy) ki salah di hai: kya yeh hormone injections jaisa hi hai?",
      answer:
        "Haan: orchiectomy injections jitna hi asardaar tareeke se testosterone kam karti hai, lekin hamesha ke liye.",
      points: [
        "Chhota operation, aksar spinal anaesthesia mein, baar baar injection ke kharche ya visits ke bina.",
        "Kaam ka hai jab kharcha ya safar regular injections ko mushkil bana de.",
        "Side effects injections jaise hi hain; ise ulta nahi kiya ja sakta.",
        "Subcapsular technique se scrotum lagbhag normal dikhta hai.",
      ],
    },
    "spread-to-bones": {
      question: "Cancer haddiyon tak fail gaya hai: kya ab bhi ilaj ho sakta hai?",
      answer:
        "Haan: haddiyon mein failaav aam taur par theek nahi hota, lekin modern ilaj kai mardon mein ise saalon tak control karta hai.",
      points: [
        "Hormone therapy ke saath nayi tablet (abiraterone, enzalutamide, apalutamide) ya docetaxel chemotherapy.",
        "Haddiyon ko bachane wale injections, aur dard wali jagahon par radiation.",
        "Bimari badhne par Lutetium-PSMA aur PARP inhibitors (gene changes ke liye).",
        "Kam failaav wale mardon mein prostate par radiation madad kar sakta hai.",
        "Har stage par dard ka control aur supportive care.",
      ],
    },
    "abiraterone-enzalutamide-lutetium": {
      question: "Abiraterone, enzalutamide aur Lutetium-PSMA therapy kya hain?",
      answer:
        "Yeh naye ilaj hain jo advanced prostate cancer mein sirf hormone injections se aage zindagi badhate hain.",
      points: [
        "Abiraterone (prednisolone ke saath li jati hai) aur enzalutamide ya apalutamide: rozana ki tablets jo testosterone ke asar ko aur poori tarah rokti hain.",
        "India mein generic versions se kharcha kaafi kam hua hai. [Current monthly cost range.]",
        "Lutetium-PSMA: ek injection jo radiation seedhe cancer cells tak pahunchata hai, nuclear medicine centres mein cycles mein diya jata hai.",
        "Monitoring: BP, liver tests aur sugar (abiraterone); thakaan aur girna (enzalutamide); blood counts aur munh sookhna (Lutetium).",
      ],
    },
    "cost-in-delhi": {
      question:
        "Delhi mein robotic prostatectomy aur HIFU ka kharcha kitna hai? Kya insurance mein cover hota hai?",
      answer:
        "[hospital] mein robotic prostatectomy ka package lagbhag [₹ range] hai; HIFU ka kharcha lagbhag [₹ range] hai.",
      points: [
        "Kharcha kis par depend karta hai: room category, kitne din rukna, lymph node removal, surgery se pehle ke tests, complications.",
        "Package mein kya shaamil hai (surgeon, OT, robotic consumables, rukna, dawaiyan) aur kya nahi, iski list banayein.",
        "Zyadatar health policies robotic surgery cover karti hain, kuch sub-limit ke saath; pre-authorisation lein (details: Robotic surgery).",
        "Admission se pehle insurer se HIFU cover check karein.",
      ],
    },
    "urine-leakage-after-surgery": {
      hinglish: "Operation ke baad peshab par control kab tak aata hai?",
      question:
        "Kya prostate surgery ke baad peshab leak hoga? Control wapas aane mein kitna samay lagta hai?",
      answer:
        "Catheter nikalne ke baad pehle kuch hafton mein thoda leak hona normal hai; zyadatar mardon ka control 3 se 6 mahine mein wapas aa jata hai.",
      points: [
        "Ek saal tak lagbhag 10 mein se 9 mardon ko pad ki zaroorat nahi hoti, ya sirf safety pad chahiye hota hai.",
        "Pelvic floor exercises aur sahi wazan recovery tez karte hain.",
        "Ek saal ke baad bhi leak ho to ilaj ho sakta hai: dawaiyan, male sling ya artificial sphincter.",
        "[Your audited continence figures, if you publish them.]",
      ],
    },
    "pads-and-diapers": {
      question: "Kya mujhe pads ya diapers ki zaroorat padegi, aur kab tak?",
      answer:
        "Zyadatar mard kuch hafton se kuch mahino tak pads use karte hain; lambe samay tak diapers ki zaroorat kam hi padti hai.",
      points: [
        "Leak aam taur par khaansne, chheenkne, wazan uthane ya khade hone par hota hai.",
        "Absorbent pads se shuru karein aur control behtar hone par kam karte jayein.",
        "Jis din catheter nikle, us din pads saath layein.",
      ],
    },
    "catheter-and-kegels": {
      question:
        "Catheter kitne din rahega? Pelvic floor (Kegel) exercises kaise karein?",
      answer:
        "Robotic prostatectomy ke baad catheter aam taur par lagbhag 7 se 10 din rehta hai. [Your practice.]",
      points: [
        "Catheter care: bag ko bladder se neeche rakhein, tip ko rozana saaf karein, kaafi paani piyein.",
        "Kegels: woh muscles kasein jo peshab ki dhaar rokti hain ya gas rokti hain; 5 se 10 second rokein, dheela chhodein; 10 baar, din mein 3 baar.",
        "Inhe surgery se pehle seekh lein aur catheter nikalne ke baad phir shuru karein.",
        "Physiotherapist aapki technique check kar sakte hain.",
      ],
    },
    "erections-after-surgery": {
      hinglish: "Prostate operation ke baad sex kar sakte hain?",
      question: "Kya surgery ke baad erection aur sex ho payega?",
      answer:
        "Kai mardon ke erections wapas aa jate hain, lekin aksar 6 se 24 mahine lagte hain aur yeh umar, surgery se pehle ke erections aur nerve-sparing par depend karta hai.",
      points: [
        "Sabse achhe chances: kam umar ke mard, surgery se pehle achhe erections, dono taraf nerves bachi hon.",
        "Recovery ke dauraan tablets, injections aur vacuum devices madad karte hain; erections wapas na aayein to penile implant kaam karta hai.",
        "Ichha aur orgasm aam taur par bane rehte hain.",
        "[Your penile rehabilitation plan.]",
      ],
    },
    "erection-recovery-treatments": {
      question:
        "Surgery ke baad erections wapas laane mein kaunsi tablets ya injections madad karti hain?",
      answer:
        "Sildenafil ya tadalafil jaisi tablets pehla kadam hain; tablets kaam na karein to penis mein injections kaam karte hain.",
      points: [
        "Tablets aksar catheter nikalne ke kuch hi samay baad shuru hoti hain (\"penile rehabilitation\").",
        "Penile injections se lagbhag 10 se 15 minute mein erection aata hai.",
        "Vacuum devices length aur blood flow banaye rakhne mein madad karte hain.",
        "Penile implant ek bharosemand permanent option hai.",
        "In tablets ko nitrate wali dil ki dawaon ke saath kabhi na lein.",
      ],
    },
    "penis-length-after-surgery": {
      question: "Kya prostate nikalne ke baad mera penis chhota ho jayega?",
      answer:
        "Kuch mardon ko length mein thodi kami lagti hai, aksar 1 se 2 cm, jo kuch had tak wapas aa sakti hai.",
      points: [
        "Aisa isliye hota hai kyonki urethra chhoti ho jati hai aur recovery ke dauraan erections kam hote hain.",
        "Tablets ya vacuum device se jaldi rehabilitation length bachane mein madad karta hai.",
        "Isse peshab karne par asar nahi padta.",
      ],
    },
    "ejaculation-orgasm-fertility": {
      question:
        "Kya mera ejaculation aur orgasm hoga? Kya main baap ban sakta hoon?",
      answer:
        "Orgasm hoga, lekin sookha (semen ke bina), kyonki prostate aur seminal vesicles nikaal diye jate hain.",
      points: [
        "Natural tareeke se garbh ab sambhav nahi hai.",
        "Bachche chahte hain to surgery se pehle sperm bank karein; baad mein IVF/ICSI ke liye testis se bhi sperm liya ja sakta hai.",
        "Shuru mein kuch mardon ka orgasm ke samay thoda peshab leak hota hai; aam taur par yeh theek ho jata hai.",
      ],
    },
    "testosterone-after-surgery": {
      question:
        "Kya prostate nikalne se mera testosterone ya \"mardaangi\" kam ho jayegi?",
      answer:
        "Nahi: testosterone testicles banate hain, prostate nahi, isliye surgery se yeh kam nahi hota.",
      points: [
        "Daadhi, awaaz, muscles aur sex ki ichha par prostatectomy ka asar nahi padta.",
        "Hormone therapy alag hai: woh jaan-boojhkar testosterone kam karti hai.",
      ],
    },
    "psa-after-surgery": {
      question: "Surgery ke baad mera PSA kitna hona chahiye, aur kitni baar test karayein?",
      answer:
        "Surgery ke baad lagbhag 6 se 8 hafton mein PSA undetectable (0.1 ng/mL se kam) ho jana chahiye.",
      points: [
        "Pehla test 6 se 8 hafte par, phir 2 se 3 saal tak har 3 se 6 mahine mein, phir har 6 se 12 mahine mein.",
        "Ho sake to wahi lab use karein.",
        "PSA detectable hokar badhne lage to jaldi dikhayein.",
      ],
    },
    "rising-psa-after-treatment": {
      question:
        "Surgery ya radiation ke baad mera PSA badh raha hai: kya cancer wapas aa gaya hai?",
      answer:
        "Ilaj ke baad badhta PSA batata hai ki kuch cancer cells bache hain; iska aksar ilaj ho sakta hai aur saalon tak koi lakshan na ho, aisa bhi ho sakta hai.",
      points: [
        "Surgery ke baad: PSA 0.2 ng/mL se upar badhna. Radiation ke baad: sabse kam pahunchi value se 2 ng/mL upar.",
        "PSMA PET-CT kam PSA par bhi cancer ki jagah dhoondh sakta hai.",
        "Options: surgery ke baad salvage radiation; radiation ke baad salvage surgery ya HIFU; hormone therapy; ya dheeme badhaav mein monitoring.",
        "PSA kitni jaldi double hota hai, isse tay hota hai ki kitni jaldi karni hai.",
      ],
    },
    "hormone-therapy-side-effects": {
      question:
        "Hormone therapy ke side effects kaise sambhale jate hain: garmi ke jhonke, wazan badhna, kamzor haddiyan, udaas mann?",
      answer:
        "Zyadatar side effects exercise, diet aur dawaiyon se kam kiye ja sakte hain.",
      points: [
        "Garmi ke jhonke (hot flushes): halke kapde aur trigger karne wali cheezon se bachna; zyada ho to dawaiyan.",
        "Wazan badhna aur diabetes ka risk: strength training aur walking, diet control, sugar aur cholesterol check.",
        "Kamzor haddiyan: calcium, vitamin D, bone density scan, zaroorat par haddi bachane wali dawa.",
        "Udaas mann, thakaan, kam libido: khulkar baat karein; exercise aur counselling madad karte hain.",
        "Kuch mardon ke liye beech beech mein (intermittent) therapy theek rehti hai.",
      ],
    },
    "diet-after-prostate-cancer": {
      question:
        "Prostate cancer ke baad kya khayein: doodh, red meat, tamatar, green tea?",
      answer:
        "Koi khana prostate cancer theek nahi karta, lekin santulit, zyadatar plant-based diet aur sahi wazan recovery mein madad karte hain.",
      points: [
        "Sabziyan, phal, whole grains, daalein aur nuts khayein; tamatar aur green tea theek hain lekin ilaj nahi hain.",
        "Red aur processed meat, tali hui cheezein aur meethe drinks kam karein; dairy limit mein rakhein.",
        "Jab tak doctor na likhein, high-dose supplements se bachein.",
        "Diagnosis ke baad regular exercise sabse kaam ki aadaton mein se ek hai.",
      ],
    },
    "life-expectancy": {
      question: "Prostate cancer mein, stage 4 samet, life expectancy kitni hoti hai?",
      answer:
        "Jin mardon ka cancer prostate tak seemit hai, unki life expectancy aam taur par lagbhag normal hoti hai; 5 saal ka survival 100% ke kareeb hai (lagbhag, US registry data).",
      points: [
        "Sirf paas ke lymph nodes tak failaav ho to ilaj ke saath outlook bahut achha rehta hai.",
        "Haddiyon tak failaav mein US data mein lagbhag 3 mein se 1 mard 5 saal par zinda hain (lagbhag), aur nayi dawaiyan ise behtar kar rahi hain.",
        "Har vyakti ka outlook grade, failaav ki had, PSA response aur general sehat par depend karta hai.",
        "Survival figures average hain; ilaj karne wale doctor personal andaza de sakte hain.",
      ],
    },
  },
};
