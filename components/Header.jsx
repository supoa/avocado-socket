import React from "react";
import styles from "../styles/Header.module.css";
import Image from "next/image";
import { motion } from "framer-motion";
import { header } from "../data.js";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
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
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: { duration: 1 },
        }}
        className={styles.left}
      >
        <h1>
          {header.title}
          <span> {header.span}</span>
        </h1>
        <p>{header.content}</p>
        <btn className={styles.btn} onClick={() => router.push("/login")}>
          Join Us
        </btn>
      </motion.div>
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
