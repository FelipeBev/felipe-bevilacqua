import React from "react";
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from "./menu.module.css";
import { menuItems } from "../../../data/sections";

const MyMenu: React.FC = () => {
  const router = useRouter();

  return (
    <nav className={styles.nav}>
      {menuItems.map((item) => (
        <Link href={item.href} className={router.asPath === item.href ? styles.active : ''}>
          {item.label}
        </Link>
      ))}
    </nav>
  );
};

export default MyMenu;