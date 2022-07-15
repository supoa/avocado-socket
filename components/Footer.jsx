import React from "react";
import styles from "../styles/Footer.module.css";
import Image from "next/image";
import CopyrightIcon from "@mui/icons-material/Copyright";

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.grid}>
        {" "}
        <div className={styles.left}>
          <logo></logo>
          <div className={styles.name}>AVOCADO CREATIVES</div>
          <div className={styles.link}>WORK WITH US</div>
        </div>
        <div className={styles.mid}>
          <div className={styles.contact}>Contact Us</div>
          <div className={styles.email}>
            Eamil us : <span> supoa4470@gmail.com</span>
          </div>
          <div className={styles.telegram}>
            Krasnokazarmennaya street 14, Moscow, Russia supoa4470@gmail.com
            111_438_5244 FOLLOW US: __FB __IN __BE __TW
          </div>
        </div>
        <div className={styles.right}>
          <h3 className={styles.heading}>Your Success Our Vission</h3>
          <p>
            Send a message to the mail address to view all the documents of the
            plan/purchase process issue.If you face any problem immediately mail
            us
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
