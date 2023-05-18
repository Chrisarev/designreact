import styles from './stylesheets/Contact.module.css'
import { motion } from 'framer-motion'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Contact = () => {
    const [buttonText, setButtonText] = useState('Submit'); 
    const [submitState, setSubmitState] = useState(false)
    const handleSubmit = (e: any) => {
        e.preventDefault();
        setButtonText('Submitted ✓')
        setSubmitState(true)
    }

    return (
        <>
            <div className={styles.nav}>
                <Link to='/'>
                    <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="Frame 1" clip-path="url(#clip0_1_2)">
                            <g id="Group 1">
                                <path id="rightE"
                                    d="M84.7 27.96C84.7 26.82 84.28 25.89 83.44 25.17C82.6 24.39 81.58 24 80.38 24H40.51C40.51 26.52 41.02 28.38 42.04 29.58C43.06 30.78 44.65 31.38 46.81 31.38H76.24V51.54H51.04C51.04 54.06 51.55 55.92 52.57 57.12C53.59 58.32 55.15 58.92 57.25 58.92H76.24V79.62H44.92C42.82 79.62 41.26 80.22 40.24 81.42C39.22 82.62 38.71 84.48 38.71 87H80.38C81.58 87 82.6 86.64 83.44 85.92C84.28 85.14 84.7 84.18 84.7 83.04V27.96Z"
                                    fill="#FFF" />
                                <path id="leftE"
                                    d="M15.3 17.96C15.3 16.82 15.72 15.89 16.56 15.17C17.4 14.39 18.42 14 19.62 14H59.49C59.49 16.52 58.98 18.38 57.96 19.58C56.94 20.78 55.35 21.38 53.19 21.38H23.76V41.54H48.96C48.96 44.06 48.45 45.92 47.43 47.12C46.41 48.32 44.85 48.92 42.75 48.92H23.76V69.62H55.08C57.18 69.62 58.74 70.22 59.76 71.42C60.78 72.62 61.29 74.48 61.29 77H19.62C18.42 77 17.4 76.64 16.56 75.92C15.72 75.14 15.3 74.18 15.3 73.04V17.96Z"
                                    fill="#FFF" />
                            </g>
                        </g>
                        <defs>
                            <clipPath id="clip0_1_2">
                                <rect width="100" height="100" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </Link>
            </div>
            <div className={styles.panel}>
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
                        <form onSubmit={handleSubmit}>
                            <div className={styles.inputGroup}>
                                <label htmlFor="name">Your Name:</label>
                                <input disabled={submitState} className={(submitState ? 'inActive':'')} type="text" name='name' required/>
                            </div>
                            <div className={styles.inputGroup}>
                                <label htmlFor="phone">Phone Number:</label>
                                <input disabled={submitState} className={(submitState ? 'inActive':'')} type="tel"/>
                            </div>
                            <div className={styles.inputGroup}>
                                <label htmlFor="email">Email:</label>
                                <input disabled={submitState} className={(submitState ? 'inActive':'')} type="email" required />
                            </div>
                            <div className={styles.inputGroup}>
                                <label htmlFor="message">Message:</label>
                                <textarea disabled={submitState} className={(submitState ? 'inActive':'')} required></textarea>
                            </div>
                            <div className={styles.buttonHolder}>
                                <button>{buttonText}</button>
                            </div>
                        </form>
                        {submitState &&
                            <div className={styles.submitMessage}>Thank you, we will contact you shortly!</div>
                        }
                    </motion.div>
                </div>
            </div>
        </>
    )
}

export default Contact;