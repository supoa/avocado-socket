import React, { useEffect, useState } from "react";
import styles from "../styles/ProfilePost.module.css";
import Image from "next/image";
import axios from "axios";
import { storage } from "../utils/firebase";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import CircularProgress from "@mui/material/CircularProgress";
import { useRouter } from "next/router";

const ProfiePost = ({ userInfo }) => {
  const [error, setError] = useState("");
  const [imageUrl, setImgUrl] = useState("");
  const [open, setOpen] = useState(false);
  const [posts, setPosts] = useState([]);
  const [formOpen, setFormOpen] = useState(false);
  const [loading, setLoading] = useState(null);
  const [uploading, setUploading] = useState(null);
  const [file, setFile] = useState("");
  const [image, setImage] = useState();
  const [progresspercent, setProgresspercent] = useState(0);
  const router = useRouter();

  const fetch = async () => {
    try {
      const { data } = await axios.get(`/api/profile/${router.query.id}`, {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      });
      setPosts(data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(progresspercent);
  const handleSubmit = async () => {
    try {
      const { data } = await axios.post(
        `/api/admin/${router.query.id}`,
        {
          content: image,
        },
        {
          headers: {
            Authorization: `Bearer ${userInfo.token}`,
          },
        }
      );
      setPosts((prev) => [...posts, data]);
    } catch (error) {
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

  useEffect(() => {
    fetch();
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.top}>
        <div className={styles.left}>Your Post</div>
        <div className={styles.right}>
          <div className={styles.icon} onClick={() => setOpen((prev) => !prev)}>
            Open
          </div>
        </div>
      </div>
      {open && (
        <div className={styles.posts}>
          {posts.length > 0 &&
            posts.map((post) => (
              <div className={styles.post}>
                {post.content && (
                  <Image src={post.content} width="200px" height="200px" />
                )}
              </div>
            ))}
        </div>
      )}

      {userInfo?.isAdmin && (
        <div className={styles.add__post__container}>
          <input
            type="file"
            onChange={(e) => {
              setFile(e.target.files[0]);
              handleFile(e.target.files[0]);
            }}
          />
          <div className={styles.flex}>
            <btn onClick={() => handleSubmit()}>Submit</btn>
            <btn>Cancel</btn>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfiePost;
