import React, { useRef, useState } from "react";
import styles from "../styles/Contact.module.css";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import axios from "axios";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(form.current);

    emailjs
      .sendForm(
        "service_neut6g5",
        "template_0j947pm",
        form.current,
        "23vsjozybW-Dux2Oq"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  // const sendEmail = async (e) => {
  //   e.preventDefault();

  //   if (name == "" || email == "" || message == "") {
  //     return;
  //   }
  //   try {
  //     const res = await axios.post("/api/getmail", {
  //       name,
  //       email,
  //       message,
  //     });

  //     res.status = 200
  //       ? setStatus("Email Send Successfully")
  //       : setStatus("Failed to Send Email");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <div
      className={styles.wrapper}
      style={{
        backgroundImage:
          "url('https://template.viserlab.com/hyiplab/demo/assets/images/bg/bg-3.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      id="contact"
    >
      <h1>Get in touch with Us</h1>

      <div className={styles.container}>
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input
            type="text"
            name="from_name"
            onChange={(e) => setName(e.target.value)}
          />
          <label>Email</label>
          <input
            type="email"
            name="to_email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Message</label>
          <textarea
            name="message"
            onChange={(e) => setMessage(e.target.value)}
          />
          <input
            style={{
              background: "#cca354",
              color: "black",
            }}
            className="btn"
            type="submit"
            value="Send"
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;
