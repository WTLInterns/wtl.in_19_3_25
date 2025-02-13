import "./MahakumbhJourney.css";
import img12 from "/src/assets/Images/Mahakumb.png"; // ✅ Import the image
import {useNavigate} from "react-router-dom";
import mahakumbh2 from "/src/assets/Images/mahakumbh2.png"; 
import mahakumbh3 from "/src/assets/Images/mahakumbh3.png"; 


export default function MahakumbhJourney() {
  const navigate = useNavigate();
  const tourPackages = [
    {
      id: 1,
      title: "Mahakumbh Spiritual Retreat",
      description: "Experience the divine energy of Mahakumbh with holy dips and rituals.",
      price: "₹11,999 per person",
      inclusions: ["3 Nights Stay", "Ganga Aarti Experience", "Local Temple Tour"],
      image: mahakumbh2
    },
    {
      id: 2,
      title: "Sacred Mahakumbh Pilgrimage",
      description: "Witness the grandeur of the world's largest spiritual gathering.",
      price: "₹11,999 per person",
      inclusions: ["4 Nights Stay", "VIP Darshan Pass", "Daily Guided Rituals"],
      image: mahakumbh3,
    },
    {
      id: 3,
      title: "Mahakumbh Heritage Experience",
      description: "Explore the cultural and spiritual significance of Mahakumbh.",
      price: "₹11,750 per person",
      inclusions: ["3 Nights Stay", "City Heritage Tour", "River Cruise"],
      image: "/src/assets/Images/mahakumbh4.png",
    },
    {
      id: 4,
      title: "Mahakumbh Blissful Escape",
      description: "Immerse yourself in sacred rituals and divine blessings.",
      price: "₹11,500 per couple",
      inclusions: ["3 Nights Stay", "Spiritual Guru Session", "Traditional Prasadam Meals"],
      image: mahakumbh2,
    },
  ];
  

  return (
    <div className="container">
      <div className="card">
        <img
          src={img12} // ✅ Use the imported image
          alt="Mahakumbh Journey"
          className="image"
        />

        <div className="info">
          <p className="text" style={{color:'black'}}>
            Mahakumbh Mela – The Worlds Largest Religious Gathering The
            Mahakumbh Mela is one of the most sacred and grand Hindu
            pilgrimages, held every 12 years at four holy locations in India:
            Prayagraj (Allahabad) – Confluence of the Ganga, Yamuna, and
            mythical Saraswati rivers Haridwar – On the banks of the Ganga River
            Ujjain – On the banks of the Shipra River Nashik – On the banks of
            the Godavari River Significance of Mahakumbh Mela 🔹 It is believed
            that taking a holy dip in the sacred rivers during the Mela cleanses
            one’s sins and leads to salvation (Moksha). 🔹 The event is deeply
            rooted in Hindu mythology, dating back to the legend of the Samudra
            Manthan (churning of the ocean) when drops of the divine nectar
            (Amrit) fell at these four places. 🔹 It attracts millions of
            devotees, saints, sadhus, and tourists from all over the world,
            making it the largest peaceful gathering of humanity. When is the
            Next Mahakumbh? The next Mahakumbh Mela will be held in Prayagraj in
            2025, following the astrological alignments of Jupiter, Sun, and
            Moon. Would you like any more details on its history, rituals, or
            significance? 🚩{" "}
          </p>
        </div>

        <div className="grid">
          {tourPackages.map((pkg) => (
            <>
              <div key={pkg.id} className="tour-card">
                <img src={pkg.image} alt={pkg.title} className="tour-image" />
                <h3 className="tour-title">{pkg.title}</h3>
                <p className="tour-description">{pkg.description}</p>
                <p className="tour-price">{pkg.price}</p>
                <ul className="tour-inclusions">
                  {pkg.inclusions.map((item, index) => (
                    <li key={index}>✅ {item}</li>
                  ))}
                </ul>
                <button className="book-button" onClick={()=>navigate("/")}>Book Now</button>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}
