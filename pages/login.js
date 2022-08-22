import React, { useState } from "react";
import styles from "../styles/Auth.module.css";
import axios from "axios";
import { useRouter } from "next/router";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../redux/userSlice";
import auth from "../data/auth";

const Login = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async () => {
    if (email == "" || password == "") {
      setError("Please enter all the field");
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
      <div className={styles.box}>
        <div className={styles.top}>
          <h2>
            Welcome To <span>HYLIPLAB</span>
          </h2>
          <p>{auth.content}</p>
        </div>
        <form className={styles.form__container}>
          <h3>Login</h3>
          {/* <label>User Name</label> */}
          <input
            type="text"
            placeholder="Enter Your Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          {/* <label>User Name</label> */}
          <input
            type="text"
            placeholder="Enter You Password"
            onChange={(e) => setPassword(e.target.value)}
          />{" "}
          <div className={styles.error}>{error} </div>
          <div className={styles.flex}>
            <btn onClick={() => handleSubmit()}>Login Now</btn>
            <div className={styles.link}>
              Have not Account ?{" "}
              <span onClick={() => router.push("/register")}>Sign Up</span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
