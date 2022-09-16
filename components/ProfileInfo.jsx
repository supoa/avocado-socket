import React, { useEffect, useState } from "react";
import styles from "../styles/ProfileInfo.module.css";
import Image from "next/image";
import UpdateProfile from "./UpdateProfile";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { logout } from "../redux/userSlice";
import { useRouter } from "next/router";
import DeleteIcon from "@mui/icons-material/Delete";
import CircularProgress from "@mui/material/CircularProgress";

const ProfileInfo = ({ userInfo }) => {
  const [open, setOpen] = useState(false);
  const [profileData, setProfileData] = useState();
  const dispatch = useDispatch();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

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

  const handleDelete = async () => {
    try {
      setLoading(true);
      const { data } = await axios.delete(`/api/profile/${router.query.id}`, {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      });
      setLoading(false);

      router.push("/admin");
      if (userInfo._id == router.query.id) {
        router.push("/login");
        dispatch(logout());
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
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
              <Image src="/avatar.png" width="200px" height="200px" alt="" />
            )}
            <div className={styles.photo__wrapper}></div>
          </div>
          <div className={styles.profile__name}>{profileData.name}</div>
          <div className={styles.profile__email}> {profileData.email}</div>
          <btn onClick={() => setOpen(true)}>Update Profile</btn>
          {userInfo?._id == router.query.id && (
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
          {userInfo?.isAdmin && (
            <div className={styles.icon}>
              {loading ? (
                <CircularProgress />
              ) : (
                <DeleteIcon onDoubleClick={() => handleDelete()} />
              )}
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
            <div className={styles.item}>
              Nominee NID: <span>{profileData.NNID}</span>
            </div>
            <div className={styles.item}>
              Nominee Email: <span>{profileData.NEmail}</span>
            </div>
            <div className={styles.item}>
              Working Days: <span>{profileData.workignDays}</span>
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
        <div className={styles.loading}>
          <CircularProgress />
        </div>
      )}
    </>
  );
};

export default ProfileInfo;
