import React from 'react'
import { motion } from 'framer-motion';
import  './svg.scss';
import { useEffect , useState} from 'react';


export default function Index() {
  const [height, setHeight] = useState(window.innerHeight);
  
  // Update height on window resize
  useEffect(() => {
    const handleResize = () => {
      setHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const initialPath = `M100 0 L100 ${height} Q-100 ${height/2} 100 0`
  const targetPath = `M100 0 L100 ${height} Q100 ${height/2} 100 0`

  const curve = {
    initial: {
        d: initialPath
    },
    enter: {
        d: targetPath,
        transition: {duration: 1, ease: [0.76, 0, 0.24, 1]}
    },
    exit: {
        d: initialPath,
        transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1]}
    }
  }

  return (
    <svg className="svgCurve" viewBox={`0 0 200 ${height}`}>
        <motion.path variants={curve} initial="initial" animate="enter" exit="exit"></motion.path>
    </svg>
  )
}