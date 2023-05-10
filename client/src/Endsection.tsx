import styles from './stylesheets/Endsection.module.css' 
import { useNavigate } from 'react-router-dom';
const Endsection = () =>{
    const navigate = useNavigate();
    const handleContact = () =>{
        navigate('/contact')
    }
    
    return (
        <div className={styles.panel}>
            <h1 className={styles.header}>Our team is:</h1>
            <div className={styles.reviewHolder}>
                <div className={styles.review}>
                    <h2>Professional</h2>
                    <p>They did an excellent job designing and creating a product page for our brand. 
                        Very professional and understanding.
                    </p>
                    <span>-SmartUtils</span>
                </div>
                <div className={styles.review}>
                    <h2>Ecstatic</h2>
                    <p>We needed to build a better brand image for our business and the people at Experience 
                        Design were ecstatic to help us do that!
                    </p>
                    <span>-WebWidgets</span>
                </div>
                <div className={styles.review}>
                <h2>Creative</h2>
                <p>Experience Design created custom images and assets for us so we could focus on creating 
                    the layout for our website.
                    </p>
                    <span>-CreativeCentral</span>
                </div>
                <div className={styles.review}>
                <h2>Reliable</h2>
                <p>Our website wasn't getting the traffic that we were expecting it to so we contacted Experience
                    Design. We got more traffic very soon after. 
                    </p>
                    <span>-Overfaced</span>
                </div>
                <div className={styles.review}>
                <h2>Affordable</h2>
                <p>Instead of looking for and hiring a team to develop our website we decided to go with Experience 
                    Design and couldn't have been happier with the end result!
                    </p>
                    <span>-Tailored</span>
                </div>
                <div className={styles.review}>
                <h2>Efficient</h2>
                <p>After talking to their designers for a few days they delivered on our website in less than a month! 
                    Definitely recommend.
                    </p>
                    <span>-NewNutrients Food Co</span>
                </div>
                <div className={styles.review}>
                <h2>Ecstatic</h2>
                <p>We needed to build a better brand image for our business and the people at Experience 
                        Design were ecstatic to help us do that!
                    </p>
                    <span>-WebWidgets</span>
                </div>
                <div className={styles.review}>
                    <h2>Professional</h2>
                    <p>They did an excellent job designing and creating a product page for our brand. 
                        Very professional and understanding.
                    </p>
                    <span>-SmartUtils</span>
                </div>
            </div>
            <div className={styles.contactSection}>
                <h2 className={styles.contactPrompt}>Get a quote today!</h2>
                <button className={styles.contactButton} onClick={handleContact} >Contact Us</button>
            </div>
        </div>
    )
}

export default Endsection;