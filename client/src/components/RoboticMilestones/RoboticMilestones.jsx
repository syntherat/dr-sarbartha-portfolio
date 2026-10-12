import "./RoboticMilestones.css";

const logEntries = [
  {
    tag: "Development trials",
    text: "Involved in trials for the SSI Mantra robotic surgical system, India's indigenous surgical robot.",
  },
  {
    tag: "Early adopter",
    text: "Among the early surgeons to perform robotic surgery on the SSI Mantra platform.",
  },
  {
    tag: "Telesurgery",
    text: "Part of India's first telesurgery animal trial using the SSI Mantra robotic surgical system.",
    mark: "India's first",
  },
];

const certificate = {
  title: "Certified Console Surgeon",
  system: "Intuitive DaVinci Robotic Surgical System",
  training: "Training in Urooncology and Robotic Surgery at RGCIRC, New Delhi.",
};

const conferencePasses = [
  {
    role: "Presenter",
    text: "Paper and video presentations at national and international conferences.",
  },
  {
    role: "Invited faculty",
    text: "Invited faculty for paper and video presentations at national conferences.",
  },
  {
    role: "Awardee",
    text: "Awards for presentations at national and international forums.",
  },
];

const RoboticMilestones = () => (
  <div className="milestones">
    <article className="milestones-logbook">
      <header className="milestones-logbook-head">
        <span>Robotic surgery logbook</span>
        <span>Platform: SSI Mantra</span>
      </header>
      <h3>Early work with indigenous robotic surgery</h3>

      <ol className="milestones-log">
        {logEntries.map((entry, index) => (
          <li key={entry.tag}>
            <span className="milestones-log-number">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div>
              <span className="milestones-log-tag">{entry.tag}</span>
              <p>{entry.text}</p>
            </div>
            {entry.mark && (
              <span className="milestones-log-mark">{entry.mark}</span>
            )}
          </li>
        ))}
      </ol>
      <span className="milestones-logbook-watermark" aria-hidden="true">
        SSI
      </span>
    </article>

    <article className="milestones-certificate">
      <div className="milestones-certificate-frame">
        <span className="milestones-certificate-label">Training + certification</span>
        <h3>{certificate.title}</h3>
        <p className="milestones-certificate-system">{certificate.system}</p>
        <p className="milestones-certificate-training">{certificate.training}</p>
        <div className="milestones-certificate-foot">
          <span>DaVinci console</span>
          <svg className="milestones-seal" viewBox="0 0 100 100" aria-hidden="true">
            <path d="M50 4l6 8 10-3 3 10 10 2-1 10 9 6-5 9 5 9-9 6 1 10-10 2-3 10-10-3-6 8-6-8-10 3-3-10-10-2 1-10-9-6 5-9-5-9 9-6-1-10 10-2 3-10 10 3z" />
            <circle cx="50" cy="50" r="27" />
            <circle cx="50" cy="50" r="22" />
            <path className="milestones-seal-check" d="M40 50.5l7 7 14-14" />
          </svg>
        </div>
      </div>
    </article>

    <div className="milestones-passes">
      <h3 className="milestones-passes-title">Conference visibility</h3>
      <ul>
        {conferencePasses.map((pass, index) => (
          <li className="milestones-pass" key={pass.role}>
            <div className="milestones-pass-main">
              <span className="milestones-pass-kind">Conference pass</span>
              <strong>{pass.role}</strong>
              <p>{pass.text}</p>
            </div>
            <div className="milestones-pass-stub" aria-hidden="true">
              <span>No.</span>
              <strong>{String(index + 1).padStart(2, "0")}</strong>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default RoboticMilestones;
