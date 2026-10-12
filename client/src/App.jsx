import {
  Component,
  Suspense,
  lazy,
  use,
  useEffect,
  useLayoutEffect,
} from "react";
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
import { getServiceBySlug } from "./data/services";
import {
  findFaqQuestion,
  getFaqBySlug,
  getSharedFaqBySlug,
  loadFaq,
} from "./data/faq";
import { loadTranslations } from "./data/faq/translations";
import "./App.css";

// Pages other than the home page are separate chunks, downloaded when first
// visited. The FAQ routes call their page's loader early so the page code and
// its FAQ data download in parallel.
const loadFaqQuestionPage = () => import("./pages/FaqQuestion/FaqQuestionPage");
const loadSharedFaqPage = () => import("./pages/SharedFaq/SharedFaqPage");

const AboutPage = lazy(() => import("./pages/About/AboutPage"));
const ServiceDetail = lazy(() =>
  import("./components/ServiceDetail/ServiceDetail"),
);
const FaqQuestionPage = lazy(loadFaqQuestionPage);
const SharedFaqPage = lazy(loadSharedFaqPage);

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

    // Lazily loaded pages render their sections a moment later, so wait
    // (up to 5 seconds) for the target to appear before scrolling to it.
    const id = decodeURIComponent(hash.slice(1));
    let observer;
    let timeout;
    const scrollFrame = window.requestAnimationFrame(() => {
      const scrollToTarget = () => {
        const target = document.getElementById(id);

        if (!target) {
          return false;
        }

        target.scrollIntoView({ behavior: "smooth", block: "start" });
        return true;
      };

      if (scrollToTarget()) {
        return;
      }

      observer = new MutationObserver(() => {
        if (scrollToTarget()) {
          observer.disconnect();
          window.clearTimeout(timeout);
        }
      });
      observer.observe(document.body, { childList: true, subtree: true });
      timeout = window.setTimeout(() => observer.disconnect(), 5000);
    });

    return () => {
      window.cancelAnimationFrame(scrollFrame);
      observer?.disconnect();
      window.clearTimeout(timeout);
    };
  }, [hash, pathname]);

  return null;
};

const ServiceDetailRoute = () => {
  const { slug } = useParams();
  const selectedService = getServiceBySlug(slug);

  if (!selectedService) {
    return <ServiceNotFound />;
  }

  // Start the FAQ download now; ServiceDetail shows it when it arrives.
  const faqEntry = getFaqBySlug(slug);
  if (faqEntry) {
    loadFaq(faqEntry);
  }

  return <ServiceDetail service={selectedService} />;
};

// getFaq resolves the slug: cancer sets for /services, shared sets for
// /patient-questions. Only starred questions have pages; translated pages
// (lang "hi", "hinglish") also need a translation. Non-starred translations
// are used only in "More on this topic". The set and all its translations
// are loaded (the language switcher lists every translated version).
const FaqQuestionRoute = ({ getFaq, lang = "en" }) => {
  const { slug, questionId } = useParams();
  const entry = getFaq(slug);

  if (!entry) {
    return <NotFound />;
  }

  loadFaqQuestionPage();
  const translationsPromise = loadTranslations(entry);
  const faq = use(loadFaq(entry));
  const translations = use(translationsPromise);
  const match = findFaqQuestion(faq, questionId);
  const hasPage =
    match?.question.starred &&
    (lang === "en" || Boolean(translations[lang]?.questions[questionId]));

  if (!hasPage) {
    return <NotFound />;
  }

  return (
    <FaqQuestionPage
      key={`${lang}-${slug}-${questionId}`}
      faq={faq}
      translations={translations}
      stage={match.stage}
      question={match.question}
      lang={lang}
    />
  );
};

const SharedFaqRoute = () => {
  const { slug } = useParams();
  const entry = getSharedFaqBySlug(slug);

  if (!entry) {
    return <NotFound />;
  }

  loadSharedFaqPage();
  const faq = use(loadFaq(entry));

  return <SharedFaqPage key={faq.slug} faq={faq} />;
};

// Placeholder while a page's code or data downloads; holds the footer down.
const RouteLoading = () => <main className="route-loading" aria-busy="true" />;

// Shown when a page's code or data could not be downloaded (for example a
// dropped connection, or an old tab after a new release).
class RouteErrorBoundary extends Component {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  render() {
    if (!this.state.failed) {
      return this.props.children;
    }

    return (
      <main className="service-not-found">
        <span>Connection problem</span>
        <h1>This page could not be loaded.</h1>
        <button type="button" onClick={() => window.location.reload()}>
          Reload the page
        </button>
      </main>
    );
  }
}

// A fresh error boundary per path, so a failed page does not stick after
// navigating away.
const RouteBoundary = ({ children }) => {
  const { pathname } = useLocation();

  return (
    <RouteErrorBoundary key={pathname}>
      <Suspense fallback={<RouteLoading />}>{children}</Suspense>
    </RouteErrorBoundary>
  );
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
        <RouteBoundary>
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
            <Route
              path="/hinglish/services/:slug/:questionId"
              element={<FaqQuestionRoute getFaq={getFaqBySlug} lang="hinglish" />}
            />
            <Route
              path="/hinglish/patient-questions/:slug/:questionId"
              element={
                <FaqQuestionRoute getFaq={getSharedFaqBySlug} lang="hinglish" />
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </RouteBoundary>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
