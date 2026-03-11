
import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-box">
        <h1>Contact Us</h1>
        <p>Have questions about our courses? Send us a message!</p>

        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <input type="text" placeholder="Course Interested In" />
          <textarea placeholder="Your Message"></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;