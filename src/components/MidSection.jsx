import React from "react";
import styles from "../styles/Navbar.module.css";

const MidSection = ({ head, para }) => {
  return (
    <div className={styles.midsection}>
      <h2>{head}</h2>
      <p>{para}</p>
    </div>
  );
};

export default MidSection;
