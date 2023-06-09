import React from "react";
import styles from "./Navbar.module.scss";
import { navbarConfig } from "@/config/navbar";
import Image from "next/image";
import Hamburger from "./Hamburger";

const Navbar = () => {
  return (
    <div className={styles.outerContainer}>
      <div className={styles.navbarContainer}>
        <div className={styles.leftContainer}>
          <a href="#" className={styles.logo}>
            <Image
              src={`/icons/book.svg`}
              height="50"
              width="50"
              className={styles.logoIcon}
              alt={"logo"}
            />
            <h3 className={styles.logoText}>
              <span className={styles.logoTop}>Portfolio</span>
              <span className={styles.logoBottom}>Adam Ksiazek</span>
            </h3>
          </a>
        </div>
        <div className={styles.rightContainer}>
          <Hamburger />
          <div className={styles.icons}>
            <a href="https://github.com/S4ntiego">
              <Image
                src={`/icons/github.svg`}
                height="30"
                width="30"
                className={styles.icon}
                alt={"github"}
              />
            </a>
            <a href="https://www.linkedin.com/in/adam-ksi%C4%85%C5%BCek-6538141a1/">
              <Image
                src={`/icons/linkedin.svg`}
                height="30"
                width="30"
                className={styles.icon}
                alt={"linkedin"}
              />
            </a>
          </div>
          <div className={styles.navigation}>
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
    </div>
  );
};

export default Navbar;
