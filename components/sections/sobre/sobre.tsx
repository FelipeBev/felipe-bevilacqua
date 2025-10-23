import Image from 'next/image';
import styles from '../sections.module.css';

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
                -&gt; Sou engenheiro de software com experiência Full Stack
                trabalhando com as linguagens Java, Javascript, Groovy,
                Typescript, HTML e HQL. Também utilizo as aplicações e
                metodologias IntelliJ, Maven, Springframework, Hibernate,
                Git, TDD, SOLID, Linux, PostgreSQL, Kanban, Jenkins, Docker,
                Angular e AWS. Trabalho na MAPS SA desde novembro de 2021 no
                desenvolvimento de funcionalidades referentes ao software de
                precificação de ativos financeiros e deploy de aplicações.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sobre;