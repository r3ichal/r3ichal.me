import React, { useState } from "react";
import styles from "./Contact.module.scss";
import { skills as data } from "../../config/constants";
import pfp from "@images/literally_me.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //TODO: Write API to submit forms...
    alert("Form submitted!");
    setFormData({ name: "", email: "", message: "" });
  };
  const copyPhoneNumber = () => {
    const phoneNumber = "+38 001 939 14 88";
    navigator.clipboard
      .writeText(phoneNumber)
      .then(() => {
        alert("Phone number copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <section className={styles.contact}>
      <div className={styles.contact__description}>
        <h2 className={styles.contact__title}>r3ichal</h2>

        <div className={styles.contact__card}>
          <p className={styles.contact__text}>You can find me there:</p>
          <img className={styles.card__image} src={pfp} alt="literally me" />
          <ul className={styles.card__links}>
            <li className={styles.card__item}>
              <a
                className={styles.card__link}
                target="_blank"
                href="https://t.me/r3ichal"
              >
                <button className={styles.card__button}>
                  @r3ichal on Telegram
                </button>
              </a>
            </li>
            <li className={styles.card__item}>
              <a
                className={styles.card__link}
                target="_blank"
                href="https://discord.com"
              >
                <button className={styles.card__button}>
                  r3ichal on Discord
                </button>
              </a>
            </li>
            <li className={styles.card__item}>
              <a
                className={styles.card__link}
                target="_blank"
                href="mailto:r3ichal@gmail.com"
              >
                <button className={styles.card__button}>
                  r3ichal@gmail.com
                </button>
              </a>
            </li>
            <li className={styles.card__item}>
              <a
                className={styles.card__link}
                target="_blank"
                href="https://github.com/r3ichal"
              >
                <button className={styles.card__button}>github.com</button>
              </a>
            </li>
            <li className={styles.card__item}>
              <button className={styles.card__button} onClick={copyPhoneNumber}>
                Copy Phone Number
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.contact__form}>
        <h3 className={styles.contact__title}>Contact Me</h3>
        <p className={styles.contact__text}>Or fill out a form:</p>
        <form onSubmit={handleSubmit} className={styles.contact__formElement}>
          <label htmlFor="name" className={styles.contact__label}>
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className={styles.contact__input}
          />

          <label htmlFor="email" className={styles.contact__label}>
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={styles.contact__input}
          />

          <label htmlFor="message" className={styles.contact__label}>
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className={styles.contact__textarea}
          ></textarea>

          <button type="submit" className={styles.contact__button}>
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
