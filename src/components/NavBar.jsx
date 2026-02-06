import React from "react";
import styles from "../styles/Navbar.module.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className={styles.navbar}>
      <img
        src="https://rabbixel.com/wp-content/uploads/2019/04/creative-logo-maker.png.webp"
        alt=""
        style={{ width: 50, height: 50, marginTop: 10, marginLeft: 10 }}
      />
      <div className={styles.links}>
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Contact">Contact</Link>
        <Link to="/Profile">Profile</Link>
      </div>
    </div>
  );
};

export default NavBar;
