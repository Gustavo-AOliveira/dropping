import React from "react";
import styles from "./styles.module.css";
import { facebook, twitter, instagram } from "../../assets/images";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <footer id="footer" className={styles.footer}>
        <div className={styles.footerContainer}>
          <a className={styles.listTitulo} href="#">
            Dropping
          </a>
          <a className={styles.listItem} href="#">
            Pricing
          </a>
          <a className={styles.listItem} href="#">
            Beta
          </a>
          <a className={styles.listItem} href="#">
            Newsletter
          </a>
          <a className={styles.listItem} href="#">
            Updates
          </a>
        </div>

        <div className={styles.footerContainer}>
          <a className={styles.listTitulo} href="#">
            Product
          </a>
          <a className={styles.listItem} href="#">
            Business
          </a>
          <a className={styles.listItem} href="#">
            Designers
          </a>
          <a className={styles.listItem} href="#">
            classNamerooms
          </a>
          <a className={styles.listItem} href="#">
            Newcomers
          </a>
        </div>
        <div className={styles.footerContainer}>
          <a className={styles.listTitulo} href="#">
            Resources
          </a>
          <a className={styles.listItem} href="#">
            Collaborations
          </a>
          <a className={styles.listItem} href="#">
            Editorials
          </a>
          <a className={styles.listItem} href="#">
            Product
          </a>
          <a className={styles.listItem} href="#">
            Newsroom
          </a>
        </div>
        <div className={styles.footerContainer}>
          <a className={styles.listTitulo} href="#">
            About
          </a>
          <a className={styles.listItem} href="#">
            Company
          </a>
          <a className={styles.listItem} href="#">
            Careers
          </a>
          <a className={styles.listItem} href="#">
            Legal
          </a>
          <a className={styles.listItem} href="#">
            Help
          </a>
        </div>
      </footer>
      <p className={styles.footerDireitos}>
        © 2023 Dropping Store. All rights reserved.{" "}
      </p>
      <div className={styles.footerLinks}>
        <img className="imgs" src={facebook} alt="logo-facebook" />
        <img className="imgs" src={twitter} alt="logo-twitter" />
        <img className="imgs" src={instagram} alt="logo-instagram" />
      </div>
    </div>
  );
};

export { Footer };
