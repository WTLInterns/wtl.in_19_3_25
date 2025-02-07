import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import '../App.css'; // Add your custom styles in this file
import logo from "../assets/wtl-logo.png";

const NavBar = () => {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light">
        {/* Make the logo clickable and link to the main page */}
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Logo" className="navbar-logo" />
        </Link>
        <div className="navbar-center">
          <span className="navbar-title">Festive Journey</span>
        </div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ml-auto">
            {/* Tour Packages Dropdown */}
            <div className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Tour Packages
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link className="dropdown-item" to="#">Festival of Lights</Link>
                <Link className="dropdown-item" to="#">Cultural Heritage Tour</Link>
                <Link className="dropdown-item" to="#">Spiritual Escapades</Link>
              </div>
            </div>
            {/* Festive Journey Dropdown */}
            <div className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdownFestive" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Festive Journey
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownFestive">
                <Link className="dropdown-item" to="#">Kumbh Mela</Link>
                <Link className="dropdown-item" to="#">Ashtavinayak</Link>
                {/* Updated link for Jyotilinghas */}
                <Link className="dropdown-item" to="/jyotilinghas">Jyotilinghas</Link>
                <Link className="dropdown-item" to="#">Kokan</Link>
                <Link className="dropdown-item" to="#">Goa</Link>
                <Link className="dropdown-item" to="#">Mahabaleshwar</Link>
                <Link className="dropdown-item" to="#">Keral</Link>
                <Link className="dropdown-item" to="#">Lonavala</Link>
              </div>
            </div>
            <Link className="nav-item nav-link" to="/about">About Us</Link>
            <Link className="nav-item nav-link" to="/contact">Contact</Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
