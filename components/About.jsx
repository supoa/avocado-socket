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
          We are an international financial company engaged in investment
          activities, which are related to trading on financial markets and
          cryptocurrency exchanges performed by qualified professional traders.
        </p>
        <p>
          Our goal is to provide our investors with a reliable source of high
          income, while minimizing any possible risks and offering a
          high-quality service, allowing us to automate and simplify the
          relations between the investors and the trustees. We work towards
          increasing your profit margin by profitable investment. We look
          forward to you being part of our community.
        </p>
        <btn>More Info</btn>
      </div>
    </div>
  );
};

export default About;
