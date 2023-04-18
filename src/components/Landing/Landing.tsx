import React from "react";
import styles from "./Landing.module.scss";
import Image from "next/image";

const Landing = () => {
  return (
    <div className={styles.container}>
      <div className={styles.flexLeft}>
        <p className={styles.heading__paragraph1}>Hello, my name is</p>
        <h1 className={styles.heading__name}>Adam</h1>
        <h1 className={styles.heading__surname}>Książek.</h1>
        <p className={styles.heading__paragraph2}>
          I am a fullstack developer working with technologies like JavaScript,
          Node.js, React, Next.js, SQL, MongoDB, TypeScript, SCSS, and many
          others.
        </p>
        <div className={styles.buttonsContainer}>
          <a href="" className={styles.button1}>
            Skills
          </a>
          <a href="" className={styles.button2}>
            Portfolio
          </a>
          <a href="" className={styles.button3}>
            Contact
          </a>
        </div>
      </div>
      <div className={styles.flexRight}>
        <Image
          alt="landing_image"
          src="/Adam2.png"
          fill
          className="object-scale-down relative"
        ></Image>
      </div>
    </div>
  );
};

export default Landing;
