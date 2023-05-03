import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.outerContainer}>
      <div className={styles.footerContainer}>
        <p className={styles.footerDescription}>
          Created for humans, ducks and Renekton mains in 2023 by{" "}
          <a
            href="https://www.linkedin.com/in/adam-ksi%C4%85%C5%BCek-6538141a1/"
            className={styles.name}
          >
            Adam Książek.
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
