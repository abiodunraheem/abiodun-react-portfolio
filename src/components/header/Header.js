import React from 'react';
import './header.css';
import CTA from './CTA';
import abiodun from '../../assets/abiodun.jpg';
import circle1 from '../../assets/circle1.png';
import circle2 from '../../assets/circle2.png';
import HeaderSocials from './HeaderSocials';

const Header = () => (
  <header>
    <div className="container header_container">
      <div className="circle1">
        <img src={circle1} alt="header first circle" />
      </div>
      <div className="circle2">
        <img src={circle2} alt="header second circle" />
      </div>
      <h5>Hello I&#39;m</h5>
      <h1>Raheem Abiodun</h1>
      <h5 className="text-light">Fullstack Developer</h5>
      <h5>Glad to see you!</h5>
      <CTA />
      <HeaderSocials />
      <div className="abiodun">
        <img src={abiodun} alt="" />
      </div>
      <a href="#contact" className="scroll_down">Scroll Down</a>
    </div>
  </header>
);

export default Header;
