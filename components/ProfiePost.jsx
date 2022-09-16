import React, { useEffect, useState } from "react";
import styles from "../styles/ProfilePost.module.css";
import Image from "next/image";
import axios from "axios";
import { storage } from "../utils/firebase";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import CircularProgress from "@mui/material/CircularProgress";
import { useRouter } from "next/router";
import DeleteIcon from "@mui/icons-material/Delete";

const ProfiePost = ({ userInfo }) => {
  const [error, setError] = useState("");
  const [imageUrl, setImgUrl] = useState("");
  const [open, setOpen] = useState(false);
  const [posts, setPosts] = useState([]);
  const [formOpen, setFormOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(null);
  const [file, setFile] = useState("");
  const [image, setImage] = useState();
  const [progresspercent, setProgresspercent] = useState(0);
  const router = useRouter();

  console.log(posts);

  const fetch = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`/api/profile/${router.query.id}`, {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      });
      console.log({ data });

      setPosts(data);
      setFile("");
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  console.log(progresspercent);
  const handleSubmit = async () => {
    if (!image) {
      return;
    }
    try {
      setLoading(true);
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
      setLoading(false);
      setFormOpen(false);
      setFile(null);
      setImage(null);
      setPosts((prev) => [data, ...posts]);
    } catch (error) {
      setLoading(false);
      setLoading(true);

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

  const handleDelete = async (id) => {
    try {
      const { data } = await axios.delete(
        `/api/admin/${id}`,

        {
          headers: {
            Authorization: `Bearer ${userInfo.token}`,
          },
        }
      );
      setPosts(posts.filter((item) => item._id != id));
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetch();
  }, [router.query.id]);
  

  return (
    <div className={styles.wrapper}>
      <div className={styles.top}>
        {loading ? <>laoding...</> : <> Structure for you ({posts.length})</>}
        {userInfo?.isAdmin && (
          <div className={styles.plus} onClick={() => setFormOpen(true)}>
            +
          </div>
        )}
      </div>

      {formOpen && (
        <div className={styles.add__post__container}>
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
            <btn
              style={{ background: "red" }}
              onClick={() => setFormOpen(false)}
            >
              Cancel
            </btn>
          </div>
        </div>
      )}

      <div className={styles.posts}>
        {!loading ? (
          posts.map((post) => (
            <div className={styles.post}>
              {post.content && (
                <Image src={post.content} width="400px" height="400px" />
              )}
              {userInfo?.isAdmin && (
                <div className={styles.icon}>
                  <DeleteIcon onDoubleClick={() => handleDelete(post._id)} />
                </div>
              )}
            </div>
          ))
        ) : (
          <div className={styles.loading}>
            <CircularProgress />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfiePost;
