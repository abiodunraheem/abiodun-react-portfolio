import React from 'react';
import './header.css';
import { BsLinkedin, BsTwitter } from 'react-icons/bs';
import { FaGithub, FaAngellist } from 'react-icons/fa';

import { AiOutlineMedium } from 'react-icons/ai';

const HeaderSocials = () => (
  <div className="header_socials">
    <li>
      <a href="https://www.linkedin.com/in/abiodun-raheem" target="_blank" rel="noreferrer noopener"><BsLinkedin /></a>
    </li>
    <li>
      <a href="https://github.com/Abiodunraheem" target="_blank" rel="noreferrer noopener"><FaGithub /></a>
    </li>
    <li>
      <a href="https://twitter.com/abiodunraheem23" target="_blank" rel="noreferrer noopener"><BsTwitter /></a>
    </li>
    <li>
      <a href="https://medium.com/@raheemabiodun23" target="_blank" rel="noreferrer noopener"><AiOutlineMedium /></a>
    </li>
    <li>
      <a href="https://angel.co/u/abiodunraheem" target="_blank" rel="noreferrer noopener"><FaAngellist /></a>
    </li>
  </div>
);

export default HeaderSocials;
