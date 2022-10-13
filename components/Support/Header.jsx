import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeChat } from "../../redux/ChatSlice";
import styles from "../../styles/Support/Header.module.css";
import UserItem from "./UserItem";

const Header = ({ userInfo }) => {
  const dispatch = useDispatch();
  const [users, setUsers] = useState([]);
  const currentChat = useSelector((state) => state.chat.currentChat);
  // const socket = useSelector((state) => state.socket.socket);
  const fetchUsers = async () => {
    try {
      const { data } = await axios.get(
        "/api/chat",

        {
          headers: {
            Authorization: `Bearer ${userInfo.token}`,
          },
        }
      );
      setUsers(data);
      // console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    userInfo.isAdmin && fetchUsers();
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
        {userInfo.isAdmin ? (
          users
            .filter((item) => item._id != userInfo.id)
            .reverse()
            .map((user) => (
              <UserItem
                user={user}
                currentChat={currentChat}
                userInfo={userInfo}
              />
            ))
        ) : (
          <>...</>
        )}
      </div>
      <div className={styles.right} onClick={() => dispatch(closeChat())}>
        X
      </div>
    </div>
  );
};

export default Header;
