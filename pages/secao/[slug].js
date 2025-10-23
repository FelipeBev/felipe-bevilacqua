import Head from "next/head";
import { useRouter } from 'next/router';
import { getSectionBySlug, getAllSections } from '../../data/sections';
import styles from '../../styles/Home.module.css';
import MyFooter from "../../components/basic-layout/footer/footer";
import MyHeader from "../../components/basic-layout/header/header";
import MyMenu from "../../components/basic-layout/menu/menu";
import { sectionComponents } from '../../data/sections';

export default function Section({ sectionData }) {
  const router = useRouter();

  // Fallback durante a geração estática
  if (router.isFallback) {
    return (
      <>
        <Head>
          <title>Carregando...</title>
        </Head>
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.card}>
              <p>Carregando...</p>
            </div>
          </div>
        </section>
      </>
    );
  }

  // Se a seção não existir
  if (!sectionData) {
    return (
      <>
        <Head>
          <title>Página não encontrada</title>
        </Head>
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.card}>
              <h1>404</h1>
              <p>Seção não encontrada</p>
            </div>
          </div>
        </section>
      </>
    );
  }

  // Renderiza o componente apropriado
  const SectionComponent = sectionComponents[sectionData.slug];

  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Felipe Alves Bevilacqua</title>
      </Head>

      <div className={styles.body}>
        <MyHeader />
        <MyMenu />
        
        <SectionComponent />
      
        <MyFooter />
      </div>
    </div>
  );
}

// Gera as páginas estaticamente em build time
export async function getStaticPaths() {
  const sections = getAllSections();
  
  const paths = sections.map((section) => ({
    params: { slug: section.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const sectionData = getSectionBySlug(params.slug);

  if (!sectionData) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      sectionData,
    },
  };
}