import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { faqSets, getFaqPath, sharedFaqSets } from "../../data/faq";
import "./SharedFaqLinks.css";

const countQuestions = (faq) =>
  faq.stages.reduce((total, stage) => total + stage.questions.length, 0);

// Links to the shared FAQ pages (robotic surgery, common questions). On a
// shared page, `exclude` drops that page and `withCancers` adds every
// cancer's FAQ.
const SharedFaqLinks = ({ exclude, withCancers = false }) => {
  const shared = sharedFaqSets.filter((faq) => faq.slug !== exclude);
  const sets = withCancers ? [...shared, ...faqSets] : shared;

  return (
    <section className="shared-faq-links" aria-labelledby="shared-faq-links-title">
      <header className="shared-faq-links-header">
        <span className="shared-faq-links-eyebrow">Patient questions</span>
        <h2 id="shared-faq-links-title">
          {withCancers ? "More questions" : "Questions for every cancer"}
        </h2>
      </header>

      <ul className="shared-faq-links-list">
        {sets.map((faq) => (
          <li key={faq.slug}>
            <Link className="shared-faq-link" to={`${getFaqPath(faq)}#faq`}>
              <span className="shared-faq-link-body">
                <span className="shared-faq-link-meta">
                  {countQuestions(faq)} questions
                </span>
                <span className="shared-faq-link-title">{faq.title}</span>
              </span>
              <ArrowUpRight
                className="shared-faq-link-arrow"
                size={18}
                strokeWidth={1.5}
                aria-hidden="true"
              />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SharedFaqLinks;
