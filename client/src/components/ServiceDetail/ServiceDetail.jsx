import { Suspense, use } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import AskTheDoctor from "../AskTheDoctor/AskTheDoctor";
import KeyQuestions from "../KeyQuestions/KeyQuestions";
import SharedFaqLinks from "../SharedFaqLinks/SharedFaqLinks";
import { services } from "../../data/services";
import {
  doctorName,
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
              <span className="service-hero-question-text">
                {question.question}
              </span>
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
    <section className="service-care" aria-labelledby="service-care-title">
      <div className="service-care-inner">
        <header className="service-care-header">
          <span className="detail-label">From the doctor</span>
          <h2 id="service-care-title">How care is planned</h2>
          <div className="service-care-author">
            <span className="service-care-monogram" aria-hidden="true">
              SP
            </span>
            <span>
              <strong>{doctorName}</strong>
              Uro-oncology and robotic surgery
            </span>
          </div>
        </header>

        <p className="service-care-overview">{service.overview}</p>

        <div className="service-care-path">
          <span className="detail-label">Care path</span>
          <ol>
            {service.carePath.map((step, index) => (
              <li key={step}>
                <span className="service-care-step-number" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );

  return (
    <main className="service-detail-page">
      <section className="service-detail-hero">
        <div className="service-detail-running-head">
          <Link to="/#services" className="service-back-link">
            <ArrowLeft size={15} strokeWidth={1.75} aria-hidden="true" />
            Back to services
          </Link>
          <span className="service-detail-kicker">{service.category}</span>
        </div>

        <div className="service-detail-hero-copy">
          <h1>{service.title}</h1>
          <p className="service-detail-summary">{service.summary}</p>
          {questionsFirst && (
            <Suspense fallback={null}>
              <HeroQuestions entry={faqEntry} />
            </Suspense>
          )}
        </div>

        <figure className="service-detail-figure">
          <div className="service-detail-image">
            <img src={service.image} alt={service.imageAlt} />
          </div>
          <figcaption>
            <span className="detail-label">Focus areas</span>
            <ul>
              {service.focus.map((focus) => (
                <li key={focus}>{focus}</li>
              ))}
            </ul>
          </figcaption>
        </figure>
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
