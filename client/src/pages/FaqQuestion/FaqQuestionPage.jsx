import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Plus } from "lucide-react";
import FaqText from "../../components/FaqText/FaqText";
import {
  buildFaqSchema,
  doctorName,
  getFaqPath,
  getStarredWithStage,
  sharedFaqSets,
} from "../../data/faq";
import "./FaqQuestionPage.css";

const pad = (number) => String(number).padStart(2, "0");

const FaqQuestionPage = ({ faq, stage, question }) => {
  const keyQuestions = getStarredWithStage(faq);
  const position = keyQuestions.findIndex(
    (item) => item.question.id === question.id,
  );
  const previous = keyQuestions[position - 1];
  const next = keyQuestions[position + 1];
  const relatedQuestions = stage.questions.filter((item) => !item.starred);
  const otherSharedSets = sharedFaqSets.filter((item) => item !== faq);
  const faqPath = getFaqPath(faq);
  const questionPath = (id) => `${faqPath}/${id}`;

  return (
    <main className="kq-page">
      <title>{`${question.question} | ${doctorName}`}</title>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: buildFaqSchema([question]) }}
      />

      <div className="kq-container">
        <div className="kq-masthead">
          <Link to={`${faqPath}#faq`} className="kq-back">
            <ArrowLeft size={14} aria-hidden="true" />
            {faq.title}
          </Link>
          <span>
            Key question {pad(position + 1)} / {pad(keyQuestions.length)}
          </span>
        </div>

        <header className="kq-header">
          <span className="kq-numeral" aria-hidden="true">
            {pad(position + 1)}
          </span>
          <div>
            <span className="kq-stage">{stage.title}</span>
            <h1>{question.question}</h1>
          </div>
        </header>

        <div className="kq-byline">
          <div className="kq-byline-author">
            <span className="kq-monogram" aria-hidden="true">
              SP
            </span>
            <span>
              <strong>{doctorName}</strong>
              <FaqText text={faq.credentials} />
            </span>
          </div>
          <div className="kq-byline-item">
            <span>Medically reviewed</span>
            <FaqText text={faq.reviewedOn} />
          </div>
          <div className="kq-byline-item">
            <span>Topic</span>
            {faq.title}
          </div>
        </div>

        <div className="kq-layout">
          <article className="kq-article">
            <section className="kq-block">
              <h2 className="kq-label">The short answer</h2>
              <p className="kq-lead">
                <FaqText text={question.answer} />
              </p>
            </section>

            <section className="kq-block">
              <h2 className="kq-label">In detail</h2>
              <ol className="kq-points">
                {question.points.map((point, index) => (
                  <li key={point}>
                    <span className="kq-point-number" aria-hidden="true">
                      {pad(index + 1)}
                    </span>
                    <p>
                      <FaqText text={point} />
                    </p>
                  </li>
                ))}
              </ol>
            </section>

            <p className="kq-note">
              Answers are general guidance, written to help you prepare for
              your appointment.
            </p>

            {relatedQuestions.length > 0 && (
              <section className="kq-block">
                <h2 className="kq-label">More on this topic</h2>
                <p className="kq-related-intro">{stage.title}</p>
                <div className="kq-related">
                  {relatedQuestions.map((item) => (
                    <details key={item.id} className="kq-related-item">
                      <summary>
                        <span>{item.question}</span>
                        <Plus size={18} strokeWidth={1.5} aria-hidden="true" />
                      </summary>
                      <div className="kq-related-answer">
                        <p>
                          <FaqText text={item.answer} />
                        </p>
                        <ul>
                          {item.points.map((point) => (
                            <li key={point}>
                              <FaqText text={point} />
                            </li>
                          ))}
                        </ul>
                      </div>
                    </details>
                  ))}
                </div>
              </section>
            )}
          </article>

          <aside className="kq-aside">
            <nav className="kq-contents" aria-label="Key questions">
              <h2 className="kq-label">Key questions</h2>
              <ol>
                {keyQuestions.map((item, index) => (
                  <li key={item.question.id}>
                    <Link
                      to={questionPath(item.question.id)}
                      className={index === position ? "is-current" : undefined}
                      aria-current={index === position ? "page" : undefined}
                    >
                      <span className="kq-contents-number">
                        {pad(index + 1)}
                      </span>
                      <span>{item.question.question}</span>
                    </Link>
                  </li>
                ))}
              </ol>
            </nav>

            <div className="kq-booking">
              <span className="kq-booking-eyebrow">Consultation</span>
              <p>Have a question that is not here?</p>
              <Link to="/#schedule">
                Book a consultation
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>

            <nav className="kq-shared" aria-label="More patient questions">
              <h2 className="kq-label">More patient questions</h2>
              <ul>
                {otherSharedSets.map((item) => (
                  <li key={item.slug}>
                    <Link to={`${getFaqPath(item)}#faq`}>
                      {item.title}
                      <ArrowRight size={14} aria-hidden="true" />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
        </div>

        <nav className="kq-pager" aria-label="Previous and next key question">
          {previous ? (
            <Link to={questionPath(previous.question.id)} className="kq-pager-link">
              <span className="kq-pager-label">
                <ArrowLeft size={14} aria-hidden="true" />
                Previous, {pad(position)}
              </span>
              <span className="kq-pager-title">{previous.question.question}</span>
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link
              to={questionPath(next.question.id)}
              className="kq-pager-link is-next"
            >
              <span className="kq-pager-label">
                Next, {pad(position + 2)}
                <ArrowRight size={14} aria-hidden="true" />
              </span>
              <span className="kq-pager-title">{next.question.question}</span>
            </Link>
          ) : (
            <Link to={`${faqPath}#faq`} className="kq-pager-link is-next">
              <span className="kq-pager-label">
                All questions
                <ArrowRight size={14} aria-hidden="true" />
              </span>
              <span className="kq-pager-title">Ask the doctor: {faq.title}</span>
            </Link>
          )}
        </nav>
      </div>
    </main>
  );
};

export default FaqQuestionPage;
