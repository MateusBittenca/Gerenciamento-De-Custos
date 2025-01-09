import styles from './NovoProjeto.module.css'
import ProjectForm from '../project/ProjectForm'

function NovoProjeto() {
    return (
        <div className={styles.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu Projeto para depois adicionar os serviços</p>
            <ProjectForm />
        </div>
    )
}
export default NovoProjeto