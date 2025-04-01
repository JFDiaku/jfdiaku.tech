import "./description.scss"
import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';
import { slideUp, opacity, slideRight, slideLeft, scale } from './anim.js';
import Stack from "./Stack.jsx";
import { useMediaQuery } from "@mui/material";
import { useScroll, useTransform } from "framer-motion";

const Description = () => {
    const screenMD= useMediaQuery('(max-width:800px)')

    
  const phrase = "Hi, I'm Jeff Diaku, a software engineer specializing in web application development.";
  const description = useRef(null);
  const isInView = useInView(description, {once:true});

  const { scrollYProgress } = useScroll({
    target: description,
    offset: ["start end", "end end"]
})

const rotate = useTransform(scrollYProgress, [0, 1], [300, 0])
const x = useTransform(scrollYProgress, [0, 1], [120, 0])


  return (
    <div id="about" ref={description} className="description">
            <div className="body">
                <p className="description-text">
                {
                    phrase.split(" ").map( (word, index) => {
                        return <span key={index} className="mask"><motion.span variants={slideUp} custom={index} animate={isInView ? "open" : "closed"} key={index}>{word}</motion.span></span>
                    })
                }
                </p>
                <motion.div className="body2" variants={opacity}  animate={isInView ? "open" : "closed"}>
                    <p className="description-text2">
                    I am passionate about Programming, Design, and Problem solving , and I combine these skills to create Applications.
                    </p>
                    {screenMD &&
                <motion.div style={{rotate, x}} variants={slideLeft} className="about-me"  animate={isInView ? "open" : "closed"}>
                    <p>
                        ABOUT ME
                    </p>
                </motion.div>
                }
                </motion.div>
               
                
            </div>
        </div>
  )
}

export default Description


   
  
