import "./MahabaleshwarPackages.css"; // Import CSS file
import { useNavigate } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

// Tour Packages Data
const tourPackages = [
  {
    id: 1,
    title: "Mahabaleshwar Delight",
    description: "Explore scenic viewpoints, Venna Lake, and enjoy a peaceful retreat.",
    price: "₹16,254 per person",
    inclusions: ["3 Nights Stay", "Daily Breakfast", "Sightseeing Tour"],
    duration: "2 Days / 1 Night",
    image: "/src/assets/Images/MahabaleshwarDelight.avif",
  },
  {
    id: 2,
    title: "Scenic Mahabaleshwar Getaway",
    description: "Experience breathtaking landscapes and fresh strawberries.",
    price: "₹20,499 per person",
    inclusions: ["4 Nights Stay", "Daily Breakfast & Dinner", "Guided Tours"],
    duration: "2 Days / 1 Night",
    image: "/src/assets/Images/ScenicMahabaleshwarGetaway.jpg",
  },
  {
    id: 3,
    title: "Family Fun in Mahabaleshwar",
    description: "Enjoy a relaxing family trip with comfortable stays and activities.",
    price: "₹18,750 per person",
    inclusions: ["3 Nights Stay", "Family Activities", "Airport Transfers"],
    duration: "2 Days / 1 Night",
    image: "/src/assets/Images/MahabaleshwarFamily.avif",
  },
  {
    id: 4,
    title: "Romantic Mahabaleshwar Escape",
    description: "A cozy retreat for couples with breathtaking viewpoints.",
    price: "₹22,000 per couple",
    inclusions: ["3 Nights Stay", "Romantic Dinner", "Private Sightseeing"],
    duration: "2 Days / 1 Night",
    image: "/src/assets/Images/MahabaleshwarRomantic.avif",
  },
];

// Carousel Images
const images = [
  { src: tourPackages[0].image, alt: tourPackages[0].title },
  { src: tourPackages[1].image, alt: tourPackages[1].title },
  { src: tourPackages[2].image ,alt: tourPackages[2].title },
  { src: tourPackages[3].image, alt: tourPackages[3].title},
];

const MahabaleshwarPackages = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className="package-container">
      <h2 className="title">Mahabaleshwar Tour Packages</h2>

      {/* Carousel */}
      <div className="carousel-container">
        <Carousel showArrows autoPlay infiniteLoop interval={1000} showThumbs={false} showStatus={false}>
          {images.map((image, index) => (
            <div key={index} className="carousel-slide">
              <img src={image.src} alt={image.alt} className="carousel-image" />
              {/* <p className="legend">{image.alt}</p> */}
            </div>
          ))}
        </Carousel>
      </div>

      <div className="places-container">
      <h2 className="places-title">Famous Tourist Places in Mahabaleshwar</h2>
      <div className="places-grid">
        <ul className="places-list">
          <li><strong>Venna Lake:</strong> Enjoy boating, horse riding, and local street food.</li>
          <li><strong>Elephant’s Head Point:</strong> A rock formation resembling an elephant’s head.</li>
          <li><strong>Arthur’s Seat:</strong> Stunning view of Savitri Valley, known as the Queen of Points.</li>
          <li><strong>Pratapgad Fort:</strong> Historic fort built by Chhatrapati Shivaji Maharaj.</li>
          <li><strong>Mapro Garden:</strong> Famous for strawberries, jams, and fruit-based products.</li>
        </ul>
        <ul className="places-list">
          <li><strong>Lingmala Waterfall:</strong> Best visited during monsoon for its beauty.</li>
          <li><strong>Wilson Point:</strong> Highest point in Mahabaleshwar, perfect for sunrise views.</li>
          <li><strong>Panchgani:</strong> A scenic town with volcanic plateau Table Land.</li>
          <li><strong>Lodwick Point:</strong> Amazing panoramic views and a historic monument.</li>
          <li><strong>Bombay Point (Sunset Point):</strong> Best place to watch the sunset.</li>
        </ul>
      </div>
    </div>

      {/* Tour Packages */}
      <div className="grid">
        {tourPackages.map((pkg) => (
          <div key={pkg.id} className="tour-card">
            <img src={pkg.image} alt={pkg.title} className="tour-image" />
            <h3 className="tour-title">{pkg.title}</h3>
            <p className="tour-description">{pkg.description}</p>
            <p className="tour-price">{pkg.price}</p>
            <p className="tour-duration">{pkg.duration}</p>
            <button className="book-button" onClick={handleClick}>Book Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MahabaleshwarPackages;
