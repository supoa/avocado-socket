import React from "react";
import styles from "../styles/Plan.module.css";
import Image from "next/image";

const Plan = () => {
  return (
    <div className={styles.wrapper}>
      <h1>
        Investment <span>Plans</span>{" "}
      </h1>
      <p>
        To make a solid investment, you have to know where you are investing.
        Find a plan which is best for you.
      </p>
      <div className={styles.image__container}>
        {[1, 2, 3].map((item) => (
          <div className={styles.image__wrapper}>
            <Image
              src="https://template.viserlab.com/hyiplab/demo/assets/images/bg/bg-4.png"
              width="220px"
              height="400px"
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plan;
