import React, { useEffect, useState } from "react";
import styles from "../styles/Announcement.module.css";
import { useRouter } from "next/router";
import axios from "axios";
// import notice from "../data/notice";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
const Announcement = () => {
  const [notice, setNotice] = useState();
  const [content, setContent] = useState("");
  const router = useRouter();
  const userInfo = useSelector((state) => state.user.userInfo);

  const fetch = async () => {
    try {
      const { data } = await axios.get("/api/announcement");
      setNotice(data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const handleNotic = async () => {
    try {
      const { data } = await axios.post(
        "/api/announcement",
        {
          content,
        },
        {
          headers: {
            Authorization: `Bearer ${userInfo.token}`,
          },
        }
      );
      setContent("");
      setNotice(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetch();
  }, [router.asPath]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
        transition: { duration: 0.5 },
      }}
      className={styles.wrapper}
    >
      <h1>Announcement</h1>
      <p>{notice?.content}</p>
      {userInfo?.isAdmin && (
        <div className={styles.form__container}>
          <input
            type="text"
            className={styles.field}
            placeholder="Announce Notice"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <div className={styles.plus} onClick={() => handleNotic()}>
            +
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default Announcement;
