import React, { useState } from "react";
import "./JyotirlingaForm.css";
import jyotirlingaImage from "../assets/Images/jyotirlinga_image.png"; 
import leaf from "../assets/Images/leaf2.png";

const JyotirlingaForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    departure: "",
    return: "",
    people: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const { name, contact, departure, return: returnDate, people } = formData;

    // Format WhatsApp Message
    const message = `Hello, I would like to inquire about the Jyotirlinga Tour. Here are my details:%0A
    🔹 Name: ${name}%0A
    🔹 Contact: ${contact}%0A
    🔹 Departure Date: ${departure}%0A
    🔹 Return Date: ${returnDate}%0A
    🔹 People: ${people}`;

    // Replace with your WhatsApp number (without '+' or spaces)
    const phoneNumber = "9145730054"; // Example: Replace with actual number
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;

    // Redirect to WhatsApp
    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="form-container">
      <img src={jyotirlingaImage} alt="Background" className="background-image" />
      <form className="inquiry-form" onSubmit={handleSubmit}>
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
      
      <div className="leaf-container">
        {[...Array(10)].map((_, i) => (
          <img key={i} src={leaf} alt="Leaf" className={`leaf leaf-${i}`} />
        ))}
      </div>
    </div>
  );
};

export default JyotirlingaForm;
