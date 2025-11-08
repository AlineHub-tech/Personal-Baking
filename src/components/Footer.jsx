import React from 'react';
import { Icon } from './Icons';
import '../Footer.css';
const Footer = () => {
  return (
    <footer>
      <p>&copy; 2025 Personal-Bank. All Rights Reserved.</p><br />
      <a href="#">About Us</a> |
      <a href="#">Contact Us</a> |
      <a href="#">Privacy Policy</a> |
      <a href="#">Terms & Conditions</a>
      <div className="social">
        <i className="fab fa-facebook-f"></i>
        <i className="fab fa-twitter"></i>
        <i className="fab fa-instagram"></i>
        <i className="fab fa-youtube"></i>
        <i className="fab fa-linkedin"></i>
      </div>
    </footer>
  );
};

export default Footer;