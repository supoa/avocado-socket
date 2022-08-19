import React from "react";
import styles from "../styles/Button.module.css";

const Button = ({ text }) => {
  return <div className={styles.btn}>{text}</div>;
};

export default Button;
