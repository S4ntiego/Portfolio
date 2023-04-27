import React from "react";
import styles from "./Landing.module.scss";

const Landing = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.mainFlexContainer}>
        <div className={styles.flexLeftContainer}>
          <div className={styles.landingSecondaryHeadingContainer}>
            <p className={styles.landingSecondaryHeadingText}>Hello.</p>
            <p className={styles.landingSecondaryHeadingText}>Hola.</p>
            <p className={styles.landingSecondaryHeadingText}>Bonjour.</p>
            <p className={styles.landingSecondaryHeadingText}>Konnichiwa.</p>
            <p className={styles.landingSecondaryHeadingText}>Nǐn hǎo.</p>
            <p className={styles.landingSecondaryHeadingText}>Guten Tag.</p>
            <p className={styles.landingSecondaryHeadingText}>Olá.</p>
            <p className={styles.landingSecondaryHeadingText}>Cześć.</p>
          </div>
          <h1 className={styles.landingPrimaryHeading}>
            My name is Adam Książek, I'm a full-stack JavaScript developer able
            to work all around the world.
          </h1>
          <p className={styles.landingParagraph1}>
            I was born in Poland and studied finance at the University of Warsaw
            and Universidade Portucalense. I have over two years of experience
            as an Analyst working for one of the biggest investment banks in the
            CEE region, but I have decided to chase my dreams.
          </p>
          <p className={styles.landingParagraph2}>
            My current stack includes technologies such as React.js/Next.js with
            TypeScript, Node.js, PostgreSQL, Tailwind CSS, PrismaORM, and Amazon
            AWS, but I am very flexible - constantly learning and looking for
            the most efficient solutions.
          </p>
          <div className={styles.buttonsContainer}>
            <button className={styles.landingButton1}>Instagram</button>
            <button className={styles.landingButton2}>Twitter</button>
            <button className={styles.landingButton3}>Mail</button>
          </div>
        </div>
        <div className={styles.flexRightContainer}></div>
      </div>
    </div>
  );
};

export default Landing;
