import React from 'react';
import './experience.css';
import { MdLibraryAddCheck } from 'react-icons/md';

const Experience = () => (
  <section id="experience">
    <h5>My Skills</h5>
    <h2>Experience</h2>
    <div className="container experience_container">
      <div className="experience_frontend">
        <h3>Frontend Development</h3>
        <div className="experience_content">
          <article className="experience_details">
            <MdLibraryAddCheck className="experience_details-icon" />
            <div>
              <h4>HTML</h4>
              <small className="text-light">Experienced</small>
            </div>
          </article>
          <article className="experience_details">
            <MdLibraryAddCheck className="experience_details-icon" />
            <div>
              <h4>CSS</h4>
              <small className="text-light">Experienced</small>
            </div>
          </article>
          <article className="experience_details">
            <MdLibraryAddCheck className="experience_details-icon" />
            <div>
              <h4>JavaScript</h4>
              <small className="text-light">Intermediate</small>
            </div>
          </article>
          <article className="experience_details">
            <MdLibraryAddCheck className="experience_details-icon" />
            <div>
              <h4>Bootstrap</h4>
              <small className="text-light">Intermediate</small>
            </div>
          </article>
          <article className="experience_details">
            <MdLibraryAddCheck className="experience_details-icon" />
            <div>
              <h4>React</h4>
              <small className="text-light">Experienced</small>
            </div>
          </article>
          <article className="experience_details">
            <MdLibraryAddCheck className="experience_details-icon" />
            <div>
              <h4>GIT</h4>
              <small className="text-light">Intermediate</small>
            </div>
          </article>
        </div>
      </div>
      <div className="experience_backend">
        <h3>Backend Development</h3>
        <div className="experience_content">
          <article className="experience_details">
            <MdLibraryAddCheck className="experience_details-icon" />
            <div>
              <h4>Ruby</h4>
              <small className="text-light">Intermediate</small>
            </div>
          </article>
          <article className="experience_details">
            <MdLibraryAddCheck className="experience_details-icon" />
            <div>
              <h4>Ruby On Rails</h4>
              <small className="text-light">Intermediate</small>
            </div>
          </article>
          <article className="experience_details">
            <MdLibraryAddCheck className="experience_details-icon" />
            <div>
              <h4>SQL</h4>
              <small className="text-light">Basic</small>
            </div>
          </article>
          <article className="experience_details">
            <MdLibraryAddCheck className="experience_details-icon" />
            <div>
              <h4>NodeJS</h4>
              <small className="text-light">Basic</small>
            </div>
          </article>
          <article className="experience_details">
            <MdLibraryAddCheck className="experience_details-icon" />
            <div>
              <h4>Python</h4>
              <small className="text-light">Basic</small>
            </div>
          </article>
          <article className="experience_details">
            <MdLibraryAddCheck className="experience_details-icon" />
            <div>
              <h4>MongoDB</h4>
              <small className="text-light">Basic</small>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
);

export default Experience;
