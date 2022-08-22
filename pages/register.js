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
  const [name, setName] = useState("");
  const [pic, setPic] = useState("");
  // const [payMentMethod, setPaymentMethod] = useState("");
  const [country, setCountry] = useState("");
  const [Nid, setNid] = useState("");
  const [fil, setFil] = useState("");
  const [ltc, setLtc] = useState("");
  const [bnb, setBnb] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async () => {
    if (
      email.trim() == "" ||
      name.trim() == "" ||
      password.trim() == "" ||
      country.trim() == "" ||
      Nid.trim() == "" ||
      ltc.trim() == "" ||
      bnb.trim() == "" ||
      fil.trim() == ""
    ) {
      setError("Please enter All The Field Correctly");
      return;
    }

    try {
      console.log({ email, password, country });
      const { data } = await axios.post("/api/register", {
        email,
        password,
        country,
        // payMentMethod,
        Nid,
        name,
        fil,
        ltc,
        bnb,
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
          <h3>Register</h3>
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
            placeholder="NID / Passport"
            onChange={(e) => setNid(e.target.value)}
          />

          <input
            type="text"
            placeholder="Country"
            onChange={(e) => setCountry(e.target.value)}
          />
          <input
            type="text"
            placeholder="FIL"
            onChange={(e) => setFil(e.target.value)}
          />
          <input
            type="text"
            placeholder="LTC"
            onChange={(e) => setLtc(e.target.value)}
          />

          <input
            type="text"
            placeholder="BNB(BEP2)"
            onChange={(e) => setBnb(e.target.value)}
          />
          {error && <div className={styles.error}>{error} </div>}
          <div className={styles.flex}>
            <btn onClick={() => handleSubmit()}>Sign Up Now</btn>
            <div className={styles.link}>
              Already have Account ?
              <span onClick={() => router.push("/login")}>Login</span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
