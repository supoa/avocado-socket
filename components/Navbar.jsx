import React, { useState } from "react";
import styles from "../styles/Navbar.module.css";
import { useRouter } from "next/router";
import MenuIcon from "@mui/icons-material/Menu";
import ClearIcon from "@mui/icons-material/Clear";
import { useSelector } from "react-redux";

const Navbar = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const userInfo = useSelector((state) => state.user.userInfo);
  console.log(router);
  return (
    <div className={styles.navbar}>
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
          style={{ color: `${router.asPath == "/#contact" ? "gold" : ""}` }}
          className={styles.item}
          onClick={() => router.push("/#contact")}
        >
          Contact
        </div>
        {userInfo && (
          <div
            className={styles.item}
            onClick={() => router.push(`/profile/${userInfo._id}`)}
          >
            Dashboard
          </div>
        )}
      </div>

      <div className={styles.nav__right}>
        {userInfo ? (
          <div
            className={styles.profile}
            onClick={() => router.push(`/profile/${userInfo._id}`)}
          >
            {userInfo.name}
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
        <div className={styles.nav__vertical}>
          <div className={styles.nav__items}>
            <div className={styles.icon} onClick={() => setOpen(false)}>
              <ClearIcon />
            </div>
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
              style={{ color: `${router.asPath == "/#contact" ? "gold" : ""}` }}
              className={styles.item}
              onClick={() => router.push("/#contact")}
            >
              Contact
            </div>
          </div>

          <div className={styles.nav__right}>
            {userInfo ? (
              <div
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
        </div>
      )}
    </div>
  );
};

export default Navbar;
