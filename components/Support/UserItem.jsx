import Image from "next/image";
import React from "react";
import styles from "../../styles/Support/UserItem.module.css";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setCurrentChat } from "../../redux/ChatSlice";

const UserItem = ({ user, currentChat, userInfo }) => {
  const dispatch = useDispatch();
  const activeUsers = useSelector((state) => state.socket.activeUsers);
  const socket = useSelector((state) => state.socket.socket);

  const startChatWith = async () => {
    try {
      const { data } = await axios.post(
        "/api/chat/admin",
        {
          userId: user._id,
        },
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
    <div
      className={styles.wrapper}
      style={
        currentChat.users.find((item) => item._id == user._id)
          ? { color: "black", background: "white" }
          : {}
      }
      onClick={() => startChatWith()}
    >
      <div className={styles.picture}>
        <Image
          src={user.picture}
          width={20}
          height={20}
          borderRadius="50%"
          alt=""
        />
      </div>
      <div className={styles.name}>{user.name}</div>
      {activeUsers?.active?.find((item) => item.userId == user._id) && (
        <div className={styles.active__icon}></div>
      )}
    </div>
  );
};

export default UserItem;
