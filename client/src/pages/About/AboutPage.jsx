import {
  Award,
  BadgeCheck,
  Briefcase,
  CheckCircle2,
  Cpu,
  GraduationCap,
  Microscope,
  Newspaper,
  Stethoscope,
  Users,
} from "lucide-react";
import assamUrologicalStamp from "../../assets/assam-urological-society.png";
import surgeonsAssociationStamp from "../../assets/association-of-surgeons.png";
import doctorPortrait from "../../assets/drskp-pfp.jpg";
import eauStamp from "../../assets/eau.png";
import siuStamp from "../../assets/siu.jpg";
import usiStamp from "../../assets/usi.jpg";
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

const education = [
  {
    period: "2006 - 2012",
    title: "MBBS",
    detail:
      "Nilratan Sircar Medical College Hospital, Kolkata, West Bengal, including 1 year of internship.",
  },
  {
    period: "2013 - 2016",
    title: "MS General Surgery",
    detail:
      "Nilratan Sircar Medical College Hospital, Kolkata, West Bengal. University second.",
  },
  {
    period: "2017 - 2020",
    title: "M.Ch Urology",
    detail: "Gauhati Medical College and Hospital, Assam.",
  },
  {
    period: "Certified",
    title: "DaVinci Surgical Robotic System",
    detail: "Certified console surgeon in the DaVinci surgical robotic system.",
  },
];

const experience = [
  {
    period: "2023 - till date",
    title: "Consultant, Urooncology and Robotic Surgery",
    place: "RGCIRC, Delhi",
  },
  {
    period: "2020 - 2023",
    title: "Attending Consultant, Urooncology and Robotic Surgery",
    place: "RGCIRC, Delhi",
  },
  {
    period: "2017 - 2020",
    title: "Sr. Resident, Urology and Renal Transplant",
    place: "Gauhati Medical College Hospital, Guwahati",
  },
  {
    period: "2016 - 2017",
    title: "Sr. Resident, General Surgery",
    place: "NRSMCH, Kolkata",
  },
  {
    period: "2013 - 2016",
    title: "Jr. Resident, General Surgery",
    place: "NRSMCH, Kolkata",
  },
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

const publications = [
  "Double penile fracture with complete urethral disruption following anal intercourse: a case report. Sasanka K. Barua, Sarbartha Kumar Pratihar, Rajeev T. P., Saumar J. Baruah, Puskal K. Bagchi, Debanga Sarma, Mandeep Phukan, Nikhil Saurabh. International Surgery Journal, [S.l.], v. 6, n. 7, p. 2602-2604, June 2019.",
  "Cervical lymphadenopathy as initial presentation of genito-urinary cancer. Barua SK, Pratihar SK, Kaman PK, Garg A, Rajeev TP, Baruah SJ, et al. Int J Otorhinolaryngol Head Neck Surg 2019;5:1739-44.",
  "Duplex kidney anomalies and associated pathology: a single centre retrospective review. Sarma D, Pratihar SK, Rajeev TP, Barua SK, Bagchi PK, Phukan M. Int Surg J 2020;7:76-82.",
  "A Comparative Study between Holmium Laser, Pneumatic Lithotripsy and Shock Pulse in Terms of Efficacy and Safety in Percutaneous Nephrolithotomy (PCNL): A Prospective Randomised Study. T P. Rajeev, Pratihar S. K., Sarma D., Baruah S. J., Barua K., Bagchi P. K., & Phukan M. Journal of Endoluminal Endourology, 3(1), e1-e8.",
  "An audit of management of male urethral stricture and its outcome: a single centre retrospective review. Puskal Kumar Bagchi, Sarbartha Kumar Pratihar, Rajeev TP, Sasanka Kumar Barua, Debanga Sarma, Mandeep Phukan. Int Surg J 2020;7:774-80.",
  "Pratihar, S.K., Khanna, A., Chakraborty, A. et al. Cutaneous Radiation-Associated Angiosarcoma After Treatment of Carcinoma Penis: First Report from Tertiary Cancer Centre of North India. Indian J Surg Oncol (2023). https://doi.org/10.1007/s13193-023-01766-0",
  "Singh A, Khanna A, Jaipuria J, Gupta S, Pratihar SK, Vasudeo V, Gupta R, Rawal SK. Robotic re-exploration for post-operative in house complications following robotic pelvic uro-oncologic surgery: Initial experience, tips and tricks. J Minim Access Surg. 2023 Jan-Mar;19(1):95-100. doi: 10.4103/jmas.jmas_1_22",
  "Vasudeo V, Khanna A, Pratihar SK, Jaipuria J, Chakraborty A, Rawal SK, Singh A. Robot-assisted retroperitoneal lymph node dissection for post-chemotherapy residual mass in testicular cancer: Long-term experience from a tertiary care centre. J Minim Access Surg. 2023 Apr-Jun;19(2):288-295. doi: 10.4103/jmas.jmas_141_22",
  "Pratihar SK, Khanna A, Vasudeo V, et al. Prostate cancer detection using magnetic resonance imaging-transrectal ultrasound fusion biopsy: A retrospective cohort study. Indian J Urol. 2023;39(4):297-302. doi:10.4103/iju.iju_147_23",
  "Vasudeo, V., Singh, A., Khanna, A., Rawal, S. K., Pratihar, S. K., Saurabh, N., Kumar, B., Ali, M., Sharma, P., Akotkar, S., Sharma, G., & Kesarwani, B. Surgical and oncological outcomes of robot-assisted versus laparoscopic radical nephroureterectomy for upper-tract urothelial carcinoma: A single-center comparative analysis. Indian Journal of Urology, 39(4), 285-291. https://doi.org/10.4103/iju.iju_128_23",
  "Rawal SK, Khanna A, Singh A, Jindal T, Sk R, Kumar B, Taori R, Pratihar SK, Vasudeo V, Saurabh N, Ali M, Malla I, Adhikari K. Robot-Assisted Video Endoscopic Inguinal Lymph Node Dissection for Penile Cancer: An Indian Multicenter Experience. J Endourol. 2024 May 7. doi: 10.1089/end.2023.0719. Epub ahead of print. PMID: 38661519.",
  "Saurabh, Nikhil & Khanna, Ashish & Singh, Amitabh & Pratihar, Sarbartha & Vasudeo, V. & Rawal, S. Misidentifying Superior Mesenteric Artery (SMA) as left renal artery during robot assisted laparoscopic left Nephron Sparing Surgery (NSS): Prevention and management - points to learn. European Urology Open Science. 55. S236. 10.1016/S2666-1683(23)00590-6.",
  "Rawal, S. & Khanna, Ashish & Singh, Amitabh & Vasudev, V. & Pratihar, Sarbartha & Saurabh, Nikhil & Kumar, Bhuwan & Ali, M. Initial experience of robot assisted radical prostatectomy with mantra tm multiarm robotic platform. European Urology Open Science. 55. S78. 10.1016/S2666-1683(23)00452-4.",
  "Saurabh, Nikhil & Singh, Amitabh & Khanna, Ashish & Vasudeo, V. & Pratihar, Sarbartha & Rawal, S. Robotic radical nephrectomy with level I-II inferior vena cava tumour thrombectomy - insight from our initial experience. European Urology Open Science. 55. S238. 10.1016/S2666-1683(23)00592-X.",
  "Singh, Amitabh & Khanna, Ashish & Pratihar, Sarbartha & Vasudev, Vivek & Saurabh, Nikhil & Rawal, Sudhir. MP68-12 our early clinical experience with mantra tm multi arm surgical robotic system (ss innovations group company) in major uro-oncological surgeries. Journal of Urology. 209. 10.1097/JU.0000000000003331.12.",
  "Singh, Amitabh & Khanna, Ashish & Vasudev, V. & Pratihar, Sarbartha & Saurabh, Nikhil & Rawal, S. Comparison of long term functional and oncological outcomes of robot assisted video endoscopic inguinal lymph node dissection between clinically non-palpable and palpable inguinal lymphadenopathy. European Urology. 83. S910. 10.1016/S0302-2838(23)00688-7.",
  "Chakraborty, Arnab & Khanna, Ashish & Vasudeo, Vivek & Pratihar, Sarbartha & Singh, Amitabh & Rawal, Sudhir. Enzalutamide-Induced Acute Maculopapular Rash in Treatment of Metastatic Prostate Cancer: First Case Report from a Tertiary Cancer Care Center of North India. Indian Journal of Surgical Oncology. 14. 1-5. 10.1007/s13193-023-01719-7.",
];

const publicationFolders = [
  {
    tab: "Folder 01",
    title: "Indexed Journal Papers",
    note: "Peer-reviewed articles, surgical audits, diagnostic studies, and case reports.",
    items: [...publications.slice(0, 11), publications[16]],
  },
  {
    tab: "Folder 02",
    title: "Conference Science",
    note: "Robotic surgery abstracts and presented academic work from international forums.",
    items: publications.slice(11, 16),
  },
];

const memberships = [
  {
    code: "USI",
    name: "Urological Society of India",
    note: "National urology society",
    stamp: usiStamp,
  },
  {
    code: "AUS",
    name: "Assam Urological Society",
    note: "Regional urology community",
    stamp: assamUrologicalStamp,
  },
  {
    code: "EAU",
    name: "European Association of Urology",
    note: "International urology forum",
    stamp: eauStamp,
  },
  {
    code: "SIU",
    name: "Societe Internationale d'Urologie",
    note: "Global urological society",
    stamp: siuStamp,
  },
  {
    code: "ASI",
    name: "Association of Surgeons of India",
    note: "Surgical professional body",
    stamp: surgeonsAssociationStamp,
  },
];

const stats = [
  { value: "RGCIRC", label: "Consultant in Delhi" },
  { value: "DaVinci", label: "Certified console surgeon" },
  { value: "SSI", label: "Mantra robot early adopter" },
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

const AboutPage = () => {
  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="about-hero-copy">
          <span className="about-eyebrow">
            <Stethoscope size={17} aria-hidden="true" />
            Consultant profile
          </span>
          <h1>About Dr. Sarbartha Kumar Pratihar</h1>
          <p>
            Uro-oncology and robotic surgery specialist at RGCIRC, Delhi,
            combining academic rigor, surgical innovation, and cancer-focused
            patient care.
          </p>
          <div className="about-hero-stats" aria-label="Professional highlights">
            {stats.map((stat) => (
              <div key={stat.label}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <aside className="about-portrait-card">
          <div className="about-portrait-frame">
            <img src={doctorPortrait} alt="Dr. Sarbartha Kumar Pratihar" />
          </div>
          <div>
            <span>Urooncology + Robotic Surgery</span>
            <h2>Precision-led cancer surgery</h2>
          </div>
        </aside>
      </section>

      <section className="about-section about-profile-section">
        <SectionHeader
          icon={BadgeCheck}
          eyebrow="About"
          title="A Focused Surgical Practice"
          copy="A concise profile of the doctor, his clinical focus, and the kind of work this practice is built around."
        />
        <div className="about-story-layout">
          <div className="about-story-mark" aria-hidden="true">
            <span>01</span>
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
          eyebrow="Educational Background"
          title="Training Path"
        />
        <div className="about-record-grid">
          {education.map((item) => (
            <article className="about-record-card" key={`${item.period}-${item.title}`}>
              <span>{item.period}</span>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-section about-experience-section">
        <SectionHeader icon={Briefcase} eyebrow="Experience" title="Clinical Roles" />
        <div className="clinical-track">
          {experience.map((item) => (
            <article key={`${item.period}-${item.title}`}>
              <time>{item.period}</time>
              <div>
                <h3>{item.title}</h3>
                <p>{item.place}</p>
              </div>
            </article>
          ))}
        </div>
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

      <section className="about-section about-publications-section">
        <SectionHeader
          icon={Newspaper}
          eyebrow="Publication"
          title="Research & Scholarly Work"
          copy="Published and presented work spanning uro-oncology, robotic surgery, prostate cancer diagnostics, and complex surgical case reports."
        />
        <div className="research-desk">
          <aside className="research-catalog">
            <div className="catalog-folder-icon" aria-hidden="true">
              <span />
            </div>
            <span>Research archive</span>
            <h3>Evidence from uro-oncology, robotics, and surgical outcomes.</h3>
            <div className="research-catalog-meta">
              <div>
                <strong>{publications.length}</strong>
                <small>Total records</small>
              </div>
              <div>
                <strong>2</strong>
                <small>Folders</small>
              </div>
            </div>
          </aside>

          <div className="research-folder-stack">
            {publicationFolders.map((folder) => (
              <section className="research-folder" key={folder.title}>
                <div className="research-folder-tab">
                  <span>{folder.tab}</span>
                  <h3>{folder.title}</h3>
                  <p>{folder.note}</p>
                  <small>{folder.items.length} documents</small>
                </div>

                <div className="research-documents">
                  {folder.items.map((publication, index) => (
                    <article className="research-document" key={publication}>
                      <span className="document-number">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <p>{publication}</p>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="about-section about-membership-section">
        <SectionHeader
          icon={Users}
          eyebrow="Membership"
          title="Professional Associations"
        />
        <div className="membership-registry">
          <aside className="membership-registry-note">
            <span>Society Registry</span>
            <h3>Credential marks across urology and surgical communities.</h3>
            <p>
              A compact record of the professional bodies connected to his
              clinical, academic, and surgical practice.
            </p>
            <div className="membership-note-stamps" aria-hidden="true">
              {memberships.slice(0, 3).map((membership) => (
                <img
                  src={membership.stamp}
                  alt=""
                  key={membership.code}
                  loading="lazy"
                />
              ))}
            </div>
          </aside>

          <div className="membership-stamp-wall" aria-label="Professional societies">
            {memberships.map((membership) => (
              <article className="membership-stamp" key={membership.code}>
                <img
                  className="membership-stamp-watermark"
                  src={membership.stamp}
                  alt=""
                  loading="lazy"
                />
                <span>{membership.code}</span>
                <h3>{membership.name}</h3>
                <p>{membership.note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
