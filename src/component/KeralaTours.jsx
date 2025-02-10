/* eslint-disable no-unused-vars */
import React from "react";
import "./MahabaleshwarPackages.css";
import { useNavigate } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const keralaPackages = [
  {
    id: 1,
    title: "Serene Kerala Escape",
    description: "Enjoy houseboat cruises, lush greenery, and serene backwaters.",
    price: "₹18,999 per person",
    inclusions: ["4 Nights Stay", "Houseboat Ride", "Daily Breakfast"],
    image: "/src/assets/Images/KeralaEscape.png"
  },
  {
    id: 2,
    title: "Exotic Munnar & Alleppey",
    description: "Explore Munnar tea gardens and relax in Alleppey's houseboats.",
    price: "₹22,499 per person",
    inclusions: ["5 Nights Stay", "Tea Plantation Visit", "Backwater Cruise"],
    image: "/src/assets/Images/kerala.png"
  },
  {
    id: 3,
    title: "Romantic Kerala Getaway",
    description: "Ideal for couples with luxury stays and stunning views.",
    price: "₹25,000 per couple",
    inclusions: ["3 Nights Stay", "Candlelight Dinner", "Beach Walks"],
    image: "/src/assets/Images/KeralaRomantic.png"
  },
  {
    id: 4,
    title: "Kerala Wildlife & Adventure",
    description: "Experience Periyar wildlife sanctuary and thrilling activities.",
    price: "₹20,750 per person",
    inclusions: ["3 Nights Stay", "Jungle Safari", "Trekking Experience"],
    image: "/src/assets/Images/KeralaWildlifeAdventure.png"
  }
];

const images = [
  { src: keralaPackages[0].image, alt: keralaPackages[0].title },
  { src: keralaPackages[1].image, alt: keralaPackages[1].title },
  { src: keralaPackages[2].image, alt: keralaPackages[2].title },
  { src: keralaPackages[3].image  , alt: keralaPackages[3].title }
];


const KeralaTours = () => {

  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/')
  }

  return (
    <>
      <h2 className="title">Kerala Tour Packages</h2>

      <div className="carousel-container">
        <Carousel
          showArrows={true}
          autoPlay={true}
          infiniteLoop={true}
          interval={1000}
          showThumbs={false}
          showStatus={false}
        >
          {images.map((image, index) => (
            <div key={index} className="carousel-slide">
              <img src={image.src} alt={image.alt} className="carousel-image" />
              {/* <p className="legend">{image.alt}</p> */}
            </div>
          ))}
        </Carousel>
      </div>
      <div>
        <div className="places-container">
          <h2 className="places-title">Famous Tourist Places in Kerala</h2>
          <div className="places-grid">
            <ul className="places-list">
              <li><strong>Alleppey (Alappuzha):</strong> Famous for backwaters and houseboat cruises.</li>
              <li><strong>Munnar:</strong> Stunning tea plantations and misty hills.</li>
              <li><strong>Kochi:</strong> A blend of colonial history, Chinese fishing nets, and vibrant culture.</li>
              <li><strong>Thekkady:</strong> Home to Periyar Wildlife Sanctuary with elephants and boat safaris.</li>
              <li><strong>Kumarakom:</strong> A serene village with scenic backwaters and bird sanctuary.</li>

            </ul>
            <ul className="places-list">
              <li><strong>Kovalam Beach:</strong> Golden sands, lighthouse views, and water sports.</li>
              <li><strong>Wayanad:</strong> Lush green landscapes, waterfalls, and tribal heritage.</li>
              <li><strong>Varkala:</strong> Cliffside beaches with breathtaking views and spiritual vibes.</li>
              <li><strong>Bekal Fort:</strong> Historic seaside fort offering stunning Arabian Sea views.</li>
              <li><strong>Poovar Island:</strong> A hidden paradise with golden beaches and tranquil waters.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container">

        <div className="grid">
          {keralaPackages.map((tour) => (
            <div key={tour.id} className="tour-card">
              <img src={tour.image} alt={tour.title} className="tour-image" />
              <div className="tour-content">
                <h3 className="tour-title">{tour.title}</h3>
                <p className="tour-description">{tour.description}</p>
                <p className="tour-price">{tour.price}</p>
                {/* <ul className="tour-inclusions">
                {tour.inclusions.map((item, index) => (
                  <li key={index}>✅{item}</li>
                ))}
              </ul> */}
                <button className="book-button" onClick={handleClick}>Book Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default KeralaTours;
