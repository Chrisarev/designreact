import styles from './stylesheets/Contact.module.css'
import { motion } from 'framer-motion'
import Navbar from './Navbar'

const Contact = () => {


    return (
        <div className={styles.panel}>
            <Navbar />
            <motion.div initial={{ opacity: 0, y: -200 }} animate={{ opacity: 1, y: 0, transition: { delay: 0.4 } }} className={styles.infoSection}>
                <h1 className={styles.infoHeader}>Let's create something <span>amazing!</span></h1>
                <div className={styles.contactInfo}>
                    <div className={styles.infoHolder}>
                        <svg width="100%" height="100%" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                            <title />
                            <g data-name="Layer 17" id="Layer_17">
                                <path d="M25.12,6H6.88A3.89,3.89,0,0,0,3,9.89V21.11A3.89,3.89,0,0,0,6.88,25H25.12A3.89,3.89,0,0,0,29,21.11V9.89A3.89,3.89,0,0,0,25.12,6Zm0,2,.16,0L16,14.76,6.72,8l.16,0ZM27,21.11A1.89,1.89,0,0,1,25.12,23H6.88A1.89,1.89,0,0,1,5,21.11V9.89a1.92,1.92,0,0,1,.1-.59l10.32,7.51a1,1,0,0,0,1.18,0L26.91,9.3a1.92,1.92,0,0,1,.1.59Z" />
                            </g>
                        </svg>
                        <p>E2DesignFirm@gmail.com</p>
                    </div>
                    <div className={styles.infoHolder}>
                        <svg width="100%" height="100%" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                            <title />
                            <g data-name="Layer 5" id="Layer_5">
                                <path d="M21.15,3H10.85A3.86,3.86,0,0,0,7,6.85v18.3A3.86,3.86,0,0,0,10.85,29h10.3A3.86,3.86,0,0,0,25,25.15V6.85A3.86,3.86,0,0,0,21.15,3ZM10.85,5h10.3A1.85,1.85,0,0,1,23,6.85V7H9V6.85A1.85,1.85,0,0,1,10.85,5ZM23,25.15A1.85,1.85,0,0,1,21.15,27H10.85A1.85,1.85,0,0,1,9,25.15V25H23ZM9,23V9H23V23Z" />
                                <path d="M19,12.79l-4.29,4.3L13,15.29a1,1,0,0,0-1.42,1.42l2.5,2.5a1,1,0,0,0,1.42,0l5-5A1,1,0,0,0,19,12.79Z" />
                            </g>
                        </svg>
                        <p>(916) 999-9999</p>
                    </div>
                    <div className={styles.infoHolder}>

                        <svg fill="#000000" width="100%" height="100%" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                            <title />
                            <g data-name="Layer 11" id="Layer_11">
                                <path d="M25.41,7.09l-9-4a1,1,0,0,0-.82,0l-9,4A1,1,0,0,0,6,8v8.56A8.69,8.69,0,0,0,8.91,23l6.43,5.71a1,1,0,0,0,1.32,0L23.09,23A8.69,8.69,0,0,0,26,16.56V8A1,1,0,0,0,25.41,7.09ZM24,16.56a6.67,6.67,0,0,1-2.24,5L16,26.66l-5.76-5.12a6.67,6.67,0,0,1-2.24-5V8.65l8-3.56,8,3.56Z" />
                                <path d="M13,14a3,3,0,0,0,2,2.82V19a1,1,0,0,0,2,0V16.82A3,3,0,1,0,13,14Zm4,0a1,1,0,1,1-1-1A1,1,0,0,1,17,14Z" />
                            </g>
                        </svg>                        
                        <p>123 Commerce St. Sacramento, CA</p>
                    </div>
                </div>
            </motion.div>
            <div className={styles.formSection}>
                <motion.div initial={{ opacity: 0, y: -200 }} animate={{ opacity: 1, y: 0, transition: { delay: 0.4 } }} className={styles.contactForm}>
                    <h1>Contact Us</h1>
                    <form action="">
                        <div className={styles.inputGroup}>
                            <label htmlFor="name">Your Name:</label>
                            <input type="text" name='name' />
                        </div>
                        <div className={styles.inputGroup}>
                            <label htmlFor="phone">Phone Number</label>
                            <input type="tel" />
                        </div>
                        <div className={styles.inputGroup}>
                            <label htmlFor="email">Email:</label>
                            <input type="email" />
                        </div>
                        <div className={styles.inputGroup}>
                            <label htmlFor="message">Message:</label>
                            <textarea></textarea>
                        </div>
                        <div className={styles.buttonHolder}>
                            <button>Submit</button>
                        </div>
                    </form>
                </motion.div>
            </div>
        </div>
    )
}

export default Contact;