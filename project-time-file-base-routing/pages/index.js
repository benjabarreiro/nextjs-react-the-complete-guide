import React from "react";
import EventList from "../components/events/EventList";
import NewsletterRegistration from "../components/input/NewsletterRegistration";
import { getFeaturedEvents } from "../helpers/api-util";
import Head from "next/head";

export default function HomePage({ featuredEvents }) {
  return (
    <>
      <Head>
        <title>NextJS Events</title>
        <meta
          name="description"
          content="Find a lot of great events that allow you to evolve..."
        />
      </Head>
      <NewsletterRegistration />
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
