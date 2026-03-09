

import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div className="footer-brand">
          <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc243BQg1QDWOfQ6AmGxRY7EXGKinG-ENEVw&s"   
          alt="Logo"
          className="logo-img me-2"
          /><h4>OnlineCourses</h4>
          <p>Learn anytime, anywhere.</p>
        </div>

        
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/courses">Courses</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/faq">FAQ</a></li>
          </ul>
        </div>

        <div className="footer-social">
          <h3>Follow Us</h3>
          <ul>
            <li><a href="https://facebook.com">Facebook</a></li>
            <li><a href="https://twitter.com">Twitter</a></li>
            <li><a href="https://instagram.com">Instagram</a></li>
            <li><a href="https://linkedin.com">LinkedIn</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} OnlineCourses. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;