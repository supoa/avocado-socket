import React from "react";
import styles from "../../styles/Support/Messages.module.css";
import moment from "moment";
import CryptoJS from "crypto-js";

const secretKey = "btc";

const SingleMessage = ({ msg, userInfo }) => {
  return (
    <div className={styles.flex}>
      {" "}
      <div
        style={
          msg.sender == userInfo._id
            ? {
                // background: "gold",
                textAlign: "left",
                marginRight: "15px",
                borderRadius: "0 16px 6px 0",
                color: "white",
                width: "80%",
                paddingLeft: "10px",
              }
            : {
                background: "linear-gradient(45deg, white, rgb(206, 195, 132))",
                textAlign: "right",
                marginLeft: "20%",
                borderRadius: "16px 0px 0px 6px",
                color: "black",
                width: "80%",
                paddingRight: "10px",
              }
        }
        className={styles.msg}
      >
        <div>
          {CryptoJS.AES.decrypt(msg.text, secretKey).toString(
            CryptoJS.enc.Utf8
          )}
        </div>
        <div
          style={
            msg.sender == userInfo._id
              ? { fontSize: "50%", textAlign: "right", margin: "5px" }
              : { fontSize: "50%", textAlign: "left", margin: "5px" }
          }
        >
          {moment(msg.createdAt).fromNow()}
        </div>
      </div>
    </div>
  );
};

export default SingleMessage;
