import React from "react";
import EventList from "../../components/events/EventList";
import EventsSearch from "../../components/events/EventsSearch";
import { useRouter } from "next/router";
import { getAllEvents } from "../../helpers/api-util";

export default function AllEventsPage({ events }) {
  const { push } = useRouter();

  const findEventsHandler = (year, month) => push(`/events/${year}/${month}`);

  return (
    <>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList events={events} />
    </>
  );
}

export const getStaticProps = async () => {
  const events = await getAllEvents();
  return {
    props: {
      events,
    },
    revalidate: 60,
  };
};
