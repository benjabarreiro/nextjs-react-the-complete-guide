import React from "react";
import classes from "./EventItem.module.css";
import Button from "../UI/Button";
import DateIcon from "../icons/DateIcon";
import AddressIcon from "../icons/AddressIcon";
import ArrowRightIcon from "../icons/ArrowRightIcon";
import Image from "next/image";

export default function EventItem({ title, location, date, image, id }) {
  const parsedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const parsedLocation = location.replace(", ", "\n");

  const linkUrl = `/events/${id}`;

  return (
    <li className={classes.item}>
      <Image src={image} alt={title} width={250} height={160} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2 className={classes.h2}>{title}</h2>
          <div className={classes.date}>
            <DateIcon />
            <time>{parsedDate}</time>
          </div>
          <div className={classes.address}>
            <AddressIcon />
            <address>{parsedLocation}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Button link={linkUrl}>
            <span>Explore event</span>
            <span className={classes.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
}
