import React, { useState } from 'react'
import Navbar from '../Shared/Navbar'
import banner from '../../assets/AboutUs.jpg'
import slide1 from '../../assets/slide2.jpg'
import slide2 from '../../assets/slide3.jpg'
import slide3 from '../../assets/slide4.jpg'
import slide4 from '../../assets/slide5.jpg'
import {motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
function AboutUs() {

  
  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.3, 
  });

  const slideImages = [slide1 , slide2 , slide3 , slide4];
  let [current , setCurrent] = useState(0);

  let prevSlide = ()=>{
    if(current==0) setCurrent(slideImages.length -1)
    else setCurrent(current-1);
  }
  let nextSlide = ()=>{
    if(current==slideImages.length -1) setCurrent(0)
    else setCurrent(current+1);
  }

  return (
    <>
    <Navbar/>
    <section  
    
    className='pt-[80px] bg-[#CFF]'>    
      <motion.div
      ref={ref}
      initial={{ opacity: 0 }} 
      animate={{ opacity: inView ? 1 : 0 }} 
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1 }}
       className='h-screen w-screen '>
        <img src={banner} alt="banner" className='' />
        <div className='z-10 bottom-0 hidden lg:block lg:left-32 py-4 rounded-t-lg lg:w-[400px] text-center bg-[#FAEDCD] absolute '>
          <p className='font-semibold text-3xl'>About HMS</p>
        </div>
      </motion.div>
    
    
    </section>
    <section  
    
    className=' bg-[#CFF] pt-5'>
    <motion.div
    ref={ref}
    initial={{ opacity: 0 }} 
    animate={{ opacity: inView ? 1 : 0 }} 
    transition={{ duration: 1.5 }}
    whileInView={{ opacity: 1 }}
     className='h-screen max-w-7xl flex flex-col m-auto justify-center text-justify gap-1'>
        <p className='text-2xl font-semibold'>Background</p>
        <p className='text-lg'>
          
MediConnect is at the forefront of revolutionizing healthcare accessibility and management by integrating innovative digital solutions. At its core, MediConnect is dedicated to enhancing patient care and healthcare administration through technology. Our platform serves as a crucial link between patients, healthcare providers, and the seamless management of medical data, thereby embodying our commitment to improving the healthcare experience for all.

Our Vision
To transform healthcare delivery through digital innovation, making it more accessible, efficient, and secure for everyone involved. We envision a world where quality healthcare services are just a click away, ensuring that patients receive the care they need, when they need it.

Our Mission
MediConnect aims to:

Simplify the process of scheduling doctor appointments, eliminating the hassle of long waiting times and cumbersome booking processes.
Ensure secure, efficient management and storage of electronic health records (EHR), enhancing the confidentiality and integrity of patient data.
Empower healthcare providers with tools that reduce administrative burdens, allowing them to focus more on patient care than paperwork.
Foster a culture of continuous innovation and improvement, staying ahead of the curve in healthcare technology.
 </p>
        <p className='text-lg hidden lg:block'></p>
      </motion.div>
    </section>

       
    </>
  )
}

export default AboutUs