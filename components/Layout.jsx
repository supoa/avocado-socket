import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useDispatch, useSelector } from "react-redux";
import styles from "../styles/Layout.module.css";
import { useEffect } from "react";
import { setActiveUsers, setSocket } from "../redux/socketSlice";
const ENDPOINT = "http://localhost:4000";
import { useSnackbar } from "notistack";
import { setCurrentChat, setFetchAgain } from "../redux/ChatSlice";
import ChatIcon from "@mui/icons-material/Chat";
import ChatBox from "./Support/ChatBox";
import axios from "axios";
import { useRouter } from "next/router";
const Layout = ({ children }) => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
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
    <>
      <Navbar />
      {children}

      <Footer />

      {router.asPath != "/support" && (
        <>
          {userInfo && (
            <div className={styles.chat__icon}>
              <ChatIcon
                onClick={() => {
                  startChatWithAdmin();
                }}
              />
            </div>
          )}
        </>
      )}

      {currentChat && <ChatBox />}
    </>
  );
};

export default Layout;
