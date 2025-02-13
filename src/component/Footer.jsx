import "./Footer.css";
import logo from "../assets/wtl.png";
import { Link } from "react-router-dom";


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
            <Link to="/about">About Us</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <span className="section-title">Quick Links</span>
          <ul className="animated-list">
            <li>
            <Link to="/contact">Contact Us</Link>
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
              <a href="tel:9730545491">+91 9730545491</a>
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
