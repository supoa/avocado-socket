import React from "react";
import styles from "../../styles/Support/ChatBox.module.css";
import Header from "./Header";
import Input from "./Input";
import Messages from "./Messages";
import { io } from "socket.io-client";

import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { setFetchAgain } from "../../redux/ChatSlice";
import { setSocket } from "../../redux/socketSlice";
import axios from "axios";
const ENDPOINT = "http://localhost:4000";

const socket = io(ENDPOINT);
const ChatBox = () => {
  const dispatch = useDispatch();
  const [socketConnected, setSocketConnected] = useState(null);
  const userInfo = useSelector((state) => state.user.userInfo);
  const currentChat = useSelector((state) => state.chat.currentChat);
  const [isTyping, setIsTyping] = useState(null);

  useEffect(() => {
    socket.emit("setup", userInfo);
    socket.on("connected", () => setSocketConnected(true));
    dispatch(setSocket(socket));

    // socket.on("message recieved", (newMessage) => {
    //   console.log({ newMessage });
    //   dispatch(setFetchAgain());
    // });
  }, []);

  useEffect(() => {
    socketConnected && socket.emit("join chat", currentChat._id);
  }, [currentChat]);

 

  useEffect(() => {
    socket.on("message recieved", (newMessage) => {
      console.log({ newMessage });
      dispatch(setFetchAgain());
    });

    socket.on("typing", (data) => {
      console.log("typing");
      setIsTyping(data);
    });

    socket.on("stop typing", (data) => {
      setIsTyping(null);
    });
  });

  return (
    <div className={styles.wrapper}>
      {socketConnected && (
        <>
          <Header userInfo={userInfo} socket={socket} />
          <Messages userInfo={userInfo} socket={socket} isTyping={isTyping} />
          <Input userInfo={userInfo} socket={socket} />
         
        </>
      )}
    </div>
  );
};

export default ChatBox;
