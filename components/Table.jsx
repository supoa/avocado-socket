import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "../styles/Table.module.css";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

const Table = ({ users }) => {
  const [query, setQuery] = useState("");
  const router = useRouter();

  return (
    <div className={styles.table__container}>
      <input
        type="text"
        className={styles.field}
        placeholder="Search User by name"
        onChange={(e) => setQuery(e.target.value)}
      />
      <div className={styles.table__wrapper}>
        <table className={styles.table}>
          <motion.tr
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { duration: 0.5 },
            }}
          >
            <th>User</th>
            <th>Email</th>
            <th>NID</th>
            <th>JOIN</th>
            <th>Payment History</th>
            <th>Country</th>
            <th>Revinue</th>
            <th>Direct Member</th>
            <th>Team Member</th>
            <th>Total Assets</th>
            <th>Purchase</th>
          </motion.tr>
          {users
            .filter((user) =>
              user.name.toLowerCase().includes(query.toLowerCase())
            )
            .map((user) => (
              <motion.tr
                initial={{ opacity: 0, x: 30 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.8 },
                }}
                className={styles.row}
              >
                <td onClick={() => router.push(`/profile/${user._id}`)}>
                  {user.picture && (
                    <Image src={user?.picture} width={30} height={30} alt="" />
                  )}
                  <span>{user.name}</span>
                </td>
                <td>{user.email}</td>
                <td>{user.Nid}</td>
                <td>{user.Join}</td>
                <td>{user.paymentHistory}</td>
                <td>{user.country}</td>
                <td>{user.revenue}</td>
                <td>{user.teamMembers}</td>
                <td>{user.totalAsset}</td>
                <td>{user.Purchase}</td>
              </motion.tr>
            ))}
        </table>
      </div>
    </div>
  );
};

export default Table;
