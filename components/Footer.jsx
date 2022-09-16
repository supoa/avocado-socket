import React from "react";
import styles from "../styles/Footer.module.css";
import Image from "next/image";
import CopyrightIcon from "@mui/icons-material/Copyright";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import Term from "./Upload/Term";
import { useEffect } from "react";
import axios from "axios";
import { setTerms } from "../redux/termSlice";

const Footer = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const userInfo = useSelector((state) => state.user.userInfo);
  const terms = useSelector((state) => state.terms.terms);

  const dispatch = useDispatch();
  console.log({ terms });

  const fetch = async () => {
    try {
      const { data } = await axios.get("/api/terms");
      dispatch(setTerms(data[0]));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetch();
  }, [router.asPath]);

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
          <b className={styles.place}>palacio de Bellas Artes,Mexico City</b>
          <div className={styles.email}>
            Support : <span> supoa4470@gmail.com</span>
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
          <div className={styles.flex}>
            <span onClick={() => terms?.content && router.push(terms.content)}>
              Terms & Condition
            </span>
            {userInfo?.isAdmin && (
              <span className={styles.plus} onClick={() => setOpen(true)}>
                +
              </span>
            )}
            <span>Privacy</span>
          </div>
        </div>
      </div>
      <div className={styles.rights}>
        <CopyrightIcon style={{ fontSize: "130%" }} />
        2022 All Rights Reserved
      </div>

      {open && (
        <Term setOpen={setOpen} userInfo={userInfo} setTerms={setTerms} />
      )}
    </div>
  );
};

export default Footer;
