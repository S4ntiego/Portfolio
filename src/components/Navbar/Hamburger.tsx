"use client";

import React, { useState } from "react";
import styles from "./Navbar.module.scss";
import { navbarConfig } from "@/config/navbar";

const Hamburger = () => {
  const [isActive, setIsActive] = useState<boolean>(false);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsActive((current) => !current);
  };

  return (
    <div>
      <button
        onClick={(e) => handleClick(e)}
        className={isActive ? styles.hamburger : styles.hamburgerHidden}
        id="hamburger"
      >
        <span className={styles.line}></span>
        <span className={styles.line}></span>
        <span className={styles.line}></span>
      </button>
      <div className={isActive ? styles.myLinks : styles.myLinksHidden}>
        {navbarConfig.map((item) => (
          <a
            key={item.title}
            href={item.href}
            className={styles.navigationLink}
            onClick={() => setIsActive(!isActive)}
          >
            {item.title}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Hamburger;
