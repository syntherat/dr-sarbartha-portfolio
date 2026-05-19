import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo Section */}
        <a href="/" className="nav-brand">
          <div className="brand-name">Dr. Sarbartha Kumar Pratihar</div>
          <div className="brand-qualifications">
            URO-ONCOLOGY & ROBOTIC SURGERY
          </div>
        </a>

        {/* Links Section */}
        <ul className="nav-links">
          <li>
            <a href="/" className="nav-link">
              Home
            </a>
          </li>
          <li>
            <a href="/#about" className="nav-link">
              About Us
            </a>
          </li>
          <li>
            <a href="/#services" className="nav-link">
              Our Services
            </a>
          </li>
          <li>
            <a href="/#media" className="nav-link">
              Media
            </a>
          </li>
          <li>
            <a href="/#contact" className="nav-link">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
