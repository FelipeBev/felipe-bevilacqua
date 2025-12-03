import Image from 'next/image';
import styles from '../../../styles/Home.module.css';

const Sobre = () => {
  return (
    <section id="sobre" className={styles.section}>
      <div className={styles.container}>
        <div className={`${styles.card} ${styles.sobre}`}>
          <div className="row justify-content-md-center">
            <div className="col-auto">
              <Image
                src="/minha_foto.jpeg"
                alt="Foto de Felipe Alves Bevilacqua"
                width={150}
                height={150}
                className={styles.sobreImg}
              />
            </div>
            
            <div className="col col-auto">
              <h2>Sobre</h2>
              
              <p>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-double-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708"/>
                  <path fill-rule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708"/>
                </svg> 

                  <span>
                    &ensp; Sou engenheiro de software com experiência Full Stack
                    trabalhando com as linguagens Java, Javascript, Groovy,
                    Typescript, HTML e HQL. Também utilizo as aplicações e
                    metodologias IntelliJ, Maven, Springframework, Hibernate,
                    Git, TDD, SOLID, Linux, PostgreSQL, Kanban, Jenkins, Docker,
                    Angular e AWS. Trabalho na MAPS SA desde novembro de 2021 no
                    desenvolvimento de funcionalidades referentes ao software de
                    precificação de ativos financeiros e deploy de aplicações.
                  </span>      
              </p>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sobre;