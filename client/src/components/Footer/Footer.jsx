import { ArrowUpRight, CalendarDays, MapPin, ShieldPlus } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter, FaYoutube } from "react-icons/fa6";
import "./Footer.css";

const footerLinks = [
  {
    title: "Explore",
    links: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/#services" },
      { label: "Case Studies", href: "/#case-studies" },
      { label: "Media", href: "/#media" },
      { label: "Schedule", href: "/#schedule" },
    ],
  },
  {
    title: "Cancer Care",
    links: [
      { label: "Prostate Cancer", href: "/services/prostate-cancer" },
      { label: "Bladder Cancer", href: "/services/urinary-bladder-cancer" },
      { label: "Kidney Cancer", href: "/services/kidney-cancer" },
      { label: "Testicular Cancer", href: "/services/testicular-cancer" },
      { label: "Retroperitoneal Cancer", href: "/services/retroperitoneal-cancer" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "Book Appointment", href: "#schedule" },
      {
        label: "RGCIRC, Rohini",
        href: "https://www.google.com/maps/search/?api=1&query=Rajiv%20Gandhi%20Cancer%20Institute%20Rohini%20Delhi",
      },
      { label: "Online Consultation", href: "#schedule" },
      { label: "Media Updates", href: "#media" },
    ],
  },
];

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/sarbartha-kumar-pratihar-295395266", Icon: FaLinkedinIn },
  { label: "Instagram", href: "https://www.instagram.com/drsarbarthapratihar", Icon: FaInstagram },
  { label: "YouTube", href: "https://www.youtube.com/@skpurology", Icon: FaYoutube },
  { label: "X", href: "https://x.com/psarbartha", Icon: FaXTwitter },
  { label: "X", href: "https://www.facebook.com/share/1JJ8gHFCyF/", Icon: FaFacebookF },
];

const Footer = () => {
  return (
    <footer className="site-footer" id="contact">
      <div className="footer-panel">
        <div className="footer-top">
          <div className="footer-brand-block">
            <a href="/" className="footer-brand">
              <span className="footer-brand-icon">
                <ShieldPlus size={22} />
              </span>
              <span>
                <strong>Dr. Sarbartha Kumar Pratihar</strong>
                <small>Uro-Oncology & Robotic Surgery</small>
              </span>
            </a>

            <p>
              Focused cancer care, robotic surgery planning, and follow-up for
              complex urological conditions.
            </p>

            <div className="footer-quick-info">
              <span>
                <MapPin size={16} />
                RGCIRC, Rohini
              </span>
              <span>
                <CalendarDays size={16} />
                Mon to Sat, 10 AM to 2 PM
              </span>
            </div>

            <div className="footer-socials">
              {socialLinks.map(({ label, href, Icon }) => (
                <a href={href} aria-label={label} key={label} target="_blank" rel="noopener noreferrer">
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          <nav className="footer-link-grid" aria-label="Footer navigation">
            {footerLinks.map((group) => (
              <div className="footer-link-column" key={group.title}>
                <h3>{group.title}</h3>
                {group.links.map((link) => (
                  <a href={link.href} key={link.label}>
                    {link.label}
                    <ArrowUpRight size={13} />
                  </a>
                ))}
              </div>
            ))}
          </nav>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 Dr. Sarbartha Kumar Pratihar. All rights reserved.</p>
          <span>Uro-oncology care in Delhi</span>
        </div>

        <div className="footer-signature" aria-hidden="true">
          Dr. Sarbartha
        </div>
      </div>
    </footer>
  );
};

export default Footer;
