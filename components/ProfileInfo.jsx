import React, { useEffect, useState } from "react";
import styles from "../styles/ProfileInfo.module.css";
import Image from "next/image";
import UpdateProfile from "./UpdateProfile";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { logout } from "../redux/userSlice";
import { useRouter } from "next/router";

const ProfileInfo = ({ userInfo }) => {
  const [open, setOpen] = useState(false);
  const [profileData, setProfileData] = useState(null);
  const dispatch = useDispatch();
  const router  = useRouter();

  const fetchProfileInfo = async () => {
    try {
      const { data } = await axios.get(`/api/admin/${userInfo._id}`, {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      });
      console.log(data);
      setProfileData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProfileInfo();
  }, []);

  return (
    <>
      {profileData ? (
        <div className={styles.wrapper}>
          <div className={styles.profile__photo}>
            <Image
              src="/images/crypto1.jpg"
              width="200px"
              height="200px"
              alt=""
            />
          </div>
          <div className={styles.profile__name}>{profileData.name}</div>
          <div className={styles.profile__email}> {profileData.email} </div>
          <div className={styles.profile__btn} onClick={() => setOpen(true)}>
            Update Your Profile
          </div>
          <div
            className={styles.profile__btn}
            style={{ color: "red", background: "rgb(255,0,0,0.2)" }}
            onClick={() => {
              dispatch(logout());
              router.push("/login");
            }}
          >
            Log Out
          </div>
          <div className={styles.box}>
            <div className={styles.item}>Join:{profileData.Join} </div>
            <div className={styles.item}>
              PaymentHistory:{profileData.paymentHistory}
            </div>
            <div className={styles.item}>Country: {profileData.country}</div>
            <div className={styles.item}>NID:{profileData.Nid}</div>
            <div className={styles.item}>Purchase: {profileData.Purchase}</div>
            <div className={styles.item}>
              Revenue:total {profileData.revenue}
            </div>
            <div className={styles.item}>
              Direct Member:{profileData.directMember}
            </div>

            <div className={styles.item}>
              Team Member:{profileData.teamMembers}
            </div>

            <div className={styles.item}>
              Total Assets: {profileData.totalAsset}
            </div>
          </div>
          {open && (
            <div className={styles.profile__update}>
              {
                <UpdateProfile
                  setOpen={setOpen}
                  userInfo={userInfo}
                  profileData={profileData}
                  setProfileData={setProfileData}
                />
              }
            </div>
          )}
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default ProfileInfo;
