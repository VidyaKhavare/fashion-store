import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="page-container animate">
    <div className="contact-row">

      {/* ✅ LEFT SIDE — ORIGINAL FORM WRAPPED IN A CONTAINER */}
      <div className="left-container">
        <div className="contact-page">
          <h2>Contact Us</h2>
          <p>We’d love to hear from you! Please fill out the form below.</p>

          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" placeholder="Enter your name" />
            </div>

            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input type="email" id="email" placeholder="Enter your email" />
            </div>

            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea id="message" rows="5" placeholder="Write your message..."></textarea>
            </div>

            <button type="submit" className="contact-btn">Send Message</button>
          </form>
        </div>
      </div>

      {/* ✅ RIGHT SIDE — NEW CONTAINER WITH INFORMATION */}
      <div className="right-container">
        <h2>Reach Us</h2>
        <p>If you have questions about orders, products, delivery, or returns — we are here to help!</p>

        <div className="info-box">
          <h4>📍 Location</h4>
          <p>Mumbai, Maharashtra</p>

          <h4>📞 Phone</h4>
          <p>+91 98765 43210</p>

          <h4>📧 Email</h4>
          <p>support@fashionstore.com</p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Contact;
