import styles from './stylesheets/Cardpanel.module.css'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer'

const Cardpanel = () => {
    //inView is a boolean that specifies if object is in view
    //ref is the element you want to monitor
    const { ref, inView } = useInView();

    return (
        <>
            <div className={styles.panel}>
                <h1>Capture <span>your</span> audience</h1>
                {/* ref set to {ref} so now it is being monitored by useInView*/}
                <div ref={ref} className={styles.cardHolder}>
                    <motion.div className={styles.appealSection}
                        initial={{ x: '-5rem' }}
                        animate={{ x: '0' }}
                        transition={{ type: 'spring', duration: 1, bounce: 0.3 }}
                    >
                        <div className={styles.appealSVG}>SVG</div>
                        <div className={styles.appealText}>
                            We tailor your website to captivate your specific audience resulting in increased engagement.
                        </div>
                    </motion.div>
                    <div className={styles.appealSection}>
                        <div className={styles.appealSVG}>SVG</div>
                        <div className={styles.appealText}>
                            In addition, we are always looking to utilize the newest technologies to provide your users with a unique, fresh experience.
                        </div>
                    </div>
                    <div className={styles.appealSection}>
                        <div className={styles.appealSVG}>SVG</div>
                        <div className={styles.appealText}>
                            Custom made graphics and animations ensure that your users are entertained when learning about your brand.
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

///brand IMAGE
export default Cardpanel;