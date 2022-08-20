import React from "react";
import styles from "../styles/Contact.module.css";
import { motion } from "framer-motion";
const Contact = () => {
  return (
    <div
      className={styles.wrapper}
      style={{
        backgroundImage:
          "url('https://template.viserlab.com/hyiplab/demo/assets/images/bg/bg-3.jpg')",
        backgroundSize: "fill",
        backgroundPosition: "center",
      }}
      id="contact"
    >
      <h1>Get in touch with Us</h1>

      <div className={styles.container}>
        <form>
          <input type="text" className={styles.field} placeholder="Full Name" />
          <input
            type="email"
            className={styles.field}
            placeholder="Email Address"
          />
          <textarea placeholder="Message"></textarea>
          <btn style={{ maxWidth: "100%" }}>Send Messagae</btn>
        </form>
      </div>
    </div>
  );
};

export default Contact;
