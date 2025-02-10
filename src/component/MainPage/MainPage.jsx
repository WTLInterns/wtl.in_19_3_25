/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./MainPage.css";
import { useNavigate } from "react-router-dom";

import slide1 from "/src/assets/Images/kumbh.jpg";
import slide2 from "/src/assets/Images/Ashtavinayak1.jpg";
import slide3 from "/src/assets/Images/Main1.png";
import slide4 from "/src/assets/Images/Goa.png";
import slide5 from "/src/assets/Images/Kokan.png";
import slide6 from "/src/assets/Images/jyotirlinga_image.png";
import slide7 from "/src/assets/Images/mahabaleshwar.png";
import slide8 from "/src/assets/Images/lonavala.png";
import slide9 from "/src/assets/Images/kerala.png";


// Enquiry Form Component
const EnquiryForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    departure: "",
    return: "",
    people: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, contact, departure, return: returnDate, people } = formData;

    const message = `Hello, I would like to inquire about the tour. Here are my details:%0A
    🔹 Name: ${name}%0A
    🔹 Contact: ${contact}%0A
    🔹 Departure Date: ${departure}%0A
    🔹 Return Date: ${returnDate}%0A
    🔹 People: ${people}`;

    const phoneNumber = "9730545491"; 
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="enquiry-form-container">
      <form className="enquiry-form" onSubmit={handleSubmit}>
        <h2>Enquiry Form</h2>
        <div className="input-group">
          <label>
            Name:
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </label>
          <label>
            Contact Number:
            <input type="tel" name="contact" value={formData.contact} onChange={handleChange} required />
          </label>
        </div>

        <div className="input-group">
          <label>
            Date of Departure:
            <input type="date" name="departure" value={formData.departure} onChange={handleChange} required />
          </label>
          <label>
            Date of Return:
            <input type="date" name="return" value={formData.return} onChange={handleChange} required />
          </label>
        </div>

        <div className="input-group">
          <label>
            People for Tour:
            <input type="number" name="people" value={formData.people} onChange={handleChange} required />
          </label>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

const MainPage = () => {
  const navigate = useNavigate();

  return (
    <div className="Main-container">
      <div className="carousel-container">
        {/* Carousel */}
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" data-interval="1000">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" src={slide1} alt="First slide" />
            </div>
            {/* <div className="carousel-item">
              <img className="d-block w-100" src={slide2} alt="Second slide" />
            </div> */}
            <div className="carousel-item">
              <img className="d-block w-100" src={slide3} alt="Third slide" />
            </div>
            {/* <div className="carousel-item">
              <img className="d-block w-100" src={slide4} alt="Fourth slide" />
            </div> */}
            <div className="carousel-item">
              <img className="d-block w-100" src={slide5} alt="Fifth slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={slide6} alt="Fifth slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={slide7} alt="Fifth slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={slide8} alt="Fifth slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={slide9} alt="Fifth slide" />
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>

        {/* Enquiry Form (Overlay) */}
        <EnquiryForm />
      </div>

            {/* Tour Cards Section */}
            <div className="tour-cards-container">
        <h2>Our Popular Tours</h2>
        <div className="tour-cards">


          {/* Mahakumbh Journey Card */}
          <div className="tour-card">
            <img src={slide1} alt="Mahakumbh" />
            <h3>Mahakumbh Journey</h3>
            <p>Join the grand Kumbh Mela for a spiritual journey of a lifetime.</p>
            <button onClick={() => navigate("/kumbh-mela")}>Learn More</button>
          </div>

          {/* Ashtavinayak Tour Card */}
          <div className="tour-card">
            <img src={slide2} alt="Ashtavinayak" />
            <h3>Ashtavinayak Tour</h3>
            <p>Explore the sacred temples of Lord Ganesha on this spiritual journey.</p>
            <button onClick={() => navigate("/ashtavinayak")}>Learn More</button>
          </div>

          {/* Jyotirlinga Tour Card */}
          <div className="tour-card">
            <img src={slide6} alt="Jyotirlinga" />
            <h3>Jyotirlinga Tour</h3>
            <p>Embark on a spiritual journey to visit the 12 Jyotirlingas of India.</p>
            <button onClick={() => navigate("/jyotilinghas")}>Learn More</button>
          </div>

           {/* Goa Journey Card */}
           <div className="tour-card">
            <img src={slide4} alt="Goa" />
            <h3>Goa Tour</h3>
            <p>Experience the beautiful beaches, vibrant culture, and rich heritage of Goa.</p>
            <button onClick={() => navigate("/goa")}>Learn More</button>
          </div>

          {/* Kokan Journey Card */}
          <div className="tour-card">
            <img src={slide5} alt="Kokan" />
            <h3>Kokan Tour</h3>
            <p>Discover the scenic beauty and coastal wonders of the Kokan region.</p>
            <button onClick={() => navigate("/kokan")}>Learn More</button>
          </div>

          {/* Mahabaleshwar Tour Card */}
          <div className="tour-card">
            <img src={slide7} alt="Mahabaleshwar" />
            <h3>Mahabaleshwar Tour</h3>
            <p>Enjoy the scenic beauty and peaceful ambiance of Mahabaleshwar.</p>
            <button onClick={() => navigate("/mahabaleshwar")}>Learn More</button>
          </div>

          {/* Kerala Tour Card */}
          <div className="tour-card">
            <img src={slide9} alt="Kerala" />
            <h3>Kerala Tour</h3>
            <p>Experience the backwaters, beaches, and cultural heritage of Kerala.</p>
            <button onClick={() => navigate("/keral")}>Learn More</button>
          </div>

          {/* Lonavala Tour Card */}
          <div className="tour-card">
            <img src={slide8} alt="Lonavala" />
            <h3>Lonavala Tour</h3>
            <p>Explore the hill station beauty of Lonavala with its scenic landscapes.</p>
            <button onClick={() => navigate("/lonavala")}>Learn More</button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
