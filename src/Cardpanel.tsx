import styles from './stylesheets/Cardpanel.module.css'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'

const Cardpanel = () => {
    //inView is a boolean that specifies if object is in view
    //ref is the element you want to monitor
    const { ref, inView } = useInView();
    ///starts and stops framer animations 
    const animation = useAnimation();
    const inverseAnimation = useAnimation();
    const animation3 = useAnimation();
    {/* if inView, animate to original x position,
    if not inView move element to -80vw of original x position*/}
    useEffect(() => {
        if (inView) {
            animation.start({
                x: 0,
                transition: {
                    type: 'spring', duration: 1, bounce: 0.2
                }
            })
            inverseAnimation.start({
                x: 0,
                transition: {
                    type: 'spring', duration: 1, bounce: 0.2, delay:0.15
                }
            })
            animation3.start({
                x: 0,
                transition: {
                    type: 'spring', duration: 1, bounce: 0.2,delay: 0.2
                }
            })
        }
        if (!inView) {
            animation.start({ x: '-30vw' })
            inverseAnimation.start({ x: '30vw' })
            animation3.start({ x: '-30vw' })
        }
        console.log('useEffect hook, inView = ', inView)
    }, [inView])

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
                        <div className={styles.appealSVG}>
                            <svg width="60%" height="60%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M10 5C8.34315 5 7 6.34315 7 8C7 9.65685 8.34315 11 10 11C11.6569 11 13 9.65685 13 8C13 6.34315 11.6569 5 10 5ZM13.5058 11.565C14.4281 10.6579 15 9.39576 15 8C15 5.23858 12.7614 3 10 3C7.23858 3 5 5.23858 5 8C5 9.39827 5.57396 10.6625 6.49914 11.5699C3.74942 12.5366 2 14.6259 2 17C2 17.5523 2.44772 18 3 18C3.55228 18 4 17.5523 4 17C4 15.2701 5.93073 13 10 13C12.6152 13 14.4051 13.9719 15.2988 15.1157C15.6389 15.5509 16.2673 15.628 16.7025 15.288C17.1377 14.9479 17.2148 14.3195 16.8748 13.8843C16.0904 12.8804 14.9401 12.0686 13.5058 11.565ZM22.6139 15.2106C23.0499 15.5497 23.1284 16.178 22.7894 16.6139L18.1227 22.6139C17.9485 22.8379 17.6875 22.9773 17.4045 22.9975C17.1216 23.0177 16.8434 22.9167 16.6392 22.7198L14.3059 20.4698C13.9083 20.0865 13.8968 19.4534 14.2802 19.0559C14.6635 18.6583 15.2966 18.6468 15.6941 19.0302L17.2268 20.5081L21.2106 15.3861C21.5497 14.9501 22.178 14.8716 22.6139 15.2106Z" fill="#FFFFFF" />
                            </svg>
                        </div>
                        <div className={styles.appealText}>
                            We tailor your website to captivate your specific audience resulting in increased engagement.
                        </div>
                    </motion.div>
                    <motion.div className={styles.appealSection}
                        animate={inverseAnimation}>
                        <div className={styles.appealSVG}>
                            <svg width="60%" height="60%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M10 1C9.73478 1 9.48043 1.10536 9.29289 1.29289L3.29289 7.29289C3.10536 7.48043 3 7.73478 3 8V20C3 21.6569 4.34315 23 6 23H8C8.55228 23 9 22.5523 9 22C9 21.4477 8.55228 21 8 21H6C5.44772 21 5 20.5523 5 20V9H10C10.5523 9 11 8.55228 11 8V3H18C18.5523 3 19 3.44772 19 4V7C19 7.55228 19.4477 8 20 8C20.5523 8 21 7.55228 21 7V4C21 2.34315 19.6569 1 18 1H10ZM9 7H6.41421L9 4.41421V7ZM13.5067 11.3155C13.6011 10.0209 14.6813 9 16 9H17C18.3186 9 19.3988 10.0209 19.4933 11.3155C20.6616 10.75 22.0859 11.175 22.7452 12.317L23.2452 13.183C23.9045 14.325 23.5605 15.7709 22.4866 16.5C23.5605 17.2291 23.9045 18.675 23.2452 19.817L22.7452 20.683C22.0859 21.825 20.6616 22.25 19.4933 21.6845C19.3988 22.9791 18.3186 24 17 24H16C14.6813 24 13.6011 22.9791 13.5067 21.6845C12.3384 22.25 10.9141 21.825 10.2548 20.683L9.7548 19.817C9.09548 18.675 9.43952 17.2291 10.5134 16.5C9.43952 15.7709 9.09548 14.325 9.7548 13.183L10.2548 12.317C10.9141 11.175 12.3384 10.75 13.5067 11.3155ZM16 11C15.7238 11 15.5 11.2239 15.5 11.5V12.4678C15.5 12.8474 15.285 13.1943 14.945 13.3633C14.8128 13.429 14.6852 13.5029 14.5629 13.5844C14.2464 13.7952 13.8378 13.8083 13.5085 13.6181L12.6699 13.134C12.4307 12.9959 12.1249 13.0778 11.9868 13.317L11.4868 14.183C11.3488 14.4222 11.4307 14.728 11.6699 14.866L12.5088 15.3504C12.8375 15.5402 13.0304 15.8997 13.0069 16.2785C13.0023 16.3516 13 16.4255 13 16.5C13 16.5745 13.0023 16.6484 13.0069 16.7215C13.0304 17.1003 12.8375 17.4598 12.5088 17.6496L11.6699 18.134C11.4307 18.272 11.3488 18.5778 11.4868 18.817L11.9868 19.683C12.1249 19.9222 12.4307 20.0041 12.6699 19.866L13.5085 19.3819C13.8378 19.1917 14.2464 19.2048 14.5629 19.4156C14.6852 19.4971 14.8128 19.571 14.945 19.6367C15.285 19.8057 15.5 20.1526 15.5 20.5322V21.5C15.5 21.7761 15.7238 22 16 22H17C17.2761 22 17.5 21.7761 17.5 21.5V20.5323C17.5 20.1526 17.715 19.8057 18.055 19.6367C18.1872 19.571 18.3148 19.4971 18.4372 19.4156C18.7536 19.2048 19.1622 19.1917 19.4915 19.3819L20.3301 19.866C20.5693 20.0041 20.8751 19.9222 21.0131 19.683L21.5131 18.817C21.6512 18.5778 21.5693 18.272 21.3301 18.134L20.4912 17.6496C20.1625 17.4599 19.9696 17.1004 19.9931 16.7215C19.9977 16.6484 20 16.5745 20 16.5C20 16.4255 19.9977 16.3516 19.9931 16.2785C19.9696 15.8996 20.1625 15.5401 20.4912 15.3504L21.3301 14.866C21.5693 14.728 21.6512 14.4222 21.5131 14.183L21.0131 13.317C20.8751 13.0778 20.5693 12.9959 20.3301 13.134L19.4915 13.6181C19.1622 13.8083 18.7536 13.7952 18.4372 13.5844C18.3148 13.5029 18.1872 13.429 18.055 13.3633C17.715 13.1943 17.5 12.8474 17.5 12.4677V11.5C17.5 11.2239 17.2761 11 17 11H16ZM18.5 16.5C18.5 17.6046 17.6046 18.5 16.5 18.5C15.3954 18.5 14.5 17.6046 14.5 16.5C14.5 15.3954 15.3954 14.5 16.5 14.5C17.6046 14.5 18.5 15.3954 18.5 16.5Z" 
                                fill="#FFFFFF" />
                            </svg>
                        </div>
                        <div className={styles.appealText}>
                            In addition, we are always looking to utilize the newest technologies to provide your users with a unique, fresh experience.
                        </div>
                    </motion.div>
                    <motion.div className={styles.appealSection}
                        animate={animation3}>
                        <div className={styles.appealSVG}>
                            <svg width="60%" height="60%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M10 1C9.73478 1 9.48043 1.10536 9.29289 1.29289L3.29289 7.29289C3.10536 7.48043 3 7.73478 3 8V20C3 21.6569 4.34315 23 6 23H9C9.55228 23 10 22.5523 10 22C10 21.4477 9.55228 21 9 21H6C5.44772 21 5 20.5523 5 20V9H10C10.5523 9 11 8.55228 11 8V3H18C18.5523 3 19 3.44772 19 4V8C19 8.55228 19.4477 9 20 9C20.5523 9 21 8.55228 21 8V4C21 2.34315 19.6569 1 18 1H10ZM9 7H6.41421L9 4.41421V7ZM11.55 14.7238C11.55 13.7808 12.3244 13 13.3 13C14.2755 13 15.05 13.7808 15.05 14.7238C15.05 15.2761 15.4977 15.7238 16.05 15.7238C16.6023 15.7238 17.05 15.2761 17.05 14.7238C17.05 13.7808 17.8244 13 18.8 13C19.7755 13 20.55 13.7808 20.55 14.7238C20.55 15.8434 19.8986 17.0717 18.8366 18.3112C17.9904 19.2989 16.9675 20.1976 16.05 20.9387C15.1324 20.1976 14.1095 19.2989 13.2634 18.3112C12.2014 17.0717 11.55 15.8434 11.55 14.7238ZM13.3 11C14.3835 11 15.3637 11.4578 16.05 12.192C16.7363 11.4578 17.7165 11 18.8 11C20.862 11 22.55 12.6582 22.55 14.7238C22.55 16.5709 21.5128 18.2616 20.3555 19.6125C19.1774 20.9875 17.7362 22.1689 16.6643 23.0034C16.303 23.2846 15.797 23.2846 15.4357 23.0034C14.3638 22.1689 12.9226 20.9875 11.7445 19.6125C10.5872 18.2616 9.54999 16.5709 9.54999 14.7238C9.54999 12.6582 11.238 11 13.3 11Z" fill="#FFFFFF" />
                            </svg>
                        </div>
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