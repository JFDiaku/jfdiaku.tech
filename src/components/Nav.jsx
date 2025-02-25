import React, { useState } from 'react'
import './nav.scss';
import { motion } from 'framer-motion';
import { useLocation} from 'react-router-dom';
import { menuSlide } from './anim.js';
import { useEffect } from 'react';
import Link from "./Link.jsx"
import Curve from "./Curve.jsx"
import { useMediaQuery } from '@mui/material';

const Nav = ({scrollToElement, setIsActive}) => {
  const screenSM = useMediaQuery('(min-width:600px)');
  const navItems = [
    {
      title: "Home", 
      href: "home",
      offset:0 , 
      speed: 4
    },
  
    {
      title: "About",
      href: "about",
      offset:-40, 
      speed: 3
    },
    { 
      title: "Projects", 
      href: "projects", 
      offset:100,
      speed: 3
    },
  
  
    { 
      title: "Contact",
      href: "contact",
      offset:500,
      speed: 5
    },
  
  ]

  const [selectedIndicator, setSelectedIndicator] = useState();

  return (
    

    <motion.div 
      variants={menuSlide} 
      initial="initial" 
      animate="enter" 
      exit="exit" 
      className="menu"
    >
      <div className="body">
        <div className="nav">
          <div className="header">
            <p>Navigation</p>
          </div>
          {navItems.map((data, index) => (
             <Link 

             key={index} 

             data={{...data, index}} 
             setIsActive={setIsActive}
             scrollToElement={scrollToElement}
             isActive={selectedIndicator === data.href} 
             setSelectedIndicator={setSelectedIndicator}>
            
            

             </Link>
          ))}
        </div>
        <div className="footer">
          <a href="https://www.instagram.com">Instagram</a>
          <a href="https://www.linkedin.com">LinkedIn</a>
        </div>
      </div>
      {screenSM && <Curve/>}
    </motion.div>

  )
}

export default Nav