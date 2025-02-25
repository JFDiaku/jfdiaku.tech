import { useRef, useLayoutEffect } from "react";
import "./landing.scss"
import gsap from "gsap/src";
import SouthEastIcon from '@mui/icons-material/SouthEast';
import ScrollTrigger from "gsap/src/ScrollTrigger";
import LanguageIcon from '@mui/icons-material/Language';
import { color } from "framer-motion";

const Landing = () => {
  
  const slider = useRef();
  const firstText = useRef();
  const secondText = useRef();


  let xPercent = 0;

  let direction = -1;





  useLayoutEffect( () => {
    setTimeout(() => {
      if (secondText.current) {
        gsap.set(secondText.current, {
          left: secondText.current.getBoundingClientRect().width,
        });
      }

      gsap.registerPlugin(ScrollTrigger);
      gsap.to(slider?.current, {
        scrollTrigger: {
          trigger: document.documentElement,
          scrub: 0.5,
          start: 0,
          end: window.innerHeight,
          onUpdate: e => direction = e.direction * -1
        },
        x: "-500px",
      })
  
      requestAnimationFrame(animate);
    }, 300);
  }, [])
  


 





  const animate = () => {
    if(xPercent < -100){
      xPercent = 0;
    }
    else if(xPercent > 0){
      xPercent = -100;
    }

    gsap.set(firstText.current, {xPercent: xPercent})

    gsap.set(secondText.current, {xPercent: xPercent})

    requestAnimationFrame(animate);

    xPercent += .04 * direction;
  }

  

  

  return (
    <div className="landing">

      <div className="developer">
        <SouthEastIcon sx={{fontSize:'2em', color:'white'}}/>
        <p>Freelance Developer</p>
      </div>

      <div className="location">
        <p>Located in Austin, Texas</p>
        <LanguageIcon sx={{fontSize:'2em', color:'black', borderRadius:'50%',backgroundColor:'white', padding:'5px', boxSizing:'content-box'}}/>     
      </div>

      <div className="sliderContainer">

        <div ref={slider} className="slider">
          <p  ref={firstText}>Jeff Francis Diaku -  </p>
          <p ref={secondText}>Jeff Francis Diaku -  </p>
        </div>
      </div>



    </div>
  )
}

export default Landing