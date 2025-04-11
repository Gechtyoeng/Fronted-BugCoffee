import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/footer_logo.png";
import { FaFacebookF, FaTiktok, FaTelegramPlane, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-columns">
        {/* Column 1: Logo & Quote */}
        <div className="footer-column">
          <img src={logo} alt="logo" className="footer-logo" />
          <p className="quote">It’s okay to pause for a coffee break.</p>
          <p className="quote">You’re doing better than you think!</p>
          <div className="social-icons">
            <FaFacebookF />
            <FaTiktok />
            <FaTelegramPlane />
          </div>
        </div>

        {/* Column 2: Navigation Links */}
        <div className="footer-column">
          <h2>Our Store</h2>
          <NavLink to="/" className="footer-link">Home</NavLink>
          <NavLink to="/menu" className="footer-link">Menu</NavLink>
          <p className="footer-link">About Us</p>
          <NavLink to="/review" className="footer-link">Review</NavLink>
          <NavLink to="/contact" className="footer-link">Contact</NavLink>
        </div>

        {/* Column 3: Contact Info with Icons */}
        <div className="footer-column">
          <h2>Get in Touch</h2>
          <p><FaMapMarkerAlt className="icon" /> Bridge 2, National Road 6A, Phnom Penh</p>
          <p><FaPhoneAlt className="icon" /> +855 12345678</p>
          <p><FaEnvelope className="icon" /> bugscafe@gmail.com</p>
        </div>
      </div>

      <hr className="footer-line" />

      <div className="footer-bottom">
        <p>© 2025. All rights reserved.</p>
        <p>Designed with Tear By Bugs.</p>
      </div>
    </footer>
  );
};

export default Footer;
