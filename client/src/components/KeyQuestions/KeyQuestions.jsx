import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { getStarredWithStage } from "../../data/faq";
import "./KeyQuestions.css";

const KeyQuestions = ({ faq }) => {
  const keyQuestions = getStarredWithStage(faq);

  if (keyQuestions.length === 0) {
    return null;
  }

  return (
    <section className="key-questions" aria-labelledby="key-questions-title">
      <header className="key-questions-header">
        <span className="key-questions-eyebrow">{faq.title}</span>
        <h2 id="key-questions-title">Key questions</h2>
      </header>

      <ol className="key-questions-index">
        {keyQuestions.map(({ stage, question }, index) => (
          <li key={question.id}>
            <Link
              className="key-question-row"
              to={`/services/${faq.slug}/${question.id}`}
            >
              <span className="key-question-number" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="key-question-body">
                <span className="key-question-stage">{stage.title}</span>
                <span className="key-question-text">{question.question}</span>
              </span>
              <ArrowUpRight
                className="key-question-arrow"
                size={18}
                strokeWidth={1.5}
                aria-hidden="true"
              />
            </Link>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default KeyQuestions;
