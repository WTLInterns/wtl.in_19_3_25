import "./Footer.css";
import logo from "../assets/wtl.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section logo-section">
          <img src={logo} alt="Company Logo" className="company-logo" />
          <p className="company-description">
            At WTL Tourism Private Limited, we specialize in providing seamless,
            reliable, and efficient corporate and rental cab service across
            India. With a fleet of well-maintained vehicles, professional
            drivers, and state-of-the-art GPS tracking, we ensure a smooth and
            safe journey every time.
          </p>
        </div>

        <div className="footer-section">
          <span className="section-title">Explore</span>
          <ul className="animated-list">
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/services">Our Services</a>
            </li>
            <li>
              <a href="/projects">Projects</a>
            </li>
            <li>
              <a href="/blog">Blog</a>
            </li>
            <li>
              <a href="/careers">Careers</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <span className="section-title">Quick Links</span>
          <ul className="animated-list">
            <li>
              <a href="/faq">FAQ</a>
            </li>
            <li>
              <a href="/terms">Terms of Service</a>
            </li>
            <li>
              <a href="/privacy">Privacy Policy</a>
            </li>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
            <li>
              <a href="/sitemap">Sitemap</a>
            </li>
          </ul>
        </div>

        <div className="footer-section contact-section">
          <span className="section-title">Get In Touch</span>
          <ul className="animated-list">
            <li className="contact-item">
              <i className="icon-email"></i>
              <a href="mailto:contact@worldtriplink.com">contact@worldtriplink.com</a>
            </li>
            <li className="contact-item">
              <i className="icon-phone"></i>
              <a href="tel:+1234567890">+91 9145730054</a>
            </li>
            <li className="contact-item">
              <i className="icon-location"></i>
              <span>Kharadi Pune</span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
