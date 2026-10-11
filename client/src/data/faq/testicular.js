// Source: Dr. Sarbartha Kumar Pratihar, "Patient FAQ Question Bank" (2026-10-05)
// and "Patient FAQ Answer Outlines" (2026-10-08). Text is used as written; only
// em dashes were replaced (see docs/PATIENT-FAQ.md). Square brackets are
// placeholders for the doctor to fill.

export const testicularFaq = {
  slug: "testicular-cancer",
  title: "Testicular cancer",
  intro:
    "These are young men and their parents. Fertility, marriage and sex life matter to them as much as cure.",
  credentials: "[credentials]",
  reviewedOn: "[review date]",
  stages: [
    {
      id: "is-it-cancer",
      title: "Is it cancer? Symptoms and causes",
      questions: [
        {
          id: "painless-lump",
          starred: true,
          question:
            "I found a painless lump in my testicle: is it cancer?",
          answer:
            "A painless, firm lump within the testicle is the classic sign of testicular cancer and needs an ultrasound within days.",
          points: [
            "Many scrotal lumps are harmless, such as cysts or a hydrocele, but a lump in the testicle itself needs checking.",
            "Scrotal ultrasound is quick, painless and very accurate.",
            "Testicular cancer is highly curable, especially when found early.",
          ],
        },
        {
          id: "heaviness-or-ache",
          question:
            "Heaviness or a dull ache in the testicle: could it be cancer?",
          answer:
            "Usually not: heaviness more often comes from a varicocele, hydrocele or infection, though cancer can cause a dragging feeling.",
          points: [
            "See a doctor for a lump, a change in size or firmness, or symptoms lasting over 2 weeks.",
            "Sudden severe pain is an emergency (possible twisting, or torsion): go to hospital immediately.",
          ],
        },
        {
          id: "scrotal-swelling",
          question:
            "Swelling in the scrotum: is it a hydrocele, hernia, infection or cancer?",
          answer:
            "Many scrotal swellings are harmless, but only an examination and ultrasound can tell them apart.",
          points: [
            "Hydrocele: fluid around the testicle; soft and often painless.",
            "Hernia: comes and goes, often bigger on standing or coughing.",
            "Infection: painful and red, sometimes with fever.",
            "Cancer: a firm lump within the testicle; a hydrocele can sometimes hide a tumour, so ultrasound matters.",
          ],
        },
        {
          id: "self-examination",
          question:
            "How do I examine my testicles at home, and how often?",
          answer:
            "Check once a month, after a warm bath or shower when the scrotum is relaxed.",
          points: [
            "Hold each testicle between thumb and fingers and roll it gently, feeling for lumps or hardness.",
            "The soft tube at the back (epididymis) is normal: don't mistake it for a lump.",
            "One testicle being slightly larger or lower is normal.",
            "See a doctor for any new lump, swelling or change.",
          ],
        },
        {
          id: "who-gets-it",
          question:
            "Who gets testicular cancer? Is it common in young men?",
          answer:
            "Testicular cancer is uncommon overall, but it mainly affects young men aged about 15–40.",
          points: [
            "Risk factors: an undescended testicle, previous testicular cancer, a family history, some infertility conditions.",
            "Most young men with it are cured.",
          ],
        },
        {
          id: "undescended-testicle",
          question:
            "I had an undescended testicle as a child: am I at higher risk?",
          answer:
            "Yes: an undescended testicle raises the risk several-fold, even after corrective surgery.",
          points: [
            "Surgery in early childhood, ideally by 18 months, lowers the risk.",
            "Regular self-examination is especially important.",
            "The other testicle also carries a slightly higher risk.",
          ],
        },
        {
          id: "cycling-phones-myths",
          question:
            "Can cycling, tight underwear, a laptop or a phone in my pocket, or masturbation cause testicular cancer?",
          answer:
            "No: none of these causes testicular cancer.",
          points: [
            "There is no reliable evidence linking phones or laptops to testicular cancer.",
            "Masturbation and sexual activity have no link.",
            "The known risk factors are an undescended testicle, family history and previous testicular cancer.",
          ],
        },
        {
          id: "injury",
          question:
            "Can an injury to the testicle cause cancer?",
          answer:
            "No: injury does not cause testicular cancer, but it may prompt a check-up that finds an existing lump.",
          points: [
            "Swelling or pain after an injury that doesn't settle within a week or two needs an ultrasound.",
          ],
        },
        {
          id: "brother-has-it",
          question:
            "My brother has testicular cancer: should I be checked?",
          answer:
            "Yes: a brother with testicular cancer raises your risk several times, so regular self-examination and a doctor's check are sensible.",
          points: [
            "Routine scans are not needed without symptoms.",
            "See a doctor promptly about any lump.",
          ],
        },
      ],
    },
    {
      id: "tests-and-reports",
      title: "Tests and reports",
      questions: [
        {
          id: "tumour-markers",
          question:
            "What do the AFP, beta-HCG and LDH blood tests mean?",
          answer:
            "These are tumour markers: substances some testicular cancers release into the blood.",
          points: [
            "They help with diagnosis, staging and outlook, and are measured before and after surgery.",
            "A raised AFP points to non-seminoma elements; pure seminoma does not raise AFP.",
            "Normal markers don't rule out cancer; falling markers after surgery show response.",
            "They are rechecked through follow-up to catch any relapse early.",
          ],
        },
        {
          id: "no-biopsy-first",
          question:
            "Why is the testicle removed without a biopsy first?",
          answer:
            "Cutting into a testicular tumour through the scrotum risks spreading cancer cells, and ultrasound plus markers are accurate enough to proceed.",
          points: [
            "Removing the whole testicle through the groin (radical inguinal orchiectomy) gives both the diagnosis and the treatment.",
            "In selected cases (a small tumour, a single testicle, or tumours on both sides), partial removal may be considered.",
          ],
        },
        {
          id: "seminoma-or-non-seminoma",
          question:
            "Seminoma or non-seminoma: what is the difference?",
          answer:
            "They are the two main types of testicular germ cell cancer; both are highly curable but are treated differently.",
          points: [
            "Seminoma: grows more slowly and is very sensitive to chemotherapy and radiation; often affects men in their 30s.",
            "Non-seminoma: often affects younger men, can grow faster, and may raise AFP and HCG.",
            "Mixed tumours are treated as non-seminoma.",
          ],
        },
        {
          id: "spread-and-stage",
          question:
            "Has it spread to the lymph nodes in my abdomen? What stage am I?",
          answer:
            "Testicular cancer usually spreads first to lymph nodes at the back of the abdomen; a CT scan checks this.",
          points: [
            "Stage I: confined to the testicle. Stage II: abdominal lymph nodes. Stage III: beyond, such as the lungs.",
            "Tumour markers after surgery also shape the stage and risk group.",
            "Even stage II and III are usually curable.",
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
          question:
            "Is testicular cancer curable, even if it has spread?",
          answer:
            "Yes: testicular cancer is among the most curable cancers; more than 95% of men are cured overall, and most are cured even when it has spread.",
          points: [
            "Stage I: cure rates close to 100%.",
            "Spread to nodes or lungs: chemotherapy cures most patients.",
            "Treatment at an experienced centre improves results.",
          ],
        },
        {
          id: "groin-not-scrotum",
          question:
            "Why is the testicle removed through a cut in the groin and not the scrotum?",
          answer:
            "The groin approach removes the testicle with its cord and blood supply intact, avoiding spillage of cancer cells into the scrotum.",
          points: [
            "A scrotal cut could change the lymph drainage and raise the risk of local recurrence.",
            "The operation takes about an hour; many men go home the same or next day.",
          ],
        },
        {
          id: "sperm-banking",
          starred: true,
          question:
            "Should I freeze my sperm before surgery or chemotherapy? Where can I do sperm banking?",
          answer:
            "Yes: sperm banking is strongly advised before chemotherapy or radiation, and ideally before surgery, if you may want children.",
          points: [
            "Chemotherapy and radiation can reduce or stop sperm production, sometimes permanently.",
            "It needs one or more semen samples at a fertility centre or sperm bank and can be arranged within days.",
            "[Fertility centres you work with in Delhi.]",
          ],
        },
        {
          id: "chemo-after-surgery",
          question:
            "Do I need chemotherapy after surgery? How many cycles? Will I lose my hair?",
          answer:
            "It depends on stage and type: many stage I patients need none, while those with spread usually need 3–4 cycles.",
          points: [
            "Stage I: surveillance, or one cycle of chemotherapy to lower the relapse risk in selected men.",
            "Spread: 3 or 4 cycles of BEP, each lasting 3 weeks.",
            "Hair loss is common but temporary.",
            "Other effects: tiredness, nausea, infection risk, tingling and ringing in the ears.",
          ],
        },
        {
          id: "surveillance",
          question:
            "Is \"wait and watch\" (surveillance) safe after surgery?",
          answer:
            "Yes: for most stage I patients, surveillance with regular markers and scans is safe, because any relapse is almost always cured.",
          points: [
            "Roughly 15–30% of stage I patients relapse on surveillance, mostly in the first 2 years.",
            "It needs commitment to regular check-ups.",
            "It spares most men chemotherapy they don't need.",
          ],
        },
        {
          id: "rplnd",
          question:
            "What is RPLND? Can it be done robotically?",
          answer:
            "RPLND (retroperitoneal lymph node dissection) removes the lymph nodes at the back of the abdomen where testicular cancer spreads.",
          points: [
            "Used for masses left after chemotherapy, and in selected early-stage patients.",
            "Robotic RPLND in experienced hands offers a shorter stay and faster recovery than open surgery.",
            "[Your robotic RPLND experience.]",
          ],
        },
        {
          id: "rplnd-ejaculation-fertility",
          question:
            "Will RPLND affect ejaculation or fertility?",
          answer:
            "Nerve-sparing RPLND preserves normal ejaculation in most men.",
          points: [
            "Damage to these nerves can cause dry ejaculation, with semen flowing back into the bladder.",
            "Sperm banking beforehand is sensible.",
            "Erections are not affected by RPLND.",
          ],
        },
        {
          id: "mass-after-chemo",
          question:
            "A mass is left after chemotherapy: does it need surgery?",
          answer:
            "Often yes: for non-seminoma, a leftover mass over 1 cm is removed, as it may contain living cancer or teratoma.",
          points: [
            "For seminoma, leftover masses are usually watched, or assessed with PET-CT if over 3 cm.",
            "Surgery after chemotherapy is complex and best done at experienced centres.",
          ],
        },
        {
          id: "cost-delhi",
          question:
            "What does treatment cost in Delhi? Does insurance cover it?",
          answer:
            "At [hospital], orchiectomy costs about [₹ range], chemotherapy about [₹ range per cycle], and robotic RPLND about [₹ range].",
          points: [
            "Most health policies cover cancer surgery and chemotherapy.",
            "Sperm banking may not be covered: check your policy.",
          ],
        },
      ],
    },
    {
      id: "life-after-treatment",
      title: "Life after treatment",
      questions: [
        {
          id: "one-testicle-sex-testosterone",
          starred: true,
          question:
            "Will losing one testicle affect my sex life, erections or testosterone?",
          answer:
            "No: one healthy testicle produces enough testosterone and sperm for normal erections, sex life and fertility.",
          points: [
            "Most men notice no change in desire or performance.",
            "A small number develop low testosterone, especially after chemotherapy; it is checked during follow-up.",
            "Anxiety can affect sex; talking to your doctor helps.",
          ],
        },
        {
          id: "father-children",
          starred: true,
          question:
            "Can I father children with one testicle? What about after chemotherapy?",
          answer:
            "Yes: most men father children naturally with one testicle.",
          points: [
            "Chemotherapy lowers sperm counts temporarily; many men recover within 2–3 years.",
            "Wait at least 6–12 months after chemotherapy before trying to conceive.",
            "Banked sperm is a backup if counts don't recover.",
          ],
        },
        {
          id: "marriage",
          question:
            "Can I get married? Should I tell my future spouse?",
          answer:
            "Yes: testicular cancer survivors marry and have families like other men.",
          points: [
            "Honesty with a future spouse builds trust, and the outlook for most survivors is excellent.",
            "A semen test before marriage can reassure you both about fertility.",
            "Counselling helps if the conversation worries you.",
          ],
        },
        {
          id: "prosthetic-testicle",
          question:
            "Can I get an artificial (prosthetic) testicle? Is it available in India?",
          answer:
            "Yes: silicone testicular prostheses are available in India and can be placed during orchiectomy or later.",
          points: [
            "They restore the normal look and feel of the scrotum.",
            "Risks are small: infection, displacement or discomfort.",
            "[Your cost and availability.]",
          ],
        },
        {
          id: "testosterone-injections",
          question:
            "Will I need testosterone injections?",
          answer:
            "Usually not: one normal testicle makes enough testosterone.",
          points: [
            "Replacement is needed only if blood levels are low with symptoms (tiredness, low libido, erection problems), or if both testicles are removed.",
            "Testosterone is checked during follow-up.",
          ],
        },
        {
          id: "other-testicle",
          question:
            "Can cancer appear in the other testicle?",
          answer:
            "It's uncommon: only a few percent of men develop cancer in the other testicle.",
          points: [
            "Monthly self-examination of the remaining testicle is important.",
            "Report any lump or change promptly.",
          ],
        },
        {
          id: "follow-up-and-scans",
          question:
            "How long is follow-up, and how many scans will I need?",
          answer:
            "Follow-up usually lasts 5 years, with most visits in the first 2 years, when relapse is most likely.",
          points: [
            "Visits include examination, tumour markers and CT or MRI at set intervals, by stage and type.",
            "Low-dose CT or MRI protocols reduce radiation exposure.",
            "After chemotherapy, long-term checks include BP, cholesterol and testosterone.",
          ],
        },
        {
          id: "return-to-activities",
          question:
            "When can I return to college, work, the gym or sports?",
          answer:
            "After orchiectomy alone, most men return to college or desk work within 1–2 weeks and to the gym or sports after about 4–6 weeks.",
          points: [
            "After chemotherapy, energy returns gradually over weeks to months.",
            "After robotic RPLND, light activity from 2 weeks and full activity by 4–6 weeks.",
            "An athletic cup protects the remaining testicle in contact sports.",
          ],
        },
      ],
    },
  ],
};
