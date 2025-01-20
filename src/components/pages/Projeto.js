import styles from "./Project.module.css"


import { useLocation } from "react-router-dom"

import Message from "../../layout/Message"

function Projeto() {

    const location = useLocation()
    let message = ''
    if (location.state) {
        message = location.state.message
    }

    return (
        <div>
            <div>
                <h1>Meus Projetos</h1>
                <a href="#">Novo Projeto</a>
            </div>
         
            {message && <Message type='success' msg={message} />}
        </div>
    )




}
export default Projeto