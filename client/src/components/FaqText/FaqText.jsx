import { Link } from "react-router-dom";
import "./FaqText.css";

const placeholderPattern = /(\[[^\]]+\])/g;

// Cross-references in the doctor's text that point to a shared FAQ page. The
// words stay as written; only the page name becomes a link.
const crossReferences = [
  {
    pattern: /(?<=\((?:see|details under) )Robotic surgery(?=\))/,
    to: "/patient-questions/robotic-surgery#faq",
  },
  {
    pattern: /(?<=\((?:देखें|विवरण): )रोबोटिक सर्जरी(?=\))/,
    to: "/patient-questions/robotic-surgery#faq",
  },
];

const linkCrossReferences = (text, keyPrefix) => {
  for (const { pattern, to } of crossReferences) {
    const match = text.match(pattern);

    if (match) {
      const before = text.slice(0, match.index);
      const after = text.slice(match.index + match[0].length);

      return [
        before,
        <Link key={`${keyPrefix}-link`} className="faq-cross-link" to={to}>
          {match[0]}
        </Link>,
        after,
      ];
    }
  }

  return text;
};

// Renders FAQ copy, marking [bracketed] placeholders that the doctor still has
// to fill and linking cross-references to shared pages.
const FaqText = ({ text }) =>
  text.split(placeholderPattern).map((part, index) =>
    index % 2 === 1 ? (
      <mark key={index} className="faq-placeholder">
        {part}
      </mark>
    ) : (
      linkCrossReferences(part, index)
    ),
  );

export default FaqText;
