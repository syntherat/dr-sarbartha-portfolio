import React from "react";
import "./Navbar.css";
import doctorImage from "../../assets/doctor_placeholder.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo Section */}
        <div className="nav-brand">
          <div className="brand-name">Dr. Sarbartha Kumar Pratihar</div>
          <div className="brand-qualifications">
            MBBS, MS (General Surgery), M.Ch (Urology)
          </div>
        </div>

        {/* Links Section */}
        <ul className="nav-links">
          <li>
            <a href="#home" className="nav-link">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="nav-link">
              About Us
            </a>
          </li>
          <li>
            <a href="#services" className="nav-link">
              Our Services
            </a>
          </li>
          <li>
            <a href="#media" className="nav-link">
              Media
            </a>
          </li>
          <li>
            <a href="#contact" className="nav-link">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
