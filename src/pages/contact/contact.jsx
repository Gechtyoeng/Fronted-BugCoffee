import React from 'react';
import './contact.css';
import { FaFacebookF, FaTiktok, FaTelegramPlane } from 'react-icons/fa';
import { FiPhone, FiMail } from 'react-icons/fi';
import { GoLocation } from 'react-icons/go';
import Header from '../../components/Header/Header';

const contact = () => {
  return (
    <div className="contact-container">
      <Header title="Contact Us" subtitle="We're always here to help. Contact us for quick and friendly support!" />

      <div className="contact-wrapper">
        <div className="contact-info">
          <h2>Contact Information</h2>
          <p>Reach out to us through the following contact details.</p>

          <div className="info-item">
            <GoLocation className="icon" />
            <span>Bridge 2, National Road 6A, Phnom Penh</span>
          </div>

          <div className="info-item">
            <FiPhone className="icon" />
            <span>+855 12345678</span>
          </div>

          <div className="info-item">
            <FiMail className="icon" />
            <span>bugscafe@gmail.com</span>
          </div>

          <hr className="info-divider" />

          <div className="social-media">
            <span>Social Media</span>
            <div className="icons">
              <FaFacebookF />
              <FaTiktok />
              <FaTelegramPlane />
            </div>
          </div>
        </div>

        <form className="contact-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input id="name" type="text" placeholder="Enter your name" />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input id="phone" type="text" placeholder="Enter your phone number" />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" placeholder="Enter your email" />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" placeholder="Write your message"></textarea>
          </div>

          <button type="submit">Send Message</button>
      </form>

      </div>
    </div>
  );
};

export default contact;
