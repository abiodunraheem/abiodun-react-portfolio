import React from 'react';
import './footer.css';
import { SlSocialFacebook } from 'react-icons/sl';
import { AiOutlineInstagram } from 'react-icons/ai';
import { FiTwitter } from 'react-icons/fi';

const Footer = () => (
  <footer>
    <a href="#" className="footer_logo">Shammer</a>
    <ul className="footer_links">
      <li><a href="#">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#testimonials">Testimonials</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
    <div className="footer_socials">
      <a href="https://facebook.com" aria-label="facebook"><SlSocialFacebook /></a>
      <a href="https://instagram.com" aria-label="instagram"><AiOutlineInstagram /></a>
      <a href="https://twitter.com" aria-label="twitter"><FiTwitter /></a>
    </div>
    <div className="footer_copyright">
      <small className="">&copy; Raheem Abiodun. All right reserved.</small>
    </div>
  </footer>
);

export default Footer;
