import React, { useEffect, useState } from "react";
import styles from "../styles/Admin.module.css";
import Table from "../components/Table";
import axios from "axios";

const Admin = () => {
  const [connections, setConnections] = useState();
  const [users, setUsers] = useState([]);

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
      const { data } = await axios.get("/api/admin");
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    makeConnection();
    fetchConnection();
    fetchProfiles();
  }, []);

  return (
    <div className={styles.wrapper}>
      <h1>Welcome To Your Dashboard</h1>
      <Table users={users} setUsers={setUsers} />
      <div className={styles.circle1}></div>
      <div className={styles.circle2}></div>
    </div>
  );
};

export default Admin;
