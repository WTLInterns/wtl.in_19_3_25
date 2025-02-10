/* eslint-disable no-dupe-keys */
/* eslint-disable no-unused-vars */
import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import jyotirlingaImage from "../assets/Images/jyotirlinga_image.png";
import jyotirlingaImage2 from "../assets/Images/Jyotirling2.jpeg";
import jyotirlingaImage3 from "../assets/Images/Rumi Gate.jpeg";
import jyotirlingaImage4 from "../assets/Images/jyotirling1.jpeg";
import leaf from "../assets/Images/leaf2.png";
import jyotilinghasImg from "../assets/Images/wtlJyotilinghas.png"
const Home = () => {
  const navigate = useNavigate();

  const jyotirlingas = [
    "Somnath (Gujarat)",
    "Mallikarjuna (AndhraPradesh)",
    "Mahakaleshwar (MadhyaPradesh)",
    "Omkareshwar (MadhyaPradesh)",
    "Kedarnath (Uttarakhand)",
    "Bhimashankar (Maharashtra)",
    "Vishwanath (UttarPradesh)",
    "Ramanath (TamilNadu)",
    "Nageshwar (Gujarat)",
    "Tryambakeshwar (Maharashtra)",
    "Adhyashankar (Himalayas)",
    "Grishneshwar (Maharashtra)",
  ];

  const tourPackages = [
    {
      id: 1,
      title: "West India Jyotirlinga Darshan",       description:
      "A divine pilgrimage covering Somnath, Nageshwar, Bhimashankar, and Trimbakeshwar Jyotirlingas.",
    price: "₹ starting at 2999",
    inclusions: [
      "1 Nights Stay",
      "VIP Darshan at 4 Jyotirlingas",
      "Puja & Rituals",
      "Travel by AC Bus/cab"],
      image: jyotilinghasImg,
    },
    {
      id: 2,
      title: "Sacred North & Central Jyotirlinga Yatra",
    description:
      "A spiritual journey covering Kashi Vishwanath, Mahakaleshwar, Omkareshwar, and Baidyanath Jyotirlingas.",
      price: "₹ starting at 2999",
      inclusions: ["1 Nights Stay", "Daily Breakfast & Dinner", "Guided Tours"],
      image: jyotirlingaImage2,
    },
    {
      id: 3,
      title: "South India Jyotirlinga Pilgrimage",
    description:
      "Visit the sacred Jyotirlingas of Rameshwaram, Mallikarjuna, and Bhimashankar, along with nearby temples.",
    price: "₹ starting at 2999",
      inclusions: ["1 Nights Stay", "Family Activities", "Cultural Sightseeing",],
      image: jyotirlingaImage3,
    },
    {
      id: 4,
      title: "12 Jyotirlinga Complete Tour",
      description:
        "A once-in-a-lifetime pilgrimage covering all 12 Jyotirlingas across India with spiritual guidance.",
      price: "₹ starting at 2999",
      inclusions: ["1 Nights Stay", "All Temple Darshans",
      "Spiritual Guidance & Rituals"],
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
          <h2>12 Jyotirlingas Tour</h2>
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
                <p className="tour-price">{pkg.price}</p>

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
