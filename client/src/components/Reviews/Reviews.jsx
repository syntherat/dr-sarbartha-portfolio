import React from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { MdOutlineStar } from "react-icons/md";
import "./Reviews.css";

const reviewsData = [
  {
    id: 1,
    name: "Manoj Limboo",
    text: "For the past two years, Dr. Sarbartha Kumar Pratihar | Urologist, Uro-oncologist & Robotic Surgeon has been a great support to our family during my father’s prostate surgery and radiation treatment. His knowledge, calm guidance, and compassionate approach made a very challenging time much easier for us. We deeply appreciate the care and attention he gave to my father. Doctors like him truly make a difference in people’s lives. We will always remain thankful for his dedication and kindness.",
    rating: 5,
    date: "2026-03-05T00:00:00.000Z",
  },
  {
    id: 2,
    name: "Jai Kishun Das",
    text: "Dr. Sarbartha Kumar Pratihar is an outstanding Uro Oncologist. From the first consultation, his deep medical knowledge and technical expertise were clear, providing immense confidence for my operation & my treatment plan at RGCIRC, Rohini & provide me his consultation over mobile for last 10 months. He explain complex procedures in simple terms, ensuring I felt informed and at ease. His calm, empathetic demeanor made a difficult situation much more manageable. Furthermore, his entire team is professional and attentive, ensuring a seamless experience from start to finish.",
    rating: 5,
    date: "2026-05-08T00:00:00.000Z",
  },
  {
    id: 3,
    name: "Rinchen C",
    text: "Doctor Sarbartha & team handled my father’s case previously at RGCI&RC, Rohini and my family and I were, are and always will be extremely grateful for his genuine concern and expertise. He took his time explaining all possibilities and their respective treatments and was approachable when we had any doubts. I will highly recommend him and his team for those who require treatment in prostrate issues.",
    rating: 5,
    date: "2026-05-03T00:00:00.000Z",
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
