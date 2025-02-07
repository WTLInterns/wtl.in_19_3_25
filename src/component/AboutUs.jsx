import React from 'react';
import img from '../assets/Images/aboutus.webp';
import './about.css';

const AboutUs = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <img src={img} alt="About Us" />
      <p>
        Welcome to <strong>Festive Journey</strong>, your trusted partner for unforgettable travel experiences across India. 
        We specialize in offering diverse tours, ensuring comfort, adventure, and spirituality. 
      </p>
      <p>
        ✨ <strong>Goa Tour:</strong> Explore golden beaches, vibrant nightlife, historic forts, and serene churches. Enjoy thrilling water sports and relax by the sea.
      </p>
      <p>
        🌊 <strong>Kokan Tour:</strong> Discover the hidden beauty of Maharashtra’s coastal paradise with breathtaking beaches, local seafood, and scenic waterfalls.
      </p>
      <p>
        🏔️ <strong>Mahabaleshwar Tour:</strong> Escape to lush green valleys, stunning viewpoints, and the famous strawberry farms of this hill station.
      </p>
      <p>
        🕉️ <strong>Kumbh Mela Tour:</strong> Witness the grandeur of the largest spiritual gathering in the world, filled with devotion, rituals, and cultural heritage.
      </p>
      <p>
        🚩 <strong>Ashtavinayak Tour:</strong> A sacred journey to the eight revered Ganpati temples in Maharashtra, each with its own unique history and significance.
      </p>
      <p>
        🔱 <strong>Jyotirlingas Tour:</strong> Embark on a divine pilgrimage to the 12 sacred Jyotirlingas of Lord Shiva, experiencing peace and devotion in these holy shrines.
      </p>
      <p>
        Our mission is to provide seamless and enriching travel experiences with well-planned itineraries, comfortable accommodations, and expert guidance. 
        Whether you're looking for adventure, relaxation, or a spiritual retreat, we have the perfect tour for you. 
        Join us and explore the beauty and heritage of India with **Festive Journey**! 🌍✈️
      </p>
    </div>
  );
};

export default AboutUs;
