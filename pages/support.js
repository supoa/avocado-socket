import Image from "next/image";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "../styles/Support/Support.module.css";
import { useRouter } from "next/router";
import axios from "axios";
import { setCurrentChat } from "../redux/ChatSlice";
import ChatBox from "../components/Support/ChatBox";

const support = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.user.userInfo);
  const currentChat = useSelector((state) => state.chat.currentChat);

  const startChatWithAdmin = async () => {
    try {
      const { data } = await axios.post(
        "/api/chat",
        {},
        {
          headers: {
            Authorization: `Bearer ${userInfo.token}`,
          },
        }
      );
      dispatch(setCurrentChat(data));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.icon}>
        <Image
          src="https://cdn-icons-png.flaticon.com/512/1458/1458238.png"
          width="100px"
          height="100px"
          alt=""
        />
      </div>
      <p>
        We have initiated a live chat session with you as there is an important
        matter that requires your attention.
      </p>
      <p>
        You may be required to login in the next step if you have not already
        done so
      </p>
      {userInfo ? (
        <btn
          className={styles.btn}
          onClick={() => {
            startChatWithAdmin();
          }}
        >
          Chat Now
        </btn>
      ) : (
        <btn className={styles.btn} onClick={() => router.push("/login")}>
          Login To Start Chat
        </btn>
      )}

      {currentChat && <ChatBox  />}
    </div>
  );
};

export default support;
