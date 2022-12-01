import React from 'react';
import './header.css';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';
import { AiOutlineMedium } from 'react-icons/ai';
import { FaAngellist } from 'react-icons/fa';

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com/in/abiodun-raheem" target="_blank" rel="noreferrer noopener"><BsLinkedin /></a>
        <a href="https://github.com/Abiodunraheem" target="_blank" rel="noreferrer noopener"><FaGithub /></a>
        <a href="https://twitter.com/abiodunraheem23" target="_blank" rel="noreferrer noopener"><BsTwitter /></a>
        <a href="https://medium.com/@raheemabiodun23" target="_blank" rel="noreferrer noopener"><AiOutlineMedium /></a>
        <a href="https://angel.co/u/abiodunraheem" target="_blank" rel="noreferrer noopener"><FaAngellist /></a>
    </div>
  )
}

export default HeaderSocials