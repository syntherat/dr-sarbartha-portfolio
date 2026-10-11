import "./FaqText.css";

const placeholderPattern = /(\[[^\]]+\])/g;

// Renders FAQ copy, marking [bracketed] placeholders that the doctor still has to fill.
const FaqText = ({ text }) =>
  text.split(placeholderPattern).map((part, index) =>
    index % 2 === 1 ? (
      <mark key={index} className="faq-placeholder">
        {part}
      </mark>
    ) : (
      part
    ),
  );

export default FaqText;
