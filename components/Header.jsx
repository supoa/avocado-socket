import React from "react";
import styles from "../styles/Header.module.css";
import Image from "next/image";

const Header = () => {
  return (
    <div
      className={styles.wrapper}
      style={{
        backgroundImage: "url('/images/crypto1.jpg')",
        backgroundSize: "fill",
        backgroundPosition: "center",
      }}
    >
      <div className={styles.left}>
        <h1>Your Success Our Vission</h1>

        <p>
          Send a message to the mail address to view all the documents of the
          plan/purchase process issue.If you face any problem immediately mail
          us
        </p>
        <div className={styles.btn}>Join Us</div>
      </div>
      <div className={styles.right}>
        {/* <Image
          src="/images/crypto1.jpg"
          width="300"
          height="300"
          alt="crypto"
        /> */}
      </div>
    </div>
  );
};

export default Header;
