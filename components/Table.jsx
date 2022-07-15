import Image from "next/image";
import React from "react";
import styles from "../styles/Table.module.css";

const Table = () => {
  return (
    <div className={styles.table__container}>
      <table className={styles.table}>
        <tr>
          <th>User</th>
          <th>Email</th>
          <th>County</th>
        </tr>
        {[1, 2, 3, 33, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 33, , 3].map((item) => (
          <tr className={styles.row}>
            <td>
              <Image src="/images/google.png" width={30} height={30} alt="" />
              <span>User Name</span>
            </td>
            <td>usertest@gmail.com</td>
            <td>Banglades</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Table;
