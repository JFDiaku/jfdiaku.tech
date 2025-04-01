import "./projects.scss"
import wineBureau from "../assets/images/wbHome.png"
import { Link } from "react-router-dom"

import secfi from "../assets/images/secfi.png"
import argHome from "../assets/images/argHome.png"
import koyohome from "../assets/images/koyohome.png"
import goplay from "../assets/images/goplay.jpg"
import { useInView, motion, useTransform , useScroll} from 'framer-motion';
import { useRef } from 'react';
import { slideLeft, slideRight, slideUp, opacity , slide} from "./anim.js";
import { Code, GitHub, Launch } from "@mui/icons-material"
import maint from "../assets/images/maint.svg"
import goPlay2 from "../assets/images/dash.png"
const Projects = () => {
  
  const secfiProject = useRef(null)
  const wineProject  = useRef(null)
  const oilProject = useRef(null)
  const goplayProject = useRef(null)
  const goplay2Project = useRef(null)
  const koyo = useRef(null)
  const go2InView = useInView(goplay2Project, {once:true})
  const koyoInView = useInView(koyo,{once:true})
  const goInView = useInView(goplayProject, {once:true})
  const secfiInView = useInView(secfiProject, {once:true})
  const wineInView = useInView(wineProject, {once:true})
  const oilInView = useInView(oilProject, {once:true})


  const container = useRef(null);

  const { scrollYProgress } = useScroll({

      target: container,

      offset: ["start end", "end start"]

  })

 
    const myVariants = {
      opacity,
      slideLeft
    };
  


  const height = useTransform(scrollYProgress, [0, 0.9], [100, 0])



  return (
    <>
    <div ref={container}  id='projects'>

      <div   className="projects">
        
      <p  className="title ml-16">THINGS I'VE BUILT</p>

<p className="underline"></p>

<div className="projects-box">
  <motion.div variants={opacity, slideLeft} ref={koyo} id="koyo"  animate={koyoInView ? "open" : "closed"} className="project project-left">

  <div className="project-card " >
    <img className="card-img" src={koyohome} alt="" />
    <div className="overlay"></div>
  </div>

  <div className="project-description">
    
  <div className="flex flex-col gap-2 ">
      <p className="proj-title">Kōyōhaus</p>
      <p className="proj-date">APR 2025</p>
    </div>

    

    <p className="proj-descrip">Kōyōhaus is an eCommerce store where customers can explore and purchase artisan furniture.</p>
    
    <div className="tools">
      <p>HTML</p>
      <p>Tailwind CSS</p>
      <p>TypeScript</p>
      <p>React.js</p>  
      <p>Spring Boot</p>
      <p>Java</p>
      <p>MySQL</p>
      <p>Stripe</p>
    </div> 
  
  <div className="project-icons">
    <a href="https://github.com/JFDiaku/Kohohaus" target="_blank"> <GitHub/></a>
  </div>
  

    
  </div>

  </motion.div>

  <motion.div variants={opacity, slideRight} id="goplay2" ref={goplay2Project}  animate={go2InView ? "open" : "closed"} className="project project-right">

  <div className="project-card " >
  <img className="card-img" src={goPlay2} alt="" />
  <div className="overlay"></div>
  </div>

  <div className="project-description">

  <div className="flex flex-col gap-2 ">
    <p className="proj-title">GOPLAY 2.0</p>
    <p className="proj-date">JAN 2025</p>
  </div>



  <p className="proj-descrip">GoPlay is a full-stack web application designed to connect local athletes for real-time messaging and event coordination</p>

  <div className="tools">
    <p>HTML</p>
    <p>CSS</p>
    <p>Java</p>
    <p>Spring Boot</p>
    <p>Spring Framework</p>
    <p>jQuery</p>  
    <p>JavaScript</p>
    <p>Maven</p>  
  </div> 

  <div className="project-icons">
  <a href="https://github.com/JFDiaku/Case-Study" target="_blank"> <GitHub/></a>
  </div>



  </div>

  </motion.div>

  <motion.div variants={opacity, slideLeft} ref={secfiProject} id="secfi"  animate={secfiInView ? "open" : "closed"} className="project project-left">

    <div className="project-card " >
      <img className="card-img" src={secfi} alt="" />
      <div className="overlay"></div>
    </div>

    <div className="project-description">
      
    <div className="flex flex-col gap-2 ">
        <p className="proj-title">SECFI LANDING PAGE</p>
        <p className="proj-date">MAY 2024</p>
      </div>

      

      <p className="proj-descrip">Replicated the visual design, interactive elements, and user interface of the Secfi landing page using modern web development technologies.</p>
      
      <div className="tools">
        <p>HTML</p>
        <p>CSS</p>
        <p>JavaScript</p>
        <p>React.js</p>  
      </div> 
     
    <div className="project-icons">
      <a href="https://github.com/JFDiaku/SecfiClone" target="_blank"> <GitHub/></a>
      <a href="https://secficlone.com/" target="_blank"> <Launch/></a>
    </div>
     

      
    </div>

  </motion.div>
  
  <motion.div variants={opacity, slideRight} id="wine" ref={wineProject} animate={wineInView ? "open" : "closed"}  className="project project-right">

    <div className="project-card " >
      <img className="card-img" src={wineBureau} alt="" />
      <div className="overlay"></div>
    </div>

    <div className="project-description">
      
    <div className="flex flex-col gap-2 ">
        <p className="proj-title">WINE BUREAU WEST AFRICA</p>
        <p className="proj-date">MARCH 2024</p>
      </div>

   

      <p className="proj-descrip">Wine Bureau is a minimalist e-commerce platform offering a curated selection of premium wines.</p>
    
      <div className="maintenance" >
        <p>Server under maintenance</p>
        <img src={maint} alt="" />
      </div>
        
      <div className="tools">
        <p>HTML</p>
        <p>CSS</p>
        <p>JavaScript</p>
        <p>React.js</p>
        <p>SQL</p> 
        <p>Strapi</p>
        <p>Stripe</p> 
      </div> 

    <div className="project-icons">
    <a href="https://github.com/JFDiaku/WineBureauWA" target="_blank"> <GitHub/></a>
    <a href="https://winebureau.cloud/" target="_blank"> <Launch/></a>
    </div>
    

      
    </div>

  </motion.div>

  <motion.div variants={opacity, slideLeft} id="arg" ref={oilProject}  animate={oilInView ? "open" : "closed"}   className="project oil-project project-left">

    <div className="project-card " >
      <img className="card-img" src={argHome} alt="" />
      <div className="overlay"></div>
    </div>

    <div className="project-description">
      
    <div className="flex flex-col gap-2 ">
        <p className="proj-title">ARG INTEGRATED ENERGY SERVICES</p>
        <p className="proj-date">AUGUST 2023</p>
      </div>

      
     

      <p className="proj-descrip">ARG Integrated Energy services is An International Oil & Gas Company that provides Energy consultation and management services.</p>
      
      <div className="tools">
        <p>HTML</p>
        <p>CSS</p>
        <p>JavaScript</p>
        <p>React.js</p>  
      </div> 
     
    <div className="project-icons">
    <a href="https://github.com/JFDiaku/ARGIntegrated" target="_blank"> <GitHub/></a>
    <a href="https://jfdiaku.github.io/ARGIntegrated/" target="_blank"> <Launch/></a>
    </div>
     

      
    </div>

  </motion.div>

  <motion.div variants={opacity, slideRight} id="goplay" ref={goplayProject}  animate={goInView ? "open" : "closed"}    className="project goplay project-right">

    <div className="project-card " >
      <img className="card-img" src={goplay} alt="" />
      <div className="overlay"></div>
    </div>

    <div className="project-description">
      
    <div className="flex flex-col gap-2 ">
        <p className="proj-title">GOPLAY</p>
        <p className="proj-date">DECEMBER 2022</p>
      </div>

   

      <p className="proj-descrip">GoPlay is a full-stack application aimed at connecting local athletes in sports activities.</p>
    

        
      <div className="tools">
        <p>HTML</p>
        <p>CSS</p>
        <p>JavaScript</p>
        <p>PHP</p>
        <p>SQL</p> 
        <p>BOOTSTRAP</p>
      </div> 

    <div className="project-icons">
    <a href="https://github.com/JFDiaku/GoPlay"  target="_blank" > <GitHub/></a>
    </div>
    

      
    </div>

  </motion.div>




</div>


      </div>

      <motion.div style={{height}} className="circleContainer">

      <div className="circle"></div>

      </motion.div>
   
     
    </div>
  

</>
  )
}

export default Projects