import React, { useState } from "react";
import styles from "../styles/ProfileInfo.module.css";
import Image from "next/image";
import UpdateProfile from "./UpdateProfile";

const ProfileInfo = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.wrapper}>
      <div className={styles.profile__photo}>
        <Image src="/images/crypto1.jpg" width="200px" height="200px" alt="" />
      </div>
      <div className={styles.profile__name}>random Name</div>
      <div className={styles.profile__email}>randomEmail@gmail.comm</div>
      <div className={styles.profile__btn} onClick={() => setOpen(true)}>
        Update Your Profile
      </div>
      <div className={styles.box}>
        <div className={styles.item}>Join:Join Data</div>
        <div className={styles.item}>PaymentHistory:Join Data</div>
        <div className={styles.item}>Country: Bangladesh</div>
        <div className={styles.item}>NID:57398752085275</div>
        <div className={styles.item}>Purchase:Amount Purchased</div>
        <div className={styles.item}>Revenue:total Revenue</div>
        <div className={styles.item}>Direct Member:Direct Member</div>

        <div className={styles.item}>Team Member:15</div>

        <div className={styles.item}>Total Assets: $7483</div>
      </div>
      {open && (
        <div className={styles.profile__update}>
          {<UpdateProfile setOpen={setOpen} />}
        </div>
      )}
    </div>
  );
};

export default ProfileInfo;
