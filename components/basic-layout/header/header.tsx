import React from "react";
import styles from "./header.module.css";

const MyHeader: React.FC = () => {
  return (
    <header className={styles["my-header"]}>
      <h1>Felipe Alves Bevilacqua</h1>
    </header>
  );
};

export default MyHeader;
