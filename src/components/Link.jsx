import './link.scss';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { slide, scale } from './anim.js';


export default function Index({data, isActive, setSelectedIndicator, setIsActive, scrollToElement}) {
  
    const { title, href, index, offset ,speed} = data;

  
    const scrollTo =(target, off, spd)=>{
      requestAnimationFrame(()=>{
        scrollToElement(target, off, spd)
      })
    }
  

    return (
      <motion.div 
        className="link" 
        onMouseEnter={() => {setSelectedIndicator(href)}} 
        custom={index} 
        variants={slide} 
        initial="initial" 
        animate="enter" 
        exit="exit"
        onClick={()=>{setIsActive(false);  scrollTo(href, offset, speed); }}
      >
        <motion.div 
          variants={scale} 
          animate={isActive ? "open" : "closed"} 
          className="indicator">
        </motion.div>
        <Link href={href}>{title}</Link>
      </motion.div>
    )
}