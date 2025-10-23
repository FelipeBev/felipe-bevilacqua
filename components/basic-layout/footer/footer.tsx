import React from "react";
import styles from "./footer.module.css";

const MyFooter: React.FC = () => {
  return (
    <footer className={styles["my-footer"]}>
      <p>&copy; 2025 Felipe Alves Bevilacqua</p>
    </footer>
  );
};

export default MyFooter;
