import React, { useEffect, useState } from "react";
import EventList from "../../components/events/EventList";
import ResultsTitle from "../../components/results-title/ResultsTitle";
import Button from "../../components/UI/Button";
import ErrorAlert from "../../components/error-alert/ErrorAlert";
import { useRouter } from "next/router";
import useSWR from "swr";

export default function FilteredEventsPage() {
  const router = useRouter();
  const [events, setEvents] = useState([]);

  const { data, error } = useSWR(
    "https://nextjs-course-e169d-default-rtdb.firebaseio.com/events.json",
    (url) => fetch(url).then((res) => res.json())
  );

  useEffect(() => {
    if (data) {
      const parsedData = [];

      for (const key in data) {
        parsedData.push({
          id: key,
          ...data[key],
        });
      }
      setEvents(parsedData);
    }
  }, [data]);

  const filterData = router.query.slug;

  if (!events || !filterData) return <p className="center">Loading...</p>;

  const year = +filterData[0];
  const month = +filterData[1];

  if (
    isNaN(year) ||
    isNaN(month) ||
    year > 2030 ||
    year < 2021 ||
    month < 1 ||
    month > 12 ||
    error
  ) {
    return (
      <>
        <ErrorAlert>
          <p>Invalid filter. Please adjust your values!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </>
    );
  }

  const filteredEvents = events.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  if (!filteredEvents || filteredEvents.length === 0)
    return (
      <>
        <ErrorAlert>
          <p>No events found for the chosen filter!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </>
    );

  const date = new Date(year, month - 1);

  return (
    <>
      <ResultsTitle date={date} />
      <EventList events={filteredEvents} />
    </>
  );
}

/* export const getServerSideProps = async (context) => {
  const { params } = context;

  const filterData = params.slug;

  const year = +filterData[0];
  const month = +filterData[1];

  if (year > 2030 || year < 2021 || month < 1 || month > 12) {
    return {
      props: {
        hasError: true,
      },
    };
  }

  const filteredEvents = await getFilteredEvents({ year, month });
  return {
    props: {
      filteredEvents,
      year,
      month,
    },
  };
};
 */
