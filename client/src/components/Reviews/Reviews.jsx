import React from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { MdOutlineStar } from "react-icons/md";
import "./Reviews.css";

const reviewsData = [
  {
    id: 1,
    name: "Farah Siddiqui",
    text: "I visited Dr. Pratihar for my father’s urinary obstruction and suspected prostate condition. He evaluated all reports carefully, advised appropriate imaging, and started treatment without unnecessary procedures. His calm explanation and patient-friendly approach reduced our anxiety. Overall, a very dependable uro-oncology doctor in Delhi.",
    rating: 5,
    date: "2026-01-05T00:00:00.000Z",
  },
  {
    id: 2,
    name: "Rajiv Sethi",
    text: "My uncle was diagnosed with invasive bladder cancer and required major surgery. Dr. Sarbartha Kumar Pratihar discussed treatment options, risks, and urinary diversion in a very practical manner. The surgery and post-operative care were well managed, and his recovery is progressing steadily. We appreciate the doctor’s experience and honest counselling during a difficult time.",
    rating: 5,
    date: "2026-01-05T00:00:00.000Z",
  },
  {
    id: 3,
    name: "Anil Mathur",
    text: "I was diagnosed with prostate cancer after my PSA levels increased. Dr. Sarbartha Kumar Pratihar explained the staging, biopsy findings, and treatment options in detail. I underwent robotic prostate surgery under his care, and the recovery has been smooth so far. His structured follow-up plan and clear communication helped me and my family stay confident throughout the treatment journey.",
    rating: 5,
    date: "2026-01-05T00:00:00.000Z",
  },
];

const getTimeAgo = (dateString) => {
  const date = new Date(dateString);
  const now = new Date();
  const seconds = Math.floor((now - date) / 1000);

  let interval = seconds / 31536000;
  if (interval >= 1)
    return (
      Math.floor(interval) +
      (Math.floor(interval) === 1 ? " year ago" : " years ago")
    );
  interval = seconds / 2592000;
  if (interval >= 1)
    return (
      Math.floor(interval) +
      (Math.floor(interval) === 1 ? " month ago" : " months ago")
    );
  interval = seconds / 86400;
  if (interval >= 1)
    return (
      Math.floor(interval) +
      (Math.floor(interval) === 1 ? " day ago" : " days ago")
    );
  interval = seconds / 3600;
  if (interval >= 1)
    return (
      Math.floor(interval) +
      (Math.floor(interval) === 1 ? " hour ago" : " hours ago")
    );
  interval = seconds / 60;
  if (interval >= 1)
    return (
      Math.floor(interval) +
      (Math.floor(interval) === 1 ? " minute ago" : " minutes ago")
    );
  return "just now";
};

const ReviewCard = ({ review }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const maxLength = 150;
  const isLong = review.text.length > maxLength;

  return (
    <div className="review-card">
      <div className="review-header">
        <div className="reviewer-info">
          <div>
            <h3 className="reviewer-name">{review.name}</h3>
            <span className="review-date">{getTimeAgo(review.date)}</span>
          </div>
        </div>
        <div className="google-icon">
          <img
            width="24"
            height="24"
            src="https://img.icons8.com/glyph-neue/64/google-logo.png"
            alt="google-logo"
          />
        </div>
      </div>
      <div className="review-rating">
        {[...Array(review.rating)].map((_, i) => (
          <span key={i} className="star">
            <MdOutlineStar />
          </span>
        ))}
      </div>
      <div className="review-content-wrapper">
        <div
          className={`review-text-container ${isExpanded ? "expanded" : ""} ${!isLong ? "short" : ""}`}
        >
          <p className="review-text">"{review.text}"</p>
        </div>
        {isLong && (
          <button
            className="read-more-btn"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? (
              <>
                Read less <ChevronUp size={14} />
              </>
            ) : (
              <>
                Read more <ChevronDown size={14} />
              </>
            )}
          </button>
        )}
      </div>
    </div>
  );
};

const Reviews = () => {
  return (
    <section className="reviews-section" id="reviews">
      <div className="reviews-container">
        <div className="reviews-header">
          <span className="reviews-tagline">Testimonials</span>
          <h2>Voices of Healing</h2>
          <p>Real stories of trust, resilience, and recovery</p>
        </div>

        <div className="reviews-grid">
          {reviewsData.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
