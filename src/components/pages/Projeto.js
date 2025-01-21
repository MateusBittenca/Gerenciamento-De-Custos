import styles from "./Project.module.css"


import { useLocation } from "react-router-dom"

import Message from "../../layout/Message"
import Container from "../../layout/Container"
import Loading from "../../layout/Loading"
import LinkButton from "../../layout/LinkButton"
import ProjectCard from "../project/ProjectCard"
import { useState, useEffect } from "react"


function Projeto() {

    const [projects, setProjects] = useState([])
    const [removeLoading, setRemoveLoading] = useState(false)
    const [projectMessage, setProjectMessage] = useState('')


    const location = useLocation()
    let message = ''
    if (location.state) {
        message = location.state.message
    }

    useEffect(() => {
        fetch('http://localhost:5000/projects', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(resp => resp.json())
            .then((data) => {
                console.log(data)
                setProjects(data)
                setRemoveLoading(true)
            })
            .catch((err) => console.log(err))

    }, [])

    function removeProject(id) {
        fetch(`http://localhost:5000/projects/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(resp => resp.json())
            .then((data) => {
                console.log(data)
                const novoProjeto = projects.filter(project => project.id !== id)
                setProjects(novoProjeto)
                setProjectMessage('Projeto excluído com sucesso')
            })
            .catch((err) => console.log(err))
    }


    return (
        <div className={styles.project_container}>
            <div className={styles.title_container}>
                <h1>Meus Projetos</h1>
                <LinkButton text='Criar Projeto' to="/novoProjeto" />
            </div>

            {message && <Message type='success' msg={message} />}
            {projectMessage && <Message type='success' msg={projectMessage} />}
            <Container customClass="start">
                {projects.length > 0 &&
                    projects.map((project) => (
                        <ProjectCard
                            id={project.id}
                            name={project.name}
                            budget={project.budget}
                            category={project.category}
                            key={project.key}
                            handleRemove={removeProject}
                        />
                    ))}
                {!removeLoading && <Loading />}
                {projects.length === 0 && removeLoading && <Message type='warning' msg='Nenhum projeto cadastrado' />}
            </Container>
        </div>
    )




}
export default Projeto