import React from 'react';
import './portfolio.css';
import bookstore from '../../assets/bookstore.jpeg';

const projectsList = [
  {
    id: 1,
    image: './assets/budget App.jpeg',
    title: 'Budget App',
    description: 'My Budget app is a Ruby on Rails application that aims to make the process of tracking my expenses easier. It will hopefully help you too! You will be able to create your account and have all your expenses there.',
    spans: [
      'Microverse',
      'Full Stack Dev',
      '2022',
    ],
    skills: [
      'Ruby on Rails',
      'bootstrap',
      'CSS',
    ],
    liveLink: 'https://abiodun-budget-app.herokuapp.com/',
    sourceLink: 'https://github.com/abiodunraheem/Budget-app',
  },
  {
    id: 2,
    image: './assets/bookstore.jpeg',
    title: 'CMS Bookstore',
    description: 'Book Store is a single page application that allow users to keep track of books coming into the store, and books leaving the store. This project was built with react and redux.',
    spans: [
      'Microverse',
      'Full Stack Dev',
      '2022',
    ],
    skills: [
      'JavaScript',
      'bootstrap',
      'RSpec',
      'CSS',
      'netlify',
    ],
    liveLink: 'https://react-redux-books.netlify.app/',
    sourceLink: 'https://github.com/abiodunraheem/book-store',
  },
  {
    id: 3,
    image: './assets/silverbird cinemas.jpeg',
    title: 'Silverbird Cinemas',
    description: 'Silverbird Cinemas is an application that gives users access to keep track of their favorite movies, by adding comments and likes to any movie of their choice. This application was built with vanilla JavaScript.',
    spans: [
      'Microverse',
      'Front End Dev',
      '2022',
    ],
    skills: [
      'JavaScript',
      'CSS',
      'Jest',
      'Movie-API',
      'Netlify',
    ],
    liveLink: 'https://abiodunraheem.github.io/Silverbird-Cinemas/',
    sourceLink: 'https://github.com/abiodunraheem/Silverbird-Cinemas',
  },
  {
    id: 4,
    image: './assets/leaderboard.jpeg',
    title: 'Abiodun Leader Board',
    description: 'Abiodun Leader Board is a game that returns the highest scores each time the game is played.',
    spans: [
      'Microverse',
      'Front End Dev',
      '2022',
    ],
    skills: [
      'HTML',
      'CSS',
      'JavaScript',
    ],
    liveLink: 'https://abiodunraheem.github.io/Abiodun-LeaderBoard/',
    sourceLink: 'https://github.com/abiodunraheem/Abiodun-LeaderBoard',
  }];

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="portfolio_container">
        {
          projectsList.map(({id, image, title, description, spans, skills, liveLink, sourceLink}) => {
            return (
              <article key={id} className="portfolio_item">
                <div className="portfolio_item-image">
                  <img src={image} alt="title" />
                </div>
                <h3>{title}</h3>
                <div className="portfolio_item-cta">
                  <a href={sourceLink} target="_blank" rel="noreferrer noopener" className="btn btn-primary">Github</a>
                  <a href={liveLink} target="_blank" rel="noreferrer noopener" className="btn btn-primary">Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio