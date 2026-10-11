// Source: Dr. Sarbartha Kumar Pratihar, "Patient FAQ Question Bank" (2026-10-05)
// and "Patient FAQ Answer Outlines" (2026-10-08). Text is used as written; only
// em dashes were replaced (see docs/PATIENT-FAQ.md). Square brackets are
// placeholders for the doctor to fill.

export const penileFaq = {
  slug: "penile-cancer",
  title: "Penile cancer",
  intro:
    "Embarrassment makes men search privately before they see a doctor. Confidentiality, contagion and saving the penis decide whether they come.",
  credentials: "[credentials]",
  reviewedOn: "[review date]",
  stages: [
    {
      id: "is-it-cancer",
      title: "Is it cancer? Symptoms and causes",
      questions: [
        {
          id: "sore-not-healing",
          starred: true,
          question:
            "I have a sore, wart or ulcer on my penis that is not healing: could it be cancer?",
          answer:
            "It could be: any sore, lump or patch on the penis that hasn't healed within about 4 weeks needs a doctor's examination and often a biopsy.",
          points: [
            "Most are infections or skin conditions, but early cancer can look the same.",
            "Penile cancer usually starts on the head of the penis or the foreskin.",
            "Early diagnosis often allows the penis to be preserved.",
            "Don't self-treat with creams for months.",
          ],
        },
        {
          id: "std-fungal-or-cancer",
          question:
            "Is it an STD, a fungal infection or cancer? How can I tell?",
          answer:
            "You can't tell reliably by looking: a doctor's examination, and a biopsy if needed, give the answer.",
          points: [
            "Infections usually respond to treatment within 2–4 weeks; cancer doesn't.",
            "Warning signs: a hard lump, a non-healing ulcer, bleeding, foul discharge under the foreskin, a lump in the groin.",
            "A small biopsy under local anaesthesia settles the question.",
          ],
        },
        {
          id: "red-or-white-patch",
          question:
            "A red or white patch on the head of the penis: is it precancer? Can creams treat it?",
          answer:
            "Some persistent red, velvety or white patches are precancer (penile intraepithelial neoplasia), which can turn into cancer if untreated.",
          points: [
            "A biopsy confirms the diagnosis.",
            "Precancer can often be treated with creams (imiquimod, 5-fluorouracil), laser, or minor surgery such as glans resurfacing.",
            "Circumcision is often part of treatment.",
            "Regular follow-up is needed because it can come back.",
          ],
        },
        {
          id: "hpv-and-vaccine",
          question:
            "Does HPV cause penile cancer? Should boys get the HPV vaccine?",
          answer:
            "Yes: HPV (human papillomavirus) is linked to roughly half of penile cancers.",
          points: [
            "HPV is a common sexually transmitted virus; most infections clear on their own.",
            "HPV vaccination protects against the high-risk types and works best before sexual activity, at 9–14 years.",
            "Vaccinating boys also protects their future partners from cervical cancer.",
          ],
        },
        {
          id: "phimosis-hygiene-circumcision",
          question:
            "Can a tight foreskin (phimosis) or poor hygiene cause penile cancer? Does circumcision prevent it?",
          answer:
            "Yes: phimosis and poor hygiene under the foreskin are major risk factors, and circumcision in childhood lowers the risk considerably.",
          points: [
            "Phimosis traps secretions (smegma) and causes long-term inflammation.",
            "Adult circumcision for phimosis is a simple procedure that reduces risk.",
            "Daily washing under the foreskin is the simplest prevention.",
          ],
        },
        {
          id: "tobacco-and-smoking",
          question:
            "Does tobacco or smoking increase the risk?",
          answer:
            "Yes: smoking and chewing tobacco both increase the risk of penile cancer.",
          points: [
            "The risk falls after stopping.",
            "Other risks: phimosis, HPV, lichen sclerosus (white scarring of the foreskin or glans), age over 50.",
          ],
        },
        {
          id: "is-it-contagious",
          starred: true,
          question:
            "Is penile cancer contagious? Can my wife or partner catch it?",
          answer:
            "No: cancer itself cannot pass to a partner.",
          points: [
            "HPV, which contributes to some penile cancers, is sexually transmitted; partners may share it, so women should keep up regular cervical screening.",
            "Condoms reduce HPV transmission.",
            "Close contact and sharing towels, food or a bed carry no risk.",
          ],
        },
        {
          id: "confidentiality",
          question:
            "I'm embarrassed to see a doctor: will my problem be kept confidential?",
          answer:
            "Yes: your consultation, examination and reports are confidential, and urologists see these problems regularly.",
          points: [
            "Delay is the biggest danger: early cancer can often be treated while preserving the penis.",
            "You can ask for a chaperone during the examination.",
            "[Your clinic's privacy practices: private consultation, discreet reports and billing.]",
          ],
        },
      ],
    },
    {
      id: "tests-and-reports",
      title: "Tests and reports",
      questions: [
        {
          id: "biopsy",
          question:
            "Why is a biopsy needed? Is it painful?",
          answer:
            "A biopsy confirms whether it is cancer and shows its grade, which decides the treatment.",
          points: [
            "It is done under local anaesthesia in a few minutes, with minimal discomfort.",
            "Results usually take about a week.",
            "Sometimes a small lesion is removed completely, for diagnosis and treatment at once.",
          ],
        },
        {
          id: "groin-swelling",
          question:
            "I have a swelling in my groin: has the cancer spread?",
          answer:
            "Not always: groin swelling can come from infection of the penile sore, but it must be checked for cancer spread.",
          points: [
            "Examination, ultrasound and a needle test (FNAC) of the node clarify it.",
            "If cancer has reached the groin nodes, removing them can still cure many patients.",
            "Don't delay assessment with long antibiotic courses.",
          ],
        },
        {
          id: "stage-and-cure",
          question:
            "What stage is my cancer, and is it curable?",
          answer:
            "Stage depends on how deep the tumour goes and whether the groin or pelvic lymph nodes are involved; early-stage penile cancer is highly curable.",
          points: [
            "No node spread: most patients are cured with surgery.",
            "Groin node spread: cure is still possible with node surgery, sometimes with chemotherapy or radiation.",
            "Spread to pelvic nodes or beyond: harder to cure, but treatment can control it.",
            "Staging uses examination, MRI of the penis, and CT or PET-CT for the nodes.",
          ],
        },
      ],
    },
    {
      id: "treatment-choices",
      title: "Treatment choices and surgery",
      questions: [
        {
          id: "whole-penis-removed",
          starred: true,
          question:
            "Will my whole penis have to be removed?",
          answer:
            "Usually not: most cancers found early can be treated while keeping much or all of the penis.",
          points: [
            "Options range from laser or local excision to removing the head (glans) with reconstruction.",
            "Partial removal is needed for deeper tumours; total removal only for large, advanced tumours.",
            "Margins of a few millimetres are now considered safe, preserving more length.",
          ],
        },
        {
          id: "penis-preserving-surgery",
          question:
            "Can the penis be saved? What is penis-preserving surgery?",
          answer:
            "Often yes: penis-preserving surgery removes the cancer with a small margin while keeping as much length and function as possible.",
          points: [
            "Techniques: circumcision, wide local excision, glans resurfacing, glansectomy with skin-graft reconstruction, laser.",
            "Results: good cancer control with better urination, sexual function and self-image.",
            "Local recurrence is a little more likely but treatable, so close follow-up is essential.",
          ],
        },
        {
          id: "pass-urine-standing",
          question:
            "Will I be able to pass urine standing after surgery?",
          answer:
            "After penis-preserving surgery or partial penectomy, most men can still pass urine standing up.",
          points: [
            "If the remaining length is short, sitting may be easier.",
            "Spraying may occur at first and usually settles.",
          ],
        },
        {
          id: "urine-after-total-penectomy",
          question:
            "If the whole penis is removed, how will I pass urine?",
          answer:
            "A new urine opening is made in the area between the scrotum and anus (perineal urethrostomy), and urine is passed sitting down.",
          points: [
            "Bladder control is unaffected because the bladder and its sphincter remain.",
            "Penile reconstruction can be considered later in selected patients.",
          ],
        },
        {
          id: "groin-node-surgery",
          question:
            "Why is groin lymph node surgery needed even when there is no swelling?",
          answer:
            "Penile cancer can spread to the groin nodes before they feel enlarged, and treating this early improves the chance of cure.",
          points: [
            "For intermediate- or high-risk tumours, the groin nodes are checked surgically even if they feel normal.",
            "Options: removing the groin nodes (inguinal lymphadenectomy) or dynamic sentinel node biopsy where available.",
            "Low-risk tumours may need only close surveillance.",
          ],
        },
        {
          id: "keyhole-groin-node-surgery",
          question:
            "Can groin node surgery be done by keyhole (endoscopic or robotic) to avoid wound problems?",
          answer:
            "Yes: video-endoscopic or robotic groin node removal (VEIL or RAVEIL) uses small cuts away from the groin crease, reducing wound breakdown and infection.",
          points: [
            "Cancer clearance is similar to open surgery in experienced hands.",
            "Leg swelling can still occur, but often less severely.",
            "[Your experience with VEIL or RAVEIL.]",
          ],
        },
        {
          id: "chemo-or-radiotherapy",
          question:
            "Will I need chemotherapy or radiotherapy?",
          answer:
            "Not for early cancer; chemotherapy is used when lymph nodes are involved, before or after surgery.",
          points: [
            "Large or fixed groin nodes: chemotherapy first, then surgery.",
            "Radiotherapy is used in selected cases, such as after node surgery or for small tumours treated without surgery.",
            "Spread beyond the nodes: chemotherapy or newer drugs to control the disease.",
          ],
        },
        {
          id: "cost-delhi",
          question:
            "What does penile cancer surgery cost in Delhi? Does insurance cover it?",
          answer:
            "At [hospital], penis-preserving surgery costs about [₹ range]; groin node surgery adds about [₹ range].",
          points: [
            "Cost drivers: extent of surgery, reconstruction, node surgery, length of stay.",
            "Most health policies cover cancer surgery; check waiting periods and room-rent limits.",
          ],
        },
      ],
    },
    {
      id: "life-after-treatment",
      title: "Life after treatment",
      questions: [
        {
          id: "sex-after-surgery",
          starred: true,
          question:
            "Can I have sex after penile cancer surgery?",
          answer:
            "Many men continue an active sex life, especially after penis-preserving surgery.",
          points: [
            "After glans surgery, sensation changes, but orgasm and ejaculation usually remain.",
            "After partial penectomy, many men still have satisfactory intercourse if enough length remains.",
            "Counselling and involving the partner help rebuild confidence.",
          ],
        },
        {
          id: "father-children",
          question:
            "Can I father children after treatment?",
          answer:
            "Usually yes: penile surgery does not affect the testicles or sperm production.",
          points: [
            "Ejaculation is preserved after most penis-preserving and partial operations.",
            "After total penectomy, sperm can be collected for assisted conception.",
            "Chemotherapy may affect fertility, so consider sperm banking before it starts.",
          ],
        },
        {
          id: "reconstruction",
          question:
            "Is reconstruction of the penis possible?",
          answer:
            "Yes: reconstruction ranges from skin grafts that rebuild the glans, to lengthening procedures, to full phalloplasty in selected patients.",
          points: [
            "Glans reconstruction is usually done at the same operation; larger reconstructions come later.",
            "It needs plastic and reconstructive expertise.",
          ],
        },
        {
          id: "leg-swelling",
          question:
            "Leg swelling after groin surgery: how is it managed?",
          answer:
            "Leg swelling (lymphoedema) can follow groin node removal; it is managed with compression stockings, leg elevation, exercise and skin care.",
          points: [
            "Early management prevents it worsening.",
            "Report redness, warmth or fever: possible skin infection (cellulitis).",
            "Keyhole techniques may reduce the risk.",
          ],
        },
        {
          id: "talking-to-wife",
          question:
            "How do I talk to my wife about this? Is counselling available?",
          answer:
            "Talking openly, with your doctor's help if needed, usually reduces fear on both sides.",
          points: [
            "Bring your partner to a consultation so questions are answered together.",
            "Counselling helps with anxiety, body image and intimacy. [Availability at your hospital.]",
            "Reassure her that the cancer is not contagious.",
          ],
        },
        {
          id: "recurrence-and-check-ups",
          question:
            "Can it come back? How often do I need check-ups?",
          answer:
            "Penile cancer can recur, mostly within the first 2 years, so regular check-ups matter.",
          points: [
            "Typically every 3 months for 2 years, then every 6 months up to 5 years.",
            "Check-ups include examination of the penis and groins, with ultrasound or scans as needed.",
            "Check yourself and report any new lump or sore early.",
          ],
        },
      ],
    },
  ],
};
