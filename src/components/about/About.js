import React from 'react';
import './about.css';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderActive } from 'react-icons/vsc';
import abiodun from '../../assets/abiodun.jpg';

const About = () => (
  <section id="about">
    <h5>Get To Know</h5>
    <h2>About Me</h2>

    <div className="container about_container">
      <div className="about_me">
        <div className="about_me-image">
          <img src={abiodun} alt="About me" />
        </div>
      </div>

      <div className="about_content">
        <div className="about_cards">
          <article className="about_card">
            <FaAward className="about_icon" />
            <h5>Experience</h5>
            <small>2+ Years Working</small>
          </article>
          <article className="about_card">
            <FiUsers className="about_icon" />
            <h5>Clients</h5>
            <small>200+ Worldwide</small>
          </article>
          <article className="about_card">
            <VscFolderActive className="about_icon" />
            <h5>Projects</h5>
            <small>50+ Completed</small>
          </article>
        </div>
        <p>
          I’m a software developer! I can help you build a product,
          feature or website. Look through some of my work and experience!
          If you like what you see, and have a project you need code, don’t hesitate to contact me.
        </p>
        <a href="#contact" className="btn btn-primary">Let&#39;s talk</a>
      </div>
    </div>
  </section>
);

export default About;
