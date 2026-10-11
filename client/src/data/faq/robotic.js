// Source: Dr. Sarbartha Kumar Pratihar, "Patient FAQ Question Bank" (2026-10-05)
// and "Patient FAQ Answer Outlines" (2026-10-08). Text is used as written; only
// em dashes were replaced (see docs/PATIENT-FAQ.md). Square brackets are
// placeholders for the doctor to fill.

export const roboticFaq = {
  slug: "robotic-surgery",
  title: "Robotic surgery",
  intro:
    "Robotic searches mix curiosity, safety worries and cost. Indian families also ask which robot is used and whether insurance pays.",
  credentials: "[credentials]",
  reviewedOn: "[review date]",
  stages: [
    {
      id: "understanding",
      title: "Understanding robotic surgery",
      questions: [
        {
          id: "what-is-robotic-surgery",
          starred: true,
          question:
            "What is robotic surgery? Does the robot operate on its own?",
          answer:
            "No: the robot never operates on its own; the surgeon sits at a console in the same room and controls every movement of the instruments.",
          points: [
            "Instruments enter through small keyhole cuts, mostly under 1 cm.",
            "The surgeon sees a magnified 3D view; the instruments bend like a wrist and filter out hand tremor.",
            "An assistant surgeon and the team stay at the bedside throughout.",
          ],
        },
        {
          id: "laser-or-laparoscopic",
          question:
            "Is robotic surgery the same as laser surgery or laparoscopic (keyhole) surgery?",
          answer:
            "Robotic surgery is an advanced form of keyhole surgery; it is not laser surgery.",
          points: [
            "Laparoscopic: the surgeon holds long straight instruments and watches a screen.",
            "Robotic: wristed instruments and magnified 3D vision allow finer work in tight spaces such as the pelvis.",
            "\"Laser\" usually means telescope procedures through the urine passage, for stones or prostate enlargement.",
          ],
        },
        {
          id: "robotic-laparoscopic-or-open",
          question:
            "Robotic, laparoscopic or open surgery: which is better for my cancer?",
          answer:
            "For most urological cancers, robotic surgery gives cancer control similar to open surgery, with less blood loss, less pain and faster recovery.",
          points: [
            "The biggest advantages are in deep, tight spaces: prostate, bladder, partial kidney removal and reconstruction.",
            "Open surgery is still best for some very large or complex tumours.",
            "The surgeon's experience matters more than the approach.",
          ],
        },
        {
          id: "removes-cancer-more-completely",
          question:
            "Does robotic surgery remove cancer more completely than open surgery?",
          answer:
            "Cancer removal depends mainly on the surgeon's skill and the tumour's stage; robotic and open surgery give similar cancer control in experienced hands.",
          points: [
            "Magnification helps with precise margins and nerve preservation.",
            "The main gains are in recovery, blood loss and function.",
          ],
        },
        {
          id: "which-robot",
          question:
            "Which robot is best: da Vinci, SSI Mantra, Hugo, Versius or Toumai? Does the brand matter?",
          answer:
            "The surgeon's training and experience on a platform matter far more than its brand.",
          points: [
            "da Vinci has the longest track record and the most published data.",
            "Newer platforms, including SSI Mantra, Hugo RAS, Versius and Toumai, are also in use in India.",
            "Ask which platform will be used and how many cases your surgeon has done on it.",
            "[Platforms you operate on.]",
          ],
        },
        {
          id: "ssi-mantra",
          question:
            "Is the Made-in-India robot (SSI Mantra) as safe as foreign robots?",
          answer:
            "SSI Mantra is an Indian-made surgical robot used in a growing number of Indian hospitals; as with any robot, safety depends mainly on the surgeon and team.",
          points: [
            "It offers the core features: magnified 3D vision and wristed instruments.",
            "It may help make robotic surgery more affordable.",
            "Published results are growing. [Your experience with SSI Mantra.]",
          ],
        },
        {
          id: "telesurgery",
          question:
            "What is telesurgery? Can a surgeon operate from another city?",
          answer:
            "Telesurgery means a surgeon controls the robot from a distant console over a secure network; it has been demonstrated but is not yet routine.",
          points: [
            "In routine practice, the surgeon is in the same operating room.",
            "A full surgical team is always at the bedside.",
          ],
        },
        {
          id: "new-or-experimental",
          question:
            "Is robotic surgery new or experimental?",
          answer:
            "No: robotic surgery has been used worldwide for more than 20 years and is a standard approach for prostate, kidney and bladder cancer surgery.",
          points: [
            "Robotic prostatectomy is now the commonest way the prostate is removed in many countries.",
            "Guidelines accept robotic surgery as standard for these operations.",
          ],
        },
      ],
    },
    {
      id: "safety-and-choosing",
      title: "Safety and choosing a surgeon",
      questions: [
        {
          id: "is-it-safe",
          starred: true,
          question:
            "Is robotic surgery safe? Does it have more complications?",
          answer:
            "Yes: in experienced hands, robotic surgery is safe, with complication rates similar to or lower than open surgery.",
          points: [
            "Usual surgical risks still apply: bleeding, infection, blood clots, injury to nearby organs, anaesthesia risks.",
            "Less blood loss and fewer wound problems are common benefits.",
            "Your surgeon should explain the risks of your specific operation.",
          ],
        },
        {
          id: "robot-stops-working",
          question:
            "What happens if the robot stops working during my operation?",
          answer:
            "Robotic systems have built-in safety checks; if a fault occurs, the team can restart the system, continue by laparoscopy or convert to open surgery.",
          points: [
            "Serious malfunctions are rare.",
            "The team is trained for these situations.",
          ],
        },
        {
          id: "conversion-to-open",
          question:
            "Can a robotic operation be converted to open surgery? Why?",
          answer:
            "Yes: occasionally the surgeon converts to open surgery for safety, for example because of heavy bleeding, dense scarring or unexpected findings.",
          points: [
            "Conversion is uncommon in experienced centres.",
            "It is a safety decision, not a failure.",
            "You consent to this possibility before surgery.",
          ],
        },
        {
          id: "surgeon-experience",
          starred: true,
          question:
            "Does the surgeon's experience matter more than the robot? How many robotic surgeries has my surgeon done?",
          answer:
            "Yes: results depend far more on the surgeon's experience than on the machine.",
          points: [
            "Outcomes improve with the number of cases a surgeon and team have done.",
            "It is reasonable to ask how many similar robotic operations your surgeon does each year, and with what results.",
            "[Decide whether and how to state your own experience factually.]",
          ],
        },
        {
          id: "who-operates",
          question:
            "Who actually performs my surgery: the senior surgeon or a trainee?",
          answer:
            "Ask your surgeon directly: you have a right to know who will operate and who will assist.",
          points: [
            "In teaching hospitals, trainees may assist under the consultant's direct supervision.",
            "The consultant remains responsible for your operation.",
            "[Your practice: who operates and who assists.]",
          ],
        },
        {
          id: "what-to-ask",
          question:
            "What should I ask before choosing a robotic surgeon or hospital?",
          answer:
            "Ask about experience, results, the team, and the care after surgery.",
          points: [
            "How many of these operations do you do each year, and what are your complication and functional results?",
            "Is my case discussed at a multidisciplinary tumour board?",
            "Who looks after me after surgery, and how do I reach the team?",
            "What does the package include and exclude?",
          ],
        },
        {
          id: "too-old-or-unwell",
          question:
            "Am I too old, too overweight or too unwell (heart, lungs, diabetes) for robotic surgery?",
          answer:
            "Not necessarily: many older or heavier patients, and those with diabetes, have robotic surgery safely after proper assessment.",
          points: [
            "Heart and anaesthesia checks confirm fitness for a few hours of surgery, sometimes with the head tilted down.",
            "Severe heart or lung disease, or eye conditions such as glaucoma, need special planning.",
            "In obese patients, robotic surgery is often preferable to open surgery.",
          ],
        },
        {
          id: "previous-abdominal-surgery",
          question:
            "I have had abdominal surgery before: can I still have robotic surgery?",
          answer:
            "Usually yes: previous operations may leave adhesions, but experienced surgeons can usually work around them.",
          points: [
            "Tell your surgeon about every previous operation, including hernia mesh repairs.",
            "Occasionally an open approach is safer.",
          ],
        },
        {
          id: "anaesthesia-time-blood",
          question:
            "Will I need general anaesthesia? How long does the operation take? Will I need blood?",
          answer:
            "Yes: robotic surgery is done under general anaesthesia, and most urological cancer operations take 2–5 hours.",
          points: [
            "Blood transfusion is rarely needed for prostate or kidney surgery; it is more common with bladder removal.",
            "Your blood group is checked and blood kept ready as a precaution.",
            "[Your typical operating times.]",
          ],
        },
      ],
    },
    {
      id: "cost-and-insurance",
      title: "Cost and insurance",
      questions: [
        {
          id: "cost-delhi",
          starred: true,
          question:
            "How much does robotic surgery cost in Delhi, and why is it more expensive?",
          answer:
            "Robotic cancer surgery at [hospital] typically costs [₹ range], depending on the operation.",
          points: [
            "It costs more because of the robot's purchase and maintenance, and its limited-use instruments.",
            "A shorter stay and faster return to work offset part of the extra cost.",
            "[Package inclusions and exclusions.]",
          ],
        },
        {
          id: "insurance-cover",
          starred: true,
          question:
            "Does health insurance cover robotic surgery? Are there sub-limits?",
          answer:
            "Yes: under IRDAI's 2019 rules, insurers must cover robotic surgery as a \"modern treatment\", though many policies cap it with a sub-limit (source).",
          points: [
            "Check your policy's modern-treatment sub-limit, co-payment and room-rent limits.",
            "Ask your surgeon to document why the robotic approach is medically needed; insurers check this.",
            "Under IRDAI's 2024 master circular, insurers must decide on a cashless request within 1 hour and on discharge within 3 hours (source).",
          ],
        },
        {
          id: "government-schemes",
          question:
            "Is robotic surgery covered under Ayushman Bharat (PM-JAY), CGHS, ECHS or ESIC?",
          answer:
            "These schemes cover cancer surgery at empanelled hospitals at their own package rates; whether the robotic approach is fully covered depends on the scheme and the hospital, so ask the hospital's scheme desk before admission.",
          points: [
            "PM-JAY gives eligible families ₹5 lakh a year; Delhi adds ₹5 lakh, making ₹10 lakh (source).",
            "Everyone aged 70 or over can get ₹5 lakh a year through the Ayushman Vay Vandana card, regardless of income (source).",
            "CGHS, ECHS and CAPF beneficiaries aged 70+ must choose between their scheme and PM-JAY (same source).",
            "[Schemes your hospital is empanelled for.]",
          ],
        },
        {
          id: "cashless-or-reimbursement",
          question:
            "Cashless or reimbursement: how does it work for robotic surgery?",
          answer:
            "Cashless means the hospital bills your insurer directly after pre-authorisation; reimbursement means you pay first and claim later.",
          points: [
            "Cashless works at network hospitals; the pre-authorisation request goes in with the doctor's notes before admission.",
            "Keep every bill, report and discharge summary for a reimbursement claim.",
            "If the robotic sub-limit is lower than the bill, you pay the difference.",
            "The hospital's insurance desk helps with the paperwork.",
          ],
        },
        {
          id: "worth-the-extra-cost",
          question:
            "Is the extra cost worth it compared with laparoscopic surgery?",
          answer:
            "For deep pelvic operations such as prostatectomy and cystectomy, and for complex partial nephrectomy, many patients find the faster recovery and better function worth it; for simpler operations, laparoscopy may be just as good.",
          points: [
            "Ask what benefit to expect for your specific operation.",
            "Count lost workdays and recovery time, not just the hospital bill.",
          ],
        },
      ],
    },
    {
      id: "recovery",
      title: "Recovery",
      questions: [
        {
          id: "hospital-stay",
          question:
            "How long will I stay in hospital?",
          answer:
            "Most robotic urological cancer operations need 1–4 days in hospital; bladder removal needs longer.",
          points: [
            "Prostatectomy: 1–2 days. Partial nephrectomy: 2–3 days. Cystectomy: about a week.",
            "[Your typical stays.]",
          ],
        },
        {
          id: "pain-and-scars",
          question:
            "How painful is it? How big are the cuts and scars?",
          answer:
            "Pain is usually mild to moderate and controlled with tablets; most patients need few strong painkillers after the first day or two.",
          points: [
            "Scars are 5–6 small cuts of about 1 cm, plus one slightly longer cut to remove the specimen.",
            "Shoulder-tip pain from the gas used is common for a day or two.",
          ],
        },
        {
          id: "walk-eat-bathe",
          question:
            "When can I walk, climb stairs, eat normal food and bathe?",
          answer:
            "Most patients walk the same evening or next morning, and climb stairs and eat normally within 1–2 days.",
          points: [
            "Fluids usually start within hours; normal food within a day or two, later after cystectomy.",
            "Shower after 2–3 days once the wounds are sealed; avoid tub baths and swimming for 2–3 weeks.",
            "Walking several times a day speeds recovery and prevents clots.",
          ],
        },
        {
          id: "sit-cross-legged-squat",
          question:
            "When can I sit cross-legged, squat or use an Indian-style toilet?",
          answer:
            "Most patients can sit cross-legged and squat gently after 2–3 weeks, once the wounds have healed and pain has settled.",
          points: [
            "With a catheter in place, a Western-style toilet or commode is easier.",
            "Avoid straining; use a stool softener if needed.",
            "Follow your surgeon's specific advice after cystectomy or prostatectomy.",
          ],
        },
        {
          id: "drive-travel-work",
          question:
            "When can I drive, travel by train or flight, and return to work?",
          answer:
            "Most people drive after 2–3 weeks, return to desk work in 2–3 weeks and to heavy work after 4–6 weeks.",
          points: [
            "Short car or train journeys are fine after discharge, with breaks to walk.",
            "Flights are usually fine 7–10 days after surgery, once your surgeon agrees.",
            "Don't drive while taking strong painkillers.",
          ],
        },
        {
          id: "when-to-call",
          question:
            "Which symptoms after going home mean I should call the doctor?",
          answer:
            "Call the team urgently for fever over 38°C, increasing pain, bleeding, a red or discharging wound, calf pain or swelling, breathlessness, vomiting, or inability to pass urine.",
          points: [
            "Also: a catheter that stops draining, urine leaking from a wound, or a swelling abdomen.",
            "[Your 24-hour contact number.]",
          ],
        },
      ],
    },
  ],
};
