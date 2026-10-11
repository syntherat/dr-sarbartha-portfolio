// Source: Dr. Sarbartha Kumar Pratihar, "Patient FAQ Question Bank" (2026-10-05)
// and "Patient FAQ Answer Outlines" (2026-10-08). Text is used as written; only
// em dashes were replaced (see docs/PATIENT-FAQ.md). Square brackets are
// placeholders for the doctor to fill.

export const commonFaq = {
  slug: "common-questions",
  title: "Questions common to all urological cancers",
  intro:
    "These cut across every cancer.",
  credentials: "[credentials]",
  reviewedOn: "[review date]",
  stages: [
    {
      id: "choosing-care",
      title: "Choosing care and getting started",
      questions: [
        {
          id: "what-is-a-uro-oncologist",
          starred: true,
          question:
            "What is a uro-oncologist? Should I see a urologist, an oncologist or a uro-oncologist?",
          answer:
            "A uro-oncologist is a urologist who specialises in cancers of the kidney, bladder, ureter, prostate, testis, penis and adrenal glands.",
          points: [
            "Urologists treat all urinary and male reproductive problems; uro-oncologists focus on cancer surgery and cancer decisions.",
            "Medical and radiation oncologists give chemotherapy, immunotherapy and radiation.",
            "Most urological cancers are best managed by a team that includes all of them, plus a radiologist and pathologist.",
          ],
        },
        {
          id: "tumour-board",
          question:
            "Who decides my treatment: the surgeon, medical oncologist or radiation oncologist? What is a tumour board?",
          answer:
            "Treatment is best decided at a tumour board: a meeting where specialists review your scans, pathology and options together.",
          points: [
            "Your treating doctor then explains the plan and the alternatives.",
            "You make the final choice, with your family.",
          ],
        },
        {
          id: "second-opinion",
          starred: true,
          question:
            "Is it okay to take a second opinion? Will my doctor mind?",
          answer:
            "Yes: second opinions are normal, and good doctors welcome them, especially before major cancer decisions.",
          points: [
            "A second opinion can confirm the diagnosis, review the pathology or suggest other options.",
            "Most urological cancers allow a few weeks for this without harm.",
            "[How patients can book a second opinion with you, including online.]",
          ],
        },
        {
          id: "reports-to-bring",
          question:
            "What reports should I bring to my first consultation? Why do you need my biopsy slides and blocks?",
          answer:
            "Bring all reports, scan images (CD or online link), biopsy reports, blood tests, discharge summaries and a list of current medicines.",
          points: [
            "Slides and blocks let a specialist pathologist re-check the diagnosis, which sometimes changes the grade or type.",
            "Bring details of any previous treatment and your family history.",
            "A relative who takes notes is helpful.",
          ],
        },
        {
          id: "how-soon-to-start",
          question:
            "How soon should treatment start? Is a delay of a few weeks dangerous?",
          answer:
            "For most urological cancers, a few weeks for tests, second opinions and arranging finances is safe.",
          points: [
            "Some situations need faster action: testicular cancer, high-grade bladder cancer, bleeding, a blocked kidney or severe pain.",
            "Delays of several months can allow growth; agree a timeline with your doctor.",
          ],
        },
        {
          id: "prepare-for-surgery",
          question:
            "How should I prepare for surgery: walking, breathing exercises, sugar control, stopping blood thinners?",
          answer:
            "Preparing for 2–4 weeks before surgery (prehabilitation) speeds recovery.",
          points: [
            "Walk 30 minutes a day and practise deep breathing or spirometer exercises.",
            "Stop smoking and alcohol; control blood sugar and BP.",
            "Eat well, with enough protein.",
            "Stop blood thinners only on your doctor's instructions; some need a bridging plan.",
          ],
        },
      ],
    },
    {
      id: "family-and-emotional",
      title: "Family and emotional concerns",
      questions: [
        {
          id: "tell-parent-about-cancer",
          starred: true,
          question:
            "Should we tell my father or mother that they have cancer?",
          answer:
            "In most cases, yes: patients usually cope better and make better decisions when told honestly and gently, with the family beside them.",
          points: [
            "Many families fear the news will break the patient, yet most patients want to know.",
            "The doctor can help share the news at the right pace and with hope.",
            "Patients need to understand their illness to consent to treatment.",
          ],
        },
        {
          id: "support-family-member",
          question:
            "How can I support a family member through cancer treatment?",
          answer:
            "Be present, listen, and help with practical tasks: appointments, medicines, food and paperwork.",
          points: [
            "Attend consultations and keep a file of all reports.",
            "Encourage walking, good nutrition and following instructions after surgery.",
            "Look after yourself too; caregiver burnout is common.",
          ],
        },
        {
          id: "counselling",
          question:
            "I feel scared and anxious: is counselling available?",
          answer:
            "Yes: fear and anxiety are normal after a cancer diagnosis, and talking to a counsellor or psycho-oncologist helps. [Availability at your hospital.]",
          points: [
            "Support groups connect you with people who have been through the same.",
            "Tell your doctor about sleep problems, low mood or panic.",
          ],
        },
        {
          id: "family-stay-in-hospital",
          question:
            "Can a family member stay with the patient in hospital?",
          answer:
            "Usually one attendant can stay with the patient in the room or ward; ICU visiting is limited. [Your hospital's policy.]",
          points: [
            "Attendant passes and visiting hours vary by hospital.",
            "The attendant should be well, without a cold or infection.",
          ],
        },
      ],
    },
    {
      id: "myths",
      title: "Myths",
      questions: [
        {
          id: "biopsy-or-surgery-spread",
          starred: true,
          question:
            "Will a biopsy or surgery make the cancer spread?",
          answer:
            "No: this is a common myth; a correctly done biopsy or operation does not make cancer spread.",
          points: [
            "A biopsy is needed to confirm cancer and choose the right treatment.",
            "The real danger is delay: untreated cancer grows and spreads on its own.",
            "Surgeons use techniques that prevent cancer cells from spilling.",
          ],
        },
        {
          id: "is-cancer-contagious",
          question:
            "Is cancer contagious?",
          answer:
            "No: cancer does not pass from one person to another through touch, food, shared utensils, kissing or sex.",
          points: [
            "Some viruses linked to cancer, such as HPV or hepatitis B, are infectious, but the cancer itself is not.",
            "Family members can safely hug, eat with and care for the patient.",
          ],
        },
        {
          id: "ayurveda-homeopathy-diet",
          question:
            "Can Ayurveda, homeopathy or diet alone cure cancer? Can I take them alongside treatment?",
          answer:
            "No: there is no reliable evidence that Ayurveda, homeopathy or diet alone can cure cancer, and delaying proper treatment can cost the chance of cure.",
          points: [
            "Some herbal products can damage the liver or kidneys or interfere with cancer drugs.",
            "Tell your doctor about every supplement or remedy you take.",
            "Yoga, meditation and good nutrition can support well-being alongside treatment.",
          ],
        },
        {
          id: "sugar-feeds-cancer",
          question:
            "Does sugar feed cancer? Should the patient stop sugar, milk or non-veg food?",
          answer:
            "No: eating sugar does not make cancer grow faster, and there is no need to stop milk or non-veg food.",
          points: [
            "All cells, healthy ones included, use glucose; cutting out sugar does not starve cancer.",
            "A balanced diet with enough protein supports healing during treatment.",
            "Limit sugary and processed foods for general health and diabetes control.",
          ],
        },
        {
          id: "chemo-and-hair-loss",
          question:
            "Does every cancer need chemotherapy and cause hair loss?",
          answer:
            "No: many urological cancers are treated with surgery alone, and several cancer drugs don't cause hair loss.",
          points: [
            "Chemotherapy is used only for specific types and stages.",
            "Immunotherapy, targeted tablets and hormone therapy usually don't cause hair loss.",
            "When hair loss does happen, the hair usually grows back.",
          ],
        },
      ],
    },
    {
      id: "money-and-paperwork",
      title: "Money and paperwork",
      questions: [
        {
          id: "insurance-cover",
          question:
            "Does health insurance cover cancer treatment? What about a policy bought after diagnosis?",
          answer:
            "Yes: standard health policies cover cancer surgery, chemotherapy and radiation, subject to waiting periods and sub-limits.",
          points: [
            "A cancer diagnosed before you buy a policy counts as pre-existing; under IRDAI's 2024 master circular, that waiting period is capped at 3 years (source).",
            "Insurers cannot refuse cover solely because of a serious pre-existing disease, and there is no upper age limit for buying a new policy (same source).",
            "Always disclose existing conditions when buying a policy.",
          ],
        },
        {
          id: "government-schemes",
          question:
            "What government schemes or financial help are available: PM-JAY, CGHS, ECHS, state schemes, relief funds?",
          answer:
            "Several schemes reduce costs, including PM-JAY, CGHS, ECHS, ESIC and state health schemes.",
          points: [
            "PM-JAY: ₹5 lakh per family per year for eligible families; Delhi adds ₹5 lakh, making ₹10 lakh (source).",
            "Ayushman Vay Vandana: ₹5 lakh a year for everyone aged 70 and over, regardless of income, covering pre-existing diseases from day one; helpline 14555 (source).",
            "Other help: Prime Minister's and Chief Minister's relief funds, and hospital or NGO assistance.",
            "[Schemes your hospital accepts.]",
          ],
        },
        {
          id: "written-cost-estimate",
          question:
            "Can I get a written cost estimate before admission?",
          answer:
            "Yes: ask for a written estimate covering surgery, stay, tests and medicines, and stating what it excludes.",
          points: [
            "Estimates can change if complications or a longer stay occur.",
            "Insurers and government schemes need this estimate for pre-authorisation.",
          ],
        },
        {
          id: "medical-certificates",
          question:
            "Will I get medical certificates for leave and insurance claims?",
          answer:
            "Yes: the hospital provides discharge summaries and medical certificates for leave, insurance and reimbursement claims.",
          points: [
            "Ask for a fitness certificate when you return to work.",
            "Keep copies of every document.",
          ],
        },
      ],
    },
    {
      id: "travelling",
      title: "Travelling from another city or country",
      questions: [
        {
          id: "online-opinion",
          starred: true,
          question:
            "Can I get an online opinion on my reports before travelling to Delhi?",
          answer:
            "Yes: you can share your reports and scan images online for a preliminary opinion and plan before you travel. [Your process: email, video consultation or other.]",
          points: [
            "Send scan images (DICOM link or CD), pathology reports, blood tests and prescriptions.",
            "A preliminary opinion helps estimate the length of stay and cost.",
            "Final decisions are made after an in-person examination.",
          ],
        },
        {
          id: "medical-tourism-agent",
          question:
            "Do I need a medical tourism agent, or can I contact the hospital directly?",
          answer:
            "You don't need an agent: you can contact the doctor's office or the hospital's international patient desk directly.",
          points: [
            "Direct contact gives you clear estimates without extra fees.",
            "The international desk helps with the visa invitation letter, airport pickup and accommodation. [Confirm your hospital's services.]",
          ],
        },
        {
          id: "medical-visa",
          question:
            "How do I get an Indian medical visa? Can family members come on an attendant visa?",
          answer:
            "Apply for an e-Medical visa online on the official Indian visa portal (indianvisaonline.gov.in), or for a regular medical visa through the Indian embassy (source).",
          points: [
            "Up to two attendants (close relatives or friends) can come on medical attendant visas (same source).",
            "An invitation letter from the hospital is needed.",
            "Check the current rules for your country on the official portal.",
          ],
        },
        {
          id: "length-of-stay-in-india",
          question:
            "How long will I need to stay in India for surgery and recovery?",
          answer:
            "Plan for about 2–3 weeks for most robotic cancer operations, including tests, surgery and the first follow-up.",
          points: [
            "Prostatectomy: about 2 weeks, until the catheter is removed.",
            "Cystectomy or major retroperitoneal surgery: 3–4 weeks.",
            "Chemotherapy or radiation courses take longer.",
            "[Adjust for your operations.]",
          ],
        },
        {
          id: "fly-home",
          question:
            "When is it safe to fly home after robotic surgery?",
          answer:
            "Most patients can fly 7–14 days after uncomplicated robotic surgery, once the surgeon has reviewed them.",
          points: [
            "After prostatectomy, usually once the catheter is out.",
            "Walk in the aisle, drink water and wear compression stockings to lower the risk of clots.",
            "Carry your discharge summary and medicines in your hand luggage.",
          ],
        },
        {
          id: "interpreter",
          question:
            "Is an interpreter available in Arabic, Russian, Bengali or other languages?",
          answer:
            "[Interpreter services and languages available at your hospital.]",
          points: [
            "Ask the international patient desk to arrange an interpreter before you travel.",
          ],
        },
        {
          id: "halal-food-prayer-room",
          question:
            "Are halal food, special diets and a prayer room available?",
          answer:
            "At [hospital], [halal, vegetarian or diabetic meals] and [a prayer room] are available on request.",
          points: [
            "Ask the international patient desk to arrange dietary needs in advance.",
          ],
        },
        {
          id: "follow-up-at-home",
          question:
            "How will follow-up work after I return home? Can my local doctor stay involved?",
          answer:
            "Yes: follow-up can be shared with your local doctor, with video consultations and reports reviewed remotely.",
          points: [
            "You receive a written follow-up schedule (PSA, scans, cystoscopy).",
            "Your local urologist can do tests and examinations and share the results with your surgeon.",
            "Return visits are needed only for problems or specific procedures.",
          ],
        },
        {
          id: "cost-and-waiting-time",
          question:
            "How do cost and waiting time in India compare with my home country?",
          answer:
            "Costs at Indian private hospitals are often lower than in many countries, and surgery can usually be scheduled soon after tests are complete.",
          points: [
            "[Your typical package costs in US dollars and scheduling times.]",
            "Compare the total cost: travel, stay, attendants' expenses and follow-up.",
          ],
        },
      ],
    },
  ],
};
