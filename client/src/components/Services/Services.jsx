import { services } from "../../data/services";
import "./Services.css";

const bentoSizes = [
  "feature",
  "tall",
  "compact",
  "compact",
  "wide",
  "compact",
  "compact",
];

const serviceDividers = {
  top: {
    sage:
      "M0 130 L0 46 C156 44 254 63 398 58 C548 53 630 30 780 42 C924 54 1010 42 1156 36 C1278 31 1354 42 1440 33 L1440 130 Z",
    shadow:
      "M0 130 L0 56 C154 54 260 74 404 68 C552 62 632 42 780 52 C920 62 1016 52 1158 46 C1284 41 1356 52 1440 43 L1440 130 Z",
    fill:
      "M0 130 L0 63 C154 61 262 82 406 76 C552 70 634 51 780 60 C922 69 1018 60 1158 54 C1288 49 1358 60 1440 51 L1440 130 Z",
  },
  bottom: {
    sage:
      "M0 130 L0 38 C142 50 244 34 394 45 C544 56 632 44 778 40 C920 36 1012 58 1154 45 C1280 34 1356 43 1440 36 L1440 130 Z",
    shadow:
      "M0 130 L0 49 C140 60 246 45 396 55 C542 65 632 54 778 50 C920 46 1012 68 1154 55 C1280 45 1358 53 1440 47 L1440 130 Z",
    fill:
      "M0 130 L0 57 C140 70 248 55 398 64 C542 73 632 62 778 59 C920 56 1012 78 1154 64 C1282 54 1360 62 1440 56 L1440 130 Z",
  },
};

const ServicesDivider = ({ placement }) => {
  const divider = serviceDividers[placement];

  return (
    <div className={`services-divider ${placement}`} aria-hidden="true">
      <svg viewBox="0 0 1440 130" preserveAspectRatio="none">
        <path className="divider-sage" d={divider.sage} />
        <path className="divider-shadow" d={divider.shadow} />
        <path className="divider-fill" d={divider.fill} />
      </svg>
    </div>
  );
};

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
            <a
              key={service.slug}
              className={`service-card ${bentoSizes[index]}`}
              href={`/services/${service.slug}`}
              aria-label={`Open ${service.title} service page`}
            >
              <div className="service-card-image">
                <img src={service.image} alt={service.imageAlt} />
              </div>
              <div className="service-card-body">
                <div className="service-card-topline">
                  <span>{service.id}</span>
                  <span>{service.category}</span>
                </div>
                <h3>{service.title}</h3>
                <p>{service.summary}</p>
                <div className="service-focus-list">
                  {service.focus.map((focus) => (
                    <span key={focus}>{focus}</span>
                  ))}
                </div>
              </div>
              <div className="service-card-action" aria-hidden="true">
                View
              </div>
            </a>
          ))}
        </div>
      </div>

      <ServicesDivider placement="bottom" />
    </section>
  );
};

export default Services;
