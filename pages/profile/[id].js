import React, { useEffect } from "react";
import ProfileInfo from "../../components/ProfileInfo";
import styles from "../../styles/Profile.module.css";
import ProfilePost from "../../components/ProfiePost";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
const Profile = () => {
  const userInfo = useSelector((state) => state.user.userInfo);
  const router = useRouter();

  useEffect(() => {
    if (!userInfo) {
      router.push("/login");
    }
  }, []);

  return (
    <div className={styles.wrapper}>
      <ProfileInfo userInfo={userInfo} />
      {/* <ProfilePost userInfo={userInfo} /> */}
    </div>
  );
};

export default Profile;
