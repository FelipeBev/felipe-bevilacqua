import Head from "next/head";
import Link from 'next/link';
import '../styles/globals.css'; 
import styles from "../styles/Home.module.css";
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

        <section className={styles.section}>
                <div className={styles.container}>
                  <div className={styles.card}>
                    <h1>Bem-vindo!</h1>
                    <p>
                      Olá! Sou engenheiro de software Full Stack.
                      Navegue pelas seções para conhecer mais sobre mim e meu trabalho.
                    </p>
                    
                    <div className={styles.homeLinks}>
                      <Link href="/sobre" className={styles.homeLink}>
                        📋 Sobre
                      </Link>
                      <Link href="/portfolio" className={styles.homeLink}>
                        💼 Portfólio
                      </Link>
                      <Link href="/blog" className={styles.homeLink}>
                        📝 Blog
                      </Link>
                      <Link href="/contato" className={styles.homeLink}>
                        📧 Contato
                      </Link>
                    </div>
                  </div>
                </div>
              </section>

      </body>
    </div>
  );
}
