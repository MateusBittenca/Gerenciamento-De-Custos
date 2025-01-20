import { useEffect, useState } from 'react'

import styles from './ProjectForm.module.css'
import Input from '../form/Input'
import Select from '../form/Select'
import SubmitBtn from '../form/SubmitBtn'

function ProjectForm({ handleSubmit, btnText, projectData }) {
    const [categories, setCategories] = useState([])
    const [project, setProject] = useState(projectData || {})

    useEffect(() => {
        fetch("http://localhost:5000/categories", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            },
        }).then((resp) => resp.json())
            .then((data) => {
                setCategories(data)
            })
            .catch((err) => console.log(err))

    }, [])

    const submit = (e) => {
        e.preventDefault()
        console.log(project)
        handleSubmit(project)
    }

    function handleChange(e) {
        setProject({ ...project, [e.target.name]: e.target.value })
        console.log(project)
    }

    function handleCategory(e) {
        setProject({
            ...project,
            category: {
                id: e.target.value,
                name: e.target.options[e.target.selectedIndex].text
            }

        })
    }

    return (
        <form onSubmit={submit} className={styles.form}>
            <Input type='text' text='Nome do projeto' name='name' placeholder='insira o nome do projeto' onChage={handleChange} />
            <Input type='number' text='Orçamento do projeto' name='budget' placeholder='insira o orçamento do projeto' onChage={handleChange} />
            <Select name="category_id" text='Selecione a categoria' options={categories} handleOnChange = {handleCategory} />
            <SubmitBtn text='Confirmar' />
        </form>
    )
}
export default ProjectForm