import styles from './LinkButton.module.css'
import {Link} from 'react-router-dom'

function LinkButton({to}){
    return(
        <Link className={styles.btn} to = {to}>
        </Link>

    )
}

export default LinkButton