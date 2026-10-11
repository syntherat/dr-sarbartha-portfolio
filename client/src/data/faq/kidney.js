// Source: Dr. Sarbartha Kumar Pratihar, "Patient FAQ Question Bank" (2026-10-05)
// and "Patient FAQ Answer Outlines" (2026-10-08). Text is used as written; only
// em dashes were replaced (see docs/PATIENT-FAQ.md). Square brackets are
// placeholders for the doctor to fill.

export const kidneyFaq = {
  slug: "kidney-cancer",
  title: "Kidney cancer",
  intro:
    "Most kidney searches start with a mass found by chance on a scan and end with one fear: life with one kidney.",
  credentials: "[credentials]",
  reviewedOn: "[review date]",
  stages: [
    {
      id: "is-it-cancer",
      title: "Is it cancer? Symptoms and causes",
      questions: [
        {
          id: "kidney-mass-on-ultrasound",
          starred: true,
          question:
            "A mass was found in my kidney on ultrasound: is it cancer?",
          answer:
            "Not always, but a solid kidney mass needs a contrast CT or MRI, because many solid masses are cancer.",
          points: [
            "Simple fluid-filled cysts, the most common finding, are harmless.",
            "Solid or complex masses need cross-sectional imaging to decide.",
            "About 1 in 5 small solid masses (under 4 cm) turn out to be benign.",
            "Bring the CT or MRI report and images to a uro-oncologist.",
          ],
        },
        {
          id: "benign-tumours-angiomyolipoma",
          question:
            "Is every kidney tumour cancer? What is angiomyolipoma, and does it need surgery?",
          answer:
            "No: some kidney tumours are benign, such as angiomyolipoma and oncocytoma.",
          points: [
            "Angiomyolipoma contains fat, so CT usually identifies it without a biopsy.",
            "Small angiomyolipomas are watched; large (over about 4 cm), growing or bleeding ones are treated, often by embolisation or partial nephrectomy.",
            "Oncocytoma looks like cancer on scans; biopsy or surgery is often needed to tell them apart.",
          ],
        },
        {
          id: "cyst-or-tumour-bosniak",
          question:
            "Kidney cyst or kidney tumour: what's the difference? Can a cyst turn into cancer? What does Bosniak 3 or 4 mean?",
          answer:
            "Most kidney cysts are simple fluid sacs that never become cancer; the Bosniak score grades how suspicious a complex cyst looks.",
          points: [
            "Bosniak 1–2: benign, no follow-up needed. Bosniak 2F: follow-up scans.",
            "Bosniak 3: uncertain, roughly half are cancer; treatment or surveillance is discussed.",
            "Bosniak 4: most are cancer and are treated like a solid tumour.",
            "Cancers arising in cysts are usually low grade, with an excellent outlook.",
          ],
        },
        {
          id: "symptoms",
          question:
            "What are the symptoms of kidney cancer? Can it grow silently?",
          answer:
            "Yes: most kidney cancers today cause no symptoms and are found by chance on scans done for other reasons.",
          points: [
            "Possible symptoms: blood in urine, pain in the side, a lump in the abdomen.",
            "Others: weight loss, fever, tiredness, or a new swelling of veins in the scrotum in men.",
            "Any blood in urine needs investigation.",
          ],
        },
        {
          id: "blood-in-urine-or-side-pain",
          question:
            "Blood in urine or pain in the side: could it be kidney cancer?",
          answer:
            "Usually not (stones and infections are far more common causes), but blood in urine always needs tests.",
          points: [
            "Visible blood in urine, even once, needs an ultrasound or CT and often a cystoscopy.",
            "Side pain with fever suggests infection; colicky pain suggests a stone.",
            "Tests: urine examination, ultrasound, CT urography.",
          ],
        },
        {
          id: "causes-and-risk-factors",
          question:
            "What causes kidney cancer: smoking, obesity, high BP, long-term dialysis? Can kidney stones cause it?",
          answer:
            "The main known risk factors are smoking, obesity, high blood pressure and long-term dialysis.",
          points: [
            "Smoking raises risk; quitting lowers it over time.",
            "Long-term dialysis can cause acquired cysts that sometimes become cancer.",
            "Inherited conditions such as von Hippel-Lindau syndrome cause cancers at younger ages.",
            "Long-standing stones with infection are linked to a rare cancer of the kidney's drainage system, not to the common type.",
          ],
        },
        {
          id: "cancer-vs-kidney-failure",
          question: "Is kidney cancer the same as kidney failure?",
          answer:
            "No: kidney cancer is a tumour; kidney failure is loss of the kidneys' filtering function.",
          points: [
            "Most people with kidney cancer have normal kidney function.",
            "Removing one kidney rarely causes kidney failure if the other kidney is healthy.",
            "People with existing kidney disease need kidney-sparing treatment where possible.",
          ],
        },
        {
          id: "hereditary",
          question:
            "Is kidney cancer hereditary? Should my children be screened?",
          answer:
            "Most kidney cancers are not inherited; about 3–5% are linked to inherited syndromes.",
          points: [
            "Suspect it with diagnosis before about 46, tumours in both kidneys or several tumours, or a family history.",
            "Syndromes include von Hippel-Lindau, hereditary papillary RCC, BHD and HLRCC.",
            "Genetic counselling decides whether relatives need tests and screening scans.",
          ],
        },
      ],
    },
    {
      id: "tests-and-reports",
      title: "Tests and reports",
      questions: [
        {
          id: "contrast-ct-mri-pet",
          question:
            "Is a CT scan with contrast safe for my kidneys? Do I need an MRI or a PET scan?",
          answer:
            "For most people, yes: contrast CT is safe when kidney function is normal, and it is the key test for kidney tumours.",
          points: [
            "Kidney function (creatinine, eGFR) is checked first; fluids before and after protect the kidneys.",
            "MRI is used if contrast CT is unsuitable, for complex cysts, or to study the veins.",
            "A chest CT checks for lung spread; PET scan is not routinely needed for kidney cancer.",
            "Tell the team about allergies, metformin and any kidney problems.",
          ],
        },
        {
          id: "biopsy-before-surgery",
          question:
            "Is a biopsy needed before surgery? Can a needle biopsy spread the cancer?",
          answer:
            "Usually not: when CT shows a typical solid tumour that will be removed, biopsy adds little.",
          points: [
            "Biopsy helps when the diagnosis is unclear, before ablation or surveillance, or before drug treatment for spread.",
            "Needle biopsy is safe; spread along the needle track is extremely rare.",
            "A non-diagnostic biopsy may need repeating.",
          ],
        },
        {
          id: "tumour-size",
          question:
            "My tumour is 3 cm (or 5, or 8 cm): what does the size mean for treatment?",
          answer: "Size guides both the stage and the choice of treatment.",
          points: [
            "Up to 4 cm (T1a): partial nephrectomy preferred; surveillance or ablation in selected cases.",
            "4–7 cm (T1b): partial nephrectomy when technically feasible, otherwise total nephrectomy.",
            "Over 7 cm, or growing into fat or veins: usually total nephrectomy; partial in selected cases.",
            "Location and depth matter as much as size.",
          ],
        },
        {
          id: "clear-cell-isup-grade",
          question:
            'What does "clear cell renal cell carcinoma, ISUP grade 2" mean on my report?',
          answer:
            "It names the commonest kidney cancer type and its grade (how abnormal the cells look, on a scale of 1 to 4).",
          points: [
            "Clear cell is about 70–75% of kidney cancers; papillary and chromophobe come next.",
            "Grades 1–2 behave less aggressively; grades 3–4 carry higher risk.",
            "Other key report items: stage (pT), margins, sarcomatoid change, necrosis, vein invasion.",
            "These decide follow-up intensity and whether immunotherapy after surgery is advised.",
          ],
        },
        {
          id: "tumour-in-ivc",
          question:
            "The tumour has grown into the main vein (IVC): can it still be removed?",
          answer:
            "Yes: in most cases, removing the kidney together with the tumour extension in the vein can still cure the cancer.",
          points: [
            "Complexity depends on how high the extension reaches: below the liver, behind it, or up to the heart.",
            "It is major surgery for an experienced team, sometimes with vascular or cardiac surgeons.",
            "Selected lower-level cases can be done robotically by experienced surgeons.",
            "Outcomes are good when the cancer has not spread elsewhere.",
          ],
        },
        {
          id: "other-kidney-function",
          question:
            "How do doctors check that my other kidney works well enough?",
          answer:
            "Blood tests (creatinine, eGFR) and the CT show overall function and how the other kidney looks.",
          points: [
            "A nuclear renal scan (DTPA or EC) measures each kidney's share of function.",
            "It is used when function is borderline, or when the tumour is large or in a single kidney.",
            "Diabetes, BP control and protein in urine also affect long-term kidney health.",
          ],
        },
      ],
    },
    {
      id: "treatment-choices",
      title: "Treatment choices and surgery",
      questions: [
        {
          id: "remove-only-the-tumour",
          starred: true,
          question:
            "Can only the tumour be removed and the rest of the kidney saved?",
          answer:
            "Yes: for most tumours up to 4 cm, and many up to 7 cm, partial nephrectomy removes only the tumour with a rim of normal tissue.",
          points: [
            "Cancer control equals removing the whole kidney for suitable tumours.",
            "It preserves kidney function, which protects long-term heart and kidney health.",
            "Robotic surgery makes complex partial nephrectomy possible in more patients.",
          ],
        },
        {
          id: "partial-or-complete-removal",
          question:
            "Partial or complete kidney removal: how is the decision made?",
          answer:
            "The choice depends on tumour size, position and depth, your kidney function and the surgeon's experience.",
          points: [
            "Partial is preferred when technically safe, especially with diabetes, high BP or a weak other kidney.",
            "Complete removal suits large tumours replacing much of the kidney, vein involvement, or central tumours where partial is unsafe.",
            "Scoring systems (RENAL or PADUA) help predict complexity.",
          ],
        },
        {
          id: "robotic-partial-nephrectomy",
          question:
            "What is robotic partial nephrectomy, and what are its benefits?",
          answer:
            "It removes the tumour through keyhole cuts with robotic instruments, then repairs the kidney with precise stitching.",
          points: [
            "Compared with open surgery: less blood loss, less pain, shorter stay and faster return to work.",
            "Allows short or no clamping of the kidney's blood supply, protecting function.",
            "Risks: bleeding, urine leak, and uncommonly conversion to total nephrectomy.",
            "[Your typical stay and outcomes.]",
          ],
        },
        {
          id: "watch-small-tumour",
          question:
            "My tumour is small: can we just watch it instead of operating?",
          answer:
            "Yes, for selected people: tumours under 3–4 cm, especially in older or less fit patients, can be monitored with regular scans.",
          points: [
            "Small kidney tumours usually grow slowly, a few millimetres a year, and rarely spread while small.",
            "Scans every 3–6 months at first, then less often.",
            "Treatment is advised if it grows quickly (more than about 5 mm a year) or passes 4 cm.",
            "A biopsy can help decide.",
          ],
        },
        {
          id: "ablation-rfa-cryo",
          question:
            "Can a small tumour be burnt or frozen (RFA or cryoablation) instead of surgery?",
          answer:
            "Yes: for tumours usually under 3 cm, radiofrequency, microwave or cryoablation are options, especially for older or less fit patients.",
          points: [
            "Done through a needle under CT or ultrasound guidance, often with a short stay.",
            "The chance of tumour persisting or returning is slightly higher than with surgery, but ablation can be repeated.",
            "A biopsy is taken at the same sitting to confirm the diagnosis.",
          ],
        },
        {
          id: "tumour-in-only-kidney",
          question:
            "The tumour is in my only kidney: can it be treated without dialysis?",
          answer:
            "Usually yes: partial nephrectomy, ablation or surveillance aim to remove the cancer and keep enough kidney to avoid dialysis.",
          points: [
            "Partial nephrectomy in a single kidney is complex and best done by an experienced team.",
            "Some loss of function is expected; a small number need temporary dialysis.",
            "Ablation is an alternative for small tumours.",
          ],
        },
        {
          id: "nephrectomy-after-spread",
          question:
            "The cancer has spread: is removing the kidney still useful?",
          answer:
            "Sometimes: in selected patients with good health and limited spread, removing the kidney helps alongside drug treatment.",
          points: [
            "A tumour board decides, based on risk group and how much disease is present.",
            "Drug treatment often comes first, with surgery later if the response is good.",
            "Single spots of spread, for example in a lung or adrenal, can sometimes be removed.",
          ],
        },
        {
          id: "immunotherapy-targeted-tablets",
          question:
            "Do immunotherapy and targeted tablets work for advanced kidney cancer? What do they cost?",
          answer:
            "Yes: immunotherapy combinations and targeted tablets have transformed outcomes in advanced kidney cancer.",
          points: [
            "Usual first treatment: two immunotherapy drugs, or immunotherapy plus a targeted tablet.",
            "Some patients have long-lasting responses; a few have complete disappearance of disease.",
            "Immunotherapy may also be advised after surgery for high-risk tumours.",
            "[Cost range in India, generic options and patient-assistance programmes.]",
          ],
        },
        {
          id: "chemotherapy-radiation",
          question: "Does chemotherapy or radiation work for kidney cancer?",
          answer:
            "Standard chemotherapy works poorly for the common types of kidney cancer, so it is rarely used.",
          points: [
            "Radiation controls pain or bleeding from spread to bones or brain; stereotactic radiation can treat selected spots.",
            "The main treatments are surgery, ablation, immunotherapy and targeted tablets.",
          ],
        },
        {
          id: "robotic-surgery-cost-delhi",
          starred: true,
          question:
            "What does robotic kidney cancer surgery cost in Delhi? Does insurance cover it?",
          answer:
            "Robotic partial or total nephrectomy at [hospital] costs about [₹ range] as a package.",
          points: [
            "Cost drivers: complexity, length of stay, room category, robotic consumables.",
            "Most health policies cover robotic surgery, some with a sub-limit; get pre-authorisation (see Robotic surgery).",
            "List what the package includes and excludes.",
          ],
        },
      ],
    },
    {
      id: "life-after-treatment",
      title: "Life after treatment",
      questions: [
        {
          id: "life-with-one-kidney",
          starred: true,
          question:
            "Can I live a normal life with one kidney? Will it shorten my life?",
          answer:
            "Yes: one healthy kidney is enough for a normal life; kidney donors, for example, live normal lifespans.",
          points: [
            "The remaining kidney enlarges and takes over much of the work.",
            "Protect it: control BP and sugar, avoid frequent painkillers, stay hydrated, check kidney function yearly.",
            "The risk of later kidney disease is somewhat higher, especially with diabetes or high BP (one reason partial nephrectomy is preferred when possible).",
          ],
        },
        {
          id: "dialysis-and-creatinine",
          question:
            "Will I need dialysis after kidney removal? My creatinine went up after surgery: is that normal?",
          answer:
            "Dialysis is rarely needed if the other kidney is healthy; a rise in creatinine after surgery is expected.",
          points: [
            "After total nephrectomy, eGFR often falls by a quarter to a third, then partly recovers over weeks to months.",
            "Creatinine settles at a new baseline that becomes your reference.",
            "Report reduced urine, swelling or breathlessness promptly.",
          ],
        },
        {
          id: "diet-with-one-kidney",
          question:
            "What should I eat or avoid with one kidney? Do I need a low-protein diet? How much water should I drink?",
          answer:
            "Most people with one healthy kidney need no special diet, just a balanced, low-salt one.",
          points: [
            "Normal protein is fine; avoid very high-protein diets and protein supplements.",
            "Drink enough to keep urine pale (often 2–3 litres a day in Indian summers) unless your doctor restricts fluids.",
            "Limit salt and processed food; avoid unprescribed herbal or bodybuilding supplements.",
            "If kidney function is reduced, a dietitian tailors the diet.",
          ],
        },
        {
          id: "safe-painkillers",
          question: "Which painkillers are safe with one kidney?",
          answer:
            "Paracetamol is the safest everyday painkiller; avoid regular use of NSAIDs such as ibuprofen, diclofenac or nimesulide.",
          points: [
            "NSAIDs reduce blood flow to the kidney, especially when you are dehydrated.",
            "Short courses may be allowed if kidney function is normal: ask your doctor first.",
            "Tell every doctor you have one kidney before new medicines, contrast scans or antibiotics.",
          ],
        },
        {
          id: "exercise-and-sports",
          question:
            "Can I exercise, lift weights or play sports with one kidney?",
          answer:
            "Yes: regular exercise, gym work and most sports are safe and encouraged.",
          points: [
            "After robotic surgery: light activity at about 2 weeks, heavy lifting after 4–6 weeks.",
            "Some doctors advise caution or padding for heavy-contact sports such as boxing or martial arts.",
            "Exercise helps BP, weight and kidney health.",
          ],
        },
        {
          id: "marriage-and-pregnancy",
          question:
            "Can I get married and have children with one kidney? Can a woman with one kidney have a normal pregnancy?",
          answer:
            "Yes: one kidney doesn't affect fertility, sex life or marriage, and most women with one healthy kidney have normal pregnancies.",
          points: [
            "Pregnancy needs closer BP and kidney monitoring.",
            "After cancer treatment, discuss timing of pregnancy with your oncologist.",
            "Some cancer drugs require contraception during treatment.",
          ],
        },
        {
          id: "recurrence-and-scans",
          question:
            "Can kidney cancer come back after surgery? How often will I need scans?",
          answer:
            "Most small, low-grade cancers never come back; the risk rises with larger size, higher grade and higher stage.",
          points: [
            "Recurrence can be local, in the other kidney, or in the lungs or bones.",
            "CT scans of chest and abdomen follow a risk-based schedule, usually for at least 5 years.",
            "Recurrences found early can often be treated with surgery, ablation or drugs.",
          ],
        },
        {
          id: "survival-rate",
          question: "What is the survival rate after kidney cancer surgery?",
          answer:
            "For cancer confined to the kidney, about 9 in 10 people are alive at 5 years (approx., US registry data).",
          points: [
            "With spread to nearby tissue or lymph nodes: roughly 7 in 10 (approx.).",
            "With distant spread: historically about 1 in 5 (approx.), now improving with immunotherapy.",
            "Small tumours removed early have an excellent outlook.",
          ],
        },
        {
          id: "hospital-stay-and-recovery",
          question:
            "How long is the hospital stay and recovery after robotic kidney surgery?",
          answer:
            "Most people stay 2–3 days and return to normal activities within 2–4 weeks.",
          points: [
            "Walking from the day after surgery; normal diet within 1–2 days.",
            "Drain and catheter usually come out within 1–2 days.",
            "Avoid heavy lifting for 4–6 weeks.",
            "[Your typical stay.]",
          ],
        },
      ],
    },
  ],
};
