import { Outlet, Link } from "react-router-dom";
import { FaBlog, FaHouseUser, FaPhone, FaPlus, FaUser } from 'react-icons/fa'

import styles from './Navbar.module.css'
function Navbar() {
    return (
        <>
            <h1>Gerenciamento de custos</h1>
            <nav className= {styles.Navbar}>
                <ul>
                    <li>
                        <FaHouseUser />
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <FaPhone />
                        <Link to="/contato">Contato</Link>
                    </li>
                    <li>
                        <FaPlus />
                        <Link to = "/projeto">Novo projeto</Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </>
    )
}

export default Navbar