import { ArrowDown, ArrowRight, Stethoscope } from "lucide-react";
import { Link } from "react-router-dom";
import doctorPortrait from "../../assets/drskp-pfp.jpg";
import "./AboutHero.css";

const credentials = [
  { value: "RGCIRC", label: "Consultant in Delhi" },
  { value: "DaVinci", label: "Certified console surgeon" },
  { value: "SSI", label: "Mantra robot early adopter" },
];

const profileFields = [
  { label: "Specialty", value: "Uro-oncology" },
  { label: "Practice", value: "RGCIRC, Delhi" },
  { label: "Method", value: "Robotic + minimally invasive surgery" },
  { label: "Certified", value: "DaVinci console surgeon" },
];

const ProfileStamp = () => (
  <svg className="about-hero-stamp" viewBox="0 0 120 120" aria-hidden="true">
    <defs>
      <path id="about-hero-stamp-ring" d="M60 60m-41 0a41 41 0 1 1 82 0a41 41 0 1 1-82 0" />
    </defs>
    <circle cx="60" cy="60" r="56" />
    <circle cx="60" cy="60" r="51" />
    <circle cx="60" cy="60" r="30" />
    <text>
      <textPath href="#about-hero-stamp-ring" startOffset="0">
        Uro-oncology · Robotic surgery · RGCIRC ·
      </textPath>
    </text>
    <text className="about-hero-stamp-core" x="60" y="66" textAnchor="middle">
      SKP
    </text>
  </svg>
);

const AboutHero = () => (
  <section className="about-hero">
    <div className="about-hero-copy">
      <p className="about-hero-kicker">
        <Stethoscope size={16} aria-hidden="true" />
        About the surgeon
      </p>
      <h1>
        Dr. Sarbartha <em>Kumar Pratihar</em>
      </h1>
      <p className="about-hero-role">
        Consultant, Urooncology &amp; Robotic Surgery
        <span>RGCIRC, Delhi</span>
      </p>
      <p className="about-hero-lede">
        Uro-oncology and robotic surgery specialist at RGCIRC, Delhi, combining
        academic rigor, surgical innovation, and cancer-focused patient care.
      </p>

      <div className="about-hero-actions">
        <Link to="/#schedule" className="about-hero-primary">
          Book a consultation
          <ArrowRight size={17} aria-hidden="true" />
        </Link>
        <a href="#research" className="about-hero-secondary">
          Research &amp; publications
          <ArrowDown size={16} aria-hidden="true" />
        </a>
      </div>

      <dl className="about-hero-credentials" aria-label="Professional highlights">
        {credentials.map((item) => (
          <div key={item.label}>
            <dt>{item.label}</dt>
            <dd>{item.value}</dd>
          </div>
        ))}
      </dl>
    </div>

    <figure className="about-hero-sheet">
      <div className="about-hero-sheet-paper">
        <header className="about-hero-sheet-head">
          <span>Consultant profile</span>
          <span>Uro-oncology</span>
        </header>

        <div className="about-hero-sheet-body">
          <div className="about-hero-photo">
            <span className="about-hero-clip" aria-hidden="true" />
            <img
              src={doctorPortrait}
              alt="Dr. Sarbartha Kumar Pratihar"
              width="224"
              height="224"
            />
            <figcaption>Dr. S. K. Pratihar</figcaption>
          </div>

          <dl className="about-hero-fields">
            {profileFields.map((field) => (
              <div key={field.label}>
                <dt>{field.label}</dt>
                <dd>{field.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <footer className="about-hero-sheet-foot">
          <p>Precision-led cancer surgery</p>
          <ProfileStamp />
        </footer>
      </div>
    </figure>
  </section>
);

export default AboutHero;
