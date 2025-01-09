import styles from './LinkButton.module.css'
import { Link } from 'react-router-dom'
import { FaPlus } from 'react-icons/fa'

function LinkButton({ to, text }) {
    return (
        <Link className={styles.btn} to={to}> 
        <FaPlus  />
        {text}
        </Link>

    )
}

export default LinkButton