import React from 'react';
import './header.css';
import CV from '../../assets/cv.pdf';

const CTA = () => (
  <div className="cta">
    <a href={CV} download className="btn">Download CV</a>
    <a href="#contact" className="btn btn-primary">Let&#39;s talk</a>
  </div>
);

export default CTA;
