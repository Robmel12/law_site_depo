import React, { useState } from "react";
import { FaHeadset, FaTimes } from "react-icons/fa";
export default function Form(props) {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const styles = props.styles;

  const handleSubmit = (event) => {
    event.preventDefault();
    const EmailMessage = {
      email: email,
      message: message,
    };
    console.log(EmailMessage);
  };

  return (
    <div
      className={`${styles.container} email-form-container`}
      onSubmit={handleSubmit}
    >
      <h3>
        <FaHeadset
          className={`${styles.headset} ${styles.icon} headset form-icon`}
        />{" "}
        Contact Us Now
      </h3>
      {props.toggle && (
        <FaTimes
          className={`${styles.faTimes} ${styles.icon} fa-times form-icon`}
          onClick={props.onClick}
        />
      )}
      <form className="email-form">
        <input
          className={styles.input}
          type="text"
          placeholder="Your E-mail here.."
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          className={styles.textarea}
          placeholder="Send us a message!"
          cols="30"
          rows="9"
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button className={`${styles.button} form-btn`} type="submit">
          Message Us
        </button>
      </form>
    </div>
  );
}
