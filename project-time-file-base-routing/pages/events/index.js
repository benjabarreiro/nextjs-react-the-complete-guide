import React from "react";
import EventList from "../../components/events/EventList";
import EventsSearch from "../../components/events/EventsSearch";
import { useRouter } from "next/router";
import { getAllEvents } from "../../helpers/api-util";
import Head from "next/head";

export default function AllEventsPage({ events }) {
  const { push } = useRouter();

  const findEventsHandler = (year, month) => push(`/events/${year}/${month}`);

  return (
    <>
      <Head>
        <title>All Events</title>
        <meta
          name="description"
          content="Find a lot of great events that allow you to evolve..."
        />
      </Head>
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
