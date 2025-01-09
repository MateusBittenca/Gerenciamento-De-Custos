import styles from './Home.module.css';
import LinkButton from '../../layout/LinkButton';


function Home() {
    return (
        <section className={styles.home_container}>
            <h1>Seja bem vindo ao <span>Costs</span></h1>
            <p>Comece a gerenciar seus projetos agora mesmo!</p>
             <LinkButton to = '/NovoProjeto' text= 'Criar novo Projeto' />
        </section>
    );
}

export default Home;
