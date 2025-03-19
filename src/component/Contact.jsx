import React, { useState, useEffect } from "react";
import "./Contact.css"; // Import the external CSS file

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    // Adjust margin-top based on the navbar height
    const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 70; // Default height of 70px
    document.querySelector('.contact-container').style.marginTop = `${navbarHeight + 20}px`; // Adjust for extra space
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;
    if (!name || !email || !subject || !message) {
      alert("Please fill in all fields.");
      return;
    }
    const whatsappMessage = `Hello, I would like to contact you.%0A%0AName: ${name}%0AEmail: ${email}%0ASubject: ${subject}%0AMessage: ${message}`;
    window.location.href = `https://wa.me/9145730054?text=${whatsappMessage}`;
  };

  return (
    <main className="contact-container">
      <h1 className="contact-title">Contact Us</h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group-inline">
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>
        </div>

        <div className="form-group-inline">
          <div className="form-group">
            <label>Subject</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Enter the subject"
              required
            />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your message"
              required
            ></textarea>
          </div>
        </div>

        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </main>
  );
};

export default ContactUs;
