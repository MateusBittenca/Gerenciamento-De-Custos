import { FaFacebook, FaInstagram } from "react-icons/fa"
import styles from './Footer.module.css'

function Footer() {
    return (<footer className={styles.Footer}>

        <ul className={styles.social_List}>
            <FaInstagram />
        </ul>
        <p className={styles.copy_right}>
            <span>Costs</span> &copy; 2025
        </p>
        
    </footer>)
}

export default Footer