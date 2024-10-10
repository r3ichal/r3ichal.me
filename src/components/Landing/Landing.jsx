import React from "react";
import styles from "./Landing.module.scss";

const Landing = () => {
  return (
    <section className={styles.landing}>
      <h1 className={styles.landing__title}>
        r3ichal<span className={styles.landing__title__span}> aka</span>{" "}
        <em>[ree-chal]</em>
      </h1>
      <p className={styles.landing__description}>
        I'm a FullStack Web/Software Developer <br/>
        and a little philosopher...
      </p>
      <p className={styles.landing__description}>
        
      </p>
      <div className={styles.landing__container}>
        <a href="https://github.com/MaxPopsuy" target="_blank"><img
          src={"https://avatars.githubusercontent.com/u/69810711"}
          alt="Landing"
          className={styles.landing__container__image}
        /></a>
        
      </div>
    </section>
  );
};

export default Landing;
