import { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import logo from "../assets/wtl-logo.png";

const NavBar = () => {
  const [isHolidaysOpen, setIsHolidaysOpen] = useState(false);

  const toggleHolidays = () => {
    setIsHolidaysOpen((prev) => !prev);
  };

  const closeHolidaysMenu = () => {
    setIsHolidaysOpen(false);
  };

  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light">
        <Link className="navbar-brand" to="/">
          <img
            src={logo || "/placeholder.svg"}
            alt="Logo"
            className="navbar-logo"
            height={"50px"}
          />
        </Link>
        <div className="navbar-center">
          <span className="navbar-title">Festive Journey</span>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ml-auto">
            
            <div className="nav-item dropdown mega-menu-wrapper">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                id="navbarDropdownFestive"
                role="button"
                onClick={toggleHolidays}
                aria-expanded={isHolidaysOpen}
              >
                Tour Packages
              </Link>
              <div className={`mega-menu ${isHolidaysOpen ? "show" : ""}`}>
                <div className="mega-menu-content">
                  <div className="mega-menu-column">
                    <h3>Tirth Yatra</h3>
                    <Link
                      className="mega-menu-item"
                      to="/kumbhmela"
                      onClick={closeHolidaysMenu}
                    >
                      Kumbh Mela
                    </Link>
                    <Link
                      className="mega-menu-item"
                      to="/ashtavinayak"
                      onClick={closeHolidaysMenu}
                    >
                      Ashtavinayak
                    </Link>
                    <Link
                      className="mega-menu-item"
                      to="/jyotilinghas"
                      onClick={closeHolidaysMenu}
                    >
                      Jyotilinghas
                    </Link>
                  </div>
                  <div className="mega-menu-column">
                    <h3>Summer Packages</h3>
                    <Link
                      className="mega-menu-item"
                      to="/goa"
                      onClick={closeHolidaysMenu}
                    >
                      Goa Tour
                    </Link>
                    <Link
                      className="mega-menu-item"
                      to="/kokan"
                      onClick={closeHolidaysMenu}
                    >
                      Kokan Tour
                    </Link>
                    <Link
                      className="mega-menu-item"
                      to="/mahabaleshwar"
                      onClick={closeHolidaysMenu}
                    >
                      Mahabaleshwar Tour
                    </Link>
                    <Link
                      className="mega-menu-item"
                      to="/keral"
                      onClick={closeHolidaysMenu}
                    >
                      Kerala Tour
                    </Link>
                    <Link className="mega-menu-item" to="/lonavala" onClick={closeHolidaysMenu}>
                    Lonavala Tour
                    </Link>
                  </div>
                  <div className="mega-menu-column">
                    <h3>Special Offers</h3>
                    <Link
                      className="mega-menu-item"
                      to="#"
                      onClick={closeHolidaysMenu}
                    >
                      Summer Specials
                    </Link>
                    <Link
                      className="mega-menu-item"
                      to="#"
                      onClick={closeHolidaysMenu}
                    >
                      Monsoon Packages
                    </Link>
                    <Link
                      className="mega-menu-item"
                      to="#"
                      onClick={closeHolidaysMenu}
                    >
                      Winter Holidays
                    </Link>
                    <Link
                      className="mega-menu-item"
                      to="#"
                      onClick={closeHolidaysMenu}
                    >
                      Group Tours
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <Link
              className="nav-item nav-link"
              to="/about"
              onClick={closeHolidaysMenu}
            >
              About Us
            </Link>
            <Link
              className="nav-item nav-link"
              to="/contact"
              onClick={closeHolidaysMenu}
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
