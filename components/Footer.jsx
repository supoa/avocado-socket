import React from "react";
import styles from "../styles/Footer.module.css";
import Image from "next/image";
import CopyrightIcon from "@mui/icons-material/Copyright";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className={styles.wrapper} id="footer">
      {/* <div className={styles.grid}>
        {" "}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { duration: 1 },
          }}
          className={styles.left}
        >
          <logo></logo>
          <div className={styles.name}>AVOCADO CREATIVES</div>
          <div className={styles.link}>WORK WITH US</div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { duration: 0.8 },
          }}
          className={styles.mid}
        >
          <div className={styles.contact}>Contact Us</div>
          <div className={styles.email}>
            Eamil us : <span> supoa4470@gmail.com</span>
          </div>
          <div className={styles.telegram}>
            Krasnokazarmennaya street 14, Moscow, Russia supoa4470@gmail.com
            111_438_5244 FOLLOW US: __FB __IN __BE __TW
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { duration: 1.2 },
          }}
          className={styles.right}
        >
          <h3 className={styles.heading}>Your Success Our Vission</h3>
          <p>
            Send a message to the mail address to view all the documents of the
            plan/purchase process issue.If you face any problem immediately mail
            us
          </p>
        </motion.div>
      </div> */}
    </div>
  );
};

export default Footer;
