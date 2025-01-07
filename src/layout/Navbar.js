import { Outlet, Link } from "react-router-dom";
import { FaHouseUser, FaPhone, FaPlus } from 'react-icons/fa'

import styles from './Navbar.module.css'

function Navbar() {
    return (
        <>   
            <nav className={styles.Navbar}>
                <ul className= {styles.list}>
                    <li className= {styles.item}>
                        <FaHouseUser className= {styles.icon} />
                        <Link to="/">Home</Link>
                    </li>
                    <li className= {styles.item}>
                        <FaHouseUser className= {styles.icon} />
                        <Link to="/empresa">Empresa</Link>
                    </li>
                    <li className= {styles.item}>
                        <FaPhone className= {styles.icon} />
                        <Link to="/contato">Contato</Link>
                    </li>
                    <li className= {styles.item}>
                        <FaPlus className= {styles.icon} />
                        <Link to="/NovoProjeto">Novo projeto</Link>
                    </li>
                    <li className= {styles.item}>
                        <FaPlus className= {styles.icon} />
                        <Link to="/Projeto">Projeto</Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </>
    )
}

export default Navbar