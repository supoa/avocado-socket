import React, { useState } from "react";
import styles from "../styles/Navbar.module.css";
import { useRouter } from "next/router";
import MenuIcon from "@mui/icons-material/Menu";
import ClearIcon from "@mui/icons-material/Clear";

const Navbar = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const user = false;
  return (
    <div className={styles.navbar}>
      <div className={styles.nav__logo} onClick={() => router.push("/")}>
        Crypto<span>C</span>ade
      </div>
      <div className={styles.nav__items}>
        <div className={styles.item} onClick={() => router.push("/")}>
          Home
        </div>
        <div className={styles.item} onClick={() => router.push("/#header")}>
          About
        </div>
        <div className={styles.item} onClick={() => router.push("/#price")}>
          Pricing
        </div>
        <div className={styles.item} onClick={() => router.push("/#architecture")}>
          Services
        </div>
        <div className={styles.item} onClick={() => router.push("/#news")}>
          News
        </div>
      </div>

      <div className={styles.nav__right}>
        {user ? (
          <div className={styles.profile}>Mark 41</div>
        ) : (
          <>
            <div className={styles.sign} onClick={() => router.push("/login")}>
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
            <div className={styles.item}>Home</div>
            <div className={styles.item}>About</div>
            <div className={styles.item}>Pricing</div>
            <div className={styles.item}>Services</div>
            <div className={styles.item}>News</div>
          </div>

          <div className={styles.nav__right}>
            {user ? (
              <div className={styles.profile}>Mark 41</div>
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