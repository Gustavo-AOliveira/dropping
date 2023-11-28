import React from 'react';
import styles from './styles.module.css';
import { Header } from '../../components/header';
import { Footer } from '../../components/footer';

export function Login() {
  return (
    <div className={styles.loginContainer}>
      <Header />

      <section className={styles.s1}>
        <div className={styles.s1Content}>
          <img className={styles.s1Img} src="../assets/imgs/logo-dropping.svg" alt="" />

          <form action="../pages/menu.html">
            <label className={styles.inputImgUsuario}>
              <input type="text" id="username" name="username" placeholder="Username" required />
            </label>
            <br /><br />

            <label className={styles.inputImgSenha}>
              <input type="password" id="senha" name="senha" placeholder="Password" required />
            </label>
            <br /><br />

            <a href='/menu' className={styles.customButton} type="submit" value="Login">Login</a>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}
