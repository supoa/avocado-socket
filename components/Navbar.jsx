import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";

const Navbar = () => {
  const userInfo = useSelector((state) => state.user.userInfo);
  const router = useRouter();
  const [open, setOpen] = useState(false);
  console.log(router);

  return (
    <>
      <div className={styles.wrapper} id="home">
        <div className={styles.logo}>
          Ava
          <span>cado</span>
        </div>
        <div className={styles.mid}>
          <ul>
            <li
              onClick={() => router.push("/")}
              style={{ color: `${router.asPath == "/" ? "white" : ""}` }}
            >
              Home
            </li>
            <li
              onClick={() => router.push("/#about")}
              style={{ color: `${router.asPath == "/#about" ? "white" : ""}` }}
            >
              About
            </li>
            <li
              onClick={() => router.push("/#contact")}
              style={{
                color: `${router.asPath == "/#contact" ? "white" : ""}`,
              }}
            >
              Contact
            </li>
            <li
              onClick={() => router.push("/#footer")}
              style={{ color: `${router.asPath == "/#footer" ? "white" : ""}` }}
            >
              {" "}
              Footer
            </li>
          </ul>
        </div>
        <div className={styles.right}>
          {!userInfo ? (
            <>
              <div
                className={styles.item}
                onClick={() => router.push("/login")}
                style={{ color: `${router.asPath == "/login" ? "white" : ""}` }}
              >
                Login
              </div>
              <div
                className={styles.item}
                onClick={() => router.push("/register")}
                style={{
                  color: `${router.asPath == "/register" ? "white" : ""}`,
                }}
              >
                Register
              </div>
            </>
          ) : (
            <div
              className={styles.item}
              onClick={() => router.push(`/profile/${userInfo._id}`)}
              style={{
                color: `${router.route == "/profile/[id]" ? "white" : ""}`,
              }}
            >
              Profile
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
