import React, { useState } from "react";
import styles from "../styles/Auth.module.css";
import axios from "axios";
import { useRouter } from "next/router";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../redux/userSlice";
import CircularProgress from "@mui/material/CircularProgress";
import Head from "next/head";
const Login = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (email == "" || password == "") {
      setError("Please enter all the field");
      return;
    }

    try {
      setLoading(true);
      const { data } = await axios.post("/api/login", {
        email,
        password,
      });
      dispatch(login(data));
      setLoading(false);
      router.push(`/profile/${data._id}`);
      console.log(data);
    } catch (error) {
      setError(error.message);
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Login To Avocado</title>
      </Head>
      <div className={styles.box}>
        <div className={styles.top}>
          <h2>
            Welcome To <span>AVOCADO</span>
          </h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus
            distinctio deserunt impedit similique debitis voluptatum enim.
          </p>
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
          {errors && <div className={styles.error}>{errors} </div>}
          <div className={styles.flex}>
            {loading ? (
              <CircularProgress />
            ) : (
              <btn onClick={() => handleSubmit()}>Login Now</btn>
            )}
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
