import React, { useEffect, useState } from "react";
import styles from "../styles/Admin.module.css";
import Table from "../components/Table";
import axios from "axios";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import Head from "next/head";
import CircularProgress from "@mui/material/CircularProgress";

const Admin = () => {
  const [connections, setConnections] = useState();
  const [users, setUsers] = useState([]);
  const userInfo = useSelector((state) => state.user.userInfo);
  const router = useRouter();

  const makeConnection = async () => {
    try {
      const { data } = await axios.post("/api/admin/connection");
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchConnection = async () => {
    try {
      const { data } = await axios.get("/api/admin/connection");
      console.log(data);
      setConnections(data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchProfiles = async () => {
    try {
      const { data } = await axios.get("/api/admin", {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      });
      setUsers(data.reverse());
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!userInfo || !userInfo?.isAdmin) {
      router.push("/login");
    }
    // makeConnection();
    // fetchConnection();
    fetchProfiles();
  }, []);

  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Admin Dashboard</title>
      </Head>
      <h1>Welcome To Your Dashboard</h1>

      <div className={styles.table__wrapper}>
        {users.length > 0 ? (
          <Table users={users} setUsers={setUsers} />
        ) : (
          <>
            <CircularProgress />
          </>
        )}
      </div>
    </div>
  );
};

export default Admin;
