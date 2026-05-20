import { useEffect } from "react";
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
import Timeline from "./components/Timeline/Timeline";
import ServiceDetail from "./components/ServiceDetail/ServiceDetail";
import AboutPage from "./pages/About/AboutPage";
import { getServiceBySlug } from "./data/services";
import "./App.css";

const HomePage = () => (
  <>
    <Hero />
    <Reviews />
    <Timeline />
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
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      return;
    }

    const target = document.getElementById(hash.slice(1));

    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
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
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
