import Image from "next/image";
import React from "react";
import styles from "../styles/Gallery.module.css";
const Gallery = () => {
  return (
    <div className={styles.wrapper}>
      <h1>Events</h1>
      <div className={styles.gallery}>
        {[1, 2, 3, 4, 5, 6, 6, 7, 7].map((item) => (
          <div className={styles.imgContainer}>
            {" "}
            <Image src="/images/test.png" width={300} height={260} alt="" />
            <div className={styles.title}>This is Some Random Title</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
