import React from "react";
import styles from "../styles/Contact.module.css";

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Contact Us</h1>
      <p className={styles.description}>
        Have a question or feedback? Fill out the form below to get in touch.
      </p>
      <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
        <div>
          <label htmlFor="name" className={styles.label}>
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className={styles.input}
            required
          />
        </div>
        <div>
          <label htmlFor="email" className={styles.label}>
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className={styles.input}
            required
          />
        </div>
        <div>
          <label htmlFor="message" className={styles.label}>
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            className={styles.textarea}
            required
          ></textarea>
        </div>
        <button type="submit" className={styles.button}>
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
