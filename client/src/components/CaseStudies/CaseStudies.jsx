import { useEffect, useRef, useState } from "react";
import { ArrowRight, Paperclip } from "lucide-react";
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

const journeySteps = [
  { key: "problem", label: "Problem" },
  { key: "treatment", label: "Treatment" },
  { key: "outcome", label: "Outcome" },
];

const CaseStudies = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabRefs = useRef([]);
  const active = caseStudies[activeIndex];
  const nextIndex = (activeIndex + 1) % caseStudies.length;

  // Keep the open tab centred when the tab row scrolls sideways on phones.
  // Scrolls only the tab row itself, never the page.
  useEffect(() => {
    const tab = tabRefs.current[activeIndex];
    const list = tab?.parentElement;
    if (!list || list.scrollWidth <= list.clientWidth) return;
    const left = tab.offsetLeft - (list.clientWidth - tab.offsetWidth) / 2;
    list.scrollTo({ left: Math.max(0, left), behavior: "smooth" });
  }, [activeIndex]);

  const selectCase = (index, moveFocus = false) => {
    setActiveIndex(index);
    if (moveFocus) tabRefs.current[index]?.focus();
  };

  const handleTabKeyDown = (event) => {
    const last = caseStudies.length - 1;
    const keyMap = {
      ArrowDown: activeIndex === last ? 0 : activeIndex + 1,
      ArrowRight: activeIndex === last ? 0 : activeIndex + 1,
      ArrowUp: activeIndex === 0 ? last : activeIndex - 1,
      ArrowLeft: activeIndex === 0 ? last : activeIndex - 1,
      Home: 0,
      End: last,
    };
    if (!(event.key in keyMap)) return;
    event.preventDefault();
    selectCase(keyMap[event.key], true);
  };

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

        <div className="case-viewer">
          <div className="case-tabs" role="tablist" aria-label="Case studies">
            {caseStudies.map((study, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={study.id}
                  ref={(node) => {
                    tabRefs.current[index] = node;
                  }}
                  type="button"
                  role="tab"
                  id={`case-tab-${study.id}`}
                  aria-selected={isActive}
                  aria-controls="case-file-panel"
                  tabIndex={isActive ? 0 : -1}
                  className={`case-tab${isActive ? " is-active" : ""}`}
                  onClick={() => selectCase(index)}
                  onKeyDown={handleTabKeyDown}
                >
                  <span className="case-tab-number">{study.id}</span>
                  <span className="case-tab-service">{study.service}</span>
                </button>
              );
            })}
          </div>

          <div
            className={`case-folder${activeIndex === 0 ? " is-first" : ""}`}
            id="case-file-panel"
            role="tabpanel"
            aria-labelledby={`case-tab-${active.id}`}
          >
            <div className="case-paper-stack">
              <span className="case-paper-back" aria-hidden="true" />
              <article className="case-file" key={active.id}>
                <span className="case-file-clip" aria-hidden="true">
                  <Paperclip size={34} strokeWidth={1.4} />
                </span>
                <span className="case-file-stamp" aria-hidden="true">
                  Representative case
                </span>

                <header className="case-file-head">
                  <div className="case-file-meta">
                    <span className="case-file-label">
                      Case file {active.id}
                    </span>
                    <span className="case-file-service">{active.service}</span>
                  </div>
                  <p className="case-file-profile">{active.profile}</p>
                  <h3>{active.title}</h3>
                </header>

                <ol className="case-journey">
                  {journeySteps.map((step, index) => (
                    <li
                      className="case-journey-step"
                      key={step.key}
                      style={{ "--step": index }}
                    >
                      <span className="case-journey-node" aria-hidden="true">
                        {index + 1}
                      </span>
                      <span className="case-journey-label">{step.label}</span>
                      <p>{active[step.key]}</p>
                    </li>
                  ))}
                </ol>

                <footer className="case-file-foot">
                  <button
                    type="button"
                    className="case-file-next"
                    onClick={() => selectCase(nextIndex)}
                  >
                    Next case: {caseStudies[nextIndex].service}
                    <ArrowRight size={16} strokeWidth={1.8} aria-hidden="true" />
                  </button>
                </footer>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
