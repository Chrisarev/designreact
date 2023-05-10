import styles from './stylesheets/Contact.module.css' 
import {motion} from 'framer-motion'
import Navbar from './Navbar'

const Contact = () =>{
    

    return (
        <>
            <div className={styles.panel}>
            <Navbar />
                <div className={styles.infoSection}>

                </div>
                <div className={styles.formSection}>
                    <motion.div initial={{opacity:0, y:-200}} animate={{opacity:1, y:0, transition:{delay:0.4}}} className={styles.contactForm}>
                        <h1>Contact</h1>
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
                        </form>
                    </motion.div>
                </div>
            </div>
        </>
    )
}

export default Contact;