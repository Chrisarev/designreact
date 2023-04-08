import styles from './stylesheets/Hero.module.css' 

const Hero = () =>{


    return (
        <>
        <div className={styles.firstLoadPanel}>
            <div className={styles.introText}>Experience</div>
            <div className={styles.introText}>Everything</div>
        </div>
        <div className={styles.panel}>
            <div className={styles.header}><span>Experiences</span> Design</div>
            <div className={styles.subHeader}>We bridge your vision with the experience of your users.</div>
        </div>
        </>
    )
}

export default Hero;