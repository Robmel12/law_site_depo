import React, { useState } from "react";
import { FaHeadset, FaTimes } from "react-icons/fa";
export default function Form(props) {
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(true);
  const [message, setMessage] = useState("");
  const [showForm, setShowForm] = useState(true);

  const Valid = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

  const styles = props.styles;
  const handleChange = (e) => {
    setEmail(e.target.value);
  };
  const handleClick = (e) => {
    e.preventDefault();
    if (Valid.test(email)) {
      setValidEmail(Valid.test(email));
      setShowForm(false);
      const EmailMessage = {
        email: email,
        message: message,
      };
      console.log(EmailMessage);
    } else {
      setValidEmail(Valid.test(email));
    }
  };

  const handleNewMessageClick = (e) => {
    e.preventDefault();
    setShowForm(true);
  };

  return (
    <div
      className={`${styles.container} email-form-container ${
        !showForm && styles.noShow
      }`}
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
      {!validEmail && <p style={{ color: "red" }}>Email is invalid</p>}
      {showForm ? (
        <form className="email-form">
          <input
            className={styles.input}
            type="email"
            placeholder="Your E-mail here.."
            onChange={handleChange}
            value={email}
          />
          <textarea
            className={styles.textarea}
            placeholder="Send us a message!"
            cols="30"
            rows="9"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button onClick={handleClick} className={`${styles.button} form-btn`}>
            Message Us
          </button>
        </form>
      ) : (
        <>
          <p className={styles.confirm}>
            We will send you and email shortly at {email}
          </p>
          <div className={styles.confirmButtonContainer}>
            <button
              className={styles.rewMessageButton}
              onClick={handleNewMessageClick}
            >
              New Message
            </button>
            <button className={styles.resendButton}>Resend Email</button>
          </div>
        </>
      )}
    </div>
  );
}
