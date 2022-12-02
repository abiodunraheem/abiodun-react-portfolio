import React from 'react';
import './footer.css';

const Footer = () => (
  <footer>
    <a href="#" className="footer_logo">Shammer</a>
    <ul className="footer_link">
      <li><a href="#">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#testimonials">Testimonials</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
    <div className="footer_socials">
      <a href="https://facebook.com"></a>
      <a href="https://instagram.com"></a>
      <a href="https://twitter.com"></a>
      <a href="https://facebook.com"></a>
    </div>
  </footer>
);

export default Footer;
