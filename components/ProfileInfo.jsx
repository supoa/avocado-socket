import React, { useEffect, useState } from "react";
import styles from "../styles/ProfileInfo.module.css";
import Image from "next/image";
import UpdateProfile from "./UpdateProfile";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { logout } from "../redux/userSlice";
import { useRouter } from "next/router";

const data = {
  name: "Nahid Hasan",
  rank: "Director",
  country: "Bangladesh",
  package: "5000 $",
  revenue: "598 $",
  team: "testuser1 testuser 2",
  email: "nahidhasan@gmail.com",
  join: "32/23/2033",
  nid: "85098250280958320",
  teamEarning: "$533",
};

const ProfileInfo = ({ userInfo }) => {
  const [open, setOpen] = useState(false);
  const [profileData, setProfileData] = useState(null);
  const dispatch = useDispatch();
  const router = useRouter();

  const fetchProfileInfo = async () => {
    try {
      const { data } = await axios.get(`/api/admin/${router.query.id}`, {
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
  }, [router.query.id]);

  return (
    <>
      {profileData ? (
        <div className={styles.wrapper}>
          <div className={styles.profile__photo}>
            {profileData.picture ? (
              <Image
                src={profileData.picture}
                width="200px"
                height="200px"
                alt=""
              />
            ) : (
              <></>
            )}
            <div className={styles.photo__wrapper}></div>
          </div>
          <div className={styles.profile__name}>{profileData.name}</div>
          <div className={styles.profile__email}> {profileData.email} </div>
          <btn onClick={() => setOpen(true)}>Update Profile</btn>
          {userInfo._id == router.query.id && (
            <div
              className={styles.profile__btn}
              onClick={() => {
               
                router.push("/login");
                dispatch(logout());
              }}
            >
              Log Out
            </div>
          )}
          <div
            className={styles.box}
            style={{
              backgroundImage:
                "url('https://template.viserlab.com/hyiplab/demo/assets/images/bg/hero.jpg')",
              backgroundSize: "fill",
              backgroundPosition: "center",
            }}
          >
            <div className={styles.item}>
              Joined : <span>{profileData.Join}</span>{" "}
            </div>
            <div className={styles.item}>
              Rank : <span>{profileData.rank}</span>
            </div>
            <div className={styles.item}>
              Country : <span>{profileData.country}</span>
            </div>
            <div className={styles.item}>
              Package : <span>{profileData.package}</span>
            </div>
            <div className={styles.item}>
              Revenue : <span>{profileData.revenue}</span>
            </div>
            <div className={styles.item}>
              NID / Passport : <span>{profileData.Nid}</span>{" "}
            </div>
            <div className={styles.item}>
              Team : <span>{profileData.team}</span>{" "}
            </div>
            <div className={styles.item}>
              Announcement: <span>{profileData.announcement}</span>
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
