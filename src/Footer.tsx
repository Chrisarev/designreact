import styles from './stylesheets/Footer.module.css' 

const Footer = () =>{

    const handleClick = () =>{
        console.log('handled')
    }

    return (
        <>
            <div className={styles.panel}>
                <h1 className={styles.footerTitle}>Get updates from us</h1>
                <div className={styles.inputGroup}>
                    <input type="text" placeholder='Email Address'></input>
                    <button onClick={handleClick}>Subscribe</button>
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