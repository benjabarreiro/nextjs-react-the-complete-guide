import { useRouter } from "next/router";
import React from "react";
import { getEventById } from "../../dummy-data";
import EventSummary from "../../components/event-detail/EventSummary";
import EventLogistics from "../../components/event-detail/EventLogistics";
import EventContent from "../../components/event-detail/EventContent";
import ErrorAlert from "../../components/error-alert/ErrorAlert";

export default function EventDetailPage() {
  const {
    query: { id: eventId },
  } = useRouter();

  const event = getEventById(eventId);

  if (!event)
    return (
      <ErrorAlert>
        {" "}
        <p>No event found!</p>
      </ErrorAlert>
    );

  return (
    <>
      <h1>Event Detail</h1>
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
