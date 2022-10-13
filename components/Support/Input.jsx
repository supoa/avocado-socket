import axios from "axios";
import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setFetchAgain } from "../../redux/ChatSlice";
import styles from "../../styles/Support/Input.module.css";
import CryptoJS from "crypto-js";

const secretKey = "btc";

const Input = ({ socket }) => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const currentChat = useSelector((state) => state.chat.currentChat);
  const userInfo = useSelector((state) => state.user.userInfo);
  const socketC = useSelector((state) => state.socket.socket);
  const [typing, setTyping] = useState(false);

  const sendMessage = async () => {
    try {
      if (!text) return;
      const { data } = await axios.post(
        "/api/message",
        {
          chatId: currentChat._id,
          text: CryptoJS.AES.encrypt(text, secretKey).toString(),
        },
        {
          headers: {
            Authorization: `Bearer ${userInfo.token}`,
          },
        }
      );
      setText("");
      socket.emit("stop typing", {
        reciever: currentChat.users.find((item) => item._id != userInfo._id)
          ._id,
        chat: currentChat._id,
      });
      setTyping(false);
      socketC.emit("new message", {
        ...data,
        reciever: currentChat.users.find((item) => item._id != userInfo._id)
          ._id,
      });

      dispatch(setFetchAgain());
    } catch (error) {
      console.log(error);
    }
  };

  const handleTyping = (e) => {
    setText(e.target.value);

    if (!socket) return;

    if (!typing) {
      setTyping(true);
      socket.emit("typing", {
        reciever: currentChat.users.find((item) => item._id != userInfo._id)
          ._id,
        chat: currentChat._id,
      });
    }

    let lastTypingTime = new Date().getTime();
    let timerLength = 3000;

    setTimeout(() => {
      let timeNow = new Date().getTime();
      let timeDiff = timeNow - lastTypingTime;
      if (timeDiff >= timerLength && typing) {
        socket.emit("stop typing", {
          reciever: currentChat.users.find((item) => item._id != userInfo._id)
            ._id,
          chat: currentChat._id,
        });
        setTyping(false);
      }
    }, timerLength);
  };

  return (
    <div className={styles.wrapper}>
      <textarea
        type="text"
        className={styles.field}
        value={text}
        onChange={(e) => handleTyping(e)}
      ></textarea>
      <div className={styles.btn} onClick={() => sendMessage()}>
        send
      </div>
    </div>
  );
};

export default Input;
