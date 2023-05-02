"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import styles from "./Contact.module.scss";

const ContactFormButton = () => {
  useEffect(() => {
    document
      .getElementById("contactFormButton")!
      .addEventListener("click", () => {
        document.getElementById("name")!.focus();
      });
  }, []);

  return (
    <button id="contactFormButton" className={styles.headerContainer}>
      <p className={styles.headingHeader}>Use Contact Form</p>
      <Image
        src={`/icons/arrowDown.svg`}
        height="25"
        width="25"
        className={styles.icon}
        alt={"arrow down"}
      />
    </button>
  );
};

export default ContactFormButton;
