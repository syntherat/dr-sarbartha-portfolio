// Source: Dr. Sarbartha Kumar Pratihar, "Patient FAQ Question Bank" (2026-10-05)
// and "Patient FAQ Answer Outlines" (2026-10-08). Text is used as written; only
// em dashes were replaced (see docs/PATIENT-FAQ.md). Square brackets are
// placeholders for the doctor to fill.

export const bladderFaq = {
  slug: "urinary-bladder-cancer",
  title: "Urinary bladder cancer",
  intro:
    "Bladder searches begin with painless blood in the urine and turn quickly to BCG, recurrence and life with a urine bag.",
  credentials: "[credentials]",
  reviewedOn: "[review date]",
  stages: [
    {
      id: "is-it-cancer",
      title: "Is it cancer? Symptoms and causes",
      questions: [
        {
          id: "blood-in-urine-no-pain",
          starred: true,
          question:
            "I passed blood in my urine but there is no pain: could it be bladder cancer?",
          answer:
            "It could be: painless blood in urine is the commonest sign of bladder cancer, so it always needs tests, even though most causes are not cancer.",
          points: [
            "Other causes: infection, stones, an enlarged prostate, kidney disease, blood thinners.",
            "Tests: urine examination, ultrasound or CT urography, and a cystoscopy.",
            "Risk is higher in smokers, people over 50 and those exposed to industrial chemicals.",
            "Don't wait for it to happen again before getting checked.",
          ],
        },
        {
          id: "blood-only-once",
          question:
            "The blood came only once and then stopped: do I still need tests?",
          answer:
            "Yes: bladder cancer often bleeds on and off, so a single episode still needs full evaluation.",
          points: [
            "Bleeding stopping does not mean the cause has gone.",
            "Blood seen only under the microscope may also need tests, depending on age and risk.",
            "Taking blood thinners does not explain away bleeding; tests are still needed.",
          ],
        },
        {
          id: "burning-not-settling",
          question:
            "Burning and frequent urination that doesn't settle with antibiotics: could it be cancer?",
          answer:
            "Usually it is a persistent infection or an irritable bladder, but carcinoma in situ (CIS) of the bladder can mimic infection.",
          points: [
            "Repeated \"UTIs\" with negative urine cultures need a closer look.",
            "Tests: urine culture, urine cytology, ultrasound and cystoscopy.",
            "Smokers over 40 with these symptoms deserve early evaluation.",
          ],
        },
        {
          id: "smoking-and-tobacco",
          question:
            "Does smoking, bidi, hookah or chewing tobacco cause bladder cancer?",
          answer:
            "Yes: smoking in any form, including cigarettes, bidis and hookah, is the biggest single cause of bladder cancer.",
          points: [
            "Smokers have about three times the risk of non-smokers.",
            "Chemicals from tobacco pass into the urine and sit against the bladder lining.",
            "Smokeless tobacco has a weaker link, but it causes mouth cancer and should also be stopped.",
          ],
        },
        {
          id: "quit-smoking-risk",
          question:
            "I quit smoking years ago: am I still at risk? Does quitting now still help?",
          answer:
            "Your risk falls steadily after quitting, but it takes many years to approach a non-smoker's level.",
          points: [
            "Quitting after diagnosis lowers the chance of recurrence and improves treatment results.",
            "Help is available: nicotine replacement, counselling and quit-line services.",
          ],
        },
        {
          id: "work-chemicals",
          question:
            "Can work with dyes, rubber, leather, paint or chemicals cause bladder cancer?",
          answer:
            "Yes: long-term exposure to certain industrial chemicals (aromatic amines) raises bladder cancer risk.",
          points: [
            "Higher-risk work: dyes and textiles, rubber, leather, paint, diesel exhaust, older hair dyes.",
            "Cancer can appear 20 or more years after exposure.",
            "Tell your doctor your full work history.",
          ],
        },
        {
          id: "hereditary-and-women",
          question:
            "Is bladder cancer hereditary? Can women get it too?",
          answer:
            "Bladder cancer is rarely inherited; most cases come from smoking and chemical exposure. Women do get it, though less often than men.",
          points: [
            "A family history slightly raises risk; Lynch syndrome raises the risk of urinary tract cancers.",
            "Women are often diagnosed later because blood in urine is mistaken for a UTI or menstrual bleeding.",
            "Unexplained blood in urine in a woman needs investigation.",
          ],
        },
      ],
    },
    {
      id: "tests-and-reports",
      title: "Tests and reports",
      questions: [
        {
          id: "cystoscopy",
          question:
            "What is a cystoscopy? Is it painful?",
          answer:
            "A cystoscopy is a look inside the bladder with a thin camera passed through the urine passage; it takes a few minutes.",
          points: [
            "Flexible cystoscopy uses local anaesthetic jelly and causes mild discomfort.",
            "Some burning and slight blood in the urine for a day or two are normal.",
            "Fever, heavy bleeding or inability to pass urine need a call to the doctor.",
          ],
        },
        {
          id: "turbt",
          question:
            "What is TURBT? Is it a major operation? How long will the catheter stay?",
          answer:
            "TURBT (transurethral resection of bladder tumour) removes the tumour through the urine passage with a telescope (no cuts on the abdomen).",
          points: [
            "Done under spinal or general anaesthesia, with a hospital stay of 1–2 days.",
            "The catheter usually stays 1–3 days, longer if the tumour was large.",
            "It both treats the tumour and provides tissue for the pathology report.",
            "Some blood in urine for 2–3 weeks is normal; a late bleed around day 10–14 can occur.",
          ],
        },
        {
          id: "superficial-vs-muscle-invasive",
          starred: true,
          question:
            "What is the difference between superficial (non-muscle-invasive) and muscle-invasive bladder cancer?",
          answer:
            "Non-muscle-invasive cancer (about 3 in 4 cases) stays in the inner lining and can usually be treated through the urine passage; muscle-invasive cancer has grown into the bladder muscle and needs bigger treatment.",
          points: [
            "Non-muscle-invasive: TURBT plus medicine into the bladder (BCG or chemotherapy); the bladder is kept.",
            "Muscle-invasive: removal of the bladder or bladder-preserving chemoradiation, often with chemotherapy first.",
            "The difference is decided by the TURBT pathology report.",
          ],
        },
        {
          id: "grade-and-stage-terms",
          question:
            "What do \"low grade\", \"high grade\", \"Ta\", \"T1\" and \"CIS\" mean on my report?",
          answer:
            "These describe how aggressive the cells look (grade) and how deep the cancer goes (stage).",
          points: [
            "Ta: confined to the lining. T1: into the layer under the lining. T2 or more: into the muscle.",
            "Low grade: tends to recur but rarely progresses. High grade: higher risk of progressing to muscle invasion.",
            "CIS (carcinoma in situ): flat, high-grade cancer in the lining that needs BCG.",
            "Together these decide your risk group and treatment plan.",
          ],
        },
        {
          id: "muscle-not-seen",
          question:
            "My report says \"muscle not seen\": what does that mean?",
          answer:
            "It means the sample didn't include bladder wall muscle, so doctors cannot tell whether the cancer has invaded the muscle.",
          points: [
            "A repeat TURBT is usually needed, especially for high-grade or T1 tumours.",
            "This avoids under-staging and the wrong treatment.",
            "It does not by itself mean the cancer is worse.",
          ],
        },
        {
          id: "repeat-turbt",
          question:
            "Why does my doctor want to repeat the TURBT?",
          answer:
            "A repeat TURBT 2–6 weeks later checks for leftover tumour and confirms the stage.",
          points: [
            "Advised for T1 or high-grade tumours, an incomplete first resection, or when muscle was missing.",
            "Leftover tumour is found in a significant share of these patients.",
            "It improves the response to BCG and the accuracy of treatment decisions.",
          ],
        },
        {
          id: "cytology-and-ct-urography",
          question:
            "What do urine cytology and CT urography show?",
          answer:
            "Urine cytology looks for cancer cells in urine; CT urography images the kidneys, ureters and bladder.",
          points: [
            "Cytology catches high-grade cancer and CIS well but misses many low-grade tumours.",
            "CT urography checks the upper urinary tract for tumours and helps staging.",
            "Neither replaces cystoscopy.",
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
            "Is bladder cancer curable?",
          answer:
            "Yes: most bladder cancers are found early, and many can be cured or kept under control while keeping the bladder.",
          points: [
            "Non-muscle-invasive cancer has excellent survival but often recurs, so follow-up is long term.",
            "Muscle-invasive cancer can be cured in many patients with chemotherapy plus surgery, or chemoradiation.",
            "Cancer that has spread to distant organs is usually controllable, not curable, with newer drugs.",
          ],
        },
        {
          id: "bcg-treatment",
          starred: true,
          question:
            "What is BCG treatment? Is it the same as the TB vaccine? Is it safe?",
          answer:
            "BCG is a weakened form of the TB bacterium placed into the bladder through a catheter; it triggers the immune system to destroy cancer cells.",
          points: [
            "It uses the same bacterium as the TB vaccine, but it is given into the bladder, not as an injection.",
            "It is the most effective treatment for high-risk non-muscle-invasive cancer and CIS.",
            "It is generally safe; burning and frequent urination for 1–2 days after each dose are common.",
            "Hold urine for about 2 hours. For 6 hours afterwards, sit to pass urine and add bleach to the toilet before flushing.",
          ],
        },
        {
          id: "bcg-doses",
          question:
            "How many BCG doses will I need, and why for 1 to 3 years?",
          answer:
            "Usually 6 weekly doses first (induction), then maintenance doses at intervals for 1–3 years.",
          points: [
            "Maintenance is what keeps the cancer from coming back; induction alone works less well.",
            "Intermediate risk: often 1 year. High risk: up to 3 years.",
            "Cystoscopy every 3 months checks the response.",
          ],
        },
        {
          id: "bcg-side-effects",
          question:
            "Burning, frequent urination or fever after BCG: when should I worry?",
          answer:
            "Burning and frequency for 1–2 days after a dose are expected; fever above 38.5°C, or symptoms lasting over 48 hours, need medical review.",
          points: [
            "Mild symptoms: fluids, paracetamol and urinary pain relief as advised.",
            "Urgent: high fever with chills, joint pain, red eyes, cough or feeling very unwell (rare BCG infection that needs TB drugs).",
            "The next dose may be delayed or reduced if side effects are significant.",
          ],
        },
        {
          id: "bcg-alternatives",
          question:
            "BCG is not available: what are the alternatives? What is mitomycin or gemcitabine put into the bladder?",
          answer:
            "When BCG is short, doctors keep it for the highest-risk patients and use chemotherapy into the bladder for others.",
          points: [
            "Mitomycin C or gemcitabine (sometimes with docetaxel) is given through a catheter, like BCG.",
            "Reduced-dose or reduced-frequency BCG can stretch supplies.",
            "For high-risk cancer that doesn't respond to BCG, bladder removal or newer treatments are discussed.",
          ],
        },
        {
          id: "save-the-bladder",
          starred: true,
          question:
            "My doctor says the bladder must be removed: is there any way to save it?",
          answer:
            "Sometimes, selected patients can keep the bladder with trimodal therapy: a maximal TURBT, then chemotherapy with radiation.",
          points: [
            "Best suited to a single tumour, fully removed at TURBT, with no CIS and no kidney blockage.",
            "It needs lifelong cystoscopy, and some patients later need the bladder removed.",
            "For high-risk non-muscle-invasive cancer that fails BCG, newer bladder treatments may be options. [Availability in India.]",
            "Ask for a joint opinion with a radiation oncologist.",
          ],
        },
        {
          id: "chemo-before-cystectomy",
          question:
            "Why is chemotherapy given before bladder removal surgery?",
          answer:
            "Cisplatin-based chemotherapy before surgery improves survival in muscle-invasive cancer by treating hidden spread early.",
          points: [
            "Usually 3–4 cycles over about 3 months.",
            "In some patients, no cancer is left in the bladder at surgery.",
            "Not everyone can take cisplatin (kidney function, hearing, heart); newer immunotherapy-based combinations are an option for some.",
          ],
        },
        {
          id: "radical-cystectomy",
          question:
            "What is radical cystectomy? Can it be done robotically?",
          answer:
            "Radical cystectomy removes the bladder and nearby lymph nodes (in men usually the prostate too) and creates a new route for urine from a piece of bowel.",
          points: [
            "Yes: robotic cystectomy is done through keyhole cuts, with the urinary diversion built inside or outside the body.",
            "Compared with open surgery: less blood loss and fewer transfusions, with similar cancer control.",
            "[Your typical hospital stay and diversion technique.]",
          ],
        },
        {
          id: "urine-bag-or-neobladder",
          question:
            "After bladder removal, how will I pass urine: a urine bag or a new bladder (neobladder)? Which is better for me?",
          answer:
            "The two main options are an ileal conduit, where urine drains into a bag on the abdomen, and a neobladder, a new bladder made from bowel so you pass urine normally.",
          points: [
            "Ileal conduit: simpler, quicker recovery; suits older patients and those with kidney or bowel problems.",
            "Neobladder: no external bag; needs good kidney function, commitment to training and possible self-catheterisation; not suitable if cancer involves the urethra.",
            "Overall quality of life is similar; choose by health, lifestyle and preference.",
            "Meet a stoma nurse before deciding.",
          ],
        },
        {
          id: "other-organs-removed",
          question:
            "Will the prostate, or the uterus and ovaries, also be removed?",
          answer:
            "Usually yes, but organ-sparing surgery is possible in selected patients.",
          points: [
            "Men: the prostate and seminal vesicles are usually removed; nerve-sparing helps preserve erections when suitable.",
            "Women: the uterus and part of the front vaginal wall are often removed; ovaries can sometimes be kept in younger women.",
            "The decision depends on tumour location and stage.",
          ],
        },
        {
          id: "father-is-75",
          question:
            "My father is 75: is bladder removal surgery safe at his age?",
          answer:
            "Age alone doesn't rule it out: fit people in their 70s and 80s have cystectomy safely; overall health matters more.",
          points: [
            "Assessment covers heart, lungs, kidney function, nutrition, mobility and frailty.",
            "An ileal conduit (urine bag) is often chosen for older patients.",
            "Bladder-preserving chemoradiation is an alternative for less fit patients.",
            "Walking, breathing exercises and good nutrition before surgery improve recovery.",
          ],
        },
        {
          id: "immunotherapy",
          question:
            "Does immunotherapy work for bladder cancer? Who benefits?",
          answer:
            "Yes: immunotherapy helps many patients with advanced bladder cancer and some whose cancer no longer responds to BCG.",
          points: [
            "Advanced or metastatic cancer: often combined with newer drugs such as enfortumab vedotin.",
            "After cystectomy: for patients at high risk of recurrence.",
            "BCG-unresponsive cancer: an option for some who can't or won't have cystectomy.",
            "[Cost in India and patient-assistance programmes.]",
          ],
        },
        {
          id: "cost-delhi",
          question:
            "What do TURBT, a BCG course and robotic cystectomy cost in Delhi? Does insurance cover them?",
          answer:
            "At [hospital], TURBT costs about [₹ range], a BCG course about [₹ range], and robotic radical cystectomy about [₹ range].",
          points: [
            "BCG cost depends on the number of doses and the brand available.",
            "Most health policies cover robotic surgery, some with a sub-limit; BCG sessions are often claimable as day-care treatment: check your policy.",
            "Cystectomy packages vary with diversion type and length of stay.",
          ],
        },
      ],
    },
    {
      id: "life-after-treatment",
      title: "Life after treatment",
      questions: [
        {
          id: "living-with-urine-bag",
          starred: true,
          question:
            "How do I live with a urine bag (urostomy)? Can I bathe, travel, work and sleep normally?",
          answer:
            "Yes: most people with a urostomy return to work, travel, bathe and lead active lives once they learn bag care.",
          points: [
            "The bag is changed every 2–4 days and emptied several times a day; at night it connects to a larger drainage bag.",
            "You can bathe or shower with the bag on or off.",
            "A stoma nurse teaches care before you leave hospital.",
            "When travelling, carry spare supplies in your hand luggage.",
          ],
        },
        {
          id: "bag-smell-or-show",
          question:
            "Will the urine bag smell or show under clothes?",
          answer:
            "Modern bags are odour-proof and flat; when well fitted, others won't notice them.",
          points: [
            "A smell usually means a leak or infection: check the seal and fit.",
            "Loose or high-waisted clothing hides the bag easily.",
            "Drinking enough water keeps urine dilute and less smelly.",
          ],
        },
        {
          id: "urostomy-bags-india",
          question:
            "Where can I get urostomy bags in India, and what do they cost per month?",
          answer:
            "Urostomy bags are sold through hospital pharmacies, medical stores and online suppliers in India. [Brands you recommend; ₹ monthly range.]",
          points: [
            "Monthly cost depends on one-piece or two-piece systems and how often you change them.",
            "Ask your insurer whether stoma supplies are covered.",
            "Your stoma nurse helps with sizing and suppliers; ostomy support groups share practical tips.",
          ],
        },
        {
          id: "prayers-with-urine-bag",
          question:
            "Can I continue prayers, namaz, puja or temple visits with a urine bag?",
          answer:
            "Yes: people with stomas continue their religious practices; a sealed bag keeps you clean.",
          points: [
            "Empty the bag before prayers and carry a spare.",
            "Religious scholars and ostomy associations offer guidance on ritual purity with a stoma.",
            "Kneeling and bending, including sajda, are usually fine once the wound has healed.",
          ],
        },
        {
          id: "neobladder-life",
          question:
            "With a new bladder, will I pass urine normally? Will I leak at night? Will I need to use a catheter myself?",
          answer:
            "Most people with a neobladder pass urine through the urethra by relaxing the pelvic floor and gently tightening the abdomen.",
          points: [
            "Daytime control is good in most patients within 6–12 months; night-time leakage is more common, so a night alarm helps.",
            "At first you pass urine by the clock, every 2–3 hours, including at night.",
            "Some patients, more often women, can't empty fully and need self-catheterisation.",
            "Mucus in the urine is normal; drink plenty of fluids.",
          ],
        },
        {
          id: "sex-life-after-cystectomy",
          question:
            "Can men and women have a normal sex life after bladder removal?",
          answer:
            "Many do, with the right surgery and support.",
          points: [
            "Men: nerve-sparing improves erection recovery; tablets, injections or implants help; orgasm is dry.",
            "Women: vaginal shortening or dryness may occur; organ-sparing surgery, lubricants and dilators help.",
            "Body-image concerns with a stoma are common; counselling and involving the partner help.",
          ],
        },
        {
          id: "recurrence-and-cystoscopy",
          starred: true,
          question:
            "Why does bladder cancer keep coming back? How often will I need cystoscopy?",
          answer:
            "Non-muscle-invasive bladder cancer often recurs because the whole bladder lining has been exposed to the same causes, such as smoking.",
          points: [
            "Cystoscopy at 3 months, then every 3–6 months at first; intervals lengthen when results stay clear.",
            "Low-risk patients may stop after about 5 years; high-risk patients continue longer.",
            "Stopping smoking and completing BCG maintenance reduce recurrence.",
          ],
        },
        {
          id: "tea-coffee-alcohol-water",
          question:
            "Can I drink tea, coffee or alcohol after bladder cancer? Does drinking more water prevent recurrence?",
          answer:
            "Tea and coffee in moderation are fine and alcohol should be limited; drinking enough water is sensible, though it isn't proven to prevent recurrence.",
          points: [
            "Good hydration dilutes harmful chemicals in the urine.",
            "Stopping smoking matters far more than any food or drink.",
            "During BCG treatment, limit fluids for a few hours before each dose.",
          ],
        },
        {
          id: "kidneys-after-diversion",
          question:
            "Will my kidneys be affected after urinary diversion?",
          answer:
            "Kidney function can decline gradually after urinary diversion, so long-term monitoring is needed.",
          points: [
            "Causes include narrowing where the ureters join the bowel, infections, reflux and chemical imbalances.",
            "Regular creatinine, electrolytes, vitamin B12 and ultrasound checks catch problems early.",
            "Report fever, side pain or reduced urine output promptly.",
          ],
        },
        {
          id: "survival-rate",
          question:
            "What is the survival rate after bladder removal?",
          answer:
            "Survival depends mainly on stage; when cancer is still confined to the bladder, most patients are alive at 5 years.",
          points: [
            "Cancer confined to the bladder: roughly 7 in 10 alive at 5 years (approx., US registry data, all treatments).",
            "Spread to nearby tissue or lymph nodes: roughly 4 in 10 (approx.).",
            "Distant spread: under 1 in 10 historically (approx.), improving with newer drugs.",
            "Chemotherapy before surgery and complete removal improve outcomes. [Your audited outcomes, if published.]",
          ],
        },
      ],
    },
  ],
};
