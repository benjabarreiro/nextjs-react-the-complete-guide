import React, { useContext, useRef } from "react";
import classes from "./NewsletterRegistration.module.css";
import NotificationContext from "../../store/NotificationContext";

function NewsletterRegistration() {
  const emailRef = useRef();
  const { showNotification } = useContext(NotificationContext);
  function registrationHandler(event) {
    event.preventDefault();

    const email = emailRef.current.value;

    showNotification({
      title: "Signing up...",
      message: "Registering for newsletter",
      status: "pending",
    });

    fetch("/api/newsletter", {
      method: "POST",
      body: JSON.stringify({ email }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }

        return res.json().then((data) => {
          throw new Error(data.message || "Something went wrong!");
        });
      })
      .then(() => {
        showNotification({
          title: "Success!",
          message: "Succussfully registered for newsletter",
          status: "success",
        });
      })
      .catch((err) =>
        showNotification({
          title: "Error!",
          message: err.message || "Something went wrong!",
          status: "error",
        })
      );
  }

  return (
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={classes.control}>
          <input
            type="email"
            id="email"
            ref={emailRef}
            placeholder="Your email"
            aria-label="Your email"
          />
          <button>Register</button>
        </div>
      </form>
    </section>
  );
}

export default NewsletterRegistration;
