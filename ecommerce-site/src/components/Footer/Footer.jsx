// Footer.jsx

import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  // Replace these placeholders with your actual contact links
  const githubLink = 'https://github.com/umair-fq';
  const emailLink = 'mailto:farooqumair.islu@gmail.com';
  const linkedinLink = 'https://www.linkedin.com/in/farooq-umair-dev';
  const instagramLink = 'https://www.instagram.com/umair_fq/';

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
            <h3>About Us</h3>
            <p>Welcome to the world of fashion and style! At Your eCommerce Website, we are passionate about bringing you the latest trends and timeless classics in fashion.</p>
            <p>Our journey began with a vision to provide fashion enthusiasts like you with a curated selection of high-quality clothing, accessories, and more. With an eye for detail and a commitment to excellence, we have become your go-to destination for all things fashion.</p>
            <p>Discover your unique style with our handpicked collections, and experience the joy of dressing up like never before. We believe that fashion is not just about clothing; it's a form of self-expression and confidence. Let us be your partner in creating your fashion story.</p>
            <p>Thank you for choosing Your eCommerce Website. We look forward to serving you and being a part of your style journey!</p>
        </div>

        <div className="footer-section">
          <h3>Contact Us</h3>
          <div className="social-icons">
            <a href={emailLink} className="social-link">
              <FontAwesomeIcon icon={faEnvelope} /> Email
            </a>
            <a href={linkedinLink} className="social-link">
              <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
            </a>
          </div>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href={githubLink} className="social-link">
              <FontAwesomeIcon icon={faGithub} /> GitHub
            </a>
            <a href={instagramLink} className="social-link">
              <FontAwesomeIcon icon={faInstagram} /> Instagram
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Marie eCommerce Website. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
