import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown } from "lucide-react";
import FaqText from "../FaqText/FaqText";
import {
  buildFaqSchema,
  doctorName,
  getFaqListStages,
} from "../../data/faq";
import "./AskTheDoctor.css";

const AskTheDoctor = ({ faq }) => {
  const [stageIndex, setStageIndex] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [hiddenBelow, setHiddenBelow] = useState(0);
  const listRef = useRef(null);
  const answerRef = useRef(null);
  const isStacked = () => window.matchMedia("(max-width: 900px)").matches;

  // Counts questions below the visible part of the scrolling list (desktop only).
  const updateHiddenBelow = () => {
    const list = listRef.current;

    if (!list) {
      return;
    }

    const visibleBottom = list.scrollTop + list.clientHeight - 24;
    const hidden = [...list.children].filter(
      (item) => item.offsetTop + item.offsetHeight / 2 > visibleBottom,
    ).length;

    setHiddenBelow(hidden);
  };

  // Recount whenever the list's size or content changes (stage switch, fonts, resize).
  useEffect(() => {
    const list = listRef.current;

    if (!list) {
      return undefined;
    }

    const observer = new ResizeObserver(updateHiddenBelow);
    observer.observe(list);
    [...list.children].forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, [stageIndex]);

  const showMoreQuestions = () => {
    const list = listRef.current;
    list?.scrollBy({ top: list.clientHeight * 0.7, behavior: "smooth" });
  };

  const stages = getFaqListStages(faq);
  const stage = stages[stageIndex];
  const current = stage.questions[questionIndex];
  const allQuestions = stages.flatMap((item) => item.questions);

  const pickStage = (index) => {
    setStageIndex(index);
    setQuestionIndex(0);

    if (!isStacked()) {
      listRef.current?.scrollTo({ top: 0 });
      answerRef.current?.scrollTo({ top: 0 });
    }
  };

  const pickQuestion = (index) => {
    setQuestionIndex(index);

    if (isStacked()) {
      window.requestAnimationFrame(() => {
        answerRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    } else {
      answerRef.current?.scrollTo({ top: 0 });
    }
  };

  return (
    <section className="atd-section" id="faq" aria-labelledby="atd-title">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: buildFaqSchema(allQuestions) }}
      />

      <div className="atd-shell">
        <aside className="atd-sidebar">
          <div className="atd-sidebar-inner">
            <div className="atd-heading">
              <span className="atd-eyebrow">Patient questions</span>
              <h2 id="atd-title">Ask the doctor</h2>
              <p className="atd-intro">{faq.intro}</p>
            </div>

            <div className="atd-stages" role="group" aria-label="Question topics">
              {stages.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  className={`atd-stage${index === stageIndex ? " is-selected" : ""}`}
                  aria-pressed={index === stageIndex}
                  onClick={() => pickStage(index)}
                >
                  <span>{item.title}</span>
                  <span className="atd-stage-count">{item.questions.length}</span>
                </button>
              ))}
            </div>

            <div className="atd-sidebar-note">
              <p>
                Answers are general guidance, written to help you prepare for
                your appointment.
              </p>
              <p>
                Medically reviewed by {doctorName},{" "}
                <FaqText text={faq.credentials} />. Reviewed on{" "}
                <FaqText text={faq.reviewedOn} />.
              </p>
            </div>
          </div>
        </aside>

        <div className="atd-questions">
          <div className="atd-questions-heading">
            <span>
              Part {stageIndex + 1} of {stages.length}
            </span>
            <h3>{stage.title}</h3>
          </div>

          <div className="atd-question-scroll">
            <ul
              className="atd-question-list"
              ref={listRef}
              onScroll={updateHiddenBelow}
            >
              {stage.questions.map((item, index) => (
                <li key={item.id}>
                  <button
                    type="button"
                    className={`atd-question${index === questionIndex ? " is-selected" : ""}`}
                    aria-pressed={index === questionIndex}
                    onClick={() => pickQuestion(index)}
                  >
                    <span className="atd-q-badge" aria-hidden="true">
                      Q
                    </span>
                    <span className="atd-question-text">{item.question}</span>
                  </button>
                </li>
              ))}
            </ul>

            <button
              type="button"
              className={`atd-more${hiddenBelow > 0 ? " is-visible" : ""}`}
              onClick={showMoreQuestions}
              tabIndex={hiddenBelow > 0 ? 0 : -1}
              aria-hidden={hiddenBelow === 0}
            >
              {hiddenBelow} more {hiddenBelow === 1 ? "question" : "questions"}
              <ChevronDown size={15} aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="atd-answer" ref={answerRef}>
          <div className="atd-answer-inner" aria-live="polite">
            <div className="atd-notes-label">
              <span aria-hidden="true" />
              Consultation notes
            </div>

            <p className="atd-patient-bubble">{current.question}</p>

            <div className="atd-reply">
              <div className="atd-avatar" aria-hidden="true">
                SP
              </div>
              <div className="atd-reply-bubble">
                <span className="atd-reply-name">{doctorName}</span>
                <p className="atd-reply-lead">
                  <FaqText text={current.answer} />
                </p>
                <ul className="atd-reply-points">
                  {current.points.map((point) => (
                    <li key={point}>
                      <FaqText text={point} />
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="atd-cta">
              <span>Have a question that is not here?</span>
              <Link to="/#schedule">
                Book a consultation
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AskTheDoctor;
