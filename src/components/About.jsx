import React from 'react'
import {Tilt} from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({index, title, icon}) =>{
  return(
    <Tilt className="xs:w-[250px] w-full">
      <motion.div variants={fadeIn("right", "spring", 0.5*index, 0.75)} 
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
        <div 
        options={{max:45,
        scale:1,
        speed:450
    }}
    className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
      <img src={icon} alt={title} className='w-16 h-16 object-contain'/>
      <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
    </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
        I'm Vidhi Jain, an MCA student at Suresh Gyan Vihar University passionate about web development. Skilled in ReactJS, HTML, CSS, JavaScript, Core Java, and Three.JS, I create visually appealing frontend web applications.

        As a Digital Marketing Executive, I've gained valuable insights into industry trends and user experience. With a problem-solving mindset and commitment to learning, I thrive in dynamic environments. I enjoy collaborating with cross-functional teams to deliver exceptional results.

        Now, I'm seeking a challenging role in Web Development to contribute my expertise in frontend technologies. I'm excited to join a forward-thinking organization that values creativity, innovation, and teamwork. Let's connect and discuss how I can contribute to your success.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) =>(
          <ServiceCard key={service.title} index={index} {...service}/>
        ))}
      </div>

    </>
  )
}

export default SectionWrapper(About,'about')



