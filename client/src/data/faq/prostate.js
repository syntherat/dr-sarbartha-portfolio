// Source: Dr. Sarbartha Kumar Pratihar, "Patient FAQ Question Bank" (2026-10-05)
// and "Patient FAQ Answer Outlines" (2026-10-08). Text is used as written; only
// em dashes were replaced (see docs/PATIENT-FAQ.md). Square brackets are
// placeholders for the doctor to fill.

export const prostateFaq = {
  slug: "prostate-cancer",
  title: "Prostate cancer",
  intro:
    "Prostate questions cluster around three worries: what a PSA number means, which treatment to choose, and urine control and sex afterwards.",
  credentials: "[credentials]",
  reviewedOn: "[review date]",
  stages: [
    {
      id: "is-it-cancer",
      title: "Is it cancer? PSA, symptoms and risk",
      questions: [
        {
          id: "psa-high",
          starred: true,
          question: "My PSA is high: does that mean I have prostate cancer?",
          answer:
            "Not necessarily: most men with a raised PSA do not have prostate cancer.",
          points: [
            "PSA is made by normal prostate tissue too; it rises with enlargement (BPH), infection, inflammation and age.",
            "Repeat a single high value after a few weeks, with a urine test to rule out infection.",
            "If it stays high: examination, PSA density or free PSA, then an MRI of the prostate before deciding on biopsy.",
            "See a uro-oncologist if PSA is above the range for your age or keeps rising.",
          ],
        },
        {
          id: "normal-psa-for-age",
          question:
            "What is a normal PSA for my age? My PSA is 6 (or 9, or 15): how worried should I be?",
          answer:
            "There is no single normal value; 4 ng/mL is the usual cut-off, with higher limits accepted for older men.",
          points: [
            "Common age-adjusted upper limits: 2.5 (40s), 3.5 (50s), 4.5 (60s), 6.5 (70s) ng/mL.",
            "PSA 4–10 is a grey zone: roughly 1 in 4 men in this range have cancer on biopsy.",
            "Above 10, the chance rises to about half or more; above 20, scans for spread are usually needed if cancer is confirmed.",
            "The trend matters as much as one number: a steady rise is more significant.",
          ],
        },
        {
          id: "psa-false-rise",
          question:
            "Can a urine infection, recent sex or cycling raise PSA falsely? Do I need to fast before the test?",
          answer:
            "Yes: infection, ejaculation, long cycle rides and catheters can raise PSA temporarily; fasting is not needed.",
          points: [
            "Avoid ejaculation and cycling for 48 hours before the test.",
            "After a urine infection or prostatitis, wait about 6 weeks before re-testing.",
            "A catheter, cystoscopy or biopsy can raise PSA for several weeks.",
            "Finasteride or dutasteride roughly halve PSA: tell your doctor if you take them.",
          ],
        },
        {
          id: "bph-vs-cancer",
          question:
            "Is an enlarged prostate (BPH) the same as prostate cancer? Can BPH turn into cancer?",
          answer:
            "No: BPH is a non-cancerous enlargement, and it does not turn into cancer.",
          points: [
            "Both are common after 50 and can exist together, so men with BPH still need PSA checks when advised.",
            "BPH grows mainly in the central part of the gland; most cancers start in the outer zone.",
            "Urinary symptoms are far more often caused by BPH than by cancer.",
          ],
        },
        {
          id: "night-urination",
          question:
            "I get up several times at night to pass urine: could it be cancer? Can prostate cancer cause no symptoms at all?",
          answer:
            "Night-time urination is usually due to BPH, an overactive bladder, diabetes or late fluids, rarely early cancer.",
          points: [
            "Early prostate cancer usually causes no symptoms; it is found through PSA and MRI.",
            "Blood in urine or semen, bone pain, weight loss or a weak stream need prompt review.",
            "A PSA test and examination, not symptoms, rule cancer in or out.",
          ],
        },
        {
          id: "when-to-start-psa-testing",
          question: "At what age should men start PSA testing, and how often?",
          answer:
            "Discuss PSA testing from about age 50, or from 40–45 if you are at higher risk.",
          points: [
            "Higher risk: father or brother with prostate cancer, a known BRCA2 mutation, African ancestry.",
            "A low first PSA (under 1 ng/mL) allows longer gaps between tests; higher values need checks every 1–2 years.",
            "After 70, testing depends on health and life expectancy.",
            "It is a shared decision: testing finds dangerous cancers early but also finds slow ones that may never need treatment.",
          ],
        },
        {
          id: "family-history-risk",
          question:
            "My father or brother had prostate cancer: am I at higher risk?",
          answer:
            "Yes: a father or brother with prostate cancer roughly doubles your risk.",
          points: [
            "Risk is higher still if he was diagnosed before 60, or if several relatives are affected.",
            "Start PSA testing at 40–45.",
            "Breast, ovarian or pancreatic cancer in the family may point to BRCA genes; consider genetic counselling.",
          ],
        },
        {
          id: "how-fast-it-grows",
          starred: true,
          question: "How fast does prostate cancer grow and spread?",
          answer:
            "Most prostate cancers grow slowly over many years, but high-grade cancers can grow and spread faster.",
          points: [
            "Speed is judged by Gleason score (Grade Group), PSA level and MRI findings.",
            "Low-risk cancers may never cause harm in a man's lifetime and can often be monitored.",
            "A few weeks spent on tests and decisions is safe for most men; high-risk cancer should not wait months.",
            "It spreads first to nearby lymph nodes and bones.",
          ],
        },
        {
          id: "back-or-bone-pain",
          question:
            "I have back or bone pain: could it be prostate cancer that has spread?",
          answer:
            "Back pain is very common and usually comes from the spine or muscles, not cancer.",
          points: [
            "Get it checked if you also have a high PSA, known prostate cancer, night pain or weight loss.",
            "New leg weakness, numbness or loss of bladder or bowel control is an emergency (possible spinal cord compression).",
            "Tests: PSA, bone scan or PSMA PET-CT, and spine MRI when needed.",
          ],
        },
        {
          id: "sex-and-cancer-risk",
          question:
            "Does frequent sex or masturbation cause or prevent prostate cancer?",
          answer: "No: sex and masturbation do not cause prostate cancer.",
          points: [
            "Some large studies found slightly lower risk in men who ejaculate more often, but this is not proven protection.",
            "Prostate cancer is not passed to a partner through sex.",
            "Avoid ejaculation for 48 hours before a PSA test.",
          ],
        },
      ],
    },
    {
      id: "tests-and-reports",
      title: "Tests and reports",
      questions: [
        {
          id: "mri-before-biopsy",
          starred: true,
          question:
            "Do I need an MRI before a prostate biopsy? What does PI-RADS 3, 4 or 5 mean?",
          answer:
            "Yes: an MRI before biopsy is now the standard first step when PSA is raised.",
          points: [
            "It shows suspicious areas, guides a targeted biopsy and helps some men avoid biopsy.",
            "PI-RADS scores the likelihood of significant cancer: 1–2 low, 3 uncertain, 4 likely, 5 highly likely.",
            "PI-RADS 4–5 usually needs a targeted biopsy; PI-RADS 3 depends on PSA density and other factors.",
            "A normal MRI with low PSA density may allow monitoring instead of biopsy.",
          ],
        },
        {
          id: "is-biopsy-painful",
          question: "Is a prostate biopsy painful? Is it done under anaesthesia?",
          answer:
            "Most men feel only mild discomfort; it is done under local anaesthesia, sedation or a short general anaesthetic.",
          points: [
            "It takes about 20–30 minutes; most men go home the same day.",
            "Blood in urine, stool or semen for days to weeks afterwards is common and settles.",
            "Fever or chills after biopsy need urgent attention.",
            "Stop blood thinners only as your doctor advises. [Your anaesthesia and technique.]",
          ],
        },
        {
          id: "can-biopsy-spread-cancer",
          question: "Can a biopsy make prostate cancer spread?",
          answer:
            "No: there is no good evidence that a prostate biopsy spreads cancer.",
          points: [
            "Biopsy is the only way to confirm cancer and its grade, which decides treatment.",
            "The real danger is delaying diagnosis out of fear.",
            "The main biopsy risks are bleeding and infection.",
          ],
        },
        {
          id: "transrectal-vs-transperineal",
          question:
            "Transrectal or transperineal biopsy: which is safer? What is a fusion biopsy?",
          answer:
            "Transperineal biopsy, through the skin behind the scrotum, carries a much lower infection risk than the transrectal route.",
          points: [
            "Transrectal needles pass through the rectum, so serious infection (sepsis) is more likely.",
            "The transperineal route also samples the front of the prostate better.",
            "Fusion biopsy overlays the MRI on live ultrasound so the needles target the suspicious area.",
            "[Which route and fusion system you use.]",
          ],
        },
        {
          id: "negative-biopsy-rising-psa",
          question:
            "My biopsy was negative but my PSA keeps rising: what next?",
          answer:
            "A negative biopsy lowers the chance of cancer but does not rule it out.",
          points: [
            "Get an MRI if not done; an MRI-targeted repeat biopsy may be needed.",
            "BPH growth and chronic prostatitis can also raise PSA.",
            "PSA density, free PSA and, in selected men, PSMA PET-CT help decide.",
            "Keep regular PSA checks even after a clear biopsy.",
          ],
        },
        {
          id: "gleason-score",
          starred: true,
          question:
            "What does Gleason 3+4=7 (Grade Group 2) mean on my report? What about Gleason 8 or 9?",
          answer:
            "The Gleason score shows how aggressive the cancer cells look; the Grade Group (1–5) is the simpler modern scale.",
          points: [
            "Gleason 6 (Grade Group 1): low grade, often suitable for monitoring.",
            "3+4=7 (Grade Group 2): mostly low-grade with some intermediate pattern; treatment or, in selected men, monitoring.",
            "4+3=7 (Grade Group 3): more aggressive pattern; usually needs treatment.",
            "Gleason 8–10 (Grade Groups 4–5): high grade; needs full staging and active treatment.",
            "The number of positive cores and the percentage of cancer in each also matter.",
          ],
        },
        {
          id: "stage-and-risk-groups",
          question:
            "What stage is my cancer? What do low-risk, intermediate-risk and high-risk mean?",
          answer:
            "Stage shows how far the cancer has spread; the risk group combines PSA, grade and stage to predict behaviour.",
          points: [
            "Localised (inside the prostate), locally advanced (beyond the capsule or into the seminal vesicles), metastatic (nodes or bones).",
            "Low risk: PSA under 10, Gleason 6, small tumour. Intermediate: PSA 10–20 or Gleason 7. High: PSA over 20, Gleason 8–10 or locally advanced.",
            "The risk group decides between monitoring, a single treatment or combined treatment.",
          ],
        },
        {
          id: "psma-pet-ct",
          question:
            "What is a PSMA PET-CT scan? Do I need it instead of a bone scan?",
          answer:
            "PSMA PET-CT detects prostate cancer cells throughout the body more accurately than CT and bone scan combined.",
          points: [
            "Most useful for high-risk or unfavourable intermediate-risk cancer, and for rising PSA after treatment.",
            "Low-risk cancer usually needs no staging scan.",
            "It uses a small dose of radioactive tracer and is available at many Indian centres. [Your typical cost.]",
          ],
        },
        {
          id: "genetic-testing",
          question:
            "Should I and my family get genetic testing, such as for BRCA?",
          answer:
            "Genetic testing is advised for metastatic or high-risk cancer, or a strong family history of prostate, breast, ovarian or pancreatic cancer.",
          points: [
            "BRCA2 and similar gene changes can open extra treatment options, such as PARP inhibitors.",
            "A positive result helps relatives: brothers and sons start PSA testing earlier; women can be screened for breast and ovarian cancer.",
            "It is a blood or saliva test, with counselling before and after.",
          ],
        },
      ],
    },
    {
      id: "treatment-choices",
      title: "Treatment choices and surgery",
      questions: [
        {
          id: "is-it-curable",
          starred: true,
          question: "Is prostate cancer curable?",
          answer:
            "Yes: prostate cancer found while still inside the prostate is usually curable.",
          points: [
            "Curative options: robotic radical prostatectomy, radiation, and focal therapy such as HIFU for selected men.",
            "Many locally advanced cancers can still be cured with combined treatment.",
            "Cancer that has spread to bones is usually not curable but can be controlled for years.",
          ],
        },
        {
          id: "surgery-or-radiation",
          starred: true,
          question: "Surgery or radiation: which is better for me?",
          answer:
            "For localised cancer, surgery and radiation give similar cure rates; the choice depends on age, health, cancer features and which side effects matter most to you.",
          points: [
            "Surgery removes the gland and gives full pathology; PSA should become undetectable. Main side effects: leakage and erection problems.",
            "Radiation avoids an operation, often with months of hormone injections; it can irritate the bowel and bladder, and erection problems develop gradually.",
            "Younger, fit men often choose surgery; men with other illnesses or locally advanced disease often choose radiation.",
            "Ask for opinions from both a uro-oncologist and a radiation oncologist.",
          ],
        },
        {
          id: "active-surveillance",
          question:
            "What is active surveillance? Is it safe not to treat low-risk cancer?",
          answer:
            "Active surveillance means closely monitoring low-risk cancer and treating only if it changes; it is safe for low-risk disease.",
          points: [
            "Follow-up: PSA every 3–6 months, MRI, and repeat biopsy at set intervals.",
            "Many men never need treatment; those who do are usually treated in time for cure.",
            "It avoids or delays the side effects of treatment.",
            "It differs from \"watchful waiting\", used for older or frail men to treat only symptoms.",
          ],
        },
        {
          id: "hifu-focal-therapy",
          starred: true,
          question:
            "What is HIFU or focal therapy? Can only the cancerous part of the prostate be treated?",
          answer:
            "Focal therapy treats only the part of the prostate containing significant cancer; HIFU uses focused ultrasound to heat and destroy that area.",
          points: [
            "Done through the back passage under anaesthesia, usually as a day-care or overnight procedure.",
            "Hemiablation treats one half of the prostate; focal ablation treats a smaller zone.",
            "Aim: control the cancer while preserving urine control and erections.",
            "Needs an accurate MRI and mapping biopsy. [Your HIFU device and experience.]",
          ],
        },
        {
          id: "who-is-suitable-for-hifu",
          question:
            "Who is suitable for HIFU? How does it compare with robotic surgery for urine control and erections?",
          answer:
            "HIFU best suits intermediate-risk (and selected low-risk) cancer limited to one area or side, seen on MRI and confirmed on biopsy.",
          points: [
            "Not suitable: cancer in many areas on both sides, large high-grade tumours, or spread outside the prostate.",
            "Versus surgery: far lower risk of leakage and erection loss, and quicker recovery.",
            "Trade-off: fewer long-term cancer-control data, and some men need repeat treatment or later surgery.",
            "Follow-up with PSA, MRI and biopsy is essential.",
          ],
        },
        {
          id: "can-hifu-be-repeated",
          question:
            "Can HIFU be repeated? Can surgery or radiation still be done later if needed?",
          answer:
            "Yes: HIFU can be repeated, and surgery or radiation remain possible later.",
          points: [
            "A minority of men need a second focal treatment.",
            "Surgery after HIFU is possible but technically harder; experience matters.",
            "Regular follow-up catches any recurrence early.",
          ],
        },
        {
          id: "robotic-radical-prostatectomy",
          question:
            "What is robotic radical prostatectomy? What does nerve-sparing mean?",
          answer:
            "Robotic radical prostatectomy removes the whole prostate and seminal vesicles through 5–6 keyhole cuts, with the surgeon controlling the robotic instruments.",
          points: [
            "Magnified 3D vision and wristed instruments allow precise dissection.",
            "Nerve-sparing preserves the fine nerves beside the prostate that control erections, when the cancer allows.",
            "One or both sides can be spared, depending on the cancer's position and grade.",
            "[Your typical operating time, hospital stay and catheter duration.]",
          ],
        },
        {
          id: "lymph-node-removal",
          question: "Why are lymph nodes removed along with the prostate?",
          answer:
            "Lymph nodes are the first place prostate cancer spreads; removing them checks for spread and can remove small deposits.",
          points: [
            "Recommended for intermediate- and high-risk cancer when the predicted risk of node spread is meaningful.",
            "Low-risk cancer usually doesn't need it.",
            "Possible side effects: a lymph fluid collection (lymphocele) and leg swelling.",
          ],
        },
        {
          id: "too-old-for-surgery",
          question:
            "My father is 76: is he too old for surgery? Does he need treatment at all?",
          answer:
            "Age alone doesn't decide; overall health, life expectancy and cancer risk matter more.",
          points: [
            "Fit men in their 70s with aggressive cancer benefit from treatment; radiation with hormones is often chosen above 75, surgery in selected fit men.",
            "Low-risk cancer in an older man often needs only monitoring.",
            "Doctors assess heart and lung health, other illnesses and daily function.",
            "\"Men die with prostate cancer, not of it\" holds for low-risk cancer, not for high-grade cancer.",
          ],
        },
        {
          id: "treatment-without-surgery",
          question: "Can prostate cancer be treated without surgery?",
          answer: "Yes: several effective treatments avoid an operation.",
          points: [
            "Radiation, with hormone therapy for higher-risk cancer.",
            "Focal therapy such as HIFU for suitable localised cancer.",
            "Active surveillance for low-risk cancer.",
            "Hormone therapy and newer tablets for advanced cancer.",
          ],
        },
        {
          id: "hormone-therapy",
          question:
            "What is hormone therapy? Why injections every 1, 3 or 6 months?",
          answer:
            "Hormone therapy (androgen deprivation) lowers testosterone, which prostate cancer needs to grow.",
          points: [
            "Given as depot injections lasting 1, 3 or 6 months, or by removing the testicles.",
            "Used with radiation for higher-risk cancer, and as the backbone of treatment when cancer has spread.",
            "It controls cancer but does not cure it on its own.",
            "The interval is about convenience and cost; the effect is the same.",
          ],
        },
        {
          id: "orchiectomy",
          question:
            "My doctor suggested removing the testicles (orchiectomy): is it the same as hormone injections?",
          answer:
            "Yes: orchiectomy lowers testosterone as effectively as injections, but permanently.",
          points: [
            "A short operation, often under spinal anaesthesia, with no repeated injection costs or visits.",
            "Useful when cost or travel makes regular injections difficult.",
            "Side effects match those of injections; it cannot be reversed.",
            "A subcapsular technique keeps the scrotum looking near-normal.",
          ],
        },
        {
          id: "spread-to-bones",
          question:
            "The cancer has spread to the bones: is it still treatable?",
          answer:
            "Yes: bone spread is usually not curable, but modern treatment controls it for years in many men.",
          points: [
            "Hormone therapy plus a newer tablet (abiraterone, enzalutamide, apalutamide) or docetaxel chemotherapy.",
            "Bone-protecting injections, and radiation for painful areas.",
            "Lutetium-PSMA and PARP inhibitors (for gene changes) when the disease progresses.",
            "Radiation to the prostate may help men with limited spread.",
            "Pain control and supportive care at every stage.",
          ],
        },
        {
          id: "abiraterone-enzalutamide-lutetium",
          question:
            "What are abiraterone, enzalutamide and Lutetium-PSMA therapy?",
          answer:
            "These are newer treatments that extend life in advanced prostate cancer beyond hormone injections alone.",
          points: [
            "Abiraterone (taken with prednisolone) and enzalutamide or apalutamide: daily tablets that block testosterone's effects more completely.",
            "Generic versions in India have cut costs considerably. [Current monthly cost range.]",
            "Lutetium-PSMA: an injection that delivers radiation straight to cancer cells, given in cycles at nuclear medicine centres.",
            "Monitoring: BP, liver tests and sugar (abiraterone); fatigue and falls (enzalutamide); blood counts and dry mouth (Lutetium).",
          ],
        },
        {
          id: "cost-in-delhi",
          starred: true,
          question:
            "What do robotic prostatectomy and HIFU cost in Delhi? Does insurance cover them?",
          answer:
            "A robotic prostatectomy at [hospital] costs about [₹ range] as a package; HIFU costs about [₹ range].",
          points: [
            "Cost drivers: room category, length of stay, lymph node removal, tests before surgery, complications.",
            "List what the package includes (surgeon, OT, robotic consumables, stay, medicines) and what it excludes.",
            "Most health policies cover robotic surgery, some with a sub-limit; get pre-authorisation (details under Robotic surgery).",
            "Check HIFU cover with your insurer before admission.",
          ],
        },
      ],
    },
    {
      id: "life-after-treatment",
      title: "Life after treatment",
      questions: [
        {
          id: "urine-leakage-after-surgery",
          starred: true,
          question:
            "Will I leak urine after prostate surgery? How long until control comes back?",
          answer:
            "Some leakage is normal in the first weeks after the catheter comes out; most men regain control over 3–6 months.",
          points: [
            "By one year, about 9 in 10 men need no pad or only a safety pad.",
            "Pelvic floor exercises and a healthy weight speed recovery.",
            "Leakage that persists after a year can be treated: medicines, a male sling or an artificial sphincter.",
            "[Your audited continence figures, if you publish them.]",
          ],
        },
        {
          id: "pads-and-diapers",
          question: "Will I need pads or diapers, and for how long?",
          answer:
            "Most men use pads for a few weeks to a few months; long-term diapers are rarely needed.",
          points: [
            "Leakage typically happens on coughing, sneezing, lifting or standing up.",
            "Start with absorbent pads and step down as control improves.",
            "Bring pads for the day the catheter is removed.",
          ],
        },
        {
          id: "catheter-and-kegels",
          question:
            "How long will the catheter stay? How do I do pelvic floor (Kegel) exercises?",
          answer:
            "The catheter usually stays about 7–10 days after robotic prostatectomy. [Your practice.]",
          points: [
            "Catheter care: keep the bag below the bladder, clean the tip daily, drink enough water.",
            "Kegels: tighten the muscles that stop urine flow or hold in wind; hold 5–10 seconds, relax; 10 times, 3 times a day.",
            "Learn them before surgery and restart once the catheter is out.",
            "A physiotherapist can check your technique.",
          ],
        },
        {
          id: "erections-after-surgery",
          starred: true,
          question: "Will I be able to have erections and sex after surgery?",
          answer:
            "Many men recover erections, but it often takes 6 to 24 months and depends on age, erections before surgery and nerve-sparing.",
          points: [
            "Best chances: younger men, good erections before surgery, nerves spared on both sides.",
            "Tablets, injections and vacuum devices help during recovery; a penile implant works if erections don't return.",
            "Desire and orgasm usually remain.",
            "[Your penile rehabilitation plan.]",
          ],
        },
        {
          id: "erection-recovery-treatments",
          question:
            "Which tablets or injections help erections recover after surgery?",
          answer:
            "Tablets such as sildenafil or tadalafil are the first step; injections into the penis work when tablets don't.",
          points: [
            "Tablets often start soon after the catheter is removed (\"penile rehabilitation\").",
            "Penile injections produce an erection within about 10–15 minutes.",
            "Vacuum devices help maintain length and blood flow.",
            "A penile implant is a reliable permanent option.",
            "Never combine these tablets with nitrate heart medicines.",
          ],
        },
        {
          id: "penis-length-after-surgery",
          question: "Will my penis become shorter after prostate removal?",
          answer:
            "Some men notice a small loss of length, often 1–2 cm, which may partly recover.",
          points: [
            "It happens because the urethra is shortened and erections are reduced during recovery.",
            "Early rehabilitation with tablets or a vacuum device helps preserve length.",
            "It does not affect passing urine.",
          ],
        },
        {
          id: "ejaculation-orgasm-fertility",
          question:
            "Will I still ejaculate and have orgasms? Can I father a child?",
          answer:
            "You will still have orgasms, but they will be dry (no semen) because the prostate and seminal vesicles are removed.",
          points: [
            "Natural conception is no longer possible.",
            "To have children, bank sperm before surgery; sperm can also be taken from the testis later for IVF/ICSI.",
            "Some men leak a little urine at orgasm early on; it usually improves.",
          ],
        },
        {
          id: "testosterone-after-surgery",
          question:
            "Will removing the prostate reduce my testosterone or \"manliness\"?",
          answer:
            "No: testosterone is made by the testicles, not the prostate, so surgery doesn't lower it.",
          points: [
            "Beard, voice, muscle and sex drive are unaffected by prostatectomy.",
            "Hormone therapy is different: it lowers testosterone deliberately.",
          ],
        },
        {
          id: "psa-after-surgery",
          question:
            "What should my PSA be after surgery, and how often should I test it?",
          answer:
            "After surgery, PSA should fall to undetectable (below 0.1 ng/mL) within about 6–8 weeks.",
          points: [
            "First test at 6–8 weeks, then every 3–6 months for 2–3 years, then every 6–12 months.",
            "Use the same lab when possible.",
            "A PSA that becomes detectable and rises needs early review.",
          ],
        },
        {
          id: "rising-psa-after-treatment",
          question:
            "My PSA is rising after surgery or radiation: has the cancer come back?",
          answer:
            "A rising PSA after treatment means some cancer cells remain; it is often treatable and may cause no symptoms for years.",
          points: [
            "After surgery: PSA rising above 0.2 ng/mL. After radiation: 2 ng/mL above the lowest value reached.",
            "PSMA PET-CT can locate the cancer even at low PSA levels.",
            "Options: salvage radiation after surgery; salvage surgery or HIFU after radiation; hormone therapy; or monitoring for slow rises.",
            "How fast PSA doubles guides urgency.",
          ],
        },
        {
          id: "hormone-therapy-side-effects",
          question:
            "How are hormone therapy side effects managed: hot flushes, weight gain, weak bones, low mood?",
          answer:
            "Most side effects can be reduced with exercise, diet and medicines.",
          points: [
            "Hot flushes: light clothing and avoiding triggers; medicines if severe.",
            "Weight gain and diabetes risk: strength training and walking, diet control, sugar and cholesterol checks.",
            "Weak bones: calcium, vitamin D, a bone density scan, bone-protecting medicine if needed.",
            "Low mood, fatigue, low libido: talk openly; exercise and counselling help.",
            "Intermittent therapy suits some men.",
          ],
        },
        {
          id: "diet-after-prostate-cancer",
          question:
            "What should I eat after prostate cancer: milk, red meat, tomatoes, green tea?",
          answer:
            "No food cures prostate cancer, but a balanced, mostly plant-based diet and a healthy weight support recovery.",
          points: [
            "Eat vegetables, fruit, whole grains, pulses and nuts; tomatoes and green tea are fine but are not treatments.",
            "Limit red and processed meat, fried food and sugary drinks; keep dairy moderate.",
            "Avoid high-dose supplements unless prescribed.",
            "Regular exercise is one of the most useful habits after diagnosis.",
          ],
        },
        {
          id: "life-expectancy",
          question:
            "What is the life expectancy with prostate cancer, including stage 4?",
          answer:
            "Men whose cancer is confined to the prostate usually have a near-normal life expectancy; 5-year survival is close to 100% (approx., US registry data).",
          points: [
            "With spread to nearby lymph nodes only, the outlook remains very good with treatment.",
            "With spread to bones, roughly 1 in 3 men are alive at 5 years in US data (approx.), and newer drugs are improving this.",
            "Individual outlook depends on grade, extent of spread, PSA response and general health.",
            "Survival figures are averages; the treating doctor can give a personal estimate.",
          ],
        },
      ],
    },
  ],
};
