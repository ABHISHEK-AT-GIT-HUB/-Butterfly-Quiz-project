import React from "react";
import styles from "../styles/Navbar.module.css";

const MainSection = ({ img, heading, paragraph }) => {
  return (
    <div className={styles.main_section}>
      <img src={img} alt="" className={styles.main_img} />
      <div className={styles.main_content}>
        <h1>{heading}</h1>
        <p>{paragraph}</p>
      </div>
    </div>
  );
};

export default MainSection;
