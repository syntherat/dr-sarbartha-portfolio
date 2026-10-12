// Source: Dr. Sarbartha Kumar Pratihar, "Patient FAQ Question Bank" (2026-10-05)
// and "Patient FAQ Answer Outlines" (2026-10-08). Text is used as written; only
// em dashes were replaced (see docs/PATIENT-FAQ.md). Square brackets are
// placeholders for the doctor to fill.

export const adrenalFaq = {
  slug: "adrenal-cancer",
  title: "Adrenal tumours and adrenal cancer",
  intro:
    "Most adrenal questions start with a chance scan finding or hard-to-control BP and ask one thing: does it need surgery?",
  reviewedOn: "[review date]",
  stages: [
    {
      id: "is-it-cancer",
      title: "Is it cancer? Symptoms and causes",
      questions: [
        {
          id: "found-by-chance",
          starred: true,
          question:
            "A tumour was found in my adrenal gland by chance on a CT scan: is it cancer?",
          answer:
            "Usually not; most adrenal tumours found by chance are benign adenomas, but each one needs two checks: is it producing hormones, and does it look suspicious on the scan?",
          points: [
            "Hormone tests: cortisol (dexamethasone suppression test), metanephrines, and aldosterone and renin if BP is high.",
            "CT features such as fat content and size separate benign from suspicious tumours.",
            "In someone with a known cancer elsewhere, it may be a spread (metastasis).",
          ],
        },
        {
          id: "what-the-adrenal-does",
          question:
            "What does the adrenal gland do? Can I live without one?",
          answer:
            "The adrenal glands sit above the kidneys and make hormones that control BP, salt balance, stress response and metabolism, including cortisol, aldosterone and adrenaline.",
          points: [
            "One healthy adrenal gland is enough for a normal life.",
            "Removing both glands means lifelong hormone replacement.",
          ],
        },
        {
          id: "mostly-harmless",
          question:
            "Are most adrenal tumours harmless?",
          answer:
            "Yes: the large majority are benign adenomas that never cause problems.",
          points: [
            "A minority produce excess hormones, which can affect BP, blood sugar and bones.",
            "Adrenal cancer is rare.",
          ],
        },
        {
          id: "high-bp-low-potassium",
          question:
            "I am young and have high BP with low potassium: could an adrenal tumour be the cause?",
          answer:
            "Possibly: primary aldosteronism (Conn's syndrome), often from an adrenal adenoma, is a common and curable cause of high BP.",
          points: [
            "Suspect it with high BP at a young age, BP resistant to three medicines, or low potassium.",
            "The screening blood test is the aldosterone-to-renin ratio.",
            "Adrenal vein sampling shows whether one gland is responsible before surgery.",
          ],
        },
        {
          id: "weight-gain-diabetes",
          question:
            "Can an adrenal tumour cause weight gain, diabetes or a round face?",
          answer:
            "Yes: a cortisol-producing adrenal tumour (Cushing's syndrome) can cause weight gain around the trunk, a round face, diabetes, high BP, weak bones and easy bruising.",
          points: [
            "Milder cortisol excess without obvious features is more common and still affects BP, sugar and bones.",
            "Tests: overnight dexamethasone suppression test, late-night or urine cortisol, ACTH.",
          ],
        },
        {
          id: "pheochromocytoma-symptoms",
          question:
            "Sudden attacks of headache, sweating, palpitations and very high BP: could it be a pheochromocytoma?",
          answer:
            "These are classic symptoms of pheochromocytoma, an adrenaline-producing tumour that is rare but important to diagnose.",
          points: [
            "Blood or urine metanephrine tests confirm it.",
            "It must be treated before any surgery or delivery, as an untreated tumour can cause dangerous BP spikes.",
            "Around a third are linked to inherited gene changes.",
          ],
        },
        {
          id: "hereditary",
          question:
            "Is it hereditary? Should my children be tested?",
          answer:
            "Most adrenal adenomas are not inherited, but pheochromocytomas and paragangliomas often are.",
          points: [
            "Genetic testing is recommended for everyone with a pheochromocytoma or paraganglioma.",
            "If a gene change is found, relatives can be tested and screened.",
            "Some syndromes, such as MEN2, VHL and NF1, also involve other organs.",
          ],
        },
      ],
    },
    {
      id: "tests-and-reports",
      title: "Tests and reports",
      questions: [
        {
          id: "hormone-tests",
          question:
            "Why do I need hormone tests in urine and blood before surgery?",
          answer:
            "Hormone tests show whether the tumour is active, which changes both the decision to operate and how surgery is done safely.",
          points: [
            "An undiagnosed pheochromocytoma can cause dangerous BP swings during surgery.",
            "Cortisol-producing tumours need steroid cover around surgery.",
            "Aldosterone-producing tumours need potassium and BP correction first.",
          ],
        },
        {
          id: "no-biopsy",
          question:
            "Why is no biopsy being done?",
          answer:
            "An adrenal biopsy rarely helps and can be dangerous: it cannot reliably separate benign from malignant adrenal tumours, and biopsy of a pheochromocytoma can trigger a BP crisis.",
          points: [
            "CT, MRI and hormone tests usually give the answer.",
            "Biopsy is kept for suspected spread from another cancer, after pheochromocytoma is excluded.",
          ],
        },
        {
          id: "tumour-size",
          question:
            "My adrenal tumour is 2 cm (or 5 cm): does it need surgery?",
          answer:
            "Size matters, but hormone activity and CT appearance matter more.",
          points: [
            "Under 4 cm, inactive and benign-looking: usually no surgery and often no further scans.",
            "Over 4 cm, suspicious features or growth: surgery is usually advised.",
            "Any size producing excess hormones: usually removed.",
          ],
        },
        {
          id: "lipid-rich-non-functioning",
          question:
            "What do \"lipid-rich adenoma\" and \"non-functioning\" mean on my report?",
          answer:
            "\"Lipid-rich adenoma\" means the tumour contains fat on CT (density under 10 HU), which strongly suggests it is benign.",
          points: [
            "\"Non-functioning\" means hormone tests show no excess hormone production.",
            "A lipid-rich, non-functioning adenoma under 4 cm is usually harmless.",
          ],
        },
        {
          id: "recheck-if-not-operated",
          question:
            "If it is not operated, how often should it be rechecked?",
          answer:
            "Benign-looking adenomas under 4 cm often need no further scans; uncertain ones are rescanned in 6–12 months.",
          points: [
            "Hormone tests are repeated if new symptoms appear, such as rising BP, sugar or weight.",
            "Growth or new hormone activity leads to surgery.",
          ],
        },
      ],
    },
    {
      id: "treatment-choices",
      title: "Treatment choices and surgery",
      questions: [
        {
          id: "every-tumour-surgery",
          starred: true,
          question:
            "Does every adrenal tumour need surgery?",
          answer:
            "No: most adrenal tumours are small, benign and inactive, and need no surgery.",
          points: [
            "Surgery is advised for hormone-producing, large (over about 4 cm), suspicious or growing tumours.",
            "With mild cortisol excess, surgery is considered when it affects BP, sugar or bones.",
          ],
        },
        {
          id: "robotic-adrenalectomy",
          question:
            "What is laparoscopic or robotic adrenalectomy? How long is recovery?",
          answer:
            "It removes the adrenal gland through small keyhole cuts, the standard approach for most adrenal tumours.",
          points: [
            "Hospital stay is usually 1–3 days, with normal activities in about 2 weeks.",
            "Robotic assistance helps with large tumours, obese patients or partial adrenalectomy.",
            "[Your typical stay.]",
          ],
        },
        {
          id: "bp-tablets-before-surgery",
          question:
            "Why must I take BP tablets for 1 to 2 weeks before pheochromocytoma surgery?",
          answer:
            "Alpha-blocker tablets, such as prazosin or phenoxybenzamine, relax blood vessels and prevent dangerous BP spikes during surgery.",
          points: [
            "Extra salt and fluids help restore blood volume.",
            "Beta-blockers may be added later for a fast heartbeat, never first.",
            "Dizziness on standing and a blocked nose show the medicine is working.",
          ],
        },
        {
          id: "bp-after-surgery",
          starred: true,
          question:
            "Will my BP become normal after surgery? Can I stop my BP medicines?",
          answer:
            "After removal of an aldosterone- or adrenaline-producing tumour, BP improves in most patients, and many reduce or stop medicines.",
          points: [
            "Conn's syndrome: potassium normalises in nearly all patients; BP is cured in about a third and improved in most others.",
            "Pheochromocytoma: BP usually returns to normal.",
            "Long-standing high BP or kidney damage may leave some BP needing treatment.",
          ],
        },
        {
          id: "steroids-after-surgery",
          question:
            "Will I need steroid tablets after surgery, and for how long?",
          answer:
            "Only after removal of a cortisol-producing tumour: the other adrenal gland is suppressed and needs time to recover.",
          points: [
            "Steroid tablets are tapered over months, sometimes a year or more.",
            "Carry a steroid card and follow sick-day rules for increasing the dose during illness.",
            "Never stop steroids suddenly.",
          ],
        },
        {
          id: "adrenocortical-carcinoma",
          question:
            "Adrenal cancer (adrenocortical carcinoma): is it curable? What is mitotane?",
          answer:
            "Adrenocortical carcinoma is rare and aggressive, but complete removal at an early stage can cure it.",
          points: [
            "Open surgery is usually preferred for suspected cancer, to avoid rupture; complete removal by an experienced surgeon is key.",
            "Mitotane, a tablet, is often given after surgery to lower recurrence, and for advanced disease.",
            "Close follow-up with scans is needed.",
          ],
        },
        {
          id: "large-tumour-robotic",
          question:
            "Can a large adrenal tumour be removed robotically?",
          answer:
            "Often yes: benign-looking tumours up to about 6–8 cm can be removed robotically or laparoscopically by experienced surgeons.",
          points: [
            "Suspected cancer, or invasion of nearby organs, usually needs open surgery.",
            "The decision depends on CT features, not size alone.",
          ],
        },
        {
          id: "cost-delhi",
          question:
            "What does robotic adrenalectomy cost in Delhi?",
          answer:
            "Robotic adrenalectomy at [hospital] costs about [₹ range] as a package.",
          points: [
            "Cost drivers: preparation before surgery (especially for pheochromocytoma), ICU stay, room category.",
            "Most health policies cover robotic surgery, some with a sub-limit.",
          ],
        },
      ],
    },
    {
      id: "life-after-treatment",
      title: "Life after treatment",
      questions: [
        {
          id: "one-gland-enough",
          question:
            "Is one adrenal gland enough for my body?",
          answer:
            "Yes: one healthy adrenal gland produces all the hormones your body needs.",
          points: [
            "Most patients need no hormone replacement.",
            "The exception is after a cortisol-producing tumour, until the other gland recovers.",
          ],
        },
        {
          id: "warning-symptoms",
          question:
            "Which symptoms after surgery should worry me: weakness, dizziness, low BP?",
          answer:
            "Severe weakness, dizziness, low BP, vomiting, abdominal pain or confusion may mean adrenal insufficiency: seek urgent care.",
          points: [
            "It is most likely after removal of a cortisol-producing tumour.",
            "Low BP or low sugar can occur in the first day after pheochromocytoma removal and is monitored in hospital.",
          ],
        },
        {
          id: "recurrence-and-follow-up",
          question:
            "Can the tumour come back? What follow-up do I need?",
          answer:
            "Benign adenomas rarely recur after complete removal; follow-up focuses on BP and hormones.",
          points: [
            "Pheochromocytoma: yearly metanephrine tests for at least 10 years, lifelong if a gene change is found.",
            "Adrenal cancer: scans every 3 months for the first 2 years, then less often.",
            "Conn's syndrome: BP and potassium checks.",
          ],
        },
      ],
    },
  ],
};
