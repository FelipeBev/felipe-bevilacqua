import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Felipe Alves Bevilacqua</title>
      </Head>

      <body className={styles.body}>
        <header className={styles.header}>
          <h1>Felipe Alves Bevilacqua</h1>
        </header>

        <nav className={styles.nav}>
          <a href="#sobre">Sobre</a>
          <a href="#portfolio">Portfólio</a>
          <a href="#blog">Blog</a>
          <a href="#contato">Contato</a>
        </nav>

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
                    metodologias IntelliJ, Maven, Springframework, Hibernate, Git,
                    TDD, SOLID, Linux, PostgreSQL, Kanban, Jenkins, Docker, Angular
                    e AWS. Trabalho na MAPS SA desde novembro de 2021 no
                    desenvolvimento de funcionalidades referentes ao software de
                    precificação de ativos financeiros e deploy de aplicações.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="portfolio" className={styles.section}>
          <div className={styles.container}>
            <div className={styles.card}>
              <h2>Portfólio</h2>
              <p>Em Construção.</p>
            </div>
          </div>
        </section>

        <section id="blog" className={styles.section}>
          <div className={styles.container}>
            <div className={styles.card}>
              <h2>Blog</h2>
              <p>Em Construção.</p>
            </div>
          </div>
        </section>

        <section id="contato" className={styles.section}>
          <div className={styles.container}>
            <div className={styles.card}>
              <h2>Contato</h2>
              <p>Linkedin -&gt; <a 
                href="https://www.linkedin.com/in/felipe-bevilacqua-612818206/">
                www.linkedin.com/in/felipe-bevilacqua</a>
              </p>
            </div>
          </div>
        </section>

        <footer className={styles.footer}>
          <p>&copy; 2024 Felipe Alves Bevilacqua</p>
        </footer>
      </body>
    </div>
  );
}
