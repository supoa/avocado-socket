import React from "react";
import styles from "../styles/Admin.module.css";
import Table from "../components/Table";


const Admin = () => {
  return (
    <div className={styles.wrapper}>
      <h1>Welcome To Your Dashboard</h1>
      <Table />
      <div className={styles.circle1}></div>
      <div className={styles.circle2}></div>
    
    </div>
  );
};

export default Admin;
