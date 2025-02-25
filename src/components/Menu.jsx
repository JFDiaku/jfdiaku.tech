import Nav from "./Nav.jsx";
import { useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import './header.scss';
import gsap from 'gsap';
import Magnetic from "./Magnetic.jsx";
import { useMediaQuery } from "@mui/material";

const Menu = ({isActive, setIsActive, scrollToElement}) => {
  const header = useRef(null);
  const location = useLocation().pathname;
  const button = useRef(null);
const screenMD = useMediaQuery('(max-width:650px)')

  useEffect( () => {
    if(isActive) setIsActive(false);
  }, [location])

 useLayoutEffect( () => {
      gsap.registerPlugin(ScrollTrigger)
      gsap.to(button?.current, {
          scrollTrigger: {
              trigger: document?.documentElement,
              start: 0,
              end: 50,
              onLeave: () => {gsap.to(button?.current, {scale: 1, duration: 0.25, ease: "power1.out"})},
              onEnterBack: () => {gsap.to(button?.current, {scale: 0, duration: 0.25, ease: "power1.out"})}
          }
      })
      
  

  }, [])


  return (
    <>

<div ref={header} id="home" className="header">
            <div className="logo">
                <p className="copyright">©</p>
                <div className="name">
                    <p className="jeffdiaku">JfDiaku.tech  </p>
                    <p className="jeff">Jeff</p>
                    <p className="diaku">Diaku</p>
                </div>
            </div>
            <div className="nav">
                
                {screenMD ? 
                
                <Magnetic>
                <div onClick={()=>setIsActive(true)} className="el">
                    <a  >Menu</a>
                    <div className="indicator"></div>
                </div>
                </Magnetic>
                
                :
                 <> 
                <Magnetic>
                <div className="el">
                    <a onClick={()=>scrollToElement('about', -40, 2)} >About</a>
                    <div className="indicator"></div>
                </div>
                </Magnetic>


                <Magnetic>
                <div className="el">
                    <a onClick={()=>scrollToElement('projects', 100, 2)} >Projects</a>
                    <div className="indicator"></div>
                </div>
                </Magnetic>
                
                

                <Magnetic>
                <div className="el">
                    <a onClick={()=>scrollToElement('contact', 500, 4)} >Contact</a>
                    <div className="indicator"></div>
                </div>
                </Magnetic>
                </>  }
            </div>
        </div>
        <div ref={button} className="headerButtonContainer">
            <div onClick={() => {setIsActive(!isActive)}} className="button">
                <div className={`burger ${isActive ? "burgerActive" : ""}`}></div>
            </div>
        </div>

        <AnimatePresence mode="wait">
            {isActive && <Nav scrollToElement={scrollToElement} isActive={isActive} setIsActive={setIsActive}  />}
        </AnimatePresence>

    </>
  )
}

export default Menu