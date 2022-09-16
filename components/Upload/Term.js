import React from "react";
import { useState } from "react";
import styles from "../../styles/Upload.module.css";

import CircularProgress from "@mui/material/CircularProgress";
import axios from "axios";
import { storage } from "../../utils/firebase";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";

const Term = ({ setOpen, userInfo, setTerms }) => {
  const [error, setError] = useState("");
  const [imageUrl, setImgUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(null);
  const [file, setFile] = useState("");
  const [image, setImage] = useState();
  const [progresspercent, setProgresspercent] = useState(0);

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

  const handleSubmit = async () => {
    if (!image) {
      return;
    }
    try {
      setLoading(true);
      const { data } = await axios.post(
        "/api/terms",
        {
          content: image,
        },
        {
          headers: {
            Authorization: `Bearer ${userInfo.token}`,
          },
        }
      );
      console.log({ data });
      setTerms(data);
      setLoading(false);
      setOpen(false);
      setFile(null);
      setImage(null);
      //   setPosts((prev) => [data, ...posts]);
    } catch (error) {
      setLoading(false);
      setLoading(true);

      console.log(error);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <input
          type="file"
          onChange={(e) => {
            setFile(e.target.files[0]);
            handleFile(e.target.files[0]);
          }}
        />
        <div className={styles.flex}>
          {uploading || loading ? (
            <CircularProgress />
          ) : (
            <btn onClick={() => handleSubmit()}>Submit</btn>
          )}
          <btn style={{ background: "red" }} onClick={() => setOpen(false)}>
            Cancel
          </btn>
        </div>
      </div>
    </div>
  );
};

export default Term;
