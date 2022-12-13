import React, { useEffect, useState } from 'react';
import { images } from '../../constants';
import { AppWrap } from '../../wrapper'
import { motion } from 'framer-motion';
import { urlFor, client } from '../../client';

import './About.scss';


const About = () => {
  const [abouts, setAbouts] = useState([]);


  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query)
    .then((data) => setAbouts(data))
  }, [])


  return (
    <div className='my__about'>
      <h2 className='head-text'>
        Developing Real-World Solutions <br /> For Over A Decade
      </h2>
 
      <div className='app__profiles'>
        { abouts.map((about, index) => (

            <motion.div
             whileInView={{ opacity: 1 }}
             whileHover={{ scale: 1.1 }}
             transition={{ duration: 0.5, type: 'tween' }}
             className='app__profiles-item'
             key={about.title + index}
            >
              <img src={urlFor(about.imgUrl)} alt={about.title} />
              <h2 className='bold-text' style={{ marginTop: 20 }}> {about.title} </h2>
              <p className='p-text' style={{ marginTop: 10 }}> {about.description} </p>
            </motion.div>

        ))}
      </div>
    
    </div>
  )
}

export default AppWrap( About, 'about', 'app__about');