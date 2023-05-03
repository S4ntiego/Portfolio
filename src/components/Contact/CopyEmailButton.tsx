"use client";

import React from "react";
import styles from "./Contact.module.scss";
import Image from "next/image";

const CopyEmailButton = () => {
  function inputFocus() {
    // Get the text field
    var copyText = document.getElementById("myEmail") as HTMLInputElement;
    var copyEmailParagraph = document.getElementById(
      "copyEmailParagraph"
    ) as HTMLParagraphElement;

    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);

    // Alert the copied text
    copyEmailParagraph.innerHTML = "Email copied";

    setTimeout(() => {
      copyEmailParagraph.innerHTML = "Copy my email address";
    }, 800);
  }

  return (
    <button onClick={() => inputFocus()} className={styles.headerContainer}>
      <p id="copyEmailParagraph" className={styles.headingHeader}>
        Copy my email address
      </p>
      <Image
        src={`/icons/copy.svg`}
        height="20"
        width="20"
        className={styles.icon}
        alt={"copy"}
      />
      <input
        className="hidden"
        type="text"
        value="adam-ksiazek@outlook.com"
        readOnly
        id="myEmail"
      ></input>
    </button>
  );
};

export default CopyEmailButton;
