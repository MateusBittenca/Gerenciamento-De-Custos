import styles from './Projects.module.css';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Loading from '../../layout/Loading';
import Container from '../../layout/Container';
import ProjectForm from '../project/ProjectForm';
import Message from '../../layout/Message';
import ServiceForm from '../service/ServiceForm';

import { parse, v4 as uuidv4 } from 'uuid';
import ServiceCard from '../service/ServiceCard';

function Project() {

    const { id } = useParams();

    const [services, setServices] = useState([]);
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
            .then((data) => {
                setProject(data)
                setServices(data.services)
            }

            )
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

    function createService() {

        setMessage('');
        const lastService = project.services[project.services.length - 1];

        lastService.id = uuidv4();
        const lastServiceCost = lastService.cost;

        const newCost = parseFloat(project.cost) + parseFloat(lastServiceCost);

        if (newCost > parseFloat(project.budget)) {
            setMessage('Custo total não pode ser maior que o orçamento');
            setMessageType('error');
            project.services.pop();
            return false
        }

        project.cost = newCost;

        fetch(`http://localhost:5000/projects/${project.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(project),
        })
            .then((response) => response.json())
            .then((data) => {
                setProject(data);
                setShowServiceForm(false);
                setMessage('Serviço adicionado com sucesso');
                setMessageType('success');
                setShowServiceForm(false);
            })
            .catch((error) => console.error(error));

    }

    function removeService(id, cost) {
        const serviceUpdate = project.services.filter((service) => service.id !== id);
        const projectUpdate = project

        projectUpdate.services = serviceUpdate;

        projectUpdate.cost = parseFloat(project.cost) - parseFloat(cost);

        fetch(`http://localhost:5000/projects/${project.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(projectUpdate),
        })
            .then((response) => response.json())
            .then((data) => {
                setProject(data);
                setServices(data.services);
                setMessage('Serviço removido com sucesso');
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
                                        {showServiceForm && (
                                            <ServiceForm
                                                handleSubmit={createService}
                                                btnText="Adicionar serviço"
                                                projectData={project}
                                            />
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                        <h2>Serviços</h2>
                        <Container customClass="start">
                            {services.length > 0 &&
                                services.map((service) => (
                                    <ServiceCard
                                        id={service.id}
                                        name={service.name}
                                        description={service.description}
                                        cost={service.cost}
                                        key={service.id}
                                        handleRemove={removeService}
                                    />
                                ))
                            }
                            {services.length === 0 && <p>Não há serviços cadastradros.</p>}
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