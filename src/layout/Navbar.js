import { Outlet, Link } from "react-router-dom";
import { FaHouseUser, FaPhone, FaPlus } from 'react-icons/fa'

import styles from './Navbar.module.css'

function Navbar() {
    return (
        <>
          
            <nav className={styles.Navbar}>
                <ul className= {styles.list}>
                    <li className= {styles.item}>
                        <FaHouseUser />
                        <Link to="/">Home</Link>
                    </li>
                    <li className= {styles.item}>
                        <FaPhone />
                        <Link to="/contato">Contato</Link>
                    </li>
                    <li className= {styles.item}>
                        <FaPlus />
                        <Link to="/projeto">Novo projeto</Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </>
    )
}

export default Navbar