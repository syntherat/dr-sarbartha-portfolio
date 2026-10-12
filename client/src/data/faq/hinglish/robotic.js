// Hinglish (Hindi in Latin script) draft of the robotic surgery answers,
// translated from the doctor's English text without adding content. Not yet
// medically reviewed. Square brackets are the doctor's placeholders and stay
// in English; "(source)" refers to the source list in docs/PATIENT-FAQ.md.

export const roboticHinglish = {
  title: "Robotic surgery",
  stages: {
    understanding: "Robotic surgery ko samajhna",
    "safety-and-choosing": "Safety aur surgeon ka chunaav",
    "cost-and-insurance": "Kharcha aur insurance",
    recovery: "Recovery",
  },
  questions: {
    "what-is-robotic-surgery": {
      question: "Robotic surgery kya hai? Kya robot khud operation karta hai?",
      answer:
        "Nahi: robot kabhi khud operation nahi karta; surgeon usi kamre mein console par baithte hain aur instruments ki har harkat control karte hain.",
      points: [
        "Instruments chhote keyhole cuts se andar jaate hain, zyadatar 1 cm se chhote.",
        "Surgeon ko bada kiya hua 3D view dikhta hai; instruments kalai ki tarah mudte hain aur haath ki kanpan ko filter kar dete hain.",
        "Assistant surgeon aur team poore samay bedside par rehte hain.",
      ],
    },
    "laser-or-laparoscopic": {
      question:
        "Kya robotic surgery aur laser surgery ya laparoscopic (keyhole) surgery ek hi hai?",
      answer:
        "Robotic surgery keyhole surgery ka advanced roop hai; yeh laser surgery nahi hai.",
      points: [
        "Laparoscopic: surgeon lambe seedhe instruments pakadte hain aur screen dekhte hain.",
        "Robotic: kalai jaise instruments aur bada 3D view tang jagahon, jaise pelvis, mein zyada baareek kaam karne dete hain.",
        "\"Laser\" ka matlab aam taur par peshab ke raste se telescope procedures hota hai, pathri ya prostate badhne ke liye.",
      ],
    },
    "robotic-laparoscopic-or-open": {
      question: "Robotic, laparoscopic ya open surgery: mere cancer ke liye kya behtar hai?",
      answer:
        "Zyadatar urological cancers mein robotic surgery open surgery jaisa cancer control deti hai, kam khoon behne, kam dard aur jaldi recovery ke saath.",
      points: [
        "Sabse bade fayde gehri, tang jagahon mein hain: prostate, bladder, kidney ka hissa nikaalna aur reconstruction.",
        "Kuch bahut bade ya complex tumours ke liye open surgery ab bhi sabse behtar hai.",
        "Tareeke se zyada surgeon ka experience maayne rakhta hai.",
      ],
    },
    "removes-cancer-more-completely": {
      question: "Kya robotic surgery open surgery se zyada poori tarah cancer nikaalti hai?",
      answer:
        "Cancer ka nikalna mainly surgeon ke hunar aur tumour ki stage par depend karta hai; experienced haathon mein robotic aur open surgery milta-julta cancer control deti hain.",
      points: [
        "Magnification sateek margins aur nerves bachane mein madad karta hai.",
        "Main fayde recovery, khoon behne aur function mein hain.",
      ],
    },
    "which-robot": {
      question:
        "Kaunsa robot sabse achha hai: da Vinci, SSI Mantra, Hugo, Versius ya Toumai? Kya brand maayne rakhta hai?",
      answer:
        "Platform par surgeon ki training aur experience uske brand se kahin zyada maayne rakhte hain.",
      points: [
        "da Vinci ka track record sabse lamba hai aur sabse zyada published data hai.",
        "Naye platforms, jaise SSI Mantra, Hugo RAS, Versius aur Toumai, bhi India mein use ho rahe hain.",
        "Poochhein ki kaunsa platform use hoga aur aapke surgeon ne us par kitne cases kiye hain.",
        "[Platforms you operate on.]",
      ],
    },
    "ssi-mantra": {
      question: "Kya Made-in-India robot (SSI Mantra) videshi robots jitna safe hai?",
      answer:
        "SSI Mantra India mein bana surgical robot hai jo badhte hue Indian hospitals mein use ho raha hai; kisi bhi robot ki tarah, safety mainly surgeon aur team par depend karti hai.",
      points: [
        "Ismein main features hain: bada 3D view aur kalai jaise instruments.",
        "Isse robotic surgery sasti karne mein madad mil sakti hai.",
        "Published results badh rahe hain. [Your experience with SSI Mantra.]",
      ],
    },
    "telesurgery": {
      question: "Telesurgery kya hai? Kya surgeon doosre shehar se operation kar sakte hain?",
      answer:
        "Telesurgery ka matlab hai surgeon secure network par door ke console se robot control karte hain; iska demonstration ho chuka hai lekin yeh abhi routine nahi hai.",
      points: [
        "Routine practice mein surgeon usi operating room mein hote hain.",
        "Poori surgical team hamesha bedside par hoti hai.",
      ],
    },
    "new-or-experimental": {
      question: "Kya robotic surgery nayi ya experimental hai?",
      answer:
        "Nahi: robotic surgery duniya bhar mein 20 saal se zyada se use ho rahi hai aur prostate, kidney aur bladder cancer surgery ka standard tareeka hai.",
      points: [
        "Kai deshon mein ab prostate nikaalne ka sabse aam tareeka robotic prostatectomy hai.",
        "Guidelines in operations ke liye robotic surgery ko standard maanti hain.",
      ],
    },
    "is-it-safe": {
      question: "Kya robotic surgery safe hai? Kya ismein zyada complications hote hain?",
      answer:
        "Haan: experienced haathon mein robotic surgery safe hai, aur complication rates open surgery jaise ya usse kam hote hain.",
      points: [
        "Surgery ke aam risk phir bhi rehte hain: bleeding, infection, blood clots, paas ke organs ko chot, anaesthesia ke risk.",
        "Kam khoon behna aur ghaav ki kam dikkatein aam fayde hain.",
        "Aapke surgeon ko aapke khaas operation ke risk samjhane chahiye.",
      ],
    },
    "robot-stops-working": {
      question: "Agar operation ke dauraan robot kaam karna band kar de to kya hoga?",
      answer:
        "Robotic systems mein safety checks bane hote hain; koi kharabi aaye to team system restart kar sakti hai, laparoscopy se jaari rakh sakti hai ya open surgery mein badal sakti hai.",
      points: [
        "Gambhir kharabi kam hi hoti hai.",
        "Team in halaaton ke liye trained hoti hai.",
      ],
    },
    "conversion-to-open": {
      question: "Kya robotic operation open surgery mein badla ja sakta hai? Kyon?",
      answer:
        "Haan: kabhi kabhi surgeon safety ke liye open surgery mein badalte hain, jaise zyada bleeding, ghane nishaan (scarring) ya anapekshit findings ki wajah se.",
      points: [
        "Experienced centres mein aisa kam hota hai.",
        "Yeh safety ka faisla hai, nakaami nahi.",
        "Surgery se pehle aap is sambhavna ke liye consent dete hain.",
      ],
    },
    "surgeon-experience": {
      question:
        "Kya robot se zyada surgeon ka experience maayne rakhta hai? Mere surgeon ne kitni robotic surgeries ki hain?",
      answer:
        "Haan: nateeje machine se kahin zyada surgeon ke experience par depend karte hain.",
      points: [
        "Surgeon aur team ne jitne zyada cases kiye hon, nateeje utne behtar hote hain.",
        "Yeh poochhna theek hai ki aapke surgeon har saal aise kitne robotic operations karte hain, aur unke nateeje kya hain.",
        "[Decide whether and how to state your own experience factually.]",
      ],
    },
    "who-operates": {
      question: "Meri surgery asal mein kaun karta hai: senior surgeon ya trainee?",
      answer:
        "Apne surgeon se seedhe poochhein: aapko jaanne ka haq hai ki kaun operate karega aur kaun assist karega.",
      points: [
        "Teaching hospitals mein trainees consultant ki seedhi nigraani mein assist kar sakte hain.",
        "Aapke operation ki zimmedaari consultant ki rehti hai.",
        "[Your practice: who operates and who assists.]",
      ],
    },
    "what-to-ask": {
      question: "Robotic surgeon ya hospital chunne se pehle kya poochhna chahiye?",
      answer:
        "Experience, nateeje, team aur surgery ke baad ki care ke baare mein poochhein.",
      points: [
        "Aap har saal aise kitne operations karte hain, aur aapke complication aur functional nateeje kya hain?",
        "Kya mera case multidisciplinary tumour board mein discuss hota hai?",
        "Surgery ke baad meri dekhbhaal kaun karega, aur main team se kaise sampark karun?",
        "Package mein kya shaamil hai aur kya nahi?",
      ],
    },
    "too-old-or-unwell": {
      question:
        "Kya main robotic surgery ke liye zyada budha, zyada wazan wala ya zyada bimar (dil, phephde, diabetes) hoon?",
      answer:
        "Zaroori nahi: kai badi umar ke ya zyada wazan wale mareez, aur diabetes wale, sahi jaanch ke baad safely robotic surgery karate hain.",
      points: [
        "Dil aur anaesthesia checks kuch ghante ki surgery ke liye fitness confirm karte hain, kabhi sar neeche jhukakar.",
        "Gambhir dil ya phephdon ki bimari, ya glaucoma jaisi aankhon ki condition mein khaas planning chahiye.",
        "Motape wale mareezon mein robotic surgery aksar open surgery se behtar hoti hai.",
      ],
    },
    "previous-abdominal-surgery": {
      question: "Meri pehle pet ki surgery ho chuki hai: kya main ab bhi robotic surgery kara sakta/sakti hoon?",
      answer:
        "Aam taur par haan: pichhle operations se adhesions reh sakte hain, lekin experienced surgeons aam taur par unke aas-paas kaam kar lete hain.",
      points: [
        "Apne surgeon ko har pichhle operation ke baare mein batayein, hernia mesh repair samet.",
        "Kabhi kabhi open tareeka zyada safe hota hai.",
      ],
    },
    "anaesthesia-time-blood": {
      question:
        "Kya mujhe general anaesthesia chahiye hoga? Operation mein kitna samay lagta hai? Kya khoon chadhana padega?",
      answer:
        "Haan: robotic surgery general anaesthesia mein hoti hai, aur zyadatar urological cancer operations mein 2 se 5 ghante lagte hain.",
      points: [
        "Prostate ya kidney surgery mein khoon chadhane ki zaroorat kam hi padti hai; bladder nikaalne mein zyada aam hai.",
        "Saavdhaani ke liye aapka blood group check hota hai aur khoon taiyaar rakha jata hai.",
        "[Your typical operating times.]",
      ],
    },
    "cost-delhi": {
      hinglish:
        "Robotic surgery ka kharcha kitna hai? Kya Ayushman card ya insurance mein cover hota hai?",
      question:
        "Delhi mein robotic surgery ka kharcha kitna hai, aur yeh mehngi kyon hai?",
      answer:
        "[hospital] mein robotic cancer surgery ka kharcha aam taur par [₹ range] hai, jo operation par depend karta hai.",
      points: [
        "Yeh mehngi isliye hai kyonki robot ki khareed aur maintenance ka kharcha hota hai, aur iske instruments seemit baar hi use ho sakte hain.",
        "Kam din rukna aur jaldi kaam par lautna extra kharche ka kuch hissa poora kar deta hai.",
        "[Package inclusions and exclusions.]",
      ],
    },
    "insurance-cover": {
      question: "Kya health insurance robotic surgery cover karta hai? Kya sub-limits hoti hain?",
      answer:
        "Haan: IRDAI ke 2019 ke rules ke tahat insurers ko robotic surgery ko \"modern treatment\" ke roop mein cover karna hota hai, haalaanki kai policies ise sub-limit se seemit karti hain (source).",
      points: [
        "Apni policy ki modern-treatment sub-limit, co-payment aur room-rent limits check karein.",
        "Apne surgeon se likhwayein ki robotic tareeka medically kyon zaroori hai; insurers ise check karte hain.",
        "IRDAI ke 2024 master circular ke tahat insurers ko cashless request par 1 ghante mein aur discharge par 3 ghante mein faisla karna hota hai (source).",
      ],
    },
    "government-schemes": {
      question:
        "Kya robotic surgery Ayushman Bharat (PM-JAY), CGHS, ECHS ya ESIC mein cover hoti hai?",
      answer:
        "Yeh schemes empanelled hospitals mein apne package rates par cancer surgery cover karti hain; robotic tareeka poora cover hoga ya nahi, yeh scheme aur hospital par depend karta hai, isliye admission se pehle hospital ke scheme desk se poochhein.",
      points: [
        "PM-JAY eligible parivaaron ko saal mein ₹5 lakh deta hai; Delhi ₹5 lakh aur jodta hai, kul ₹10 lakh (source).",
        "70 ya usse zyada umar ka har vyakti, income se farq nahi padta, Ayushman Vay Vandana card se saal mein ₹5 lakh paa sakta hai (source).",
        "70+ umar ke CGHS, ECHS aur CAPF beneficiaries ko apni scheme aur PM-JAY mein se ek chunna hota hai (same source).",
        "[Schemes your hospital is empanelled for.]",
      ],
    },
    "cashless-or-reimbursement": {
      question: "Cashless ya reimbursement: robotic surgery ke liye yeh kaise kaam karta hai?",
      answer:
        "Cashless ka matlab hai pre-authorisation ke baad hospital seedhe aapke insurer ko bill karta hai; reimbursement ka matlab hai aap pehle bharte hain aur baad mein claim karte hain.",
      points: [
        "Cashless network hospitals mein kaam karta hai; pre-authorisation request admission se pehle doctor ke notes ke saath jaati hai.",
        "Reimbursement claim ke liye har bill, report aur discharge summary sambhal kar rakhein.",
        "Agar robotic sub-limit bill se kam hai, to farq aap bharte hain.",
        "Hospital ka insurance desk kaagazi kaam mein madad karta hai.",
      ],
    },
    "worth-the-extra-cost": {
      question: "Kya laparoscopic surgery ke muqable extra kharcha sahi hai?",
      answer:
        "Prostatectomy aur cystectomy jaise gehre pelvic operations, aur complex partial nephrectomy mein kai mareezon ko jaldi recovery aur behtar function iske laayak lagte hain; aasaan operations mein laparoscopy utni hi achhi ho sakti hai.",
      points: [
        "Poochhein ki aapke khaas operation mein kya fayda milne ki ummeed hai.",
        "Sirf hospital ka bill nahi, chhoote kaam ke din aur recovery ka samay bhi ginein.",
      ],
    },
  },
};
