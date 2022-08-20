import React, { useState } from "react";
import styles from "../styles/Contact.module.css";
import axios from "axios";
import { useRouter } from "next/router";

const UpateProfile = ({ setOpen, userInfo, profileData, setProfileData }) => {
  const [profile, setProfile] = useState(profileData);
  console.log(profileData);
  const router = useRouter();

  const handleSubmitLogin = async () => {
    console.log({ ...profile });
    try {
      const { _id, ...rest } = profile;
      const { data } = await axios.put(
        `/api/admin/${router.query.id}`,
        { ...rest },
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      );

      setProfileData((prev) => ({ ...prev, ...data }));
      // localStorage.setItem("userInfo", JSON.stringify(data));
      setOpen(false);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className={styles.wrapper}
      style={{
        background: "rgb(0,0,0,0.6)",

        // maxWidth: "370px",
        padding: "15px",
        paddingTop: "50px",
        paddingBottom: "50px",
        minWidth: "320px",
        maxHeight: "80vh",
        overflowY: "scroll",
      }}
    >
      <h2>Updating Your Account</h2>
      <form
        className={styles.form}
        // style={{ maxHeight: "80vh", overflowY: "scroll" }}
      >
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setProfile({ ...profile, name: e.target.value })}
        />

        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setProfile({ ...profile, email: e.target.value })}
        />
        <input type="file" placeholder="Image" />
        {userInfo.isAdmin && (
          <>
            <input
              type="text"
              placeholder="NID"
              onChange={(e) => setProfile({ ...profile, Nid: e.target.value })}
            />
            <input
              type="text"
              placeholder="Joined"
              onChange={(e) => setProfile({ ...profile, Join: e.target.value })}
            />
            <input
              type="text"
              placeholder="Purchase"
              onChange={(e) =>
                setProfile({ ...profile, Purchase: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Country"
              onChange={(e) =>
                setProfile({ ...profile, country: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="revenue"
              onChange={(e) =>
                setProfile({ ...profile, revenue: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="teamMembers"
              onChange={(e) =>
                setProfile({ ...profile, teamMembers: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="totalAsset"
              onChange={(e) =>
                setProfile({ ...profile, totalAsset: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="paymentHistory"
              onChange={(e) =>
                setProfile({ ...profile, paymentHistory: e.target.value })
              }
            />
          </>
        )}
        <div className={styles.flex}>
          <btn className={styles.btn} onClick={() => handleSubmitLogin()}>
            Update Account
          </btn>
          <div className={styles.btn__cancel} onClick={() => setOpen(false)}>
            Cancel
          </div>
        </div>
      </form>
      {/* <div className={styles.circle1}></div>
      <div className={styles.circle2}></div> */}
    </div>
  );
};

export default UpateProfile;
