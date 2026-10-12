import {
  Award,
  BadgeCheck,
  CheckCircle2,
  Cpu,
  GraduationCap,
  Microscope,
  Newspaper,
  Users,
} from "lucide-react";
import AboutHero from "../../components/AboutHero/AboutHero";
import CareerTimeline from "../../components/CareerTimeline/CareerTimeline";
import Memberships from "../../components/Memberships/Memberships";
import Publications from "../../components/Publications/Publications";
import "./AboutPage.css";

const aboutSummary = [
  "Dr. Sarbartha Kumar Pratihar is a Consultant in Urooncology and Robotic Surgery at RGCIRC, Delhi, with focused expertise in cancer surgery of the urinary and male reproductive systems.",
  "His work combines open, laparoscopic, and robotic-assisted uro-oncology care, with advanced training at RGCIRC and certification as a console surgeon on the DaVinci robotic surgical system.",
  "Alongside clinical practice, he has contributed to robotic surgery research, SSI Mantra development trials, conference teaching, and peer-reviewed urological publications.",
];

const aboutHighlights = [
  { label: "Practice", value: "RGCIRC, Delhi" },
  { label: "Focus", value: "Uro-oncology" },
  { label: "Method", value: "Robotic + minimally invasive surgery" },
];

const procedurePillars = [
  {
    code: "01",
    title: "Prostate & bladder cancer",
    copy: "Robotic radical prostatectomy, radical cystectomy, urinary diversion, and reconstruction-led planning.",
  },
  {
    code: "02",
    title: "Kidney & upper tract tumors",
    copy: "Radical nephrectomy, nephron-sparing surgery, and radical nephroureterectomy through open, laparoscopic, or robotic routes.",
  },
  {
    code: "03",
    title: "Penile, testicular & nodal disease",
    copy: "Penectomy procedures, retroperitoneal lymph node dissection, inguinal lymph node surgery, and RA-VEIL.",
  },
];

const techniqueNotes = [
  "MRI Fusion transperineal prostate biopsy",
  "TURP and TURBT",
  "Diagnostic and therapeutic uro-oncology procedures",
];

const journeyHighlights = {
  robotics: [
    "Involved in trials for the SSI Mantra robotic surgical system, India's indigenous surgical robot.",
    "Among the early surgeons to perform robotic surgery on the SSI Mantra platform.",
    "Part of India's first telesurgery animal trial using the SSI Mantra robotic surgical system.",
  ],
  academic: [
    "Training in Urooncology and Robotic Surgery at RGCIRC, New Delhi.",
    "Certified Console Surgeon on the Intuitive DaVinci Robotic Surgical System.",
  ],
  visibility: [
    "Paper and video presentations at national and international conferences.",
    "Invited faculty for paper and video presentations at national conferences.",
    "Awards for presentations at national and international forums.",
  ],
};

const journeyStats = [
  { value: "SSI", label: "Mantra robotic platform" },
  { value: "DaVinci", label: "Console certification" },
  { value: "Faculty", label: "Conference teaching" },
];

const academicHonors = [
  "Honours marks in Forensic and State medicine, Preventive and Social Medicine (MBBS)",
  "Awarded Gold Medalist in General Surgery (MBBS)",
  "University second position in MS General Surgery",
];

const conferenceHonors = [
  {
    year: "2018",
    place: "Shillong",
    title: "First prize, moderated video presentation",
    detail:
      "28th annual conference of Urological Society of India-East Zone Chapter, 1st-3rd November.",
  },
  {
    year: "2019",
    place: "Sonapur",
    title: "First prize, paper presentation",
    detail:
      "14th Annual Conference of Assam Urological Society, 29th-30th June.",
  },
  {
    year: "2019",
    place: "Sonapur",
    title: "Second prize, URO QUIZ",
    detail:
      "14th Annual Conference of Assam Urological Society, 29th-30th June.",
  },
  {
    year: "2019",
    place: "Ranchi",
    title: "First prize, moderated video",
    detail:
      "29th Annual Conference of East zone chapter-The Urological Society of India, 18th-19th October.",
  },
];

const featuredHonors = [
  {
    label: "Poster",
    title: "2nd best poster",
    detail:
      "Cutaneous radiation associated Angiosarcoma Lower Abdomen after Carcinoma Penis Treatment: A Rare Case Report.",
    event: "North Zone USI conference, Bikaner, Rajasthan, 28th-30th October, 2022",
  },
  {
    label: "Video",
    title: "Best video",
    detail:
      "Robot Assisted Video Endoscopic Inguinal Lymphadenectomy (RA-VEIL) by lateral approach: a unique approach, tips and tricks.",
    event: "North Zone USI conference, Bikaner, Rajasthan, 28th-30th October, 2022",
  },
  {
    label: "SIU",
    title: "Best Moderated Video eposter",
    detail: "Robotic VEIL lateral approach.",
    event: "42nd SIU 2022 Congress, Montreal, Canada, November 9th-13th, 2022",
  },
];

const SectionHeader = ({ icon: Icon, eyebrow, title, copy }) => (
  <div className="about-section-header">
    <span className="about-section-kicker">
      <Icon size={17} aria-hidden="true" />
      {eyebrow}
    </span>
    <h2>{title}</h2>
    {copy && <p>{copy}</p>}
  </div>
);

const RecognitionEmblem = () => (
  <div className="recognition-emblem" aria-hidden="true">
    <svg viewBox="0 0 180 180" role="img">
      <circle className="emblem-disc" cx="90" cy="78" r="49" />
      <circle className="emblem-orbit orbit-one" cx="90" cy="78" r="54" />
      <circle className="emblem-orbit orbit-two" cx="90" cy="78" r="38" />
      <path
        className="emblem-rays"
        d="M90 14 99 42 128 31 117 60 147 70 118 82 133 109 102 102 90 132 78 102 47 109 62 82 33 70 63 60 52 31 81 42Z"
      />
      <circle className="emblem-core" cx="90" cy="78" r="24" />
      <path
        className="emblem-check"
        d="M78 77.5 86 85.5 103 68.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path className="emblem-ribbon left" d="M72 122 58 166 88 150 90 126Z" />
      <path className="emblem-ribbon right" d="M108 122 122 166 92 150 90 126Z" />
    </svg>
  </div>
);

const ProfilePracticeMark = () => (
  <svg className="about-profile-emblem" viewBox="0 0 160 160" aria-hidden="true">
    <circle className="profile-emblem-orbit" cx="80" cy="80" r="62" />
    <circle className="profile-emblem-soft" cx="80" cy="80" r="43" />
    <path className="profile-emblem-arc" d="M39 93c12 23 45 30 66 13" />
    <path className="profile-emblem-arc accent" d="M55 48c20-15 51-9 65 12" />
    <path
      className="profile-emblem-line"
      d="M80 35v90M35 80h90"
    />
    <path
      className="profile-emblem-tool"
      d="M58 99 96 61l9 9-38 38-16 7z"
    />
    <circle className="profile-emblem-core" cx="80" cy="80" r="10" />
    <circle className="profile-emblem-dot" cx="43" cy="80" r="4" />
    <circle className="profile-emblem-dot" cx="117" cy="80" r="4" />
  </svg>
);

const AboutPage = () => {
  return (
    <main className="about-page">
      <AboutHero />

      <section className="about-section about-profile-section">
        <SectionHeader
          icon={BadgeCheck}
          eyebrow="About"
          title="A Focused Surgical Practice"
          copy="A concise profile of the doctor, his clinical focus, and the kind of work this practice is built around."
        />
        <div className="about-story-layout">
          <div className="about-story-mark" aria-hidden="true">
            <ProfilePracticeMark />
            <small>Profile Note</small>
          </div>

          <div className="about-story-copy">
            <p className="about-story-lead">
              Cancer-focused urology, robotic precision, and research-led care.
            </p>
            {aboutSummary.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="about-story-notes" aria-label="About highlights">
            {aboutHighlights.map((highlight) => (
              <div key={highlight.label}>
                <span>{highlight.label}</span>
                <strong>{highlight.value}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-section about-specialized-section">
        <SectionHeader
          icon={Microscope}
          eyebrow="Specialized Areas"
          title="Procedures & Focus Areas"
          copy="A broad uro-oncology operative portfolio across open, laparoscopic, robotic, diagnostic, and therapeutic care."
        />
        <div className="procedure-composition">
          <article className="procedure-feature">
            <span>Core surgical language</span>
            <h3>Robotic uro-oncology for complex cancer surgery</h3>
            <p>
              The practice centers on minimally invasive precision where it
              improves planning, access, reconstruction, and recovery, while
              keeping open and laparoscopic approaches available when they are
              clinically stronger choices.
            </p>
            <div className="procedure-feature-tags" aria-label="Surgical modes">
              <span>Robotic</span>
              <span>Open</span>
              <span>Laparoscopic</span>
            </div>
          </article>

          <div className="procedure-map" aria-label="Procedure focus groups">
            {procedurePillars.map((pillar) => (
              <section key={pillar.title}>
                <span>{pillar.code}</span>
                <h3>{pillar.title}</h3>
                <p>{pillar.copy}</p>
              </section>
            ))}
          </div>

          <aside className="procedure-technique-note">
            <span>Technique desk</span>
            <h3>Diagnostic + endoscopic capabilities</h3>
            <ul>
              {techniqueNotes.map((note) => (
                <li key={note}>{note}</li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="about-section about-education-section">
        <SectionHeader
          icon={GraduationCap}
          eyebrow="Education & Career"
          title="Training to Practice"
          copy="Medical school, surgical residency, super-specialty training, and robotic certification, side by side with the clinical roles they led to."
        />
        <CareerTimeline />
      </section>

      <section className="about-section about-journey-section">
        <SectionHeader
          icon={Cpu}
          eyebrow="Professional Journey"
          title="Robotic Milestones"
        />
        <div className="journey-board">
          <article className="journey-robotics">
            <span>Robotic systems</span>
            <h3>Early work with indigenous robotic surgery</h3>
            <p>{journeyHighlights.robotics[0]}</p>
            <div className="journey-robotics-list">
              {journeyHighlights.robotics.slice(1).map((item) => (
                <div key={item}>
                  <CheckCircle2 size={16} aria-hidden="true" />
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </article>

          <div className="journey-stat-strip" aria-label="Journey highlights">
            {journeyStats.map((stat) => (
              <div key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>

          <article className="journey-academic">
            <span>Training + certification</span>
            {journeyHighlights.academic.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </article>

          <article className="journey-visibility">
            <span>Conference visibility</span>
            <ul>
              {journeyHighlights.visibility.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="about-section about-awards-section">
        <SectionHeader
          icon={Award}
          eyebrow="Awards"
          title="Recognition Board"
        />
        <div className="recognition-board">
          <aside className="recognition-summary">
            <span>Academic to international</span>
            <RecognitionEmblem />
            <p>
              Recognitions across medical training, regional urological forums,
              North Zone USI sessions, and SIU 2022 in Montreal.
            </p>
          </aside>

          <div className="academic-honor-strip">
            {academicHonors.map((honor) => (
              <div key={honor}>
                <span>Academic honor</span>
                <p>{honor}</p>
              </div>
            ))}
          </div>

          <div className="featured-honors">
            {featuredHonors.map((honor) => (
              <article key={honor.title}>
                <span>{honor.label}</span>
                <h3>{honor.title}</h3>
                <p>{honor.detail}</p>
                <small>{honor.event}</small>
              </article>
            ))}
          </div>

          <ol className="conference-honor-timeline">
            {conferenceHonors.map((honor) => (
              <li key={`${honor.year}-${honor.place}-${honor.title}`}>
                <time>{honor.year}</time>
                <div>
                  <span>{honor.place}</span>
                  <h3>{honor.title}</h3>
                  <p>{honor.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="about-section about-publications-section" id="research">
        <SectionHeader
          icon={Newspaper}
          eyebrow="Publication"
          title="Research & Scholarly Work"
          copy="Published and presented work spanning uro-oncology, robotic surgery, prostate cancer diagnostics, and complex surgical case reports."
        />
        <Publications />
      </section>

      <section className="about-section about-membership-section">
        <SectionHeader
          icon={Users}
          eyebrow="Membership"
          title="Professional Associations"
        />
        <Memberships />
      </section>
    </main>
  );
};

export default AboutPage;
