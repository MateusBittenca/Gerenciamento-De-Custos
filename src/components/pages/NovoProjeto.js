import { useNavigate } from 'react-router-dom'

import styles from './NovoProjeto.module.css'
import ProjectForm from '../project/ProjectForm'

function NovoProjeto() {

    const navigate = useNavigate()

    function createPost(project) {

        project.cost = 0
        project.services = []


        fetch("http://localhost:5000/projects", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(project)

        }).then((resp) => resp.json())
            .then((data) => {
                console.log(data)
                navigate('/projeto', { state: { message: 'Projeto criado com sucesso!' } });

            })
            .catch(err => console.log(err))

    }

    return (
        <div className={styles.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu Projeto para depois adicionar os serviços</p>
            <ProjectForm handleSubmit={createPost} />
        </div>
    )
}
export default NovoProjeto