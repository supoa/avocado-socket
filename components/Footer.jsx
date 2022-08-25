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
          <div className={styles.name}>Avocado</div>
        </div>
        <div className={styles.mid}>
          <div className={styles.contact}>Contact Us</div>
          <div className={styles.email}>
            Eamil us : <span> supoa4470@gmail.com</span>
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
            It is a virtual investment platform. But we invest your investments
            in many places. We try to give good profit to everyone through
            advanced technology. Not everyone has to invest here. Anyone can
            establish himself by working as a promoter and earn salary every
            month. Our aim is to create a millionaire from every country and
            eradicate poverty from every country, as well as create jobs.
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
