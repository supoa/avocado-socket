import React from "react";
import styles from "../styles/Header.module.css";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const Header = () => {
  const router = useRouter();

  const userInfo = useSelector((state) => state.user.userInfo);
  return (
    <div
      className={styles.wrapper}
      style={{
        backgroundImage:
          "url('https://template.viserlab.com/hyiplab/demo/assets/images/bg/hero.jpg')",
        backgroundSize: "fill",
        backgroundPosition: "center",
      }}
    >
      <div
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: { duration: 1 },
        }}
        className={styles.left}
      >
        <h1>
          Invest for Future in Stable Platform
          <span> and Make Fast Money</span>
        </h1>
        <p>
          Invest in an Industry Leader, Professional, and Reliable Company. We
          provide you with the most necessary features that will make your
          experience better. Not only we guarantee the fastest and the most
          exciting returns on your investments, but we also guarantee the
          security of your investment.
        </p>
        {!userInfo && (
          <btn className={styles.btn} onClick={() => router.push("/register")}>
            SIGN UP
          </btn>
        )}
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
