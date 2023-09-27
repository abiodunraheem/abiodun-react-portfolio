import React from 'react';
import './portfolio.css';
import tour from '../../assets/tour.png';
import bookstore from '../../assets/bookstore.jpeg';
import silverbirdCinemas from '../../assets/silverbirdCinemas.jpeg';
import space from '../../assets/space.png';
import music from '../../assets/music.png';
import leaderboard from '../../assets/leaderboard.jpeg';

const projectsList = [
  {
    id: 1,
    image: tour,
    title: 'Tour Management App',
    description: 'Tour management app is an app that enables tourist to book tours from across the world. It was built React, Mongodb, Express, Nodejs and Reactraps.',
    skills: [
      'Express ',
      'MongoDB ',
      'React ',
      'Nodejs ',
    ],
    liveLink: 'https://tour-management-app.netlify.app/',
    sourceLink: 'https://github.com/abiodunraheem/MernStack-Tour-Management/tree/project-startup/tour-management',
  },
  {
    id: 2,
    image: bookstore,
    title: 'CMS Bookstore',
    description: 'Book Store is a single page application that allow users to keep track of books coming into the store, and books leaving the store. This project was built with react and redux.',
    skills: [
      'JavaScript ',
      'React ',
      'CSS ',
      'Netlify ',
    ],
    liveLink: 'https://react-redux-books.netlify.app/',
    sourceLink: 'https://github.com/abiodunraheem/book-store',
  },
  {
    id: 3,
    image: space,
    title: 'Space Travellers Hub',
    description: 'Space travelers hub is a project that make use of react and redux, to develop a space rocket and mission, which allows travelers to book and cancel reservation.',
    skills: [
      'JavaScript ',
      'CSS ',
      'React ',
      'Netlify ',
    ],
    liveLink: 'https://spacetra.netlify.app/',
    sourceLink: 'https://github.com/abiodunraheem/space-travelers-hub',
  },
  {
    id: 4,
    image: silverbirdCinemas,
    title: 'Silverbird Cinemas',
    description: 'Silverbird Cinemas is an application that gives users access to keep track of their favorite movies, by adding comments and likes to any movie of their choice.',
    skills: [
      'JavaScript ',
      'CSS ',
      'Movie-API ',
      'Netlify ',
    ],
    liveLink: 'https://abiodunraheem.github.io/Silverbird-Cinemas/',
    sourceLink: 'https://github.com/abiodunraheem/Silverbird-Cinemas',
  },
  {
    id: 5,
    image: music,
    title: 'Global Muzik Event',
    description: 'Global Muzik Event is a responsive website that was built with HTML, CSS & Javascript. It displays a landing page, previous music events, and a link to book a seat at the event.',
    skills: [
      'HTML ',
      'CSS ',
      'JavaScript ',
    ],
    liveLink: 'https://abiodunraheem.github.io/First-Capstone-Project/',
    sourceLink: 'https://github.com/abiodunraheem/First-Capstone-Project',
  },
  {
    id: 6,
    image: leaderboard,
    title: 'Abiodun Leader Board',
    description: 'Abiodun Leader Board is a game built with vanilla JavaScript, it returns the highest scores each time the game is played.',
    skills: [
      'HTML  ',
      'CSS  ',
      'JavaScript ',
      'Netlify',
    ],
    liveLink: 'https://abiodunraheem.github.io/Abiodun-LeaderBoard/',
    sourceLink: 'https://github.com/abiodunraheem/Abiodun-LeaderBoard',
  }];

const Portfolio = () => (
  <section id="portfolio">
    <h5>My Recent Work</h5>
    <h2>Portfolio</h2>
    <div className="portfolio_container">
      {
          projectsList.map(({
            id, image, title, description, skills, liveLink, sourceLink,
          }) => (
            <article key={id} className="portfolio_item">
              <div className="portfolio_item-image">
                <img src={image} alt="Project" />
              </div>
              <h3>{title}</h3>
              <p className="text-light">{description}</p>
              <div>
                <small className="portfolio_skills">{skills}</small>
              </div>
              <div className="portfolio_item-cta">
                <a href={sourceLink} target="_blank" rel="noreferrer noopener" className="btn btn-primary">Github</a>
                <a href={liveLink} target="_blank" rel="noreferrer noopener" className="btn btn-primary">Live Demo</a>
              </div>
            </article>
          ))
        }
    </div>
  </section>
);

export default Portfolio;
