import React from "react";
import styles from "./Contact.module.scss";
import EmailForm from "./EmailForm";
import Image from "next/image";
import CopyEmailButton from "./CopyEmailButton";
import ContactFormButton from "./ContactFormButton";
const Contact = () => {
  return (
    <div id="contact" className={styles.mainFlexContainer}>
      <div className={styles.mainHeadingContainer}>
        <p className={styles.mainParagraph}>Let&apos;s work together</p>
        <h2 className={styles.mainHeader}>Contact</h2>
      </div>
      <div className={styles.headingContainer}>
        <p className={styles.headingParagraph}>Work Inquiries & Discussions</p>
        <a
          href="https://www.linkedin.com/in/adam-ksi%C4%85%C5%BCek-6538141a1/"
          className={styles.headerContainer}
        >
          <p className={styles.headingHeader}>Shoot me a DM on LinkedIn</p>
          <Image
            src={`/icons/arrowRight.svg`}
            height="20"
            width="20"
            className={styles.icon}
            alt={"arrow right"}
          />
        </a>
      </div>
      <div className={styles.headingContainer}>
        <p className={styles.headingParagraph}>
          Work Inquiries - adam-ksiazek@outlook.com
        </p>
        <CopyEmailButton />
      </div>
      <div className={styles.headingContainer}>
        <p className={styles.headingParagraph}>Work Inquiries</p>
        <ContactFormButton />
        <EmailForm />
      </div>
    </div>
  );
};

export default Contact;
