import styles from "./Home.module.css";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { Jordan, airForce1, nikeP600, nikeWaffle, nikeESeries, airForce07, airMaxSystem } from "../../assets/images";

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <Header />

      <section className={styles.s1}>
        <div className={styles.s1Container}>
          <h2 className={styles.s1Texto}>GOOD SHOES TAKE YOU GOOD PLACES</h2>
          <a className={styles.s1Btn} href="#">
            Shop Now
          </a>
        </div>
        <div>
          <img className={styles.s1Img} src={Jordan} alt="img-jordan" />
        </div>
      </section>

      <section className={styles.s2}>
        <h2 id="products" className={styles.s2Titulo}>
          ALL PRODUCTS
        </h2>
        <div className={styles.s2Filtros}>
          <a className={styles.filtrosItem} href="#">
            GENDER
          </a>
          <a className={styles.filtrosItem} href="#">
            PRICE
          </a>
          <a className={styles.filtrosItem} href="#">
            CATEGORY
          </a>
          <a className={styles.filtrosItem} href="#">
            COLLECTION
          </a>
          <a className={styles.filtrosItem} href="#">
            MORE+
          </a>
        </div>

        <div className={styles.s2Imgs}>
          <div className={styles.s2Imgs}>
            <div>
              <img className={styles.s2ImgsPrimeira} src={airForce1} alt="" />
              <div className={styles.s2ImgsContainerDentro}>
                <h5>Nike Air Force 1 '07</h5>
                <h5>$200,00</h5>
              </div>
            </div>
          </div>

          <div className={styles.s2Imgs}>
            <div>
              <img src={nikeP600} alt="" />
              <div className={styles.s2ImgsContainerDentro}>
                <h5>Nike P-6000</h5>
                <h5>$400,00</h5>
              </div>
            </div>
          </div>

          <div className={styles.s2Imgs}>
            <div>
              <img className={styles.s2ImgsTerceira} src={nikeWaffle} alt="" />
              <div className={styles.s2ImgsContainerDentro}>
                <h5>Nike Waffle Debut</h5>
                <h5>$250,00</h5>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.s2Imgs2}>
          <div className={styles.s2Imgs2}>
            <div>
              <img
                className={styles.s2Imgs2Primeira}
                src={nikeESeries}
                alt=""
              />
              <div className={styles.s2ImgsContainerDentro2}>
                <h5>Nike E-Series 1.0</h5>
                <h5>$350,00</h5>
              </div>
            </div>
          </div>

          <div className={styles.s2Imgs2}>
            <div>
              <img src={airForce07} alt="" />
              <div className={styles.s2ImgsContainerDentro2}>
                <h5>Nike Air Force 1 '07</h5>
                <h5>$220,00</h5>
              </div>
            </div>
          </div>

          <div className={styles.s2Imgs2}>
            <div>
              <img
                className={styles.s2ImgsTerceira2}
                src={airMaxSystem}
                alt=""
              />
              <div className={styles.s2ImgsContainerDentro2}>
                <h5 className={styles.s2ImgsResponsiva}>Nike Air Max SYSTM</h5>
                <h5 className={styles.s2ImgsResponsiva}>$300,00</h5>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.s3}>
        <h2 className={styles.s3Titulo}>
          WE GAVE THE WORLD AN ORIGINAL YOU GAVE US A THOUSAND BACK
        </h2>

        <a className={styles.s3Btn} href="#">
          Explore ORIGINALS
        </a>
      </section>

      <Footer />
    </div>
  );
};

export { Home };
