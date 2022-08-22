import React from "react";
import styles from "../styles/About.module.css";
import about from "../data/about";

const About = () => {
  return (
    <div
      className={styles.wrapper}
      style={{
        backgroundImage:
          "url('https://template.viserlab.com/hyiplab/demo/assets/images/bg/bg-2.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "right",
      }}
      id="about"
    >
      <div className={styles.left}></div>
      <div className={styles.right}>
        <h1>
          {about.title} <span>{about.span}</span>
        </h1>
        <p>{about.content1} </p>
        <p>{about.content2}</p>
        <btn>{about.btn}</btn>
      </div>
    </div>
  );
};

export default About;
