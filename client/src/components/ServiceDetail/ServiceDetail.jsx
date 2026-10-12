import { Suspense, use } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import AskTheDoctor from "../AskTheDoctor/AskTheDoctor";
import KeyQuestions from "../KeyQuestions/KeyQuestions";
import SharedFaqLinks from "../SharedFaqLinks/SharedFaqLinks";
import { services } from "../../data/services";
import {
  getFaqBySlug,
  getFaqPath,
  getStarredQuestions,
  loadFaq,
} from "../../data/faq";
import "./ServiceDetail.css";

// The service's FAQ set is its own chunk; the rest of the page shows while it
// downloads.
const ServiceFaq = ({ entry }) => {
  const faq = use(loadFaq(entry));

  return (
    <>
      <KeyQuestions faq={faq} />
      <AskTheDoctor key={faq.slug} faq={faq} />
    </>
  );
};

// Pages with a FAQ open with the first starred questions, in the patient's
// own words, and keep the service content for after the FAQ.
// At most 3, and always fewer than the set has, so the hero never repeats the
// whole Key questions list (sets with 3 key questions show 2).
const HERO_QUESTION_COUNT = 3;

const HeroQuestions = ({ entry }) => {
  const faq = use(loadFaq(entry));
  const starred = getStarredQuestions(faq);
  const questions = starred.slice(
    0,
    Math.min(HERO_QUESTION_COUNT, starred.length - 1),
  );

  if (questions.length === 0) {
    return null;
  }

  return (
    <div className="service-hero-questions">
      <span className="detail-label">Patients often ask</span>
      <ul>
        {questions.map((question) => (
          <li key={question.id}>
            <Link to={`${getFaqPath(faq)}/${question.id}`}>
              <span>{question.question}</span>
              <ArrowUpRight size={18} strokeWidth={1.5} aria-hidden="true" />
            </Link>
          </li>
        ))}
      </ul>
      <a className="service-hero-all-questions" href="#faq">
        See every question
      </a>
    </div>
  );
};

const ServiceDetail = ({ service }) => {
  const relatedServices = services.filter((item) => item.slug !== service.slug);
  const faqEntry = getFaqBySlug(service.slug);
  const questionsFirst = Boolean(faqEntry);

  const serviceContent = (
    <section className="service-detail-content">
      {questionsFirst && (
        <header className="service-content-header">
          <span className="detail-label">From the doctor</span>
          <h2>How care is planned</h2>
        </header>
      )}
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
  );

  return (
    <main className="service-detail-page">
      <section
        className={`service-detail-hero${
          questionsFirst ? " service-detail-hero--questions" : ""
        }`}
      >
        <div className="service-detail-hero-copy">
          <Link to="/#services" className="service-back-link">
            Back to services
          </Link>
          <div className="service-detail-kicker">{service.category}</div>
          <h1>{service.title}</h1>
          <p>{service.summary}</p>
          {questionsFirst && (
            <Suspense fallback={null}>
              <HeroQuestions entry={faqEntry} />
            </Suspense>
          )}
        </div>
        <div className="service-detail-image">
          <img src={service.image} alt={service.imageAlt} />
        </div>
      </section>

      {!questionsFirst && serviceContent}

      {faqEntry && (
        <Suspense fallback={<div className="service-faq-loading" aria-busy="true" />}>
          <ServiceFaq key={faqEntry.slug} entry={faqEntry} />
        </Suspense>
      )}
      {questionsFirst && serviceContent}
      <SharedFaqLinks />

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
