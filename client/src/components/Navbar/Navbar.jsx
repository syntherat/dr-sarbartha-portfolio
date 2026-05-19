import { Menu, X } from "lucide-react";
import { useState } from "react";
import "./Navbar.css";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/#about" },
  { label: "Our Services", href: "/#services" },
  { label: "Media", href: "/#media" },
  { label: "Contact", href: "/#contact" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="nav-brand" onClick={closeMobileMenu}>
          <div className="brand-name">Dr. Sarbartha Kumar Pratihar</div>
          <div className="brand-qualifications">
            URO-ONCOLOGY & ROBOTIC SURGERY
          </div>
        </a>

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
            <li key={item.href}>
              <a
                href={item.href}
                className="nav-link"
                onClick={closeMobileMenu}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
