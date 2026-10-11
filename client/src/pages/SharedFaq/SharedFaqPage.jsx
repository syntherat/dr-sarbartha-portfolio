import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import AskTheDoctor from "../../components/AskTheDoctor/AskTheDoctor";
import KeyQuestions from "../../components/KeyQuestions/KeyQuestions";
import SharedFaqLinks from "../../components/SharedFaqLinks/SharedFaqLinks";
import { doctorName } from "../../data/faq";
import "./SharedFaqPage.css";

// Page for a shared FAQ set (robotic surgery, common questions).
const SharedFaqPage = ({ faq }) => (
  <main className="shared-faq-page">
    <title>{`${faq.title} | ${doctorName}`}</title>

    <header className="shared-faq-hero">
      <Link to="/#services" className="shared-faq-back">
        <ArrowLeft size={14} aria-hidden="true" />
        Back to services
      </Link>
      <span className="shared-faq-eyebrow">Patient questions</span>
      <h1>{faq.title}</h1>
    </header>

    <KeyQuestions faq={faq} />
    <AskTheDoctor faq={faq} />
    <SharedFaqLinks exclude={faq.slug} withCancers />
  </main>
);

export default SharedFaqPage;
