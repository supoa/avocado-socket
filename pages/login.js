import React, { useState } from "react";
import styles from "../styles/Contact.module.css";
import axios from "axios";
import { useRouter } from "next/router";
import Link from "next/link";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  return (
    <div className={styles.wrapper}>
      <div className={styles.flex}>
        <Link href="/login">
          <div className={styles.router}>Login</div>
        </Link>

        <Link href="/register">
          <div className={styles.router}>Register</div>
        </Link>
      </div>
      <form className={styles.form}>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className={styles.btn}>Log in</div>
      </form>
      <div className={styles.circle1}></div>
      <div className={styles.circle2}></div>
    </div>
  );
};

export default Login;
