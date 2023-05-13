import React, { useEffect, useState } from "react";
import classes from "./ContactForm.module.css";
import Notification from "../ui/Notification";

const sendContactData = async ({ email, name, message }) => {
  const response = await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify({ email, name, message }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong!");
  }
};

export default function ContactForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [reqStatus, setReqStatus] = useState("");
  const [reqErr, setReqErr] = useState("");

  useEffect(() => {
    if (reqStatus !== "pending" && !!reqStatus) {
      const timer = setTimeout(() => {
        setReqStatus("");
        setReqErr("");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [reqStatus]);

  const sendMessageHandler = async (e) => {
    e.preventDefault();
    setReqStatus("pending");
    try {
      await sendContactData({ email, name, message });
      setReqStatus("success");
      setEmail("");
      setName("");
      setMessage("");
    } catch (err) {
      setReqErr(error.message);
      setReqStatus("error");
    }
  };

  let notification;

  if (reqStatus === "pending") {
    notification = {
      status: "pending",
      title: "Sending message...",
      message: "Your message is on its way!",
    };
  }
  if (reqStatus === "success") {
    notification = {
      status: "success",
      title: "Success!",
      message: "Message sent successfully!",
    };
  }
  if (reqStatus === "error") {
    notification = {
      status: "error",
      title: "Error!",
      message: reqErr,
    };
  }

  return (
    <>
      <section className={classes.contact}>
        <h1>How can I help you?</h1>
        <form onSubmit={sendMessageHandler} className={classes.form}>
          <div className={classes.controls}>
            <div className={classes.control}>
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className={classes.control}>
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>
          <div className={classes.control}>
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              rows="5"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>

          <div className={classes.actions}>
            <button>Send Message</button>
          </div>
        </form>
        {reqStatus && <Notification {...notification} />}
      </section>
    </>
  );
}
