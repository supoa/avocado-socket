import React, { useState } from "react";
import styles from "../styles/Navbar.module.css";
import { useRouter } from "next/router";
import MenuIcon from "@mui/icons-material/Menu";
import ClearIcon from "@mui/icons-material/Clear";
import { useSelector } from "react-redux";
import Term from "./Upload/Term";
import axios from "axios";
import { motion } from "framer-motion";
import Image from "next/image";

const Navbar = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const userInfo = useSelector((state) => state.user.userInfo);
  const [openBg, setOpenBg] = useState(false);
  const [openPayment, setOpenPayment] = useState(false);

  const download = async (path) => {
    try {
      const { data } = await axios.get(`/api/${path}`);
      console.log({ data });
      data && router.push(data[0].content);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(router);

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { duration: 1 },
      }}
      className={styles.navbar}
    >
      <div className={styles.nav__logo} onClick={() => router.push("/")}>
        Avo<span>Cado</span>
      </div>
      <div className={styles.nav__items}>
        <div
          style={{ color: `${router.asPath == "/" ? "gold" : ""}` }}
          className={styles.item}
          onClick={() => router.push("/")}
        >
          Home
        </div>
        <div
          style={{ color: `${router.asPath == "/#about" ? "gold" : ""}` }}
          className={styles.item}
          onClick={() => router.push("/#about")}
        >
          About
        </div>
        <div
          style={{ color: `${router.asPath == "/#plan" ? "gold" : ""}` }}
          className={styles.item}
          onClick={() => router.push("/#plan")}
        >
          Plan
        </div>
        <div
          // style={{ color: `${router.asPath == "/#plan" ? "gold" : ""}` }}
          className={styles.item}
          onClick={() => download("background")}
        >
          Background
        </div>

        {userInfo?.isAdmin && (
          <div
            style={{ color: `${router.asPath == "/#plan" ? "gold" : ""}` }}
            className={styles.item}
            onClick={() => setOpenBg(true)}
          >
            +
          </div>
        )}

        <div
          // style={{ color: `${router.asPath == "/#plan" ? "gold" : ""}` }}
          className={styles.item}
          onClick={() => download("paymentmethod")}
        >
          Payment Method
        </div>
        {userInfo?.isAdmin && (
          <div
            style={{ color: `${router.asPath == "/#plan" ? "gold" : ""}` }}
            className={styles.item}
            onClick={() => setOpenPayment(true)}
          >
            +
          </div>
        )}
        {/* <div
          style={{ color: `${router.asPath == "/#contact" ? "gold" : ""}` }}
          className={styles.item}
          onClick={() => router.push("/#contact")}
        >
          Contact
        </div> */}
        {userInfo && (
          <div
            style={{
              color: `${router.pathname == "/profile/[id]" ? "gold" : ""}`,
            }}
            className={styles.item}
            onClick={() => router.push(`/profile/${userInfo._id}`)}
          >
            Dashboard
          </div>
        )}

        {userInfo?.isAdmin && (
          <div
            style={{
              color: `${router.asPath == "/admin" ? "gold" : ""}`,
            }}
            className={styles.item}
            onClick={() => router.push("/admin")}
          >
            Admin
          </div>
        )}
      </div>

      <div className={styles.nav__right}>
        {userInfo ? (
          <div
            className={styles.profile}
            onClick={() => router.push(`/profile/${userInfo._id}`)}
          >
            <Image
              src={userInfo.picture}
              width={40}
              height={40}
              style={{ borderRadius: "50%" }}
            />
          </div>
        ) : (
          <>
            <div
              style={{ color: `${router.asPath == "/login" ? "gold" : ""}` }}
              className={styles.sign}
              onClick={() => router.push("/login")}
            >
              Log in
            </div>
            <div
              style={{ color: `${router.asPath == "/register" ? "gold" : ""}` }}
              className={styles.sign}
              onClick={() => router.push("/register")}
            >
              Sign up
            </div>
          </>
        )}
      </div>
      {!open && (
        <div className={styles.icon} onClick={() => setOpen(true)}>
          <MenuIcon />
        </div>
      )}
      {open && (
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { duration: 1 },
          }}
          className={styles.nav__vertical}
        >
          <div className={styles.nav__items}>
            <div className={styles.icon} onClick={() => setOpen(false)}>
              <ClearIcon />
            </div>
            {userInfo && (
              <Image
                src={userInfo.picture}
                width={70}
                height={70}
                style={{
                  borderRadius: "25px",
                  margin: "10px 0",
                }}
                onClick={() => router.push(`/profile/${userInfo._id}`)}
              />
            )}

            <div
              style={{ color: `${router.asPath == "/" ? "gold" : ""}` }}
              className={styles.item}
              onClick={() => router.push("/")}
            >
              Home
            </div>
            <div
              style={{ color: `${router.asPath == "/#about" ? "gold" : ""}` }}
              className={styles.item}
              onClick={() => router.push("/#about")}
            >
              About
            </div>
            <div
              style={{ color: `${router.asPath == "/#plan" ? "gold" : ""}` }}
              className={styles.item}
              onClick={() => router.push("/#plan")}
            >
              Plan
            </div>
            <div className={styles.item} onClick={() => download("background")}>
              Background
            </div>
            {userInfo?.isAdmin && (
              <div className={styles.item} onClick={() => setOpenBg(true)}>
                BG+
              </div>
            )}

            <div
              className={styles.item}
              onClick={() => download("paymentmethod")}
            >
              Pyament Method
            </div>
            {userInfo?.isAdmin && (
              <div className={styles.item} onClick={() => setOpenPayment(true)}>
                PM+
              </div>
            )}
          </div>

          <div className={styles.nav__right}>
            {userInfo?.isAdmin && (
              <div
                style={{
                  color: `${router.asPath == "/admin" ? "gold" : ""}`,
                }}
                className={styles.item}
                onClick={() => router.push("/admin")}
              >
                Admin
              </div>
            )}
            {userInfo ? (
              <div
                style={{
                  color: `${router.pathname == "/profile/[id]" ? "gold" : ""}`,
                }}
                className={styles.profile}
                onClick={() => router.push(`/profile/${userInfo._id}`)}
              >
                Dashboard
              </div>
            ) : (
              <>
                <div
                  className={styles.sign}
                  onClick={() => router.push("/login")}
                >
                  Log in
                </div>
                <div
                  className={styles.sign}
                  onClick={() => router.push("/register")}
                >
                  Sign up
                </div>
              </>
            )}
          </div>
        </motion.div>
      )}

      {openBg && (
        <Term setOpen={setOpenBg} userInfo={userInfo} path="background" />
      )}

      {openPayment && (
        <Term
          setOpen={setOpenPayment}
          userInfo={userInfo}
          path="paymentmethod"
        />
      )}
    </motion.div>
  );
};

export default Navbar;
