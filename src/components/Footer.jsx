import './footer.scss'
import { useRef, useEffect, useState } from 'react';
import profile from "../assets/images/profile.jpg"
import { useScroll, motion, useTransform, useSpring } from 'framer-motion';
import Magnetic from './Magnetic.jsx';
import { useMediaQuery } from '@mui/material';


const Footer = () => {
  const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end end"]
    })
    const screenSM = useMediaQuery('(max-width:550px)');
    const screenXS = useMediaQuery('(max-width:400px)');
    const x =  useTransform(scrollYProgress, [0, 1], [0, 100]);
    
    const rotate = useTransform(scrollYProgress, [0, 1], [120, 90]);


    const y = screenSM ? useTransform(scrollYProgress, [0, 1], [-window.innerHeight * .25  , 0]) : useTransform(scrollYProgress, [0, 1], [-window.innerHeight * .6, 0]);

    

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
        setTime(new Date());
        }, 60000);

        return () => clearInterval(intervalId); // Cleanup interval on component unmount
    }, []);


  return (
    <motion.div style={{y}} ref={container} id='contact' className="contact">
    <div className="body">
        <div className="title">
            <span>
                <div className="imageContainer">
                    <img 
                    alt={"image"}
                    src={profile}
                    />
                </div>
                <h2>Let's work</h2>
            </span>
            <h2>together</h2>
            <motion.div style={{x}} className="buttonContainer">
                
                <div backgroundcolor={"#334BD3"} className="button">
                    <p>Get in touch</p>
                </div>
            </motion.div>
            <motion.svg style={{rotate, scale: 2}} width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z" fill="white"/>
            </motion.svg>
        </div>
        <div className="nav">
                <div className="button">
                    <p>Jeff.fdiaku@gmail.com</p>
                </div>
        </div>
        <div className="info">
            <div>
                <span>
                    <h3>Version</h3>
                    <p>2024 © Edition</p>
                </span>
                <span>
                    <h3>Local Time</h3>
                    <p>{time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} UTC-5</p>
                </span>
            </div>
            <div>
                <span>
                    <h3>socials</h3>
                <Magnetic>
                    <a href="https://www.linkedin.com/in/jeff-francis-diaku-0693b6264/" target='_blank'>
                    <p>Linkedin</p>
                    </a>
                </Magnetic>
                </span>

              
            </div>
        </div>
    </div>
</motion.div>
  )
}

export default Footer



