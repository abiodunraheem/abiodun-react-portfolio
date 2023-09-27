import React, { useRef } from 'react';
import './contact.css';
import { HiOutlineMail } from 'react-icons/hi';
import { BiMessageCheck } from 'react-icons/bi';
import { ImWhatsapp } from 'react-icons/im';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_y1wcamy', 'template_m8qp32i', form.current, '_LZ3I_eYb72pjJF8d');
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <HiOutlineMail className="contact_option-icon" />
            <h4>Email</h4>
            <h5>raheemabiodun@gmail.com</h5>
            <a href="mailto:raheemabiodun@gmail.com" target="_blank" rel="noreferrer">Send an email</a>
          </article>
          <article className="contact_option">
            <BiMessageCheck className="contact_option-icon" />
            <h4>Messanger</h4>
            <h5>Abiodun Raheem</h5>
            <a href="https://m.me/abiodunraheem" target="_blank" rel="noreferrer">Send a message</a>
          </article>
          <article className="contact_option">
            <ImWhatsapp className="contact_option-icon" />
            <h4>Whatsapp</h4>
            <h5>+2348060165838</h5>
            <a href="https://api.whatsapp.com/send?phone=+2348060165838" target="_blank" rel="noreferrer">Send a message</a>
          </article>
        </div>
        {/* end of contactact details */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Enter Your Full Name" required />
          <input type="email" name="email" placeholder="Enter Your Email" required />
          <textarea name="message" id="" cols="30" rows="10" placeholder="Enter Your Email" required />
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
