import Homepage from "./Pages/Homepage.jsx"
import Menu from "./components/Menu.jsx"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useEffect, useRef, useState } from "react";
import Footer from "./components/Footer.jsx";
import { useLayoutEffect} from 'react'
import LocomotiveScroll from 'locomotive-scroll';

function App() {
  const [isActive, setIsActive] = useState(false);

  const homeref = useRef(null)

  const locomotiveScroll = new LocomotiveScroll({
         autoStart: false
        });
  
      requestAnimationFrame(() => {
        locomotiveScroll.start();
    });

 

  // useLayoutEffect(() => {
  //   if(!isActive){
  //     setScroll(()=>new LocomotiveScroll({
  //      autoStart: false
  //     }));

  //     requestAnimationFrame(() => {
  //       locomotiveScroll.start();
  //   });
   
  //   }else if(isActive && locomotiveScroll){     
  //     requestAnimationFrame(() => {
  //       locomotiveScroll.stop();
  //   });
  //   locomotiveScroll.destroy();
  //     setScroll(null);
  //   }  
  // }, [isActive]);


  // // useEffect(()=>{
  // //   if(isActive){
  // //     document.documentElement.style.overflowY ='hidden'
  // // }else if(!isActive){
  // //    document.documentElement.style.overflowY ='auto'
  // // }
  // // },[isActive])





  
  const scrollToElement = (elementId, offset, speed) => {
    const targetElement = document.getElementById(elementId);
  
    if (targetElement) {
      locomotiveScroll.scrollTo(targetElement, {
        offset: offset, // Adjust offset as needed
        disableLerp: false, // Whether to disable Locomotive Scroll's internal lerp mechanism
        duration: speed,
      });
    }
  };
  



  return (
   <Router>
       <Menu isActive={isActive} setIsActive={setIsActive} locomotiveScroll={locomotiveScroll} scrollToElement={scrollToElement}/>
       <Routes>
          <Route path="/" element={<Homepage homeref={homeref}  />}/>
     
       </Routes>
 
   </Router>
  )
}

export default App
