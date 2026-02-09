import React from "react";
import styles from "../styles/PlaySection.module.css";
import { useNavigate } from "react-router-dom";

const PlaySection = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.playSection}>
      <h2 className={styles.heading}>Ready to test your knowledge?</h2>
      <button className={styles.playButton} onClick={() => navigate("/quiz")}>
        Play Now
      </button>
    </div>
  );
};

export default PlaySection;
