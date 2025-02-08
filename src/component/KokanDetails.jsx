// eslint-disable-next-line no-unused-vars
import React from "react";
import "../component/KokanDetails.css";
import KokanCarousel from "./KokanCarousel";
import TourismCarousel from "./TourismCarousel"; // Import the missing component

// Import images properly
import kokan1 from "../assets/kokan/Ratnagi The Port Town.webp";
import kokan5 from "../assets/kokan/Sindhudurg.webp";
import kokan3 from "../assets/kokan/Dapoli.webp";
import kokan4 from "../assets/kokan/Ganpatipule.webp";
import Experiences from "./Experiences";

const tourPackages = [
  {
    id: 1,
    title: "Ratnagiri: The Port Town",
    description:
      "The port town of Ratnagiri is much known for producing world famous Alphonso mangoes. Being home to Western Ghat hills and Arabian Sea waves, this town is perfect for a weekend getaway.",
    // price: "₹16,254 per person",
    inclusions: ["3 Nights Stay", "Daily Breakfast", "Sightseeing Tour"],
    image: kokan1, 
  },
  {
    id: 2,
    title: " Sindhudurg: For Forts",
    description:
      "Talking about Sindhudrg, what comes to mind first is the Chhatrapati Shivaji’s fort with the same name. Being home to 50 smaller towns, this district is famous for the Sindhudurg Fort.",
    // price: "₹20,499 per person",
    inclusions: ["4 Nights Stay", "Daily Breakfast & Dinner", "Guided Tours"],
    image: kokan5, 
  },
  {
    id: 3,
    title: " Dapoli: For The Culture Vultures",
    description:
      "Located approximately 215 km away from Mumbai, Dapoli is known as Mini-Mahabaleshwar as well. Ruled by Britishers once, this place is a melting pot of different cultures. Adorned with pristine beaches, Dapoli has forests too..",
    // price: "₹18,750 per person",
    inclusions: ["3 Nights Stay", "Family Activities", "Airport Transfers"],
    image: kokan3, 
  },
  {
    id: 4,
    title: " Ganpatipule: Exotic Beaches",
    description:
      "Being home to pristine beaches, Ganpatipule adorns itself with mangroves along with plantations. The beauty of the clear blue water of the Arabian Sea further adds to the beauty of this place",
    // price: "₹22,000 per couple",
    inclusions: ["3 Nights Stay", " Dinner", "Private Sightseeing"],
    image: kokan4, 
  },
];

const MahabaleshwarPackages = () => {
  return (
    <div>
      <KokanCarousel />

      <div className="container">
        <h2 className="title">Kokan Tour Packages</h2>
        <div className="grid">
          {tourPackages.map((pkg) => (
            <div key={pkg.id} className="tour-card">
              <img src={pkg.image} alt={pkg.title} className="tour-image" />
              <h3 className="tour-title">{pkg.title}</h3>
              <p className="tour-description">{pkg.description}</p>
              <p className="tour-price">{pkg.price}</p>
              <button className="book-button">Book Now</button>
            </div>
          ))}
        </div>
      </div>

      <TourismCarousel />
      <Experiences />
    </div>
  );
};

export default MahabaleshwarPackages;
