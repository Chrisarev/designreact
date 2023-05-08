import styles from './stylesheets/Footer.module.css' 
import { useState } from 'react'
const Footer = () =>{

    const [subButtonText, setSubButtonText] = useState('Subscribe');
    const [subState, setSubState] = useState(false); 

    const handleClick = (e:any) =>{
        e.preventDefault();
        setSubButtonText('Subscribed✓');
        setSubState(true); 
    }

    return (
        <>
            <div className={styles.panel}>
                <h1 className={styles.footerTitle}>Get updates from us</h1>
                <div className={styles.inputGroup}>
                    <form onSubmit={handleClick}>
                        <input readOnly={subState ? true: false }style={{color: subState ? 'gray': 'white'}}type="email" required placeholder='Email Address'></input>
                        <button>{subButtonText}</button>
                    </form>
                </div>
                <div className={styles.linksHolder}>
                    <div className={styles.linkGroup}>
                        <h2>Our work</h2>
                        <a href="">Designs</a>
                        <a href="">Websites</a>
                        <a href="">Brand Identity</a>
                        <a href="">Products</a>
                    </div>
                    <div className={styles.linkGroup}>
                        <h2>ExperienceDesign</h2>
                        <a href="">About</a>
                        <a href="">Blog</a>
                        <a href="">News</a>
                    </div>
                    <div className={styles.linkGroup}>
                        <h2>Network</h2>
                        <a href="">EEDesign</a>
                        <a href="">EEJobs</a>
                        <a href="">EE.org</a>
                    </div>
                    <div className={styles.linkGroup}>
                        <h2>Locations</h2>
                        <a href="">San Francisco</a>
                        <a href="">Houston</a>
                        <a href="">New York</a>
                        <a href="">London</a>
                    </div>
                    <div className={styles.jobGroup}>
                        <h2>Jobs</h2>
                        <p>We are always looking for talented individuals to join us!</p>
                        <button>See Jobs</button>
                    </div>
                </div>
                <h3 className={styles.copyright}>&#169;2023 EEDesign</h3>
            </div>
        </>
    )
}

export default Footer;