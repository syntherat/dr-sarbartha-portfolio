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
import {
  getQuestionLanguages,
  getSetTranslation,
  langPrefix,
  languages,
  uiText,
} from "../../data/faq/translations";
import "./FaqQuestionPage.css";

const pad = (number) => String(number).padStart(2, "0");

// A starred question on its own page, in English or a translation (`lang`).
const FaqQuestionPage = ({ faq, stage, question, lang = "en" }) => {
  const t = uiText[lang];
  const setTranslation = lang === "en" ? null : getSetTranslation(lang, faq);
  // Text in the page language: the translation when there is one, else English.
  const textOf = (item) => setTranslation?.questions[item.id] ?? item;
  const titleOf = (set) =>
    lang === "en" ? set.title : (getSetTranslation(lang, set)?.title ?? set.title);
  const stageTitle = setTranslation?.stages[stage.id] ?? stage.title;
  const current = textOf(question);

  const keyQuestions = getStarredWithStage(faq);
  const position = keyQuestions.findIndex(
    (item) => item.question.id === question.id,
  );
  const previous = keyQuestions[position - 1];
  const next = keyQuestions[position + 1];
  // Same-stage, non-starred answers. On translated pages each one is shown in
  // the page language when translated, otherwise in English.
  const relatedQuestions = stage.questions.filter((item) => !item.starred);
  const isTranslated = (item) => Boolean(setTranslation?.questions[item.id]);
  const hasUntranslated =
    lang !== "en" && relatedQuestions.some((item) => !isTranslated(item));
  const otherSharedSets = sharedFaqSets.filter((item) => item !== faq);
  const faqPath = getFaqPath(faq);
  const questionPath = (id, pageLang = lang) =>
    `${langPrefix(pageLang)}${faqPath}/${id}`;

  // Language versions of this page, for the switcher and hreflang links.
  const pageLanguages = ["en", ...getQuestionLanguages(faq, question.id)];
  const languagePath = (pageLang) => questionPath(question.id, pageLang);

  return (
    <main className="kq-page" lang={languages[lang].htmlLang}>
      <title>{`${current.hinglish ?? current.question} | ${doctorName}`}</title>
      {pageLanguages.length > 1 &&
        pageLanguages.map((pageLang) => (
          <link
            key={pageLang}
            rel="alternate"
            hrefLang={languages[pageLang].htmlLang}
            href={`${window.location.origin}${languagePath(pageLang)}`}
          />
        ))}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: buildFaqSchema(
            [current],
            lang === "en" ? undefined : languages[lang].htmlLang,
          ),
        }}
      />

      <div className="kq-container">
        <div className="kq-masthead">
          <Link to={`${faqPath}#faq`} className="kq-back">
            <ArrowLeft size={14} aria-hidden="true" />
            {titleOf(faq)}
          </Link>
          <div className="kq-masthead-end">
            {pageLanguages.length > 1 && (
              <nav className="kq-languages" aria-label="Language">
                {pageLanguages.map((pageLang) =>
                  pageLang === lang ? (
                    <span
                      key={pageLang}
                      lang={languages[pageLang].htmlLang}
                      aria-current="page"
                    >
                      {languages[pageLang].label}
                    </span>
                  ) : (
                    <Link
                      key={pageLang}
                      to={languagePath(pageLang)}
                      lang={languages[pageLang].htmlLang}
                      hrefLang={languages[pageLang].htmlLang}
                    >
                      {languages[pageLang].label}
                    </Link>
                  ),
                )}
              </nav>
            )}
            <span>
              {t.keyQuestion} {pad(position + 1)} / {pad(keyQuestions.length)}
            </span>
          </div>
        </div>

        <header className="kq-header">
          <span className="kq-numeral" aria-hidden="true">
            {pad(position + 1)}
          </span>
          <div>
            <span className="kq-stage">{stageTitle}</span>
            <h1>{current.question}</h1>
            {current.hinglish && (
              <p className="kq-hinglish">
                {t.searchedAs}:{" "}
                <span lang="hi-Latn">“{current.hinglish}”</span>
              </p>
            )}
            {t.pendingReview && (
              <p className="kq-pending" lang="en">
                <FaqText text={t.pendingReview} />
              </p>
            )}
          </div>
        </header>

        <div className="kq-byline">
          <div className="kq-byline-author">
            <span className="kq-monogram" aria-hidden="true">
              SP
            </span>
            <span>
              <strong lang="en">{doctorName}</strong>
              <FaqText text={faq.credentials} />
            </span>
          </div>
          <div className="kq-byline-item">
            <span>{t.reviewed}</span>
            <FaqText text={faq.reviewedOn} />
          </div>
          <div className="kq-byline-item">
            <span>{t.topic}</span>
            {titleOf(faq)}
          </div>
        </div>

        <div className="kq-layout">
          <article className="kq-article">
            <section className="kq-block">
              <h2 className="kq-label">{t.shortAnswer}</h2>
              <p className="kq-lead">
                <FaqText text={current.answer} />
              </p>
            </section>

            <section className="kq-block">
              <h2 className="kq-label">{t.inDetail}</h2>
              <ol className="kq-points">
                {current.points.map((point, index) => (
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

            <p className="kq-note">{t.note}</p>

            {relatedQuestions.length > 0 && (
              <section className="kq-block">
                <h2 className="kq-label">{t.moreOnTopic}</h2>
                <p className="kq-related-intro">{stageTitle}</p>
                {hasUntranslated && (
                  <p className="kq-related-note">{t.relatedInEnglish}</p>
                )}
                <div className="kq-related">
                  {relatedQuestions.map((item) => (
                    <details
                      key={item.id}
                      className="kq-related-item"
                      lang={
                        lang !== "en" && !isTranslated(item) ? "en" : undefined
                      }
                    >
                      <summary>
                        <span>{textOf(item).question}</span>
                        <Plus size={18} strokeWidth={1.5} aria-hidden="true" />
                      </summary>
                      <div className="kq-related-answer">
                        {textOf(item).hinglish && (
                          <p className="kq-related-hinglish">
                            {t.searchedAs}:{" "}
                            <span lang="hi-Latn">“{textOf(item).hinglish}”</span>
                          </p>
                        )}
                        <p>
                          <FaqText text={textOf(item).answer} />
                        </p>
                        <ul>
                          {textOf(item).points.map((point) => (
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
            <nav className="kq-contents" aria-label={t.keyQuestions}>
              <h2 className="kq-label">{t.keyQuestions}</h2>
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
                      <span>{textOf(item.question).question}</span>
                    </Link>
                  </li>
                ))}
              </ol>
            </nav>

            <div className="kq-booking">
              <span className="kq-booking-eyebrow">{t.consultation}</span>
              <p>{t.notHere}</p>
              <Link to="/#schedule">
                {t.book}
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>

            <nav className="kq-shared" aria-label={t.morePatientQuestions}>
              <h2 className="kq-label">{t.morePatientQuestions}</h2>
              <ul>
                {otherSharedSets.map((item) => (
                  <li key={item.slug}>
                    <Link to={`${getFaqPath(item)}#faq`}>
                      {titleOf(item)}
                      <ArrowRight size={14} aria-hidden="true" />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
        </div>

        <nav className="kq-pager" aria-label={`${t.previous} / ${t.next}`}>
          {previous ? (
            <Link to={questionPath(previous.question.id)} className="kq-pager-link">
              <span className="kq-pager-label">
                <ArrowLeft size={14} aria-hidden="true" />
                {t.previous}, {pad(position)}
              </span>
              <span className="kq-pager-title">
                {textOf(previous.question).question}
              </span>
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
                {t.next}, {pad(position + 2)}
                <ArrowRight size={14} aria-hidden="true" />
              </span>
              <span className="kq-pager-title">
                {textOf(next.question).question}
              </span>
            </Link>
          ) : (
            <Link to={`${faqPath}#faq`} className="kq-pager-link is-next">
              <span className="kq-pager-label">
                {t.allQuestions}
                <ArrowRight size={14} aria-hidden="true" />
              </span>
              <span className="kq-pager-title">
                {t.askTheDoctor}: {titleOf(faq)}
              </span>
            </Link>
          )}
        </nav>
      </div>
    </main>
  );
};

export default FaqQuestionPage;
