import React from "react";
import styles from "./Header.module.scss";
import Navlink from "@components/Navlink/Navlink";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link to={""} className={styles.header__logo}>
        r3ichal.me
      </Link>

      <div className={styles.navList}>
        <Navlink url={""} className={styles.navLink}>
          Home
        </Navlink>
        <Navlink url={"projects"} className={styles.navLink}>
          Projects
        </Navlink>
      </div>
    </header>
  );
};

export default Header;
