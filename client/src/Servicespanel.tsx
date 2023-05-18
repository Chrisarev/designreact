import styles from './stylesheets/Service.module.css'
import { useScroll, useTransform, motion } from 'framer-motion'
import { useRef } from 'react'

const Servicespanel = () => {
    //Need the useRef hook to get position of parent element 
    const targetRef = useRef<HTMLDivElement>(null);
    //Ref is the target of useScroll hook
    //number scrollYProgress contains num between 0-1 referring to 
    //how far user has scrolled in element 
    const { scrollYProgress } = useScroll({
        target: targetRef,
        //takes two strings ex:["start end", "end end"] which describe intersections between the target
        //and a container element(container is window if not defined)
        //Any range between those intersections is where scroll progress is applied
        offset: ["start end", "end start"]
    })

    const translateY = useTransform(scrollYProgress, [0, 0.5, 0.6, 0.75, 1], [200, 0, 0, -250, 0])
    const translateY2 = useTransform(scrollYProgress, [0, 0.5, 0.6, 0.75, 1], [300, 0, 0, -350, 0])
    const translateY3 = useTransform(scrollYProgress, [0, 0.5, 0.6, 0.75, 1], [400, 0, 0, -450, 0])
    /*const scale = useTransform(scrollYProgress,  [0, 0.5, 1], [0.9, 1, 0.9])*/
    
    return (
        <>
            <div ref={targetRef} className={styles.panel}>
                <h1>Services we offer</h1>
                <div className={styles.cardHolder}>
                    <motion.div style={{ translateY}} className={styles.borderWrap}>
                    <div className={styles.serviceCard}>
                        <div className={styles.cardHeader}>Website design</div>
                        <div className={styles.cardBody}>
                            We create a simple, clean user experience guided by optimizing user interactions, 
                            designing a scalable design system, and incorporating cutting edge technology.
                        </div>
                    </div>
                    </motion.div>
                    <motion.div style={{ translateY: translateY2}} className={styles.borderWrap}>
                    <div className={styles.serviceCard}>
                        <div className={styles.cardHeader}>Branding</div>
                        <div className={styles.cardBody}>
                            Our branding experts will collaborate with you to craft a unique, recognizable 
                            brand identity that clients and users will love. 
                        </div>
                    </div>
                    </motion.div>
                    <motion.div style={{ translateY:translateY3}} className={styles.borderWrap}>
                    <div className={styles.serviceCard}>
                        <div className={styles.cardHeader}>Asset creation</div>
                        <div className={styles.cardBody}>
                            Enhance your user experience by adding custom images, videos, and animations to
                            your website created by our experienced graphic design team.
                        </div>
                    </div>
                    </motion.div>
                </div>
            </div>
        </>
    )
}

export default Servicespanel;