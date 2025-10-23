import Head from "next/head";
import Link from 'next/link';
import styles from "../styles/Home.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyFooter from "../components/basic-layout/footer/footer";
import MyHeader from "../components/basic-layout/header/header";
import MyMenu from "../components/basic-layout/menu/menu";

export default function Home() {
  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Felipe Alves Bevilacqua</title>
      </Head>

      <body className={styles.body}>
        <MyHeader></MyHeader>
        <MyMenu></MyMenu>

        <section className={styles.section}>
                <div className={styles.container}>
                  <div className={styles.card}>
                    <h1>Bem-vindo!</h1>
                    <p>
                      Olá! Sou Felipe Alves Bevilacqua, engenheiro de software Full Stack.
                      Navegue pelas seções para conhecer mais sobre mim e meu trabalho.
                    </p>
                    
                    <div className={styles.homeLinks}>
                      <Link href="/secao/sobre" className={styles.homeLink}>
                        📋 Sobre
                      </Link>
                      <Link href="/secao/portfolio" className={styles.homeLink}>
                        💼 Portfólio
                      </Link>
                      <Link href="/secao/blog" className={styles.homeLink}>
                        📝 Blog
                      </Link>
                      <Link href="/secao/contato" className={styles.homeLink}>
                        📧 Contato
                      </Link>
                    </div>
                  </div>
                </div>
              </section>

        <MyFooter></MyFooter>
      </body>
    </div>
  );
}
