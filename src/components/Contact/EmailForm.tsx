"use client";

import React, { useState } from "react";
import styles from "./Contact.module.scss";
import Image from "next/image";

interface IEmailData {
  name: string;
  email: string;
  message: string;
}

const initialState = {
  name: "",
  email: "",
  message: "",
};

const EmailForm = () => {
  const [emailData, setEmailData] = useState<IEmailData>(initialState);
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [disabled, setDisabled] = useState<boolean>(false);
  const [msg, setMsg] = useState<string>("");
  const [status, setStatus] = useState<number>();
  const [isAlertVisible, setIsAlertVisible] = useState<boolean>(false);

  const handleChange = (e: any) => {
    setEmailData({ ...emailData, [e.target.name]: e.target.value });
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsFetching(true);
    setDisabled(true);

    try {
      const response = await fetch("/api/contact", {
        method: "post",
        body: JSON.stringify(emailData),
      });

      const data = await response.json();
      setIsFetching(false);
      setMsg(data.message);
      setStatus(data.status);
      setIsAlertVisible(true);
      setTimeout(() => {
        setIsAlertVisible(false);
        setDisabled(false);
      }, 2000);
      setEmailData(initialState);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <form onSubmit={handleSubmit} className={styles.emailForm}>
      <label className="hidden" htmlFor="name">
        Name
      </label>
      <input
        onChange={handleChange}
        required
        placeholder="Name"
        value={emailData.name}
        className={styles.input}
        type="text"
        id="name"
        name="name"
        autoComplete="given-name"
      ></input>
      <label className="hidden" htmlFor="email">
        Email
      </label>
      <input
        value={emailData.email}
        onChange={handleChange}
        placeholder="Email"
        required
        className={styles.input}
        type="email"
        id="email"
        autoComplete="email"
        name="email"
      />
      <label className="hidden" htmlFor="message">
        Message
      </label>
      <div className={styles.textAreaContainer}>
        <textarea
          value={emailData.message}
          onChange={handleChange}
          placeholder="Message"
          className={styles.textArea}
          id="message"
          required
          name="message"
        />
      </div>
      <button
        disabled={disabled}
        type="submit"
        id="sendEmail"
        className={styles.emailButton}
      >
        {isFetching && (
          <Image
            src={`/icons/loading.svg`}
            height="35"
            width="35"
            className={styles.loading}
            alt={"loading"}
          />
        )}
        {msg.length > 0 && status === 200 && isAlertVisible && (
          <span className="text-green-500">{msg}</span>
        )}
        {msg.length > 0 && status === 500 && isAlertVisible && (
          <span className="text-red-500">{msg}</span>
        )}
        {!isAlertVisible && !isFetching && <span>Send Email</span>}
      </button>
    </form>
  );
};

export default EmailForm;
