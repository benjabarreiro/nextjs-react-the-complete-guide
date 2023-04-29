import Link from "next/link";
import React from "react";
import classes from "./Button.module.css";

export default function Button({ link, children, onClick }) {
  if (link) {
    return (
      <Link className={classes.btn} href={link}>
        {children}
      </Link>
    );
  }
  return (
    <button className={classes.btn} onClick={onClick}>
      {children}
    </button>
  );
}
