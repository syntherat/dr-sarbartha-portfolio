// Source: Dr. Sarbartha Kumar Pratihar, "Patient FAQ Question Bank" (2026-10-05)
// and "Patient FAQ Answer Outlines" (2026-10-08). Text is used as written; only
// em dashes were replaced (see docs/PATIENT-FAQ.md). Square brackets are
// placeholders for the doctor to fill.

export const retroperitonealFaq = {
  slug: "retroperitoneal-cancer",
  title: "Retroperitoneal tumours and sarcoma",
  intro:
    "Patients rarely know the word \"retroperitoneum\". They search for a big lump in the stomach and for who can remove it safely.",
  reviewedOn: "[review date]",
  stages: [
    {
      id: "is-it-cancer",
      title: "Is it cancer? Symptoms and causes",
      questions: [
        {
          id: "what-is-it",
          starred: true,
          question:
            "What is a retroperitoneal tumour, and where is the retroperitoneum?",
          answer:
            "The retroperitoneum is the space at the back of the abdomen, behind the intestines, where the kidneys, adrenals, major blood vessels and lymph nodes lie; a tumour growing there is a retroperitoneal tumour.",
          points: [
            "Many are soft-tissue sarcomas (cancers of fat, muscle or connective tissue), especially liposarcoma and leiomyosarcoma.",
            "Others include lymphoma, nerve tumours and germ cell tumours.",
            "They are rare and best managed by specialised teams.",
          ],
        },
        {
          id: "large-lump-in-abdomen",
          question:
            "A large lump was found deep in my abdomen: is it cancer? Is it stomach cancer?",
          answer:
            "A large mass behind the intestines is not stomach cancer: it arises from the tissues at the back of the abdomen and may be benign or malignant.",
          points: [
            "A contrast CT or MRI shows where it comes from and what it contains.",
            "A core needle biopsy usually confirms the type before treatment.",
            "Lymphoma, sarcoma and benign tumours are treated very differently, so diagnosis comes first.",
          ],
        },
        {
          id: "grew-without-symptoms",
          question:
            "Why did it grow so big without any symptoms?",
          answer:
            "The retroperitoneum is a large, flexible space, so tumours can grow big before pressing on anything.",
          points: [
            "Symptoms appear late: abdominal fullness, feeling full quickly, back pain, leg swelling or numbness.",
            "Many are found by chance on scans done for other reasons.",
            "Size alone doesn't mean it can't be removed.",
          ],
        },
        {
          id: "types",
          question:
            "What types are there: liposarcoma, leiomyosarcoma, nerve tumours, lymphoma? Which ones are harmless?",
          answer:
            "The commonest cancers here are liposarcoma and leiomyosarcoma; benign tumours include schwannomas and other nerve-sheath tumours.",
          points: [
            "Lymphoma is common in this area and is treated with chemotherapy, not surgery.",
            "Paraganglioma is a hormone-producing nerve tumour that needs special preparation before surgery.",
            "Retroperitoneal fibrosis is not cancer but can look similar on scans.",
          ],
        },
        {
          id: "causes-and-hereditary",
          question:
            "What causes it? Is it hereditary?",
          answer:
            "Most cases have no known cause.",
          points: [
            "Previous radiation to the abdomen slightly raises sarcoma risk.",
            "Rare inherited syndromes, such as Li-Fraumeni and NF1, increase risk.",
            "It is not caused by injury, diet or lifestyle.",
          ],
        },
      ],
    },
    {
      id: "tests-and-reports",
      title: "Tests and reports",
      questions: [
        {
          id: "needle-biopsy",
          question:
            "Is a needle biopsy needed? Can it spread the tumour?",
          answer:
            "Yes: an image-guided core needle biopsy is safe and recommended before treatment; the risk of spreading the tumour is very low.",
          points: [
            "It confirms the type and grade, which decides whether surgery, chemotherapy or radiation comes first.",
            "Open or keyhole biopsy should be avoided, as it can spill tumour cells.",
            "Biopsy may be skipped when the scan is typical of a low-grade liposarcoma and surgery is planned anyway.",
          ],
        },
        {
          id: "scans",
          question:
            "Which scans are needed: CT, MRI or PET?",
          answer:
            "Contrast CT of the chest, abdomen and pelvis is the main test; MRI helps in specific areas, and PET-CT is used selectively.",
          points: [
            "CT shows size, fat content, involvement of organs and vessels, and any lung spread.",
            "MRI helps assess nerves, the spine and the pelvis.",
            "PET-CT is useful for lymphoma, high-grade sarcoma and some other types.",
          ],
        },
        {
          id: "liposarcoma-report-terms",
          question:
            "What do \"well-differentiated\" and \"dedifferentiated liposarcoma\" mean on my report?",
          answer:
            "Well-differentiated liposarcoma is low grade: it grows slowly and rarely spreads but tends to come back locally. Dedifferentiated liposarcoma is higher grade, grows faster and can spread.",
          points: [
            "Both are treated mainly by complete surgical removal.",
            "Dedifferentiated tumours need closer follow-up and sometimes chemotherapy.",
            "Both types can exist within the same tumour.",
          ],
        },
      ],
    },
    {
      id: "treatment-choices",
      title: "Treatment choices and surgery",
      questions: [
        {
          id: "complete-removal",
          starred: true,
          question:
            "Can the tumour be removed completely?",
          answer:
            "Often yes: the aim is complete removal in one piece with a margin of healthy tissue, which gives the best chance of cure.",
          points: [
            "The first operation is the best chance; recurrent tumours are harder to remove.",
            "Planning uses detailed CT or MRI and a multidisciplinary team.",
          ],
        },
        {
          id: "other-organs-removed",
          question:
            "Will my kidney, colon or other organs need to be removed with it? Why?",
          answer:
            "Often yes: removing attached organs, such as the kidney, colon or part of a muscle, together with the tumour lowers the chance of it coming back.",
          points: [
            "A kidney is removed only after confirming the other kidney works well.",
            "Organs are removed only when the tumour is attached or clear margins require it.",
          ],
        },
        {
          id: "large-tumour-blood-vessels",
          question:
            "The tumour weighs several kilos and surrounds major blood vessels: is surgery still possible?",
          answer:
            "Often yes: very large tumours are removed at specialised centres, and blood vessels can be repaired or replaced.",
          points: [
            "Vascular surgeons may join the team to rebuild vessels.",
            "Imaging before surgery shows what can be removed safely.",
          ],
        },
        {
          id: "high-volume-centre",
          starred: true,
          question:
            "Why should this surgery be done at a specialised, high-volume centre?",
          answer:
            "Retroperitoneal sarcoma outcomes are better at centres that treat many cases, with lower recurrence and better survival.",
          points: [
            "These centres have experienced surgeons, pathologists, radiologists and anaesthetists.",
            "The first operation decides much of the long-term result.",
            "Ask how many retroperitoneal tumours the team treats each year.",
          ],
        },
        {
          id: "robotic-or-open",
          question:
            "Can it be removed robotically, or is open surgery needed?",
          answer:
            "Most large retroperitoneal sarcomas need open surgery for safe, complete removal; robotic surgery suits selected smaller or benign tumours.",
          points: [
            "Robotic removal is used for some schwannomas, paragangliomas and small tumours.",
            "Complete cancer removal is never traded for a smaller scar.",
          ],
        },
        {
          id: "radiotherapy-or-chemotherapy",
          question:
            "Do I need radiotherapy or chemotherapy before or after surgery?",
          answer:
            "Not routinely: surgery is the main treatment; radiotherapy and chemotherapy are used in selected cases.",
          points: [
            "Radiotherapy before surgery may help some liposarcomas.",
            "Chemotherapy may be used for high-grade tumours, leiomyosarcoma or spread.",
            "A sarcoma tumour board decides.",
          ],
        },
        {
          id: "lymphoma-no-surgery",
          question:
            "If it is lymphoma, why is surgery not the treatment?",
          answer:
            "Lymphoma responds very well to chemotherapy and sometimes radiation, so major surgery is unnecessary and would delay treatment.",
          points: [
            "A biopsy diagnosis lets treatment start quickly.",
            "Many lymphomas are highly curable.",
          ],
        },
      ],
    },
    {
      id: "life-after-treatment",
      title: "Life after treatment",
      questions: [
        {
          id: "recurrence-and-scans",
          starred: true,
          question:
            "Can a retroperitoneal sarcoma come back? How often will I need scans?",
          answer:
            "Yes: local recurrence is common, especially with liposarcoma, so long-term scans are needed.",
          points: [
            "CT every 3–6 months for the first few years, then every 6–12 months, often for 10 years or more.",
            "Recurrences found early can often be removed again.",
            "Report new abdominal fullness, pain or swelling.",
          ],
        },
        {
          id: "recovery",
          question:
            "How long is recovery after major retroperitoneal surgery?",
          answer:
            "Hospital stay is usually about 7–10 days, with full recovery over 6–12 weeks depending on which organs were removed.",
          points: [
            "Early walking, breathing exercises and good nutrition speed recovery.",
            "Most people return to work after about 6–8 weeks.",
          ],
        },
        {
          id: "leg-swelling-numbness",
          question:
            "Leg swelling or numbness after surgery: is it normal?",
          answer:
            "Some leg swelling, or numbness in the thigh, can follow surgery near nerves, vessels or lymph nodes; it often improves over months.",
          points: [
            "Compression stockings and leg elevation help swelling.",
            "Sudden painful swelling of one leg needs urgent review for a possible clot.",
          ],
        },
        {
          id: "survival-rate",
          question:
            "What is the survival rate?",
          answer:
            "Survival depends on tumour type, grade and how completely it is removed; low-grade tumours removed completely have a good long-term outlook.",
          points: [
            "Roughly 6 in 10 patients are alive at 5 years in specialist-centre series (approx.).",
            "High-grade or incompletely removed tumours carry a poorer outlook.",
            "For liposarcoma, local recurrence rather than distant spread is the main threat.",
          ],
        },
      ],
    },
  ],
};
