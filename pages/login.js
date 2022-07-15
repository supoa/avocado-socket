import React, { useState } from "react";
import styles from "../styles/Contact.module.css";
import axios from "axios";
import { useRouter } from "next/router";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../redux/userSlice";


const Login = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async () => {
    if (email == "" || password == "") {
      return;
    }

    try {

      const { data } = await axios.post("/api/login", {
        email,
        password,
      });
      dispatch(login(data));
      router.push(`/profile/${data._id}`);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.flex}>
        <Link href="/login">
          <div
            className={styles.router}
            style={{ color: `${router.asPath == "/login" ? "white" : ""}` }}
          >
            Login
          </div>
        </Link>

        <Link href="/register">
          <div
            className={styles.router}
            style={{ color: `${router.asPath == "/register" ? "white" : ""}` }}
          >
            Register
          </div>
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
        <div className={styles.btn} onClick={() => handleSubmit()}>
          Log in
        </div>
      </form>
      <div className={styles.circle1}></div>
      <div className={styles.circle2}></div>
    </div>
  );
};

export default Login;
