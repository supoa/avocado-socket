import React, { useEffect, useState } from "react";
import styles from "../styles/Admin.module.css";
import Table from "../components/Table";
import axios from "axios";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

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
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!userInfo || !userInfo?.isAdmin) {
      router.push("/login");
    }
    makeConnection();
    fetchConnection();
    fetchProfiles();
  }, []);

  return (
    <div
      className={styles.wrapper}
      style={{
        backgroundImage:
          "url('https://media.istockphoto.com/id/1406793901/photo/close-up-of-businessman-using-a-laptop-with-graphs-and-charts-on-a-laptop-computer.webp?s=612x612&w=is&k=20&c=kwUkWa3RhAOXCIvEaNrq9KukCSdgKwe5gl69nBiqsLU=')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1>Welcome To Your Dashboard</h1>
      <div className={styles.table__wrapper}>
        <Table users={users} setUsers={setUsers} />
      </div>
    </div>
  );
};

export default Admin;
