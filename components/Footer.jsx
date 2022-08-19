import React from "react";
import styles from "../styles/Footer.module.css";
import Image from "next/image";
import CopyrightIcon from "@mui/icons-material/Copyright";

const Footer = () => {
  return (
    <div
      className={styles.wrapper}
      id="footer"
      // style={{
      //   backgroundImage:
      //     "url('https://template.viserlab.com/hyiplab/demo/assets/images/bg/bg-7.jpg')",
      //   backgroundSize: "fill",
      //   backgroundPosition: "center",
      // }}
    >
      <div className={styles.grid}>
        {" "}
        <div className={styles.left}>
          <logo></logo>
          <div className={styles.name}>CryptoCade</div>
        </div>
        <div className={styles.mid}>
          <div className={styles.contact}>Contact Us</div>
          <div className={styles.email}>
            Eamil us : <span> testEmail@gmail.com</span>
          </div>
          {/* <div className={styles.telegram}>
            Telegram : Click <span>Here</span> to contact use
          </div>
          <div className={styles.flex}>
            <div className={styles.icon}>
              <Image
                src="/images/instagram.png"
                width="20px"
                height="20px"
                alt="inst"
              />
            </div>
            <div className={styles.icon}>
              {" "}
              <Image
                src="/images/facebook.png"
                width="20px"
                height="20px"
                alt="inst"
              />
            </div>
            <div className={styles.icon}>
              {" "}
              <Image
                src="/images/telegram.png"
                width="20px"
                height="20px"
                alt="inst"
              />
            </div>
          </div> */}
        </div>
        <div className={styles.right}>
          <h3 className={styles.heading}>
            Your investments are your responsibility
          </h3>
          <p>
            We do not accept any liability for any loss or damage which is
            incurred from you acting or not acting as a result of reading any of
            our publications. You acknowledge that you use the information we
            provide at your own risk. MyCryptoParadise does not offer investment
            advice and nothing in the calls we make should be construed as
            investment advice. MyCryptoParadise provides information and
            education based on our own trades. You are paying to follow our
            trades that we document for educational purposes.
          </p>
          {/* <div className={styles.flex}>
            <span>Terms & Condition</span>
            <span>Privacy</span>
          </div> */}
        </div>
      </div>
      <div className={styles.rights}>
        <CopyrightIcon style={{ fontSize: "130%" }} />
        2022 All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;
