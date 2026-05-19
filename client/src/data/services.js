export const services = [
  {
    id: "01",
    slug: "prostate-cancer",
    title: "Prostate Cancer",
    category: "Pelvic Oncology",
    summary:
      "Evaluation and treatment planning for localized and advanced prostate malignancies with a focus on precise, organ-conscious care.",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Doctor reviewing treatment notes with a patient",
    focus: ["Risk stratification", "Robotic surgery", "Active surveillance"],
    overview:
      "Prostate cancer care depends on tumor grade, PSA behavior, MRI findings, biopsy details, age, urinary function, and patient preference. The goal is to choose treatment with oncological control while protecting quality of life wherever possible.",
    carePath: [
      "Clinical review, PSA history, imaging, and biopsy interpretation",
      "Discussion of surveillance, surgery, radiation, or multimodal options",
      "Follow-up planning for recovery, continence, potency, and cancer control",
    ],
  },
  {
    id: "02",
    slug: "urinary-bladder-cancer",
    title: "Urinary Bladder Cancer",
    category: "Bladder Preservation",
    summary:
      "Comprehensive bladder cancer care, from endoscopic diagnosis to advanced surgical pathways for muscle-invasive disease.",
    image:
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Doctor examining diagnostic imaging",
    focus: ["TURBT", "Intravesical therapy", "Radical cystectomy"],
    overview:
      "Bladder cancer treatment is guided by tumor depth, grade, recurrence risk, imaging, and overall health. Management can range from endoscopic treatment and intravesical therapy to radical surgery with urinary diversion.",
    carePath: [
      "Cystoscopy, TURBT, pathology review, and staging workup",
      "Risk-adapted planning for non-muscle-invasive or muscle-invasive disease",
      "Long-term surveillance strategy to monitor recurrence and recovery",
    ],
  },
  {
    id: "03",
    slug: "kidney-cancer",
    title: "Kidney Cancer",
    category: "Renal Tumors",
    summary:
      "Kidney tumor management with emphasis on preserving renal function whenever clinically appropriate.",
    image:
      "https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Medical laboratory used for cancer diagnostics",
    focus: ["Partial nephrectomy", "Radical nephrectomy", "Complex renal masses"],
    overview:
      "Kidney cancer care balances cancer clearance with kidney preservation. Tumor size, location, complexity, kidney function, and medical fitness help decide whether surveillance, partial nephrectomy, radical nephrectomy, or other treatment pathways are appropriate.",
    carePath: [
      "Review of CT or MRI imaging and kidney function",
      "Assessment for nephron-sparing surgery when suitable",
      "Post-treatment surveillance for renal function and recurrence risk",
    ],
  },
  {
    id: "04",
    slug: "testicular-cancer",
    title: "Testicular Cancer",
    category: "Young Adult Oncology",
    summary:
      "Care for testicular tumors including diagnosis, surgery, staging, and coordinated follow-up for long-term outcomes.",
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Surgical team in an operating room",
    focus: ["Orchiectomy", "Staging workup", "Survivorship"],
    overview:
      "Testicular cancer is often highly treatable when evaluated and staged promptly. Care involves tumor markers, imaging, surgery, pathology, and coordination with oncology teams when chemotherapy or further treatment is needed.",
    carePath: [
      "Tumor marker testing, ultrasound, and staging imaging",
      "Surgical management and pathology-guided treatment planning",
      "Survivorship follow-up for recurrence, fertility, and long-term health",
    ],
  },
  {
    id: "05",
    slug: "penile-cancer",
    title: "Penile Cancer",
    category: "Reconstructive Oncology",
    summary:
      "Sensitive, function-aware treatment for penile malignancies with attention to oncological control and quality of life.",
    image:
      "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Supportive hand-holding during medical care",
    focus: ["Organ preservation", "Node evaluation", "Reconstruction planning"],
    overview:
      "Penile cancer care requires a private, respectful, and function-aware approach. Treatment planning considers lesion extent, biopsy findings, nodal risk, preservation options, reconstruction, and psychological wellbeing.",
    carePath: [
      "Clinical assessment, biopsy review, and staging",
      "Planning for organ-preserving or reconstructive surgery when feasible",
      "Groin node evaluation and long-term follow-up",
    ],
  },
  {
    id: "06",
    slug: "adrenal-cancer",
    title: "Adrenal Cancer",
    category: "Adrenal Surgery",
    summary:
      "Assessment and surgical care for adrenal masses, including complex tumors requiring careful endocrine coordination.",
    image:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Anatomical model used for specialist medical planning",
    focus: ["Adrenalectomy", "Hormonal evaluation", "Complex tumors"],
    overview:
      "Adrenal tumors need careful evaluation because some are hormone-producing and others may be malignant. Imaging, endocrine testing, tumor size, growth pattern, and surgical risk shape the treatment plan.",
    carePath: [
      "Imaging review and hormonal evaluation with endocrine coordination",
      "Assessment for minimally invasive or open adrenal surgery",
      "Post-operative monitoring for hormone and recurrence concerns",
    ],
  },
  {
    id: "07",
    slug: "retroperitoneal-cancer",
    title: "Retroperitoneal Cancer",
    category: "Complex Oncology",
    summary:
      "Multidisciplinary planning for retroperitoneal tumors near major vessels, kidneys, and pelvic structures.",
    image:
      "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=1200&auto=format&fit=crop",
    imageAlt: "Stethoscope representing specialist clinical evaluation",
    focus: ["Surgical planning", "Vessel-adjacent tumors", "Team-based care"],
    overview:
      "Retroperitoneal tumors can involve complex anatomy around kidneys, vessels, nerves, and pelvic organs. Treatment usually requires imaging-led planning and coordination across surgical, medical oncology, radiology, and pathology teams.",
    carePath: [
      "Detailed imaging review and anatomical risk mapping",
      "Multidisciplinary planning for safe tumor removal or combined care",
      "Recovery and surveillance planning after treatment",
    ],
  },
];

export const getServiceBySlug = (slug) =>
  services.find((service) => service.slug === slug);
