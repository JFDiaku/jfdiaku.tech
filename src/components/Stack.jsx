import { useInView, motion } from 'framer-motion';
import { useRef } from 'react';
import { Code, Css, HtmlOutlined, JavascriptOutlined } from "@mui/icons-material"
import sql from "../assets/images/mysql.svg";
import stripe from "../assets/images/stripe.svg"
import strapi from "../assets/images/strapi.svg"
import react from "../assets/images/react.svg"
import { slideUp, opacity, slideRight, slideLeft } from './anim';
import Magnetic from "./Magnetic.jsx"
import "./stack.scss"

const Stack = () => {
  const stack = useRef(null)
  const StackInView = useInView(stack)


  const myStack = ['HTML', 'CSS' , 'SASS', 'Tailwind CSS', ' JavaScript', 'PHP', 'SQL', 'Java',  'Spring Framework', 'Spring Boot', 'React.js', 'Redux', 'Node.js' ]

  return (
    <div className='stack'   ref={stack}>
      
      <motion.p  variants={slideRight} animate={StackInView ? "open" : "closed"}  className="tech-stack-title">TECH STACK </motion.p>
      
      <div className="stack-tools">
       {
      myStack.map( (word, index) => {
          return <div key={index} className='tech-stack' >
            <Magnetic>
            <motion.span className='' variants={slideUp} custom={index} animate={StackInView ? "open" : "closed"} key={index}>
              {word}
            </motion.span>
            </Magnetic>
            </div>
      })
  }
  </div>
  </div>
  )
}

export default Stack
