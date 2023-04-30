import React from "react";
import EventSummary from "../../components/event-detail/EventSummary";
import EventLogistics from "../../components/event-detail/EventLogistics";
import EventContent from "../../components/event-detail/EventContent";
import ErrorAlert from "../../components/error-alert/ErrorAlert";
import { getEventById, getFeaturedEvents } from "../../helpers/api-util";

export default function EventDetailPage({ event }) {
  if (!event)
    return (
      <div className="center">
        <p>Loading...</p>
      </div>
    );

  return (
    <>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  );
}

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const event = await getEventById(id);

  let notFound = false;

  if (!event) {
    notFound = true;
  }

  return { props: { event }, revalidate: 30, notFound };
};

export const getStaticPaths = async () => {
  const events = await getFeaturedEvents();
  const eventsId = events.map((event) => ({ params: { id: event.id } }));

  return {
    paths: eventsId,
    fallback: true,
  };
};
