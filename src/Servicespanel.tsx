import styles from './stylesheets/Servicespanel.module.css' 
import {useScroll, useTransform, motion} from 'framer-motion'
import {useRef} from 'react'


const Servicespanel = () =>{
    //Need the useRef hook to get position of parent element 
    const targetRef = useRef<HTMLDivElement>(null); 
    //Ref is the target of useScroll hook
    //number scrollYProgress contains num between 0-1 referring to 
    //how far user has scrolled in element 
    const {scrollYProgress} = useScroll({
        target:targetRef,
        //takes two strings ex:["start end", "end end"] which describe intersections between the target
        //and a container element(container is window if not defined)
        //Any range between those intersections is where scroll progress is applied
        offset: ["start end", "end start"]
    })
     
    //useTransform maps one set of numbers to another given set
    //ex: if useTransform(scrollYProgress[0,0.5,1], [1,0.5,0]) then if scrollYProgress 
    //is 1(element is fully scrolled), then opacity would be set to 0 
    //once element is half way scrolled thru, opacity set to 0 
    const opacity = useTransform(scrollYProgress, [0,0.5,1], [0,1,0] )
    const translateY = useTransform(scrollYProgress, [0,0.5,0.75,1], [200,0,-300,0] )
    const translateY2 = useTransform(scrollYProgress, [0,0.5,0.75,1], [300,0,-200,0] )
    const translateY3 = useTransform(scrollYProgress, [0,0.5,0.75,1], [400,0,-150,0] )

    return (
        <>
            <div  ref={targetRef} className={styles.panel}>
                <div className={styles.motionHolder}>
                    <motion.h1 style={{translateY,opacity}}>Distinguish your brand.</motion.h1>
                </div>
                <div className={styles.motionHolder}>
                    <motion.h1 style={{translateY:translateY2,opacity}}>Grow your userbase.</motion.h1>
                </div>
                <div className={styles.motionHolder}>
                    <motion.h1 style={{translateY:translateY3,opacity}}>Achieve your goals.</motion.h1>
                </div>
                </div>
        </>
    )
}

export default Servicespanel;