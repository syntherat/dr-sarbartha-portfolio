import { Link } from "react-router-dom";
import { services } from "../../data/services";
import "./ServiceDetail.css";

const ServiceDetail = ({ service }) => {
  const relatedServices = services.filter((item) => item.slug !== service.slug);

  return (
    <main className="service-detail-page">
      <section className="service-detail-hero">
        <div className="service-detail-hero-copy">
          <Link to="/#services" className="service-back-link">
            Back to services
          </Link>
          <div className="service-detail-kicker">{service.category}</div>
          <h1>{service.title}</h1>
          <p>{service.summary}</p>
        </div>
        <div className="service-detail-image">
          <img src={service.image} alt={service.imageAlt} />
        </div>
      </section>

      <section className="service-detail-content">
        <div className="service-overview">
          <span className="detail-label">Overview</span>
          <p>{service.overview}</p>
        </div>

        <div className="service-detail-panel">
          <span className="detail-label">Care Path</span>
          <ol>
            {service.carePath.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </div>

        <div className="service-detail-panel">
          <span className="detail-label">Focus Areas</span>
          <div className="detail-focus-list">
            {service.focus.map((focus) => (
              <span key={focus}>{focus}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="related-services">
        <div>
          <span className="detail-label">More Services</span>
          <h2>Urologic oncology expertise</h2>
        </div>
        <div className="related-grid">
          {relatedServices.slice(0, 4).map((item) => (
            <Link key={item.slug} to={`/services/${item.slug}`}>
              <img src={item.image} alt={item.imageAlt} />
              <span>{item.title}</span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
};

export default ServiceDetail;
