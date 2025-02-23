import React from "react";
import styles from "./Skills.module.scss";
import { skills as data } from "../../config/constants";

const Skills = () => {
  return (
    <section className={styles.skills}>
      <div className={styles.skills__description}>
        <h2 className={styles.skills__title}>About Me</h2>
        <p className={styles.skills__text}>
          Greetings, I’m <strong>r3ichal</strong>, Full-Stack Developer with 5
          years of experience (2 commercially), self-proclaimed Software
          Engineer. I've been interested in programming since the 4th grade,
          starting with Python. Over time, this evolved into frontend
          development (HTML5, CSS3, JavaScript, React.js, Next.js, and others)
          and backend development (Node.js, Express). Eventually, I expanded my
          knowledge to C#, C++, Lua, and more. An unremarkable student, an
          unremarkable son—but at least I know English well and can speak it
          almost fluently. A believer in nihilism. My one and only hobby (aside
          from gambling) is programming. I'm deeply passionate about it,
          especially creating software and web applications. In the future, I
          would like to work in Computer Science,preferably in a remote
          position, which, for now, is my ultimate life goal.
          <ol>
            <li>
              <strong>Versatile Skills:</strong> I work on both front-end and
              back-end projects. On the front-end, I use JavaScript frameworks
              like React and Astro.js. On the back-end, I build reliable
              server-side apps with Node.js, Express, and databases like
              MongoDB. I also develop software with C# and C++.
            </li>
            <li>
              <strong>New technologies:</strong> I enjoy learning new
              technologies and improving my skills. Whether it's making apps run
              faster or designing simple, user-friendly interfaces, I love
              solving challenges with clear and efficient code.
            </li>
            <li>
              <strong>Comitted:</strong> I stay up-to-date with the latest tools
              and technologies, always eager to learn and improve. From
              experimenting with new frameworks to refining my coding practices,
              I’m dedicated to delivering my best work.
            </li>
            <li>
              <strong>Curious:</strong> I approach every project with curiosity
              and a drive to innovate. Whether it’s debugging complex issues,
              optimizing application performance, or designing intuitive
              interfaces, I thrive on finding practical, efficient solutions
            </li>
          </ol>
          I’m always open to new and exciting projects...
        </p>
      </div>

      <div className={styles.skills__badges}>
        <h3 className={styles.skills__title}>Skills & Technologies</h3>
        <div className={styles.skills__badgesContainer}>
          {data.map((skill, index) => (
            <span className={styles.skills__badge} key={index}>
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
