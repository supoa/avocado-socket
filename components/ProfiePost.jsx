import React, { useState } from "react";
import styles from "../styles/ProfilePost.module.css";
import Image from "next/image";

// import {
//   getStorage,
//   ref,
//   uploadBytesResumable,
//   getDownloadURL,
// } from "firebase/storage";

const ProfiePost = () => {
  const [error, setError] = useState("");
  const [imageUrl, setImgUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.wrapper}>
      <div className={styles.top}>
        <div className={styles.left}>Your Post</div>
        <div className={styles.right}>
          <div className={styles.icon} onClick={() => setOpen((prev) => !prev)}>
            Open
          </div>
        </div>
      </div>
      {open && (
        <div className={styles.posts}>
          {[1, 2, 2, 2, 2].map((item) => (
            <div className={styles.post}>
              <Image src="/images/google.png" width={270} height={260} alt="" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProfiePost;
