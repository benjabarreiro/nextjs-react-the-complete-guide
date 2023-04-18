import React from "react";
import classes from "../meetups/NewMeetupForm.module.css";

export default function Input({ title, type = "text", inputRef }) {
  let titleLowerCase = title.toLowerCase();
  return (
    <div className={classes.control}>
      <label htmlFor={titleLowerCase}>Meetup {title}</label>
      <input type={type} required id={titleLowerCase} ref={inputRef} />
    </div>
  );
}
