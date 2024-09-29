import styles from "../styles/Home.module.css"

function Home() {
  return(
    <html lang="pt-BR">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Felipe Alves Bevilacqua</title>
      </head>
      <body class={styles.body}>
        <header class={styles.header}>
          <h1>Felipe Alves Bevilacqua</h1>
        </header>
        <nav class={styles.nav}>
          <a class={styles.a} href="#sobre">Sobre</a>
          <a class={styles.a} href="#portfolio">Portfólio</a>
          <a class={styles.a} href="#blog">Blog</a>
          <a class={styles.a} href="#contato">Contato</a>
        </nav>
        <section class={styles.section} id="sobre">
          <div class={styles.container}>
            <div class={styles.card}>
              <div class="row">
                <div class="col">
                  <img
                    class={styles.img}
                    src="../models/assets/minha_foto.jpeg"
                    alt="Foto de Felipe Alves Bevilacqua"
                  />
                </div>

                <div class="col">
                  <h2>Sobre</h2>
                  <p>
                    Sou engenheiro de software com experiência Full Stack
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
        <section class={styles.section} id="portfolio">
          <div class={styles.container}>
            <div class={styles.card}>
              <h2>Portfólio</h2>
              <p>Em Construção.</p>
            </div>
          </div>
        </section>
        <section class={styles.section} id="blog">
          <div class={styles.container}>
            <div class={styles.card}>
              <h2>Blog</h2>
              <p>Em Construção.</p>
            </div>
          </div>
        </section>
        <section class={styles.section} id="contato">
          <div class={styles.container}>
            <div class={styles.contato}>
                <h2>Contato</h2>
                <p>Linkedin -&gt; <a 
                    href="https://www.linkedin.com/in/felipe-bevilacqua-612818206/">
                    www.linkedin.com/in/felipe-bevilacqua</a>
                </p>
            </div>
          </div>
        </section>
        <footer class={styles.footer}>
          <p>&copy; 2024 Felipe Alves Bevilacqua</p>
        </footer>
      </body>
    </html>
  );
}

export default Home;
