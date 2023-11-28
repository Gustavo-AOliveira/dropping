import React from 'react';
import styles from './styles.module.css';
import { Header } from '../../components/header';
import { Footer } from '../../components/footer';

function Cadastro() {
  return (
    <div className={ styles.cadastroContainer }>
      <Header />

      <section className={ styles.s1 }>
        <div className={ styles.s1Content }>
            <img className={ styles.s1Img } src="../assets/imgs/logo-dropping.svg" alt="" />

            <form action="" method="POST">
                <label className={ styles.inputImgUsuario }>
                    <input type="text" id="username" name="username" placeholder="Name" required={true} />
                </label>
                <br /><br />

                <label className={ styles.inputImgEmail }>
                    <input type="email" id="email" name="email" placeholder="E-mail" required={true} />
                </label>
                <br /><br />

                <label className={ styles.inputImgTelefone }>
                    <input type="tel" id="telefone" name="telefone" placeholder="Phone" required={true} />
                </label>
                
                <br /><br />
                
                <input className={ styles.customButton } type="submit" value="Receive promotions" />
            </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export { Cadastro };
