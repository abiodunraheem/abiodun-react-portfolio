import React from 'react';
import './services.css';
import { SlCheck } from 'react-icons/sl';

const Services = () => (
  <section id="services">
    <h5>What I Offer</h5>
    <h2>Services</h2>
    <div className="container services_container">
      <article className="service">
        <div className="service_head">
          <h3>Educational Services</h3>
        </div>

        <ul className="service_list">
          <li>
            <SlCheck className="service_list-icon" />
            <p>
              Website Creation and Maintenance services
            </p>
          </li>
          <li>
            <SlCheck className="service_list-icon" />
            <p>
              Update teaching materials
            </p>
          </li>
          <li>
            <SlCheck className="service_list-icon" />
            <p>
              Web Development Bootcamp
            </p>
          </li>
          <li>
            <SlCheck className="service_list-icon" />
            <p>
              Continuous support and evolution
            </p>
          </li>
          <li>
            <SlCheck className="service_list-icon" />
            <p>
              Teaching the 21st century learner
            </p>
          </li>
        </ul>
      </article>

      <article className="service">
        <div className="service_head">
          <h3>Web Development</h3>
        </div>

        <ul className="service_list">
          <li>
            <SlCheck className="service_list-icon" />
            <p>
              Fron-end designs and development
            </p>
          </li>
          <li>
            <SlCheck className="service_list-icon" />
            <p>
              Back-end development
            </p>
          </li>
          <li>
            <SlCheck className="service_list-icon" />
            <p>
              Ecommerce
            </p>
          </li>
          <li>
            <SlCheck className="service_list-icon" />
            <p>
              Web apps
            </p>
          </li>
          <li>
            <SlCheck className="service_list-icon" />
            <p>
              Product building
            </p>
          </li>
          <li>
            <SlCheck className="service_list-icon" />
            <p>
              Portfolio
            </p>
          </li>
          <li>
            <SlCheck className="service_list-icon" />
            <p>
              Websites and hosting
            </p>
          </li>
          <li>
            <SlCheck className="service_list-icon" />
            <p>
              Hosting
            </p>
          </li>
        </ul>
      </article>

      <article className="service">
        <div className="service_head">
          <h3>Social Media Management</h3>
        </div>

        <ul className="service_list">
          <li>
            <SlCheck className="service_list-icon" />
            <p>
              Content creation
            </p>
          </li>
          <li>
            <SlCheck className="service_list-icon" />
            <p>
              Copywriting
            </p>
          </li>
          <li>
            <SlCheck className="service_list-icon" />
            <p>
              Content creation
            </p>
          </li>
          <li>
            <SlCheck className="service_list-icon" />
            <p>
              Writing blog post
            </p>
          </li>
          <li>
            <SlCheck className="service_list-icon" />
            <p>
              Education and consulting
            </p>
          </li>
          <li>
            <SlCheck className="service_list-icon" />
            <p>
              Content writing
            </p>
          </li>
          <li>
            <SlCheck className="service_list-icon" />
            <p>
              Technical writing
            </p>
          </li>
        </ul>
      </article>
    </div>
  </section>
);

export default Services;
