import React from "react";
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import "./Footer.css"; // Custom styles
import logo from "../assets/Images/wtlJyotilinghas.webp"; // Replace with your image path

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Logo and Description */}
        <div className="footer-section">
          <img src={logo} alt="Jyotirlinga Tour" className="footer-logo" />
          <p>
            Explore India’s most iconic spiritual and cultural destinations. From the sacred Jyotirlingas to the serene beaches of Goa, our tours offer the best of India’s diverse beauty and heritage.
          </p>
        </div>

        {/* Explore Section with all tours */}
        <div className="footer-section">
          <h3>Explore</h3>
          <ul>
          <li><Link to="/kumbh">Kumbh Mela</Link></li>
          <li><Link to="/ashtavinayak">Ashtavinayak</Link></li>
          <li><Link to="/jyotilighas">Jyotilighas</Link></li>
            <li><Link to="/mahabaleshwar">Mahabaleshwar</Link></li>
            <li><Link to="/kumbh-mela">Mahakumbh</Link></li>
            <li><Link to="/lonavala">Lonavala</Link></li>
            <li><Link to="/keral">Kerala</Link></li>
            <li><Link to="/goa">Goa</Link></li>
            <li><Link to="/kokan">Kokan</Link></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li> {/* Link to Home */}
            <li><Link to="/about">About Us</Link></li> {/* Link to About Us */}
            <li><Link to="/tour-packages">Tour Packages</Link></li> {/* Link to Tour Packages */}
            <li><Link to="/contact">Contact Us</Link></li> {/* Link to Contact */}
          </ul>
        </div>

        {/* Contact Information */}
        <div className="footer-section">
          <h3>Get In Touch</h3>
          <p>Office No. 009, Wing-A, Downtown Rd, CityVista, Kharadi, Pune, Maharashtra 411014</p>
          <p>Phone: +91-914530054</p>
          <p>Email: <a href="mailto:contact@worldtriplink.com">contact@worldtriplink.com</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
