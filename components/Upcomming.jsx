import Image from "next/image";
import React from "react";
import styles from "../styles/Upcomming.module.css";

export const Upcomming = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
        <h1>Android & IOS App Is Comming !</h1>
      </div>
      <div className={styles.right}>
        <Image
          src="/images/app1.png"
          width="290px"
          height="530px"
          alt=""
          //   layout="fill"
          zIndex="5235"
        />
      </div>
    </div>
  );
};
