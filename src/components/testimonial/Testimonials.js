import React from 'react';
import './testimonials.css';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import me from '../../assets/me.JPG';
import we from '../../assets/we.jpg';
import bless from '../../assets/bless.JPG';
import sand from '../../assets/sand.JPG';
import tee from '../../assets/tee.jpg';
import olive from '../../assets/olive.jpg';

// import Swiper core and required modules

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    avatar: me,
    name: 'Sandy Mills',
    review: 'My Budget app is a Ruby on Rails application that aims to make the process of tracking my expenses easier. It will hopefully help you too! You will be able to create your account and have all your expenses there.',
  },
  {
    avatar: we,
    name: 'Abbey Loyd',
    review: 'My Budget app is a Ruby on Rails application that aims to make the process of tracking my expenses easier. It will hopefully help you too! You will be able to create your account and have all your expenses there.',
  },
  {
    avatar: sand,
    name: 'Chike Dike',
    review: 'My Budget app is a Ruby on Rails application that aims to make the process of tracking my expenses easier. It will hopefully help you too! You will be able to create your account and have all your expenses there.',
  },
  {
    avatar: olive,
    name: 'Roy Kean',
    review: 'My Budget app is a Ruby on Rails application that aims to make the process of tracking my expenses easier. It will hopefully help you too! You will be able to create your account and have all your expenses there.',
  },
  {
    avatar: tee,
    name: 'Flowra Sorch',
    review: 'My Budget app is a Ruby on Rails application that aims to make the process of tracking my expenses easier. It will hopefully help you too! You will be able to create your account and have all your expenses there.',
  },
  {
    avatar: bless,
    name: 'Mick Mills',
    review: 'My Budget app is a Ruby on Rails application that aims to make the process of tracking my expenses easier. It will hopefully help you too! You will be able to create your account and have all your expenses there.',
  }];

const Testimonials = () => (
  <section id="testimonials">
    <h5>Review from clients</h5>
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
          testimonials.map(({ avatar, name, review }, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <SwiperSlide key={index} className="testimonial">
              <div className="client_avatar">
                <img src={avatar} alt="avatar one" />
              </div>
              <h5 className="client_name">{name}</h5>
              <small className="client_review">{review}</small>
            </SwiperSlide>
          ))
        }
    </Swiper>
  </section>
);

export default Testimonials;
