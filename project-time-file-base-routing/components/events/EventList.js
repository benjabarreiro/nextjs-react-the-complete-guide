import React from "react";
import EventItem from "./EventItem";
import classes from "./EventList.module.css";

export default function EventList({ events }) {
  return (
    <ul className={classes.list}>
      {events.map((event) => (
        <EventItem key={event.id} {...event} />
      ))}
    </ul>
  );
}
