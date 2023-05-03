import React from "react";
import styles from "./Landing.module.scss";
import Image from "next/image";

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
            My name is <span className={styles.name}>Adam Książek</span>, I'm a
            full-stack JavaScript developer able to work all around the world.
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
          <div className={styles.linksContainer}>
            <a
              href="https://www.linkedin.com/in/adam-ksi%C4%85%C5%BCek-6538141a1/"
              className={styles.linkAnchor}
            >
              <span className={styles.linkText}>LinkedIn</span>
            </a>
            <a href="https://github.com/S4ntiego" className={styles.linkAnchor}>
              <span className={styles.linkText}>GitHub</span>
            </a>
          </div>
        </div>
        <div className={styles.flexRightContainer}>
          <div className={styles.imageContainer}>
            <Image
              src={`/icons/cv.svg`}
              fill
              className={styles.cvImage}
              alt={"cv"}
            />
          </div>
          <a
            href="/Adam-Ksiazek-CV.pdf"
            download
            className={styles.downloadButton}
          >
            <Image
              src={`/icons/download.svg`}
              height={20}
              width={20}
              className={styles.downloadIcon}
              alt={"download"}
            />
            <p className={styles.buttonText}>Download CV</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Landing;
