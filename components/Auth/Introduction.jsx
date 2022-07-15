import React from "react";
import styles from "../../styles/Auth/Introduction.module.css";

const Introduction = () => {
  return (
    <div className={styles.wrapper}>
      <h1>Introduction to Cryptohopper</h1>

      <p>
        Join us for an interactive, introductory Cryptohopper experience. We’ll
        show you how to create Hoppers, connect your exchange, copy pro traders
        and build AIs.
      </p>
    </div>
  );
};

export default Introduction;
