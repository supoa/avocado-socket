import React, { useState, useEffect } from "react";
import styles from "../styles/Auth.module.css";
import axios from "axios";
import { useRouter } from "next/router";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../redux/userSlice";
import CircularProgress from "@mui/material/CircularProgress";
import Head from "next/head";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import { validate } from "email-validator";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

const Login = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [pic, setPic] = useState("");
  const [read, setRead] = useState(false);
  const [agreed, setAgreed] = useState(false);

  // const [payMentMethod, setPaymentMethod] = useState("");
  const [country, setCountry] = useState("");
  const [Nid, setNid] = useState("");
  const [fil, setFil] = useState("");
  const [ltc, setLtc] = useState("");
  const [bnb, setBnb] = useState("");
  const [errors, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [NNid, setNNid] = useState("");
  const [NNID, setNNID] = useState("");
  const [NEmail, setNEmail] = useState("");

  const userInfo = useSelector((state) => state.user.userInfo);
  const terms = useSelector((state) => state.terms.terms);
  useEffect(() => {
    if (userInfo) {
      router.push("/");
    }
  }, []);

  const handleSubmit = async () => {
    if (
      email.trim() == "" ||
      !validate(email.trim()) ||
      name.trim() == "" ||
      country.trim() == "" ||
      fil.trim() == "" ||
      bnb.trim() == "" ||
      ltc.trim() == "" ||
      Nid.trim() == "" ||
      NEmail.trim() == "" ||
      !validate(NEmail.trim()) ||
      NNID.trim() == "" ||
      password == ""
    ) {
      setError("Please enter All The Field Correctly");
      return;
    }

    if (!agreed || !read) {
      setError("You Must Have to go throw our Term and Conditions");
      return;
    }

    try {
      setLoading(true);
      const { data } = await axios.post("/api/register", {
        email,
        password,
        country,
        Nid,
        name,
        fil,
        ltc,
        bnb,
        NNID,
        NEmail,
      });
      console.log(data);
      dispatch(login(data));
      setLoading(false);
      router.push(`/profile/${data._id}`);
      console.log(data);
    } catch (error) {
      setLoading(false);
      setError(error.message);
      console.log(error);
    }
  };

  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Register To Avocado</title>
      </Head>
      <div className={styles.box}>
        <div className={styles.top}>
          <h2>
            Welcome To <span>AVOCADO</span>
          </h2>
          <p>
            Invest in an Industry Leader, Professional, and Reliable Company. We
            provide you with the most necessary features that will make your
            experience better
          </p>
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
            placeholder="BNB(BEP20)"
            onChange={(e) => setBnb(e.target.value)}
          />
          <input
            type="text"
            placeholder="Nominee Email"
            onChange={(e) => setNEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Nominee NID"
            onChange={(e) => setNNID(e.target.value)}
          />
          {errors && <div className={styles.error}>{errors} </div>}
          <div className={styles.conditions}>
            <div className={styles.item}>
              <div
                className={styles.icon}
                onClick={() => setRead((prev) => !prev)}
              >
                {read ? <CheckBoxIcon /> : <CheckBoxOutlineBlankIcon />}
              </div>
              <div className={styles.condition}>
                I have Already Read Avocados
                <span
                  className={styles.link}
                  onClick={() => terms?.content && router.push(terms.content)}
                >
                  Terms and Condition
                </span>
              </div>
            </div>
            <div className={styles.item}>
              <div
                className={styles.icon}
                onClick={() => setAgreed((prev) => !prev)}
              >
                {agreed ? <CheckBoxIcon /> : <CheckBoxOutlineBlankIcon />}
              </div>
              <div className={styles.condition}>
                I agree to The
                <span
                  className={styles.link}
                  onClick={() => terms?.content && router.push(terms.content)}
                >
                  {" "}
                  Terms of Service
                </span>
              </div>
            </div>
          </div>
          <div className={styles.flex}>
            {loading ? (
              <CircularProgress />
            ) : (
              <btn onClick={() => handleSubmit()}>Sign Up Now</btn>
            )}

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
