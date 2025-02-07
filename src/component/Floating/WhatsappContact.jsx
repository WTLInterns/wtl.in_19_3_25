import React from 'react';
import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa'; 
import './WhatsappContact.css'; // Include the CSS file

const WhatsappContact = () => {
  const whatsappMessage = "Hello, I would like to inquire about the tour."; // Customize your message
  const phoneNumber = "9145730054"; // Replace with your contact number
  
  // WhatsApp link
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
  
  // Phone number link for calling directly
  const phoneCallLink = `tel:+91${phoneNumber}`; // Correct phone number format with country code

  return (
    <div className="floating-buttons-container">
      {/* WhatsApp Floating Button */}
      <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="floating-button whatsapp">
        <FaWhatsapp className="icon" />
      </a>

      {/* Contact Floating Button for Calling */}
      <a href={phoneCallLink} className="floating-button contact">
        <FaPhoneAlt className="icon" />
      </a>
    </div>
  );
};

export default WhatsappContact;
