import React from "react";
import styles from "../styles/Reviews.module.css";

const Reviews = () => {
  return (
    <div className={styles.wrapper}>
      <h2>What successful traders say about cryptohopper</h2>
      <div className={styles.flex}>
        {[1, 2, 2, 22].map((item) => (
          <div className={styles.card}>
            <div className={styles.name}>Mark 42</div>
            <div className={styles.star}></div>
            <div className={styles.review}>
              I enjoy working with the trailing stop loss. It gives me peace of
              mind that I know that the hopper will take profit at the moments
              the prices fall again. Since crypto prices are very volatile, I...
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
