"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
 import "./LonavalaTour.css"

import img12 from "../assets/Images/lonavala1.png"
import lonavala2 from "../assets/Images/lonavala2.png"
import lonavala3 from "../assets/Images/lonavala3.png"
import lonavala4 from "../assets/Images/lonavala4.png"
import lonavala5 from "../assets/Images/lonavala5.png"

const LonavalaTour = () => {
  const navigate = useNavigate()
  const [activePackage, setActivePackage] = useState(null)

  const tourPackages = [
    {
      id: 1,
      title: "Lonavala Hill Escape",
      description: "Enjoy the serene beauty of Lonavala's lush green hills and waterfalls.",
      price: "₹9,999",
      duration: "2 Nights",
      groupSize: "2-4 people",
      inclusions: ["Waterfall Trekking", "Complimentary Breakfast", "Guided Tours"],
      image: lonavala2,
    },
    {
      id: 2,
      title: "Lonavala Adventure Retreat",
      description: "Experience adventure with trekking, camping, and scenic viewpoints.",
      price: "₹12,999",
      duration: "3 Nights",
      groupSize: "4-6 people",
      inclusions: ["Camping Experience", "Trekking & Sightseeing", "Adventure Sports"],
      image: lonavala3,
    },
    {
      id: 3,
      title: "Romantic Getaway in Lonavala",
      description: "A perfect retreat for couples with candlelight dinners and spa sessions.",
      price: "₹15,750",
      duration: "2 Nights",
      groupSize: "Couple",
      inclusions: ["Candlelight Dinner", "Couple Spa Session", "Scenic Drive"],
      image: lonavala4,
    },
    {
      id: 4,
      title: "Lonavala Monsoon Magic",
      description: "Witness Lonavala's breathtaking monsoon beauty with lush landscapes.",
      price: "₹11,500",
      duration: "2 Nights",
      groupSize: "2-4 people",
      inclusions: ["Kune Waterfalls Visit", "Local Food Tour", "Nature Photography"],
      image: lonavala5,
    },
  ]

  return (
    <div className="lonavala-tour">
      <div className="lonavala-container">
        <div className="lonavala-hero">
          <img src={img12 || "/placeholder.svg"} alt="Lonavala Journey" className="lonavala-hero-image" />
          <div className="lonavala-hero-overlay">
            <h1 className="lonavala-hero-title">Discover Lonavala</h1>
            <p className="lonavala-hero-subtitle">The Jewel of the Sahyadris</p>
            <button className="lonavala-cta-button">Explore Packages →</button>
          </div>
        </div>

        <div className="lonavala-info">
          <h2 className="lonavala-section-title">Why Visit Lonavala?</h2>
          <div className="lonavala-info-grid">
            <div className="lonavala-info-item">
              <h3>Scenic Beauty</h3>
              <p>
                Rolling hills, dense forests, and breathtaking viewpoints like Tiger's Leap, Lion's Point, and Duke's
                Nose.
              </p>
            </div>
            <div className="lonavala-info-item">
              <h3>Monsoon Magic</h3>
              <p>
                Lonavala transforms into a paradise during the monsoon, with numerous waterfalls, including Bhushi Dam,
                Kune Falls, and Pawna Lake.
              </p>
            </div>
            <div className="lonavala-info-item">
              <h3>Historical Sites</h3>
              <p>Explore forts like Rajmachi, Lohagad, and Visapur, which tell stories of Maratha valor.</p>
            </div>
            <div className="lonavala-info-item">
              <h3>Trekking & Adventure</h3>
              <p>Ideal for trekkers with trails leading to Tikona Fort, Karla Caves, and Korigad Fort.</p>
            </div>
          </div>
        </div>

        <div className="lonavala-packages">
          <h2 className="lonavala-section-title">Our Tour Packages</h2>
          <div className="lonavala-packages-grid">
            {tourPackages.map((pkg) => (
              <div
                key={pkg.id}
                className={`lonavala-package-card ${activePackage === pkg.id ? "active" : ""}`}
                onClick={() => setActivePackage(pkg.id)}
              >
                <img src={pkg.image || "/placeholder.svg"} alt={pkg.title} className="lonavala-package-image" />
                <div className="lonavala-package-content">
                  <h3 className="lonavala-package-title">{pkg.title}</h3>
                  <p className="lonavala-package-description">{pkg.description}</p>
                  <div className="lonavala-package-details">
                    <p className="lonavala-package-price">
                      {pkg.price} <span>per person</span>
                    </p>
                    <p>🗓️ {pkg.duration}</p>
                    <p>👥 {pkg.groupSize}</p>
                  </div>
                  <ul className="lonavala-package-inclusions">
                    {pkg.inclusions.map((item, index) => (
                      <li key={index}>✅ {item}</li>
                    ))}
                  </ul>
                  <button className="lonavala-book-button" onClick={() => navigate("/")}>
                    Book Now →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default LonavalaTour

