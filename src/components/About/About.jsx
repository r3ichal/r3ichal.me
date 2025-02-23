import React from "react";
import styles from "./About.module.scss";

const About = () => {
  return (
    <section className={styles.about}>
      <h1 className={styles.about__title}>
        r3ichal<span className={styles.about__title__nickname}> aka</span>{" "}
        <span className={styles.about__title__phonetic}>[ree-chal]</span>
      </h1>
      <p className={styles.about__description}>
        I'm a FullStack Web/Software Developer <br />
        and a little philosopher...
      </p>
      <div className={styles.about__avatar - container}>
        <img
          src={"https://avatars.githubusercontent.com/u/69810711"}
          alt="Avatar"
          className={styles.about__avatar - container__image}
        />
      </div>
      <footer className={styles.about__footer}>
        © 2025 r3ichal.me All rights reserved.
      </footer>
    </section>
  );
};

export default About;
