import React, { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

export default function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [meetups, setMeetups] = useState([]);

  const getMeetupsHandler = () => {
    fetch(
      "https://react-getting-started-f2b96-default-rtdb.firebaseio.com/meetups.json"
    )
      .then((response) => response.json())
      .then((data) => {
        const parseData = [];
        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          parseData.push(meetup);
        }
        console.log(data);
        setIsLoading(false);
        setMeetups(parseData);
      });
  };

  useEffect(() => {
    getMeetupsHandler();
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }
  return (
    <section>
      <h1>All Meetups Page</h1>
      <MeetupList meetups={meetups} />
    </section>
  );
}
