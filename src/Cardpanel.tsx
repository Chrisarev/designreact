import styles from './stylesheets/Cardpanel.module.css'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer'
import {useEffect} from 'react'

const Cardpanel = () => {
    //inView is a boolean that specifies if object is in view
    //ref is the element you want to monitor
    const { ref, inView } = useInView();
    ///starts and stops framer animations 
    const animation = useAnimation(); 
    const inverseAnimation = useAnimation();
    {/* if inView, animate to original x position,
    if not inView move element to -80vw of original x position*/}
    useEffect(()=>{
        if(inView) {
            animation.start({
                x: 0, 
                transition:{
                    type:'spring', duration:1, bounce: 0.2
                }
            })
            inverseAnimation.start({
                x: 0, 
                transition:{
                    type:'spring', duration:1, bounce: 0.2
                }
            })
        }
        if(!inView){
            animation.start({x: '-50vw'})
            inverseAnimation.start({x:'50vw'})
        }
        console.log('useEffect hook, inView = ', inView)
    },[inView])

    return (
        <>
            <div className={styles.panel}>
                <h1>Capture <span>your</span> audience</h1>
                {/* ref set to {ref} so now it is being monitored by useInView*/}
                <div ref={ref} className={styles.cardHolder}>
                    {/* animation hook passed into animate state so we can animate on scroll into view*/}
                    <motion.div className={styles.appealSection}
                        animate={animation}
                    >
                        <div className={styles.appealSVG}>SVG</div>
                        <div className={styles.appealText}>
                            We tailor your website to captivate your specific audience resulting in increased engagement.
                        </div>
                    </motion.div>
                    <motion.div className={styles.appealSection}
                    animate={inverseAnimation}>
                        <div className={styles.appealSVG}>SVG</div>
                        <div className={styles.appealText}>
                            In addition, we are always looking to utilize the newest technologies to provide your users with a unique, fresh experience.
                        </div>
                    </motion.div>
                    <motion.div className={styles.appealSection}
                    animate={animation}>
                        <div className={styles.appealSVG}>SVG</div>
                        <div className={styles.appealText}>
                            Custom made graphics and animations ensure that your users are entertained when learning about your brand.
                        </div>
                    </motion.div>
                </div>
            </div>
        </>
    )
}

///brand IMAGE
export default Cardpanel;