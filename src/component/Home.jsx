/* eslint-disable no-dupe-keys */
/* eslint-disable no-unused-vars */
import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import jyotirlingaImage from "../assets/Images/jyotirlinga_image.png";
import jyotirlingaImage1 from "../assets/Images/main1.png";
import jyotirlingaImage2 from "../assets/Images/Jyotirling2.jpeg";
import jyotirlingaImage3 from "../assets/Images/Rumi Gate.jpeg";
import jyotirlingaImage4 from "../assets/Images/jyotirling1.jpeg";
import leaf from "../assets/Images/leaf2.png";
import jyotilinghasImg from "../assets/Images/jyotirlinga_image.png"
const Home = () => {
  const navigate = useNavigate();

  const jyotirlingas = [
    "Bhimashankar Jyotirlinga (Pune, Maharashtra)", 
    "Trimbakeshwar Jyotirlinga (Nashik, Maharashtra)",
    "Grishneshwar Jyotirlinga (Aurangabad, Maharashtra)",
    "Aundha Nagnath Jyotirlinga (Hingoli, Maharashtra)",
    "Parli Vaijnath Jyotirlinga (Beed, Maharashtra)"
  ];
  const tourPackages = [
    {
      id: 1,
      title: " Jyotirlinga Darshan(Ac bus)",  
      description:
        "A divine pilgrimage covering Bhimashankar, Trimbakeshwar, Grishneshwar, Aundha Nagnath, and Parli Vaijnath Jyotirlingas.",
      image: jyotirlingaImage1,
    },
    {
      id: 2,
      title: " Jyotirlinga Yatra(non AC bus)",
      description:
        "A spiritual journey coveringBhimashankar, Trimbakeshwar, Grishneshwar, Aundha Nagnath, and Parli Vaijnath Jyotirlingas.",
      image: jyotirlingaImage2,
    },
    {
      id: 3,
      title: "Jyotirlinga darshan (cab)",
      description:
        "Visit the sacred Jyotirlingas ofBhimashankar, Trimbakeshwar, Grishneshwar, Aundha Nagnath, and Parli Vaijnath along with nearby temples.",
      image: jyotirlingaImage3,
    },
    {
      id: 4,
      title: " Jyotirlinga Tour(cab)",
      description:
        "A once-in-a-lifetime pilgrimage covering all 12 Jyotirlingas across India with spiritual guidance.",
      image: jyotirlingaImage4,
    },
   
  ];
  

  return (
    <div className="home-container">
      <div className="form-container">
        <img
          src={jyotirlingaImage}
          alt="Background"
          className="background-image"
        />

        <div className="leaf-container">
          {[...Array(10)].map((_, i) => (
            <img key={i} src={leaf} alt="Leaf" className={`leaf leaf-${i}`} />
          ))}
        </div>

        <div className="jyotirlingas-info">
          <h2>Jyotirlingas Tour</h2>
          <div className="jyotirlingas-list">
            {jyotirlingas.map((jyotirlinga, index) => (
              <div key={index} className="jyotirlinga-item">
                <Link
                  to={`/jyotirlinga/${encodeURIComponent(jyotirlinga)}`}
                  style={{
                    cursor: "pointer",
                    color: "blue",
                    textDecoration: "none",
                  }}
                >
                  <p>{jyotirlinga}</p>
                  
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="tour-packages">
        <h2>Jyotirlingas Tour Packages</h2>

        <div className="container">
          <div className="grid">
            {tourPackages.map((pkg) => (
              <div key={pkg.id} className="tour-card">
                <img src={pkg.image} alt={pkg.title} className="tour-image" />
                <h3 className="tour-title">{pkg.title}</h3>
                <p className="tour-description">{pkg.description}</p>
                <p className="tour-price">3 days 2 night</p>

                <button className="book-button" onClick={() => navigate("/")}>
                  Book Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
