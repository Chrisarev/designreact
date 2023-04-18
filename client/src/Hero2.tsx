import styles from './stylesheets/Hero2.module.css' 
import {useScroll, useTransform, motion} from 'framer-motion'
import {useRef, useState, useEffect} from 'react'
import { useSyncExternalStore } from 'react';

const Hero2 = () =>{
    const mobileScaleValue = [1,6,10];
    const desktopScaleValue = [1,2,4];

    /* Gets window height and width*/
    function getWindowDimensions() {
        const { innerWidth: width, innerHeight: height } = window;
        return {
          width,
          height
        };
      }
    
      /* Window dimensions state that updates everytime the window is resized*/
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    function getScaleValue() {
        if(windowDimensions.width>800){
            return desktopScaleValue;
        }else{
            return mobileScaleValue;
        }
    }

    //Need the useRef hook to get position of parent element 
    const targetRef = useRef<HTMLDivElement>(null); 
    const {scrollYProgress} = useScroll({
        target:targetRef,
        //takes two strings ex:["start end", "end end"] which describe intersections between the target
        //and a container element(container is window if not defined)
        //Any range between those intersections is where scroll progress is applied
        offset: ["start start", "end start"]
    })

    const translateY = useTransform(scrollYProgress, [0,0.5,1], [200,-800,-1500] )
    /*const translateX = useTransform(scrollYProgress, [0,0.5,1], [0,-1000,-1500])*/
    const scale = useTransform(scrollYProgress, [0,0.5,1], getScaleValue())
    return (
        <>
        <div className={styles.firstLoadPanel}>
            <div className={styles.introText}>Experience</div>
            <div className={styles.introText}>Everything</div>
        </div>
        <div  ref={targetRef} className={styles.panel}>
            <div className={styles.header}><span>E2</span> Design Studio</div>
            <div className={styles.subHeader}>We bridge your vision with the experience of your users.</div>
           <motion.div className={styles.backgroundCircle} 
            style={{scale,translateY}}
           ></motion.div>
        </div>
        </>
    )
}

export default Hero2;