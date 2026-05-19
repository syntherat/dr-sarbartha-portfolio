import "./CaseStudies.css";

const caseStudies = [
  {
    id: "01",
    title: "Early prostate cancer with rising PSA",
    service: "Prostate Cancer",
    profile: "62-year-old patient, active lifestyle",
    problem:
      "Screening showed a steady PSA rise. MRI and biopsy confirmed organ-confined prostate cancer with nerve-sparing potential.",
    treatment:
      "Robotic radical prostatectomy was planned with continence preservation, margin control, and close post-operative recovery review.",
    outcome:
      "Discharged walking independently, with undetectable early PSA and a structured continence rehabilitation plan.",
  },
  {
    id: "02",
    title: "Muscle-invasive bladder tumor",
    service: "Urinary Bladder Cancer",
    profile: "High-risk disease requiring coordinated care",
    problem:
      "Recurrent bleeding led to diagnosis of muscle-invasive bladder cancer after endoscopic evaluation and staging imaging.",
    treatment:
      "Multidisciplinary planning combined neoadjuvant therapy with radical cystectomy and urinary diversion counseling.",
    outcome:
      "Cancer-directed surgery completed with a clear recovery pathway and long-term surveillance schedule.",
  },
  {
    id: "03",
    title: "Small renal mass found incidentally",
    service: "Kidney Cancer",
    profile: "Kidney preservation priority",
    problem:
      "A compact renal tumor was discovered during imaging for unrelated abdominal symptoms, with preserved kidney function.",
    treatment:
      "Nephron-sparing surgery was selected to remove the tumor while protecting healthy kidney tissue.",
    outcome:
      "Renal function remained stable, and follow-up imaging showed no early local recurrence.",
  },
  {
    id: "04",
    title: "Young adult testicular swelling",
    service: "Testicular Cancer",
    profile: "Fertility-aware treatment planning",
    problem:
      "A painless testicular swelling raised concern for malignancy, requiring urgent diagnosis and staging.",
    treatment:
      "Surgery was paired with tumor-marker assessment, fertility counseling, and risk-adapted surveillance planning.",
    outcome:
      "Recovery was rapid, markers normalized, and the patient continued follow-up with a clear surveillance calendar.",
  },
];

const CaseStudies = () => {
  return (
    <section className="case-studies-section" id="case-studies">
      <div className="case-study-floaters" aria-hidden="true">
        <span className="case-floater case-floater-card" />
        <span className="case-floater case-floater-line" />
        <span className="case-floater case-floater-plus" />
        <span className="case-floater case-floater-tab" />
      </div>

      <div className="case-studies-container">
        <div className="case-studies-header">
          <div>
            <span className="case-studies-tag">Case Studies</span>
            <h2>Clinical Paths, Clearly Mapped</h2>
          </div>
          <p>
            Representative patient journeys showing how diagnosis, treatment
            choices, and follow-up come together in urologic oncology care.
          </p>
        </div>

        <div className="case-studies-grid">
          {caseStudies.map((study) => (
            <article className="case-study-card" key={study.id}>
              <div className="case-study-top">
                <span>{study.id}</span>
                <span>{study.service}</span>
              </div>

              <div className="case-study-main">
                <p className="case-study-profile">{study.profile}</p>
                <h3>{study.title}</h3>
              </div>

              <div className="case-study-flow" aria-label={`${study.title} care path`}>
                <div className="case-study-step">
                  <span>Problem</span>
                  <p>{study.problem}</p>
                </div>
                <div className="case-study-step">
                  <span>Treatment</span>
                  <p>{study.treatment}</p>
                </div>
                <div className="case-study-step">
                  <span>Outcome</span>
                  <p>{study.outcome}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
