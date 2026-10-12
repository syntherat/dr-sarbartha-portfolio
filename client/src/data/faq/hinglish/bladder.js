// Hinglish (Hindi in Latin script) draft of the bladder answers, translated
// from the doctor's English text without adding content. Not yet medically
// reviewed. Square brackets are the doctor's placeholders and stay in English.

export const bladderHinglish = {
  title: "Urinary bladder cancer",
  stages: {
    "is-it-cancer": "Kya yeh cancer hai? Lakshan aur kaaran",
    "tests-and-reports": "Tests aur reports",
    "treatment-choices": "Ilaj ke options aur surgery",
    "life-after-treatment": "Ilaj ke baad ki zindagi",
  },
  questions: {
    "blood-in-urine-no-pain": {
      hinglish: "Peshab mein khoon aa raha hai: kya yeh cancer hai?",
      question:
        "Mere peshab mein khoon aaya lekin dard nahi hai: kya yeh bladder cancer ho sakta hai?",
      answer:
        "Ho sakta hai: bina dard ke peshab mein khoon bladder cancer ka sabse aam sanket hai, isliye tests hamesha zaroori hain, bhale hi zyadatar kaaran cancer nahi hote.",
      points: [
        "Doosre kaaran: infection, pathri, badha hua prostate, kidney ki bimari, khoon patla karne wali dawaiyan.",
        "Tests: urine examination, ultrasound ya CT urography, aur cystoscopy.",
        "Risk zyada hai smokers mein, 50 se upar ke logon mein aur industrial chemicals ke sampark mein rehne walon mein.",
        "Check karane se pehle dobara hone ka intezaar na karein.",
      ],
    },
    "blood-only-once": {
      question: "Khoon sirf ek baar aaya aur phir band ho gaya: kya ab bhi tests zaroori hain?",
      answer:
        "Haan: bladder cancer se aksar ruk-ruk kar bleeding hoti hai, isliye ek baar ki bleeding ki bhi poori jaanch zaroori hai.",
      points: [
        "Bleeding rukne ka matlab yeh nahi ki kaaran khatam ho gaya.",
        "Sirf microscope mein dikhne wale khoon ke liye bhi, umar aur risk ke hisaab se, tests chahiye ho sakte hain.",
        "Khoon patla karne wali dawa lene se bleeding ki wajah samjhayi nahi ja sakti; tests phir bhi zaroori hain.",
      ],
    },
    "burning-not-settling": {
      question:
        "Peshab mein jalan aur baar baar peshab jo antibiotics se theek nahi ho rahe: kya yeh cancer ho sakta hai?",
      answer:
        "Aam taur par yeh lagatar infection ya irritable bladder hota hai, lekin bladder ka carcinoma in situ (CIS) infection jaisa dikh sakta hai.",
      points: [
        "Baar baar \"UTI\" ho aur urine culture negative aaye to dhyan se jaanch zaroori hai.",
        "Tests: urine culture, urine cytology, ultrasound aur cystoscopy.",
        "In lakshanon wale 40 se upar ke smokers ki jaldi jaanch honi chahiye.",
      ],
    },
    "smoking-and-tobacco": {
      question: "Kya smoking, bidi, hookah ya tambaaku chabane se bladder cancer hota hai?",
      answer:
        "Haan: kisi bhi roop mein smoking, cigarette, bidi aur hookah samet, bladder cancer ka sabse bada akela kaaran hai.",
      points: [
        "Smokers ko non-smokers se lagbhag teen guna risk hota hai.",
        "Tambaaku ke chemicals peshab mein aate hain aur bladder ki andar ki parat ke sampark mein rehte hain.",
        "Bina dhuen wale tambaaku ka sambandh kamzor hai, lekin isse munh ka cancer hota hai aur ise bhi chhodna chahiye.",
      ],
    },
    "quit-smoking-risk": {
      question:
        "Maine saalon pehle smoking chhod di thi: kya mujhe ab bhi risk hai? Kya ab chhodne se bhi fayda hai?",
      answer:
        "Chhodne ke baad aapka risk lagatar kam hota hai, lekin non-smoker ke level ke kareeb aane mein kai saal lagte hain.",
      points: [
        "Diagnosis ke baad chhodne se cancer wapas aane ka chance kam hota hai aur ilaj ke nateeje behtar hote hain.",
        "Madad milti hai: nicotine replacement, counselling aur quit-line services.",
      ],
    },
    "work-chemicals": {
      question:
        "Kya dyes, rubber, leather, paint ya chemicals ke kaam se bladder cancer ho sakta hai?",
      answer:
        "Haan: kuch industrial chemicals (aromatic amines) ke lambe samay tak sampark se bladder cancer ka risk badhta hai.",
      points: [
        "Zyada risk wale kaam: dyes aur textiles, rubber, leather, paint, diesel ka dhuan, purane hair dyes.",
        "Cancer sampark ke 20 ya usse zyada saal baad bhi ho sakta hai.",
        "Apne doctor ko apne kaam ki poori history batayein.",
      ],
    },
    "hereditary-and-women": {
      question: "Kya bladder cancer khaandani hota hai? Kya auraton ko bhi ho sakta hai?",
      answer:
        "Bladder cancer kam hi khaandani hota hai; zyadatar cases smoking aur chemicals ke sampark se hote hain. Auraton ko bhi hota hai, haalaanki mardon se kam.",
      points: [
        "Parivaar mein history se risk thoda badhta hai; Lynch syndrome se urinary tract cancers ka risk badhta hai.",
        "Auraton mein aksar diagnosis der se hota hai kyonki peshab mein khoon ko UTI ya periods ki bleeding samajh liya jata hai.",
        "Aurat ke peshab mein bina wajah khoon ho to jaanch zaroori hai.",
      ],
    },
    "cystoscopy": {
      question: "Cystoscopy kya hai? Kya ismein dard hota hai?",
      answer:
        "Cystoscopy mein peshab ke raste se patla camera daalkar bladder ke andar dekha jata hai; ismein kuch minute lagte hain.",
      points: [
        "Flexible cystoscopy mein local anaesthetic jelly use hoti hai aur halki takleef hoti hai.",
        "Ek-do din thodi jalan aur peshab mein halka khoon normal hai.",
        "Bukhar, zyada bleeding ya peshab na kar paana ho to doctor ko call karein.",
      ],
    },
    "turbt": {
      question:
        "TURBT kya hai? Kya yeh bada operation hai? Catheter kitne din rahega?",
      answer:
        "TURBT (transurethral resection of bladder tumour) mein telescope se peshab ke raste tumour nikaala jata hai (pet par koi cut nahi).",
      points: [
        "Spinal ya general anaesthesia mein hota hai, hospital mein 1 se 2 din rukna.",
        "Catheter aam taur par 1 se 3 din rehta hai, tumour bada ho to zyada.",
        "Yeh tumour ka ilaj bhi karta hai aur pathology report ke liye tissue bhi deta hai.",
        "2 se 3 hafte tak peshab mein thoda khoon normal hai; lagbhag 10 se 14 din ke aas-paas der se bleeding ho sakti hai.",
      ],
    },
    "cytology-and-ct-urography": {
      question: "Urine cytology aur CT urography kya dikhate hain?",
      answer:
        "Urine cytology peshab mein cancer cells dhoondhti hai; CT urography kidneys, ureters aur bladder ki images leti hai.",
      points: [
        "Cytology high-grade cancer aur CIS ko achhe se pakadti hai lekin kai low-grade tumours ko chhod deti hai.",
        "CT urography upper urinary tract mein tumour check karti hai aur staging mein madad karti hai.",
        "Inmein se koi bhi cystoscopy ki jagah nahi le sakta.",
      ],
    },
    "superficial-vs-muscle-invasive": {
      question:
        "Superficial (non-muscle-invasive) aur muscle-invasive bladder cancer mein kya farq hai?",
      answer:
        "Non-muscle-invasive cancer (lagbhag 4 mein se 3 cases) andar ki parat mein rehta hai aur aam taur par peshab ke raste se ilaj ho sakta hai; muscle-invasive cancer bladder ki muscle tak badh chuka hota hai aur bade ilaj ki zaroorat hoti hai.",
      points: [
        "Non-muscle-invasive: TURBT ke saath bladder mein dawa (BCG ya chemotherapy); bladder bacha rehta hai.",
        "Muscle-invasive: bladder nikalna ya bladder bachane wali chemoradiation, aksar pehle chemotherapy ke saath.",
        "Farq TURBT ki pathology report se tay hota hai.",
      ],
    },
    "grade-and-stage-terms": {
      question:
        "Meri report mein \"low grade\", \"high grade\", \"Ta\", \"T1\" aur \"CIS\" ka kya matlab hai?",
      answer:
        "Yeh batate hain ki cells kitne aggressive dikhte hain (grade) aur cancer kitna gehra hai (stage).",
      points: [
        "Ta: parat tak seemit. T1: parat ke neeche wali layer tak. T2 ya zyada: muscle tak.",
        "Low grade: wapas aane ki aadat hoti hai lekin kam hi aage badhta hai. High grade: muscle tak badhne ka zyada risk.",
        "CIS (carcinoma in situ): parat mein chapta, high-grade cancer jiske liye BCG chahiye.",
        "Yeh sab milkar aapka risk group aur ilaj ka plan tay karte hain.",
      ],
    },
    "muscle-not-seen": {
      question: "Meri report mein \"muscle not seen\" likha hai: iska kya matlab hai?",
      answer:
        "Iska matlab hai ki sample mein bladder ki deewar ki muscle nahi thi, isliye doctor nahi bata sakte ki cancer muscle tak pahuncha hai ya nahi.",
      points: [
        "Aam taur par repeat TURBT chahiye, khaaskar high-grade ya T1 tumour mein.",
        "Isse stage kam aankne aur galat ilaj se bacha jata hai.",
        "Sirf isse yeh matlab nahi ki cancer zyada bura hai.",
      ],
    },
    "repeat-turbt": {
      question: "Mere doctor TURBT dobara kyon karna chahte hain?",
      answer:
        "2 se 6 hafte baad repeat TURBT se bacha hua tumour check hota hai aur stage confirm hota hai.",
      points: [
        "Salah di jati hai T1 ya high-grade tumour mein, pehli baar adhoora resection hone par, ya muscle na milne par.",
        "Inmein se kaafi mareezon mein bacha hua tumour milta hai.",
        "Isse BCG ka response aur ilaj ke faislon ki sateekta behtar hoti hai.",
      ],
    },
    "is-it-curable": {
      hinglish: "Peshab ki thaili (bladder) ke cancer ka ilaj kya hai?",
      question: "Kya bladder cancer theek ho sakta hai?",
      answer:
        "Haan: zyadatar bladder cancer jaldi pakde jate hain, aur kai bladder bachaye rakhte hue theek ya control mein rakhe ja sakte hain.",
      points: [
        "Non-muscle-invasive cancer mein survival bahut achha hai lekin yeh aksar wapas aata hai, isliye follow-up lambe samay tak chalta hai.",
        "Muscle-invasive cancer kai mareezon mein chemotherapy ke saath surgery, ya chemoradiation se theek ho sakta hai.",
        "Door ke organs tak faila cancer aam taur par nayi dawaon se control ho sakta hai, theek nahi.",
      ],
    },
    "bcg-treatment": {
      question: "BCG treatment kya hai? Kya yeh TB vaccine jaisa hi hai? Kya yeh safe hai?",
      answer:
        "BCG TB bacterium ka kamzor roop hai jo catheter se bladder mein daala jata hai; yeh immune system ko cancer cells khatam karne ke liye jagata hai.",
      points: [
        "Ismein wahi bacterium hota hai jo TB vaccine mein, lekin yeh injection ki jagah bladder mein diya jata hai.",
        "High-risk non-muscle-invasive cancer aur CIS ke liye yeh sabse asardaar ilaj hai.",
        "Aam taur par safe hai; har dose ke baad 1 se 2 din jalan aur baar baar peshab aam hai.",
        "Lagbhag 2 ghante peshab rokein. Uske baad 6 ghante tak baithkar peshab karein aur flush karne se pehle toilet mein bleach daalein.",
      ],
    },
    "bcg-doses": {
      question: "Mujhe kitni BCG doses chahiye, aur 1 se 3 saal tak kyon?",
      answer:
        "Aam taur par pehle 6 hafte tak har hafte ek dose (induction), phir 1 se 3 saal tak gap par maintenance doses.",
      points: [
        "Maintenance hi cancer ko wapas aane se rokta hai; sirf induction kam kaam karta hai.",
        "Intermediate risk: aksar 1 saal. High risk: 3 saal tak.",
        "Har 3 mahine mein cystoscopy se response check hota hai.",
      ],
    },
    "bcg-side-effects": {
      question:
        "BCG ke baad jalan, baar baar peshab ya bukhar: kab chinta karni chahiye?",
      answer:
        "Dose ke baad 1 se 2 din jalan aur baar baar peshab ummeed ke mutaabik hai; 38.5°C se zyada bukhar, ya 48 ghante se lambe lakshan ho to doctor ko dikhayein.",
      points: [
        "Halke lakshan: salah ke mutaabik paani, paracetamol aur peshab ke dard ki dawa.",
        "Turant: kanpkanpi ke saath tez bukhar, jodon mein dard, laal aankhein, khaansi ya bahut bimar mehsoos karna (BCG ka rare infection jismein TB ki dawaiyan chahiye).",
        "Side effects zyada hon to agli dose taali ya kam ki ja sakti hai.",
      ],
    },
    "bcg-alternatives": {
      question:
        "BCG nahi mil raha: kya vikalp hain? Bladder mein daali jane wali mitomycin ya gemcitabine kya hai?",
      answer:
        "BCG ki kami hone par doctor ise sabse zyada risk wale mareezon ke liye rakhte hain aur baaki ke liye bladder mein chemotherapy use karte hain.",
      points: [
        "Mitomycin C ya gemcitabine (kabhi docetaxel ke saath) BCG ki tarah catheter se di jati hai.",
        "Kam dose ya kam baar BCG dene se supply lambi chal sakti hai.",
        "Jo high-risk cancer BCG par response na de, uske liye bladder nikalna ya naye ilaj par baat hoti hai.",
      ],
    },
    "save-the-bladder": {
      question:
        "Doctor kehte hain bladder nikaalna padega: kya ise bachane ka koi tareeka hai?",
      answer:
        "Kabhi kabhi, kuch chune hue mareez trimodal therapy se bladder bacha sakte hain: poora TURBT, phir radiation ke saath chemotherapy.",
      points: [
        "Sabse theek ek tumour ke liye, jo TURBT mein poora nikal gaya ho, CIS na ho aur kidney mein rukaavat na ho.",
        "Ismein zindagi bhar cystoscopy chahiye, aur kuch mareezon ko baad mein bladder nikalwana padta hai.",
        "BCG fail hone wale high-risk non-muscle-invasive cancer mein bladder ke naye ilaj vikalp ho sakte hain. [Availability in India.]",
        "Radiation oncologist ke saath joint opinion lein.",
      ],
    },
    "chemo-before-cystectomy": {
      question: "Bladder nikalne ki surgery se pehle chemotherapy kyon di jati hai?",
      answer:
        "Surgery se pehle cisplatin-based chemotherapy chhupe failaav ka jaldi ilaj karke muscle-invasive cancer mein survival behtar karti hai.",
      points: [
        "Aam taur par lagbhag 3 mahine mein 3 se 4 cycles.",
        "Kuch mareezon mein surgery ke samay bladder mein koi cancer nahi bachta.",
        "Har koi cisplatin nahi le sakta (kidney function, sunna, dil); kuch logon ke liye naye immunotherapy-based combinations vikalp hain.",
      ],
    },
    "radical-cystectomy": {
      question: "Radical cystectomy kya hai? Kya yeh robotic tareeke se ho sakti hai?",
      answer:
        "Radical cystectomy mein bladder aur paas ke lymph nodes nikaale jate hain (mardon mein aam taur par prostate bhi) aur aant ke ek tukde se peshab ka naya rasta banaya jata hai.",
      points: [
        "Haan: robotic cystectomy keyhole cuts se hoti hai, aur urinary diversion sharir ke andar ya bahar banaya jata hai.",
        "Open surgery ke muqable: kam khoon behna aur kam transfusion, cancer control milta-julta.",
        "[Your typical hospital stay and diversion technique.]",
      ],
    },
    "urine-bag-or-neobladder": {
      question:
        "Bladder nikalne ke baad peshab kaise karunga/karungi: urine bag ya naya bladder (neobladder)? Mere liye kya behtar hai?",
      answer:
        "Do main vikalp hain: ileal conduit, jismein peshab pet par lage bag mein jata hai, aur neobladder, aant se bana naya bladder jisse aap normal tareeke se peshab karte hain.",
      points: [
        "Ileal conduit: aasaan, jaldi recovery; badi umar ke mareezon aur kidney ya aant ki dikkat walon ke liye theek.",
        "Neobladder: bahar koi bag nahi; achha kidney function, training ki lagan aur shayad khud catheter lagana zaroori; agar cancer urethra tak hai to theek nahi.",
        "Overall quality of life milti-julti hai; sehat, lifestyle aur pasand ke hisaab se chunein.",
        "Faisla karne se pehle stoma nurse se milein.",
      ],
    },
    "other-organs-removed": {
      question: "Kya prostate, ya uterus aur ovaries bhi nikaale jayenge?",
      answer:
        "Aam taur par haan, lekin kuch chune hue mareezon mein organ bachane wali surgery ho sakti hai.",
      points: [
        "Mard: prostate aur seminal vesicles aam taur par nikaale jate hain; theek ho to nerve-sparing se erections bachane mein madad milti hai.",
        "Auratein: uterus aur vagina ki aage ki deewar ka hissa aksar nikaala jata hai; kam umar ki auraton mein kabhi kabhi ovaries bachayi ja sakti hain.",
        "Faisla tumour ki jagah aur stage par depend karta hai.",
      ],
    },
    "father-is-75": {
      question: "Mere papa 75 saal ke hain: kya is umar mein bladder nikalne ki surgery safe hai?",
      answer:
        "Sirf umar se yeh mana nahi hota: 70 aur 80 ki umar ke fit logon ki cystectomy safely hoti hai; overall sehat zyada maayne rakhti hai.",
      points: [
        "Jaanch mein dil, phephde, kidney function, poshan, chalna-phirna aur kamzori dekhi jati hai.",
        "Badi umar ke mareezon ke liye aksar ileal conduit (urine bag) chuna jata hai.",
        "Kam fit mareezon ke liye bladder bachane wali chemoradiation vikalp hai.",
        "Surgery se pehle chalna, saans ki exercises aur achha poshan recovery behtar karte hain.",
      ],
    },
    "immunotherapy": {
      question: "Kya bladder cancer mein immunotherapy kaam karti hai? Kise fayda hota hai?",
      answer:
        "Haan: immunotherapy advanced bladder cancer ke kai mareezon ki, aur kuch aise mareezon ki jinka cancer ab BCG par response nahi deta, madad karti hai.",
      points: [
        "Advanced ya metastatic cancer: aksar enfortumab vedotin jaisi nayi dawaon ke saath.",
        "Cystectomy ke baad: cancer wapas aane ke high risk wale mareezon ke liye.",
        "BCG-unresponsive cancer: kuch aise logon ke liye vikalp jo cystectomy nahi kara sakte ya nahi karana chahte.",
        "[Cost in India and patient-assistance programmes.]",
      ],
    },
    "cost-delhi": {
      question:
        "Delhi mein TURBT, BCG course aur robotic cystectomy ka kharcha kitna hai? Kya insurance mein cover hota hai?",
      answer:
        "[hospital] mein TURBT ka kharcha lagbhag [₹ range], BCG course lagbhag [₹ range], aur robotic radical cystectomy lagbhag [₹ range] hai.",
      points: [
        "BCG ka kharcha doses ki sankhya aur milne wale brand par depend karta hai.",
        "Zyadatar health policies robotic surgery cover karti hain, kuch sub-limit ke saath; BCG sessions aksar day-care treatment ke roop mein claim ho sakte hain: apni policy check karein.",
        "Cystectomy packages diversion type aur kitne din rukna, is par alag hote hain.",
      ],
    },
    "living-with-urine-bag": {
      hinglish: "Urine bag ke saath zindagi kaisi hoti hai?",
      question:
        "Urine bag (urostomy) ke saath kaise jiyein? Kya main normal tareeke se naha, safar, kaam aur so sakta/sakti hoon?",
      answer:
        "Haan: urostomy wale zyadatar log bag ki dekhbhaal seekh lene ke baad kaam par laut aate hain, safar karte hain, nahaate hain aur active zindagi jeete hain.",
      points: [
        "Bag har 2 se 4 din mein badla jata hai aur din mein kai baar khaali kiya jata hai; raat mein yeh bade drainage bag se juda rehta hai.",
        "Aap bag lagakar ya utaarkar naha ya shower le sakte hain.",
        "Hospital se jaane se pehle stoma nurse dekhbhaal sikhate hain.",
        "Safar mein extra saamaan hand luggage mein rakhein.",
      ],
    },
    "bag-smell-or-show": {
      question: "Kya urine bag se badboo aayegi ya kapdon ke neeche dikhega?",
      answer:
        "Aaj ke bags badboo-proof aur chapte hote hain; theek se lage hon to doosron ko pata nahi chalta.",
      points: [
        "Badboo ka matlab aam taur par leak ya infection hai: seal aur fitting check karein.",
        "Dheele ya oonchi kamar wale kapdon mein bag aasaani se chhup jata hai.",
        "Kaafi paani peene se peshab patla aur kam badboo wala rehta hai.",
      ],
    },
    "urostomy-bags-india": {
      question: "India mein urostomy bags kahan milte hain, aur mahine ka kharcha kitna hai?",
      answer:
        "India mein urostomy bags hospital pharmacy, medical stores aur online suppliers se milte hain. [Brands you recommend; ₹ monthly range.]",
      points: [
        "Mahine ka kharcha one-piece ya two-piece system aur kitni baar badalte hain, is par depend karta hai.",
        "Apne insurer se poochhein ki stoma saamaan cover hota hai ya nahi.",
        "Stoma nurse size aur suppliers mein madad karte hain; ostomy support groups kaam ki tips share karte hain.",
      ],
    },
    "prayers-with-urine-bag": {
      question: "Kya urine bag ke saath prayers, namaz, puja ya mandir jaana jaari rakh sakte hain?",
      answer:
        "Haan: stoma wale log apne dharmik kaam jaari rakhte hain; seal kiya hua bag aapko saaf rakhta hai.",
      points: [
        "Prayers se pehle bag khaali karein aur ek extra saath rakhein.",
        "Dharmik vidwaan aur ostomy associations stoma ke saath paakeezgi (ritual purity) par margdarshan dete hain.",
        "Ghaav bhar jane ke baad ghutne tekna aur jhukna, sajda samet, aam taur par theek hai.",
      ],
    },
    "neobladder-life": {
      question:
        "Naye bladder ke saath kya main normal tareeke se peshab karunga/karungi? Kya raat mein leak hoga? Kya mujhe khud catheter lagana padega?",
      answer:
        "Neobladder wale zyadatar log pelvic floor dheela chhodkar aur pet ko halka kas kar urethra se peshab karte hain.",
      points: [
        "Zyadatar mareezon mein 6 se 12 mahine mein din ka control achha ho jata hai; raat mein leak zyada aam hai, isliye raat ka alarm madad karta hai.",
        "Shuru mein ghadi dekhkar peshab karte hain, har 2 se 3 ghante mein, raat mein bhi.",
        "Kuch mareez, zyadatar auratein, poori tarah khaali nahi kar paate aur unhe khud catheter lagana padta hai.",
        "Peshab mein mucus normal hai; khoob paani piyein.",
      ],
    },
    "sex-life-after-cystectomy": {
      question: "Kya bladder nikalne ke baad mard aur auratein normal sex life jee sakte hain?",
      answer: "Kai log jeete hain, sahi surgery aur support ke saath.",
      points: [
        "Mard: nerve-sparing se erection recovery behtar hoti hai; tablets, injections ya implants madad karte hain; orgasm sookha hota hai.",
        "Auratein: vagina chhoti ya sookhi ho sakti hai; organ bachane wali surgery, lubricants aur dilators madad karte hain.",
        "Stoma ke saath apne sharir ko lekar chinta aam hai; counselling aur partner ko shaamil karna madad karta hai.",
      ],
    },
    "recurrence-and-cystoscopy": {
      question:
        "Bladder cancer baar baar wapas kyon aata hai? Mujhe kitni baar cystoscopy karani hogi?",
      answer:
        "Non-muscle-invasive bladder cancer aksar wapas aata hai kyonki bladder ki poori parat ek hi kaaranon, jaise smoking, ke sampark mein rahi hai.",
      points: [
        "3 mahine par cystoscopy, phir shuru mein har 3 se 6 mahine mein; nateeje saaf rehne par gap badhta jata hai.",
        "Low-risk mareez lagbhag 5 saal baad band kar sakte hain; high-risk mareez zyada samay tak jaari rakhte hain.",
        "Smoking chhodna aur BCG maintenance poora karna wapas aane ka risk kam karte hain.",
      ],
    },
    "tea-coffee-alcohol-water": {
      question:
        "Kya bladder cancer ke baad chai, coffee ya sharaab pee sakte hain? Kya zyada paani peene se cancer wapas aane se rukta hai?",
      answer:
        "Chai aur coffee limit mein theek hain aur sharaab kam karni chahiye; kaafi paani peena samajhdaari hai, haalaanki yeh saabit nahi hai ki isse cancer wapas aane se rukta hai.",
      points: [
        "Achhi hydration peshab mein nuksaandeh chemicals ko patla karti hai.",
        "Kisi bhi khane ya peene se kahin zyada smoking chhodna maayne rakhta hai.",
        "BCG treatment ke dauraan har dose se kuch ghante pehle paani kam piyein.",
      ],
    },
    "kidneys-after-diversion": {
      question: "Kya urinary diversion ke baad meri kidneys par asar padega?",
      answer:
        "Urinary diversion ke baad kidney ka kaam dheere dheere kam ho sakta hai, isliye lambe samay tak monitoring zaroori hai.",
      points: [
        "Kaaranon mein shaamil hain: jahan ureters aant se judte hain wahan sikudna, infections, reflux aur chemicals ka asantulan.",
        "Regular creatinine, electrolytes, vitamin B12 aur ultrasound check se dikkat jaldi pakdi jati hai.",
        "Bukhar, side mein dard ya peshab kam hona ho to turant batayein.",
      ],
    },
    "survival-rate": {
      question: "Bladder nikalne ke baad survival rate kya hai?",
      answer:
        "Survival mainly stage par depend karta hai; jab cancer abhi bladder tak seemit ho, to zyadatar mareez 5 saal par zinda hote hain.",
      points: [
        "Bladder tak seemit cancer: lagbhag 10 mein se 7 log 5 saal par zinda (lagbhag, US registry data, sabhi ilaj).",
        "Paas ke tissue ya lymph nodes tak failaav: lagbhag 10 mein se 4 (lagbhag).",
        "Door tak failaav: pehle 10 mein se 1 se kam (lagbhag), nayi dawaon se behtar ho raha hai.",
        "Surgery se pehle chemotherapy aur poori tarah nikalna nateeje behtar karte hain. [Your audited outcomes, if published.]",
      ],
    },
  },
};
