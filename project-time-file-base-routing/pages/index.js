import React from "react";
import EventList from "../components/events/EventList";
import { getFeaturedEvents } from "../helpers/api-util";

export default function HomePage({ featuredEvents }) {
  return (
    <>
      <EventList events={featuredEvents} />
    </>
  );
}

export const getStaticProps = async () => {
  const featuredEvents = await getFeaturedEvents();
  return {
    props: {
      featuredEvents,
    },
    revalidate: 1800,
  };
};
