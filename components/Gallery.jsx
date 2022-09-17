import axios from "axios";
import Image from "next/image";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setGallery } from "../redux/termSlice";
import styles from "../styles/Gallery.module.css";
import Term from "./Upload/Term";
import DeleteIcon from "@mui/icons-material/Delete";
import UpgradeIcon from "@mui/icons-material/Upgrade";
import { motion } from "framer-motion";

const Gallery = () => {
  const [open, setOpen] = useState(false);
  const [updating, setUpdating] = useState(false);
  const dispatch = useDispatch();
  const [images, setImages] = useState([]);
  const userInfo = useSelector((state) => state.user.userInfo);
  const gallery = useSelector((state) => state.terms.gallery);
  const fetch = async () => {
    try {
      const { data } = await axios.get("/api/gallery");
      console.log({ data });
      dispatch(setGallery(data));
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const { data } = await axios.delete(`/api/gallery?id=${id}`, {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      });

      console.log({ data });

      dispatch(setGallery(gallery.filter((item) => item._id != id)));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <div className={styles.wrapper}>
      {userInfo?.isAdmin && (
        <span className={styles.btn} onClick={() => setOpen(true)}>
          +
        </span>
      )}
      <h1>Events</h1>
      <div className={styles.gallery}>
        {gallery.map((image) => (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { duration: 0.5 },
            }}
            className={styles.imgContainer}
          >
            {" "}
            <Image src={image?.content} width={300} height={260} alt="" />
            <div className={styles.title}>{image?.title}</div>
            {userInfo?.isAdmin && (
              <div className={styles.actions}>
                <span
                  className={styles.icon}
                  onDoubleClick={() => handleDelete(image._id)}
                >
                  <DeleteIcon />
                </span>
                <span
                  className={styles.icon}
                  onClick={() => setUpdating(image)}
                >
                  <UpgradeIcon />
                </span>
              </div>
            )}
          </motion.div>
        ))}
      </div>
      {open && (
        <Term
          setOpen={setOpen}
          userInfo={userInfo}
          path="gallery"
          gallery={true}
        />
      )}{" "}
      {updating && (
        <Term
          setOpen={setUpdating}
          userInfo={userInfo}
          path="gallery"
          gallery={true}
          updating={updating}
        />
      )}{" "}
    </div>
  );
};

export default Gallery;
