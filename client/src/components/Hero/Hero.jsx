import "./Hero.css";
import doctorImage from "../../assets/doc-placeholder-nobg.png";

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <div className="hero-text-section">
          <span className="hero-tagline">Your Health, Our Priority</span>

          <h1 className="hero-heading">
            Redefining Urological
            <br />
            {" "}Cancer Care with
            <br /> Robotic Precision
          </h1>

          <p className="hero-description">
            Consultant in Urooncology & Robotic Surgery at RGCIRC, Delhi. <br />
            Specialized in advanced minimally invasive procedures for urological
            cancers.
          </p>

          <div className="hero-ctas">
            <button className="btn-primary">Book Appointment</button>
            <button className="btn-secondary">View Profile</button>
          </div>

          <div className="hero-trust-indicators">
            <div className="trust-item">
              <span className="trust-number">20+</span>
              <span className="trust-label">Years Experience</span>
            </div>
            <div className="trust-divider"></div>
            <div className="trust-item">
              <span className="trust-number">5000+</span>
              <span className="trust-label">Surgeries</span>
            </div>
          </div>
        </div>

        <div className="hero-image-section">
          <div className="concentric-circles">
            <div className="circle circle-1"></div>
            <div className="circle circle-2"></div>
            <div className="circle circle-3"></div>
          </div>

          <img
            src={doctorImage}
            alt="Dr. Sarbartha - Urooncology Surgeon"
            className="hero-image"
          />

          <div className="floating-card card-left">
            <div className="card-avatars">
              <div className="avatar bg-1"></div>
              <div className="avatar bg-2"></div>
              <div className="avatar bg-3"></div>
              <div className="avatar bg-4"></div>
            </div>
            <span className="card-text">Talk to our expert team</span>
          </div>

          <div className="floating-card card-right">
            <div className="card-icon-wrapper">
              <span className="card-icon">👥</span>
            </div>
            <div className="card-text-group">
              <span className="card-title">5000+</span>
              <span className="card-subtitle">Satisfied Patients</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
