import React, { useEffect, useState } from "react";
import styles from "../styles/ProfilePost.module.css";
import Image from "next/image";
import axios from "axios";

const ProfiePost = () => {
  const [error, setError] = useState("");
  const [imageUrl, setImgUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [posts, setPosts] = useState([]);

  const fetch = async () => {
    try {
      const { data } = await axios.get("/api/profile");
      setPosts(data);
    } catch (error) {
      console.log(error);
    }
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
    </div>
  );
};

export default ProfiePost;
