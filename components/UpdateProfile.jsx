import React from "react";
import styles from "../styles/Contact.module.css";
const UpateProfile = ({ setOpen }) => {
  return (
    <div
      className={styles.wrapper}
      style={{
        background: "rgb(0,0,0,0.6)",
        maxWidth: "350px",
      }}
    >
      <h1>Updating Your Account</h1>
      <form className={styles.form}>
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="text"
          placeholder="NID"
          onChange={(e) => setNid(e.target.value)}
        />
        <input
          type="text"
          placeholder="Submit Binance Trc20 (usdt)"
          onChange={(e) => setPaymentMethod(e.target.value)}
        />
        <input
          type="text"
          placeholder="Country"
          onChange={(e) => setCountry(e.target.value)}
        />
        <div className={styles.btn}>Update Account</div>
        <div className={styles.btn__cancel} onClick={() => setOpen(false)}>
          Cancel
        </div>
      </form>
      {/* <div className={styles.circle1}></div>
      <div className={styles.circle2}></div> */}
    </div>
  );
};

export default UpateProfile;
