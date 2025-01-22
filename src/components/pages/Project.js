import styles from './Projects.module.css';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Loading from '../../layout/Loading';
import Container from '../../layout/Container';
import ProjectForm from '../project/ProjectForm';
import Message from '../../layout/Message';
function Project() {

    const { id } = useParams();

    const [project, setProject] = useState([]);
    const [showProjectForm, setShowProjectForm] = useState(false);
    const [showServiceForm, setShowServiceForm] = useState(false);
    const [message, setMessage] = useState('');
    const [messageType, setMessageType] = useState('');


    useEffect(() => {
        fetch(`http://localhost:5000/projects/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then((response) => response.json())
            .then((data) => setProject(data))
            .catch((error) => console.error(error));
    }, [id]);

    function editPost(project) {

        setMessage('');


        if (project.budget < 0) {
            setMessage('Orçamento não pode ser menor que zero');
            setMessageType('error');
            return;
        }

        if (project.budget < project.cost) {
            setMessage('Orçamento não pode ser menor que o custo total');
            setMessageType('error');
            return;
        }
        fetch(`http://localhost:5000/projects/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(project),
        })
            .then((response) => response.json())
            .then((data) => {
                setProject(data);
                setShowProjectForm(false);
                setMessage('Projeto editado com sucesso');
                setMessageType('success');
            })
            .catch((error) => console.error(error));

    }

    function toggleProjectForm() {
        setShowProjectForm(!showProjectForm);
    }

    function toogleServiceForm() {
        setShowServiceForm(!showServiceForm);
    }

    return (
        <>
            {project.name ? (
                <div className={styles.project_details}>
                    <Container customClass="column">
                        {message && <Message type={messageType} msg={message} />}
                        <div className={styles.details_container}>
                            <h1>Projeto :{project.name}</h1>
                            <button className={styles.btn} onClick={toggleProjectForm}>
                                {!showProjectForm ? 'Editar projeto' : 'Fechar Projeto'}
                            </button>
                            {!showProjectForm ? (
                                <div className={styles.form}>
                                    <p>
                                        <span>Orçamento:</span> ${project.budget}
                                    </p>
                                    <p>
                                        <span>Categoria:</span> {project.category.name}
                                    </p>
                                    <p>
                                        <span>Total utilizado:</span> R$ {project.cost}
                                    </p>
                                </div>


                            ) : (
                                <div className={styles.form}>
                                    <ProjectForm
                                        handleSubmit={editPost}
                                    />
                                </div>
                            )}
                        </div>
                        <div className={styles.service_form_container}>
                            <h2>Adicione um serviço:</h2>
                            <button className={styles.btn} onClick={toogleServiceForm}>
                                {!showServiceForm ? ' Adcionar serviço' : 'Fechar '}
                            </button>
                            {showServiceForm && (
                                <div className={styles.form}>
                                    <div>
                                        <p>Formulário de serviço</p>
                                    </div>
                                </div>
                            )}
                        </div>
                        <h2>Serviços</h2>
                        <Container customClass="start">

                            <p>Itens de serviços</p>
                        </Container>
                    </Container>
                </div>
            ) : (
                <Loading />
            )}
        </>
    );
}
export default Project;