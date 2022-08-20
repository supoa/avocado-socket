import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import styles from "../styles/Contact.module.css";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../redux/userSlice";

const Register = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [pic, setPic] = useState("");
  const [payMentMethod, setPaymentMethod] = useState("");
  const [country, setCountry] = useState("");
  const [Nid, setNid] = useState("");

  const handleSubmit = async () => {
    return;
    if (email == "" || name == "" || password == "" || country == "") {
      return;
    }

    try {
      console.log({ email, password, country });
      const { data } = await axios.post("/api/register", {
        email,
        password,
        country,
        payMentMethod,
        Nid,
        name,
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
          type="text"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />

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
        <input
          type="text"
          placeholder="NID"
          onChange={(e) => setNid(e.target.value)}
        />
        <input
          type="text"
          placeholder="Submit Binance Trc20 (usdt)"
          onChange={(e) => setPaymentMethod(e.target.value)}
        />
        <input
          type="text"
          placeholder="Country"
          onChange={(e) => setCountry(e.target.value)}
        />
        <div className={styles.btn} onClick={() => handleSubmit()}>
          Create Account
        </div>
      </form>
      <div className={styles.circle1}></div>
      <div className={styles.circle2}></div>
    </div>
  );
};

export default Register;
