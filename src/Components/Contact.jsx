import React from "react";
import "./contact.css";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <p>We would love to hear from you! Reach out to us through any of the following methods:</p>

      <div className="contact-info">
        <div className="contact-item">
          <FaPhone className="icon" />
          <p>+1 234 567 890</p>
        </div>
        <div className="contact-item">
          <FaEnvelope className="icon" />
          <p>support@ecommerce.com</p>
        </div>
        <div className="contact-item">
          <FaMapMarkerAlt className="icon" />
          <p>123 E-Commerce St, Shop City, SC 45678</p>
        </div>
      </div>

      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
