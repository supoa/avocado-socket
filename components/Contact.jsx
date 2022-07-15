import React from "react";
import styles from "../styles/Contact.module.css";

const Contact = () => {
  return (
    <div className={styles.wrapper} id="contact">
      <h1>Get in touch</h1>
      <form className={styles.form}>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Phone" />
        <input type="email" placeholder="Email" />
        <input type="text" placeholder="Subject" />
        <textarea placeholder="Write Your message here"></textarea>
        <div className={styles.btn}>Send Mesage</div>
      </form>
      <div className={styles.circle1}></div>
      <div className={styles.circle2}></div>
    </div>
  );
};

export default Contact;
