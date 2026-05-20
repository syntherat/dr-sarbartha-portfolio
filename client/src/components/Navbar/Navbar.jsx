import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const navItems = [
  { label: "Home", to: "/", route: true },
  { label: "About Us", to: "/about", route: true },
  { label: "Our Services", to: "/#services" },
  { label: "Media", to: "/#media" },
  { label: "Contact", to: "/#contact" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="nav-brand" onClick={closeMobileMenu}>
          <div className="brand-name">Dr. Sarbartha Kumar Pratihar</div>
          <div className="brand-qualifications">
            URO-ONCOLOGY & ROBOTIC SURGERY
          </div>
        </Link>

        <button
          className="mobile-nav-toggle"
          type="button"
          aria-expanded={isMobileMenuOpen}
          aria-controls="primary-navigation"
          aria-label={
            isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          onClick={() => setIsMobileMenuOpen((isOpen) => !isOpen)}
        >
          {isMobileMenuOpen ? (
            <X size={19} aria-hidden="true" />
          ) : (
            <Menu size={19} aria-hidden="true" />
          )}
        </button>

        <ul
          id="primary-navigation"
          className={`nav-links${isMobileMenuOpen ? " nav-links-open" : ""}`}
        >
          {navItems.map((item) => (
            <li key={item.to}>
              {item.route ? (
                <NavLink
                  to={item.to}
                  end={item.to === "/"}
                  className={({ isActive }) =>
                    `nav-link${isActive ? " nav-link-active" : ""}`
                  }
                  onClick={closeMobileMenu}
                >
                  {item.label}
                </NavLink>
              ) : (
                <Link
                  to={item.to}
                  className="nav-link"
                  onClick={closeMobileMenu}
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
