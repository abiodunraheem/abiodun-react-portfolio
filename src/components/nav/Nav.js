import React, { useState } from 'react';
import './nav.css';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';

import { BiBook } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';
import { TiContacts } from 'react-icons/ti';
import { FaRegCommentDots } from 'react-icons/fa';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <li>
        <a href="#" aria-label="home" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
      </li>
      <li>
        <a href="#about" aria-label="linkedn" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
      </li>
      <li>
        <a href="#experience" aria-label="experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBook /></a>
      </li>
      <li>
        <a href="#services" aria-label="services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceLine /></a>
      </li>
      <li>
        <a href="#testimonials" aria-label="testimonials" onClick={() => setActiveNav('#testimonials')} className={activeNav === '#testimonials' ? 'active' : ''}><FaRegCommentDots /></a>
      </li>
      <li>
        <a href="#contact" aria-label="contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><TiContacts /></a>
      </li>
    </nav>
  );
};

export default Nav;
