import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import CaseStudies from "./components/CaseStudies/CaseStudies";
import Schedule from "./components/Schedule/Schedule";
import Reviews from "./components/Reviews/Reviews";
import Timeline from "./components/Timeline/Timeline";
import ServiceDetail from "./components/ServiceDetail/ServiceDetail";
import { getServiceBySlug } from "./data/services";
import "./App.css";

const HomePage = () => (
  <>
    <Hero />
    <Reviews />
    <Timeline />
    <Services />
    <CaseStudies />
    <Schedule />
  </>
);

function App() {
  const serviceMatch = window.location.pathname.match(/^\/services\/([^/]+)\/?$/);
  const selectedService = serviceMatch
    ? getServiceBySlug(serviceMatch[1])
    : null;

  return (
    <div className="App">
      <Navbar />
      {serviceMatch && selectedService ? (
        <ServiceDetail service={selectedService} />
      ) : serviceMatch ? (
        <main className="service-not-found">
          <span>Service not found</span>
          <h1>This service page is not available.</h1>
          <a href="/#services">Return to services</a>
        </main>
      ) : (
        <HomePage />
      )}
    </div>
  );
}

export default App;
