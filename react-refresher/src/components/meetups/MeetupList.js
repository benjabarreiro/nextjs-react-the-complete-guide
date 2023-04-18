import React from "react";
import classes from "./MeetupList.module.css";
import MeetupItem from "./MeetupItem";

export default function MeetupList({ meetups }) {
  return (
    <ul className={classes.list}>
      {meetups.map((meetup) => {
        return <MeetupItem {...meetup} key={meetup.id} />;
      })}
    </ul>
  );
}
