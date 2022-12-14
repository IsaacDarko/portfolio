import React, { useState } from 'react';
import { images } from '../../constants';
import { motion } from 'framer-motion';
import { BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

import { AppWrap } from '../../wrapper';

import { client } from '../../client';
import './Footer.scss';

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const { username, email, message } = formData;



  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: formData.username,
      email: formData.email,
      message: formData.message,
    };

    client.create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  };



  return (
    <div className='my__footer'>
      <h2 className='head-text'>Why Don't We Talk...</h2>

      <div className="app__footer-cards">
          <div className="app__footer-card ">
            <img src={images.email} alt="email" />
            <a href="mailto:isaactsibudarko@gmail.com" className="p-text">isaactsibudarko@gmail.com</a>
          </div>
          <div className="app__footer-card">
            <img src={images.mobile} alt="phone" />
            <a href="tel:+233540672824" className="p-text">+233 (054) 067-2824</a>
          </div>
        </div>


        {!isFormSubmitted ? (
          <div className="app__footer-form app__flex">
            <div className="app__flex">
              <input className="p-text" type="text" placeholder="Your Name" name="username" value={username} onChange={handleChangeInput} />
            </div>
            <div className="app__flex">
              <input className="p-text" type="email" placeholder="Your Email" name="email" value={email} onChange={handleChangeInput} />
            </div>
            <div>
              <textarea
                className="p-text"
                placeholder="Your Message"
                value={message}
                name="message"
                onChange={handleChangeInput}
              />
            </div>
            <button type="button" className="p-text" onClick={handleSubmit}>{!loading ? 'Send Message' : 'Sending...'}</button>
          </div>
        ) : (
          <div>
            <h3 className="head-text">
              Thank you for getting in touch!
            </h3>
          </div>
        )}



        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className="app__footer-socials"
        >
          
            <BsGithub /> 
            <BsInstagram /> 
            <BsLinkedin />         
          
          <span>©Copyright 2022 Isaac Tsibu-Dako</span>

        </motion.div>

      </div>
  )
}

export default AppWrap(Footer, 'contact', 'app__footer')