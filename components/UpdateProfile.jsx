import React, { useState } from "react";
import styles from "../styles/Contact.module.css";
import axios from "axios";
import { useRouter } from "next/router";
import { storage } from "../utils/firebase";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import CircularProgress from "@mui/material/CircularProgress";
import { login } from "../redux/userSlice";
import { useDispatch } from "react-redux";

const UpateProfile = ({ setOpen, userInfo, profileData, setProfileData }) => {
  const [profile, setProfile] = useState(profileData);
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [file, setFile] = useState("");
  const [image, setImage] = useState();
  const [progresspercent, setProgresspercent] = useState(0);
  const dispatch = useDispatch();

  console.log(progresspercent);
  const router = useRouter();

  const handleSubmitLogin = async () => {
    console.log({ ...profile });
    setLoading(true);
    try {
      const { _id, ...rest } = profile;
      const { data } = await axios.put(
        `/api/admin/${router.query.id}`,
        { ...rest, picture: image },
        {
          headers: { Authorization: `Bearer ${userInfo.token}` },
        }
      );

      setProfileData((prev) => ({ ...prev, ...data }));

      router.query.id == userInfo._id &&
        dispatch(login({ ...userInfo, picture: data.picture }));

      setImage(null);
      setOpen(false);
      setLoading(false);
      console.log(data);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const handleFile = (file, item) => {
    console.log("file upload starred");
    if (!file) return;
    console.log("uploading...");
    setUploading(true);

    const storageRef = ref(storage, `poll/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgresspercent(progress);
      },
      (error) => {
        setUploading(false);
        alert(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log(downloadURL);
          setImage(downloadURL);
          setUploading(false);
          setFile("");
        });
      }
    );
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
        {userInfo._id == router.query.id && (
          <>
            <input
              type="text"
              placeholder="Name"
              onChange={(e) => setProfile({ ...profile, name: e.target.value })}
            />
            <input
              type="email"
              placeholder="Email"
              onChange={(e) =>
                setProfile({ ...profile, email: e.target.value })
              }
            />
            <input
              type="file"
              placeholder="file"
              onChange={(e) => {
                setFile(e.target.files[0]);
                handleFile(e.target.files[0]);
              }}
            />
          </>
        )}

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
              placeholder="Rank"
              onChange={(e) => setProfile({ ...profile, rank: e.target.value })}
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
              placeholder="Team"
              onChange={(e) => setProfile({ ...profile, team: e.target.value })}
            />
            <input
              type="text"
              placeholder="Package"
              onChange={(e) =>
                setProfile({ ...profile, package: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Nominee NID"
              onChange={(e) => setProfile({ ...profile, NNID: e.target.value })}
            />
            <input
              type="text"
              placeholder="Nominee Email"
              onChange={(e) =>
                setProfile({ ...profile, NEmail: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Workgin Days"
              onChange={(e) =>
                setProfile({ ...profile, workingDays: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Announcement"
              onChange={(e) =>
                setProfile({ ...profile, announcement: e.target.value })
              }
            />
          </>
        )}
        <div className={styles.flex}>
          {loading || uploading ? (
            <CircularProgress />
          ) : (
            <btn className={styles.btn} onClick={() => handleSubmitLogin()}>
              Update Account
            </btn>
          )}

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
