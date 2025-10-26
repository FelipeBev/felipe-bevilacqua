import { Head } from "next/document";
import MyFooter from "../components/basic-layout/footer/footer";
import MyHeader from "../components/basic-layout/header/header";
import MyMenu from "../components/basic-layout/menu/menu";
import styles from "../styles/Home.module.css";
import { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  const estilos = styles;
  return (
    <div>
      <div className={estilos.body}>
        <MyHeader />
        <MyMenu />
        
        <Component {...pageProps} />
        
        <MyFooter />
      </div>
    </div>
  );
}