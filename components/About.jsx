import React from "react";
import styles from "../styles/About.module.css";

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
          About <span>Us</span>
        </h1>
        <p>
          It is a virtual investment platform. But we invest your investments in
          many places. We try to give good profit to everyone through advanced
          technology. Not everyone has to invest here. Anyone can establish
          himself by working as a promoter and earn salary every month. Our aim
          is to create a millionaire from every country and eradicate poverty
          from every country, as well as create jobs.
        </p>

        {/* <btn>MORE INFO</btn> */}
      </div>
    </div>
  );
};

export default About;
