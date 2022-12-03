import React from 'react';
import './testimonials.css';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import drSarah from '../../assets/drSarah.png';
import olive from '../../assets/olive.jpeg';
import blessing from '../../assets/blessing.JPG';
import sandra from '../../assets/sandra.JPG';
import bizip from '../../assets/bizip.jpeg';
import julius from '../../assets/julius.jpeg';

// import Swiper core and required modules

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    avatar: drSarah,
    name: 'Sarah Goodness',
    review: 'Excellen service, quick response, efficient troubleshooting and resolution with full explanation of the problem. I always rave over your high standards that you have maintained over the years.',
    organisation: '~Financial Designs',
  },
  {
    avatar: julius,
    name: 'Oyeniyi Julius',
    review: 'It has been a pleasure working with you and your team, you guys are fantastic, thank you for being there always.',
    organisation: '~Four0Four Studios',
  },
  {
    avatar: blessing,
    name: 'Okhani Blessing',
    review: 'Always dependable, reliable and fast, even after I leave for the day, I can always count on you guys to get the job done. Thank you!',
    organisation: '~Classic Fashion School',
  },
  {
    avatar: sandra,
    name: 'Sandra Payne',
    review: 'The custom reports you wrote have been very helpful. I appreciate every bit of your effort, you even gave me a deep insight on how to write. I look forward to writing programs for you one of these days.',
    organisation: '~SandyPayn Management Group',
  },
  {
    avatar: bizip,
    name: 'Flowra Sorch',
    review: 'I just want to let you know that the last product you build was absolutely fantastic, our income increased by 20% in our first quarter analysis, thank you so much as i look forward to a more fruitful and lasting relationship with you and your team.',
    organisation: '~Bisimungul Technologies',
  },
  {
    avatar: olive,
    name: 'Mick Mills',
    review: 'The exchange project was perfect. The SM and MS are wonderful, it perfectly fit into different screen sizes. Users reviews has been amazing, thank you for the great job.',
    organisation: '~Perfect Touch Inc.',
  }];

const Testimonials = () => (
  <section id="testimonials">
    <h5>Review From Clients</h5>
    <h2>Testimonials</h2>

    <Swiper
      className="container testimonials_container"
    // install Swiper modules
      modules={[Navigation, Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
    >
      {
          testimonials.map(({
            avatar, name, review, organisation,
          }, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <SwiperSlide key={index} className="testimonial">
              <div className="client_avatar">
                <img src={avatar} alt="avatar one" />
              </div>
              <h4 className="client_name">{name}</h4>
              <small className="client_review">{review}</small>
              <h5 className="text-dark">{organisation}</h5>
            </SwiperSlide>
          ))
        }
    </Swiper>
  </section>
);

export default Testimonials;
