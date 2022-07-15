import React from "react";
import ProfileInfo from "../../components/ProfileInfo";
import styles from "../../styles/Profile.module.css";
import ProfilePost from "../../components/ProfiePost";

const Profile = () => {
  return (
    <div className={styles.wrapper}>
      <ProfileInfo />
      <div className={styles.circle1}></div>
      <div className={styles.circle2}></div>
      <ProfilePost />
    </div>
  );
};

export default Profile;
