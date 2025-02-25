import React from 'react'
import Landing from '../components/Landing'
import Description from '../components/Description'
import Projects from '../components/Projects'
import Stack from '../components/Stack'
import { useInView, motion, useTransform , useScroll} from 'framer-motion';
import { useRef } from 'react';
import Footer from '../components/Footer'
import { useEffect } from 'react'
import LocomotiveScroll from 'locomotive-scroll';


const Homepage = ({homeref}) => {
  
  


  return (
   <div id='homepage' ref={homeref} className="homepage ">
    <Landing/>
    <Description/>
    <Stack/>
    <Projects />
    <Footer/>
   </div>
  )
}

export default Homepage