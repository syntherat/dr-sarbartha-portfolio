import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { services } from "../../data/services";
import "./Services.css";

const bentoSizes = [
  "feature",
  "tall",
  "compact",
  "compact",
  "compact",
  "compact",
  "compact",
  "compact",
];

// Layered back to front: sage ribbon, peach hairline, soft shadow, then the
// section fill. The bottom divider is the same wave flipped (see Services.css).
const servicesWave = {
  sage:
    "M0 130 L0 38 C142 50 244 34 394 45 C544 56 632 44 778 40 C920 36 1012 58 1154 45 C1280 34 1356 43 1440 36 L1440 130 Z",
  line:
    "M0 44 C142 56 244 40 394 51 C544 62 632 50 778 46 C920 42 1012 64 1154 51 C1280 40 1356 49 1440 42",
  shadow:
    "M0 130 L0 49 C140 60 246 45 396 55 C542 65 632 54 778 50 C920 46 1012 68 1154 55 C1280 45 1358 53 1440 47 L1440 130 Z",
  fill:
    "M0 130 L0 57 C140 70 248 55 398 64 C542 73 632 62 778 59 C920 56 1012 78 1154 64 C1282 54 1360 62 1440 56 L1440 130 Z",
};

const ServicesDivider = ({ placement }) => (
  <div className={`services-divider ${placement}`} aria-hidden="true">
    <svg viewBox="0 0 1440 130" preserveAspectRatio="none">
      <path className="divider-sage" d={servicesWave.sage} />
      <path
        className="divider-line"
        d={servicesWave.line}
        vectorEffect="non-scaling-stroke"
      />
      <path className="divider-shadow" d={servicesWave.shadow} />
      <path className="divider-fill" d={servicesWave.fill} />
    </svg>
  </div>
);

const Services = () => {
  return (
    <section className="services-section" id="services">
      <ServicesDivider placement="top" />

      <div className="services-container">
        <div className="services-header">
          <div className="header-left">
            <span className="tag">Expertise</span>
            <h2 className="section-title">Specialized Care</h2>
          </div>
          <div className="header-right">
            <p className="header-desc">
              Focused urologic oncology care for complex cancers of the urinary
              and male reproductive systems.
            </p>
          </div>
        </div>

        <div className="services-directory">
          {services.map((service, index) => (
            <Link
              key={service.slug}
              className={`service-card ${bentoSizes[index]}`}
              to={`/services/${service.slug}`}
              aria-label={`Open ${service.title} service page`}
            >
              <div className="service-card-image">
                <img src={service.image} alt={service.imageAlt} loading="lazy" />
              </div>
              <div className="service-card-top" aria-hidden="true">
                <span className="service-card-number">{service.id}</span>
                <span className="service-card-arrow">
                  <ArrowUpRight size={18} strokeWidth={1.8} />
                </span>
              </div>
              <div className="service-card-body">
                <span className="service-card-category">{service.category}</span>
                <h3>{service.title}</h3>
                <p>{service.summary}</p>
                <ul className="service-focus-list">
                  {service.focus.map((focus) => (
                    <li key={focus}>{focus}</li>
                  ))}
                </ul>
              </div>
            </Link>
          ))}
        </div>

        <p className="services-patient-questions">
          Questions about robotic surgery, cost or travelling? Read the patient
          questions on{" "}
          <Link to="/patient-questions/robotic-surgery">robotic surgery</Link>{" "}
          and{" "}
          <Link to="/patient-questions/common-questions">
            questions common to every cancer
          </Link>
          .
        </p>
      </div>

      <ServicesDivider placement="bottom" />
    </section>
  );
};

export default Services;
