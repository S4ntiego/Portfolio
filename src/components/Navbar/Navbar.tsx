import React from "react";
import styles from "./navbar.module.scss";
import { navbarConfig } from "@/config/navbar";

const Navbar = () => {
  return (
    <div className="sticky z-10 top-0 max-w-[1200px]">
      <div className={styles.navbarContainer}>
        <div className={styles.leftContainer}>
          <div className={styles.nameContainer}>
            <a href="#" className={styles.name}>
              Adam Ksiazek
            </a>
          </div>
        </div>
        <div className={styles.rightContainer}>
          {navbarConfig.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className={styles.navigationLink}
            >
              {item.title}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
