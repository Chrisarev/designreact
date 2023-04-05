import styles from './stylesheets/Endsection.module.css' 
import {useScroll, useTransform, motion} from 'framer-motion'
import {useRef} from 'react'

const Endsection = () =>{
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

    const translateY = useTransform(scrollYProgress, [0,0.5,0.6,0.75,1], [200,0,0,-150,0] )
    const translateY2 = useTransform(scrollYProgress, [0,0.5,0.6,0.75,1], [300,0,0,-200,0] )
    const translateY3 = useTransform(scrollYProgress, [0,0.5,0.6,0.75,1], [400,0,0,-300,0] )

    return (
        <>
            <div ref={targetRef} className={styles.panel}>
                <h1>Services we offer</h1>
                <div className={styles.cardHolder}>
                    <motion.div style={{translateY}} className={styles.serviceCard}>
                        Card 1
                    </motion.div>
                    <motion.div style={{translateY:translateY2}} className={styles.serviceCard}>
                        Card 2
                    </motion.div>
                    <motion.div style={{translateY:translateY3}}className={styles.serviceCard}>
                        Card 3
                    </motion.div>
                </div>
            </div>
        </>
    )
}

export default Endsection;