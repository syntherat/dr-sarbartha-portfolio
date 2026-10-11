// Source: Dr. Sarbartha Kumar Pratihar, "Patient FAQ Question Bank" (2026-10-05)
// and "Patient FAQ Answer Outlines" (2026-10-08). Text is used as written; only
// em dashes were replaced (see docs/PATIENT-FAQ.md). Square brackets are
// placeholders for the doctor to fill.

export const upperTractFaq = {
  slug: "ureter-renal-pelvis-cancer",
  title: "Ureter and renal pelvis cancer",
  intro:
    "Few families have heard of this cancer, so lead with plain explanations and the hardest question: why remove a whole kidney?",
  credentials: "[credentials]",
  reviewedOn: "[review date]",
  stages: [
    {
      id: "is-it-cancer",
      title: "Is it cancer? Symptoms and causes",
      questions: [
        {
          id: "what-is-it",
          question:
            "What is ureter or renal pelvis cancer? How is it different from kidney cancer and bladder cancer?",
          answer:
            "It is cancer of the lining of the kidney's drainage system (renal pelvis) or the ureter: the same lining as the bladder, not the kidney's filtering tissue.",
          points: [
            "It behaves more like bladder cancer than the common kidney cancer (renal cell carcinoma).",
            "It is uncommon: about 5–10% of cancers of this lining.",
            "Because it can also appear in the bladder, both are checked during follow-up.",
          ],
        },
        {
          id: "blood-normal-bladder",
          question:
            "My bladder is normal but there is blood in my urine: could the cancer be in the ureter or kidney?",
          answer:
            "Yes: blood in urine with a normal bladder can come from the upper urinary tract, so the kidneys and ureters must be imaged too.",
          points: [
            "CT urography is the main test.",
            "Other causes include stones, kidney disease and infection.",
            "Ureteroscopy may be needed if the scan shows a filling defect or wall thickening.",
          ],
        },
        {
          id: "after-bladder-cancer",
          question:
            "I had bladder cancer before: can it appear in the ureter or kidney?",
          answer:
            "Yes: people with bladder cancer have a small risk of a new tumour in the upper urinary tract, higher with high-grade cancer or CIS.",
          points: [
            "That is why high-risk bladder cancer follow-up includes periodic CT urography.",
            "Report any new blood in the urine or side pain.",
          ],
        },
        {
          id: "causes",
          question:
            "What causes it: smoking, long-term painkillers, certain herbal medicines?",
          answer:
            "Smoking is the main risk factor; long-term painkiller misuse and aristolochic acid in some herbal remedies are also linked.",
          points: [
            "Aristolochic acid, found in some traditional herbal preparations, damages the kidneys and causes upper tract cancer.",
            "Industrial chemical exposure (aromatic amines) raises risk.",
            "Lynch syndrome is an inherited cause.",
          ],
        },
        {
          id: "lynch-syndrome",
          question:
            "Colon or uterine cancer runs in my family: is that linked? What is Lynch syndrome?",
          answer:
            "Yes: Lynch syndrome is an inherited condition that raises the risk of colon, uterine and upper urinary tract cancers.",
          points: [
            "Suspect it if relatives had these cancers, especially at younger ages.",
            "The tumour can be tested for mismatch-repair changes; a genetic blood test confirms.",
            "Carriers and their relatives need regular screening, including colonoscopy.",
          ],
        },
      ],
    },
    {
      id: "tests-and-reports",
      title: "Tests and reports",
      questions: [
        {
          id: "ureteroscopy",
          question:
            "What is ureteroscopy? Why is a biopsy from inside the ureter needed?",
          answer:
            "Ureteroscopy passes a thin telescope through the bladder into the ureter and kidney to see and sample the tumour.",
          points: [
            "The biopsy confirms cancer and its grade, which decides between kidney-sparing and radical treatment.",
            "Done under anaesthesia, often with a temporary stent afterwards.",
            "Some surgeons avoid it before planned radical surgery when not needed, as it may raise the risk of later bladder tumours.",
          ],
        },
        {
          id: "ct-urography",
          question:
            "What does CT urography show? Why is urine tested from each kidney separately?",
          answer:
            "CT urography shows tumours as filling defects or wall thickening in the kidney and ureter, and checks for spread.",
          points: [
            "Urine collected directly from each side (selective cytology) helps locate the side involved.",
            "Cytology detects high-grade cancer better than low-grade.",
          ],
        },
        {
          id: "low-or-high-grade",
          question:
            "What do \"low grade\" and \"high grade\" mean for my treatment?",
          answer:
            "Grade is the biggest factor in choosing treatment: low-grade tumours can often be treated endoscopically, keeping the kidney; high-grade tumours usually need removal of the kidney and ureter.",
          points: [
            "Low risk: low grade, single, under 2 cm, no invasion on CT.",
            "High risk: high grade, large or multiple tumours, invasion, or a swollen (blocked) kidney.",
            "Biopsies can underestimate grade, so doctors combine all the findings.",
          ],
        },
      ],
    },
    {
      id: "treatment-choices",
      title: "Treatment choices and surgery",
      questions: [
        {
          id: "why-remove-whole-kidney",
          starred: true,
          question:
            "Why must the whole kidney and ureter be removed for a small tumour?",
          answer:
            "This cancer tends to recur along the whole lining of the drainage system, so removing the kidney, the full ureter and a cuff of bladder (radical nephroureterectomy) is standard for high-risk tumours.",
          points: [
            "Leaving part of the ureter risks the cancer returning in the stump.",
            "Kidney-sparing treatment is safe only for carefully selected low-risk tumours.",
            "The decision weighs cancer risk against kidney function.",
          ],
        },
        {
          id: "laser-treatment",
          starred: true,
          question:
            "Can my kidney be saved with laser (endoscopic) treatment instead?",
          answer:
            "Yes, for low-risk tumours: laser treatment through a ureteroscope can control the cancer while keeping the kidney.",
          points: [
            "It is also considered for high-risk tumours when removing the kidney would mean dialysis.",
            "It needs strict, frequent ureteroscopy follow-up, as recurrence is common.",
            "Removing only the affected lower segment of the ureter is another kidney-sparing option.",
          ],
        },
        {
          id: "bladder-cuff",
          question:
            "Why is a small part of the bladder also removed?",
          answer:
            "The last part of the ureter runs through the bladder wall; removing it with a cuff of bladder prevents recurrence in that remnant.",
          points: [
            "The bladder is closed with stitches and heals well.",
            "A catheter stays for about a week while it heals.",
          ],
        },
        {
          id: "robotic-and-recovery",
          question:
            "Can this surgery be done robotically? How long is recovery?",
          answer:
            "Yes: robotic nephroureterectomy, including removal of the bladder cuff, is done through keyhole cuts.",
          points: [
            "Most patients stay 2–4 days and return to normal activities in 3–4 weeks.",
            "The catheter usually stays about a week.",
            "[Your typical stay.]",
          ],
        },
        {
          id: "single-dose-chemo",
          question:
            "Why is a single dose of chemotherapy put into the bladder after surgery?",
          answer:
            "One dose of chemotherapy, such as mitomycin, placed in the bladder soon after surgery lowers the chance of cancer appearing in the bladder later.",
          points: [
            "Without it, roughly 1 in 3 patients develop a bladder tumour.",
            "It is given through the catheter and held for about an hour.",
          ],
        },
        {
          id: "chemo-before-or-after",
          question:
            "Will I need chemotherapy before or after surgery?",
          answer:
            "Chemotherapy after surgery is advised when the tumour is advanced (into the muscle or beyond, or in the lymph nodes) because it reduces recurrence.",
          points: [
            "Some centres give it before surgery for high-risk tumours, while both kidneys still work.",
            "Immunotherapy after surgery may be advised for selected high-risk patients.",
            "Kidney function after surgery affects which drugs can be used.",
          ],
        },
        {
          id: "one-or-weak-kidneys",
          question:
            "I have only one kidney or weak kidneys: what are my options? Will I need dialysis?",
          answer:
            "Kidney-sparing treatments are preferred where possible: laser ablation, removal of a ureter segment, or drug instillation into the kidney.",
          points: [
            "Removing a single kidney means lifelong dialysis, so it is kept for cases where cancer control demands it.",
            "Frequent ureteroscopy follow-up is needed.",
            "A nephrologist should be part of the plan.",
          ],
        },
        {
          id: "cost-delhi",
          question:
            "What does robotic nephroureterectomy cost in Delhi?",
          answer:
            "Robotic nephroureterectomy at [hospital] costs about [₹ range] as a package.",
          points: [
            "Cost drivers: length of stay, room category, robotic consumables, the chemotherapy dose.",
            "Most health policies cover robotic surgery, some with a sub-limit; get pre-authorisation.",
          ],
        },
      ],
    },
    {
      id: "life-after-treatment",
      title: "Life after treatment",
      questions: [
        {
          id: "regular-cystoscopy",
          starred: true,
          question:
            "Why do I need regular cystoscopy after ureter cancer surgery?",
          answer:
            "Roughly 1 in 3 patients later develop a tumour in the bladder, and regular cystoscopy finds it early, when it is easy to treat.",
          points: [
            "Typically every 3 months in the first year, then less often, for at least 5 years.",
            "CT urography checks the other kidney, and the chest is scanned for spread.",
            "Report any new blood in the urine at once.",
          ],
        },
        {
          id: "other-kidney",
          question:
            "Can the cancer come back in the other kidney?",
          answer:
            "It is uncommon: only a few percent of patients develop a tumour on the other side.",
          points: [
            "Regular CT urography monitors the remaining kidney and ureter.",
            "If it happens, kidney-sparing treatment is preferred to avoid dialysis.",
          ],
        },
        {
          id: "protect-remaining-kidney",
          question:
            "How do I protect my remaining kidney: diet, water, medicines?",
          answer:
            "Keep BP and sugar controlled, stay well hydrated, avoid unnecessary painkillers and herbal remedies, and check kidney function regularly.",
          points: [
            "Avoid NSAIDs and any product that may contain aristolochic acid.",
            "Don't smoke.",
            "Tell every doctor you have one kidney before new medicines or contrast scans.",
          ],
        },
        {
          id: "survival-rate",
          question:
            "What is the survival rate?",
          answer:
            "When the cancer has not grown deep into the wall, most patients are alive and well at 5 years; survival falls with deeper invasion and lymph node spread.",
          points: [
            "Not invading the muscle: about 9 in 10 at 5 years (approx., surgical series).",
            "Through the wall into surrounding fat: about half (approx.).",
            "Lymph node spread: about 1 in 3 (approx.).",
            "The final grade and stage on the pathology report give the clearest picture.",
          ],
        },
      ],
    },
  ],
};
