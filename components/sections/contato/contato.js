import styles from '../../../styles/Home.module.css';

const Contato = () => {
  return (
    <section id="contato" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.card}>
          <h2>Contato</h2>
          <p>
            Linkedin -&gt;{" "}
            <a 
              href="https://www.linkedin.com/in/felipe-bevilacqua-612818206/"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.linkedin.com/in/felipe-bevilacqua
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contato;