import { useEffect, useLayoutEffect } from "react";
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
  useLocation,
  useParams,
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import CaseStudies from "./components/CaseStudies/CaseStudies";
import CaseMediaDivider from "./components/CaseMediaDivider/CaseMediaDivider";
import MediaUpdates from "./components/MediaUpdates/MediaUpdates";
import Schedule from "./components/Schedule/Schedule";
import Footer from "./components/Footer/Footer";
import Reviews from "./components/Reviews/Reviews";
import ServiceDetail from "./components/ServiceDetail/ServiceDetail";
import AboutPage from "./pages/About/AboutPage";
import FaqQuestionPage from "./pages/FaqQuestion/FaqQuestionPage";
import SharedFaqPage from "./pages/SharedFaq/SharedFaqPage";
import { getServiceBySlug } from "./data/services";
import {
  findFaqQuestion,
  getFaqBySlug,
  getSharedFaqBySlug,
} from "./data/faq";
import { getQuestionTranslation } from "./data/faq/translations";
import "./App.css";

const HomePage = () => (
  <>
    <Hero />
    <Reviews />
    <Services />
    <CaseStudies />
    <CaseMediaDivider />
    <MediaUpdates />
    <Schedule />
  </>
);

const ScrollToRouteTarget = () => {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    const previousScrollRestoration = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";

    return () => {
      window.history.scrollRestoration = previousScrollRestoration;
    };
  }, []);

  useLayoutEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      return;
    }

    window.scrollTo({ top: 0, left: 0, behavior: "auto" });

    const scrollFrame = window.requestAnimationFrame(() => {
      const target = document.getElementById(hash.slice(1));

      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });

    return () => window.cancelAnimationFrame(scrollFrame);
  }, [hash, pathname]);

  return null;
};

const ServiceDetailRoute = () => {
  const { slug } = useParams();
  const selectedService = getServiceBySlug(slug);

  if (!selectedService) {
    return <ServiceNotFound />;
  }

  return <ServiceDetail service={selectedService} />;
};

// getFaq resolves the slug: cancer sets for /services, shared sets for
// /patient-questions. Only starred questions have pages; translated pages
// (lang "hi") also need a translation. Non-starred translations are used only
// in "More on this topic".
const FaqQuestionRoute = ({ getFaq, lang = "en" }) => {
  const { slug, questionId } = useParams();
  const faq = getFaq(slug);
  const match = faq ? findFaqQuestion(faq, questionId) : null;
  const hasPage =
    match?.question.starred &&
    (lang === "en" || Boolean(getQuestionTranslation(lang, faq, questionId)));

  if (!hasPage) {
    return <NotFound />;
  }

  return (
    <FaqQuestionPage
      key={`${lang}-${slug}-${questionId}`}
      faq={faq}
      stage={match.stage}
      question={match.question}
      lang={lang}
    />
  );
};

const SharedFaqRoute = () => {
  const { slug } = useParams();
  const faq = getSharedFaqBySlug(slug);

  if (!faq) {
    return <NotFound />;
  }

  return <SharedFaqPage key={faq.slug} faq={faq} />;
};

const ServiceNotFound = () => (
  <main className="service-not-found">
    <span>Service not found</span>
    <h1>This service page is not available.</h1>
    <Link to="/#services">Return to services</Link>
  </main>
);

const NotFound = () => (
  <main className="service-not-found">
    <span>Page not found</span>
    <h1>This page is not available.</h1>
    <Link to="/">Return home</Link>
  </main>
);

function App() {
  return (
    <BrowserRouter>
      <ScrollToRouteTarget />
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services/:slug" element={<ServiceDetailRoute />} />
          <Route
            path="/services/:slug/:questionId"
            element={<FaqQuestionRoute getFaq={getFaqBySlug} />}
          />
          <Route path="/patient-questions/:slug" element={<SharedFaqRoute />} />
          <Route
            path="/patient-questions/:slug/:questionId"
            element={<FaqQuestionRoute getFaq={getSharedFaqBySlug} />}
          />
          <Route
            path="/hi/services/:slug/:questionId"
            element={<FaqQuestionRoute getFaq={getFaqBySlug} lang="hi" />}
          />
          <Route
            path="/hi/patient-questions/:slug/:questionId"
            element={<FaqQuestionRoute getFaq={getSharedFaqBySlug} lang="hi" />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
