import React from "react";
import styles from "./style.module.css";
import { logo } from "../../assets/images";

const Header = () => {
  return (
    <header className={styles.header}>
      <div>
        <img className={styles.logo__header} src={logo} alt="logo-dropping" />
      </div>
      <div>
        <ul className={styles.lista__header}>
          <li>
            <a className={styles.lista__item} href="/">
              Home
            </a>
          </li>
          <li>
            <a className={styles.lista__item} href="#products">
              Products
            </a>
          </li>
          <li>
            <a className={styles.lista__item} href="/cadastro">
              Promotions
            </a>
          </li>
          <li>
            <a className={styles.lista__item} href="#footer">
              Contacts
            </a>
          </li>
        </ul>
      </div>
      <div>
        <a className={styles.login__header} href="/login">
          Login
        </a>
      </div>
    </header>
  );
};

export { Header };
