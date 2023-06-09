import styles from './stylesheets/Navbar.module.css'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
const Navbar = () => {
    let navigate = useNavigate();
    const handleNavigate = () =>{
        navigate('/contact')
    }
    
    return (
        <div className={styles.navbar}>
            <div className={styles.navIcon}>
                <Link to="/">
                <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="Frame 1" clip-path="url(#clip0_1_2)">
                        <g id="Group 1">
                            <path id="rightE"
                                d="M84.7 27.96C84.7 26.82 84.28 25.89 83.44 25.17C82.6 24.39 81.58 24 80.38 24H40.51C40.51 26.52 41.02 28.38 42.04 29.58C43.06 30.78 44.65 31.38 46.81 31.38H76.24V51.54H51.04C51.04 54.06 51.55 55.92 52.57 57.12C53.59 58.32 55.15 58.92 57.25 58.92H76.24V79.62H44.92C42.82 79.62 41.26 80.22 40.24 81.42C39.22 82.62 38.71 84.48 38.71 87H80.38C81.58 87 82.6 86.64 83.44 85.92C84.28 85.14 84.7 84.18 84.7 83.04V27.96Z"
                                fill="#18191A" />
                            <path id="leftE"
                                d="M15.3 17.96C15.3 16.82 15.72 15.89 16.56 15.17C17.4 14.39 18.42 14 19.62 14H59.49C59.49 16.52 58.98 18.38 57.96 19.58C56.94 20.78 55.35 21.38 53.19 21.38H23.76V41.54H48.96C48.96 44.06 48.45 45.92 47.43 47.12C46.41 48.32 44.85 48.92 42.75 48.92H23.76V69.62H55.08C57.18 69.62 58.74 70.22 59.76 71.42C60.78 72.62 61.29 74.48 61.29 77H19.62C18.42 77 17.4 76.64 16.56 75.92C15.72 75.14 15.3 74.18 15.3 73.04V17.96Z"
                                fill="#18191A" />
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

            <div className={styles.navLinks}>
                <button onClick={handleNavigate} className={styles.contactButton}>Get in touch</button>
            </div>
        </div>
    )
}

export default Navbar;