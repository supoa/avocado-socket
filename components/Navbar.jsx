import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  const [user, setUser] = useState(null);

  const [open, setOpen] = useState(false);

  useEffect(async () => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    userInfo && setUser(userInfo);
  }, []);

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          Ava
          <span>cado</span>
        </div>
        <div className={styles.mid}>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Footer</li>
          </ul>
        </div>
        <div className={styles.right}>
          {user ? (
            <>
              <div className={styles.item}>Login</div>
              <div className={styles.item}>Register</div>
            </>
          ) : (
            <div className={styles.item}>Profile</div>
          )}
        </div>
      </div>

      <div className={styles.mobile__wrapper}>
        <div className={styles.logo}>
          Ava
          <span>c</span>
          ado
        </div>
        <div className={styles.menu}>#</div>
        <div className={styles.menu__items}>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            {user ? (
              <>
                {" "}
                <li>Login</li>
                <li>Register</li>
              </>
            ) : (
              <>
                <li>Profile</li>
                <li>Logout</li>
              </>
            )}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
