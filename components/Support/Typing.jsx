import React from "react";
import styles from "../../styles/Typing.module.css";


const Typing = () => {
  return (
    <div className={styles.typing}>
      <div className={styles.typing__dot}></div>
      <div className={styles.typing__dot}></div>

      <div className={styles.typing__dot}></div>
    </div>
  );
};

export default Typing;
