import styles from './ProjectForm.module.css'
import Input from '../form/Input'
import Select from '../form/Select'
import SubmitBtn from '../form/SubmitBtn'

function ProjectForm() {
    return (
        <form className={styles.form}>
            <Input type='text' text='Nome do projeto' name= 'name' placeholder='insira o nome do projeto' />
            <Input type='number' text='Orçamento do projeto' name= 'budget' placeholder='insira o orçamento do projeto' />
            <Select name = "category_id" text= 'Selecione a categoria' />
            <SubmitBtn text= 'Confirmar' />
            
        </form>

    )
}
export default ProjectForm