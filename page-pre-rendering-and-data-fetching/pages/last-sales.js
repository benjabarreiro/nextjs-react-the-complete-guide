import React, { useEffect, useState } from "react";
import useSWR from "swr";

export default function LastSales(props) {
  const [sales, setSales] = useState(props.sales);
  //const [isLoading, setIsLoading] = useState(false);

  const { data, error } = useSWR(
    "https://nextjs-course-e169d-default-rtdb.firebaseio.com/sales.json",
    (url) => fetch(url).then((res) => res.json())
  );

  useEffect(() => {
    if (data) {
      const parsedData = [];

      for (const key in data) {
        parsedData.push({
          id: key,
          username: data[key].username,
          volume: data[key].volume,
        });
      }
      setSales(parsedData);
    }
  }, [data]);

  /* useEffect(() => {
    setIsLoading(true);
    fetch("https://nextjs-course-e169d-default-rtdb.firebaseio.com/sales.json")
      .then((response) => response.json())
      .then((data) => {
        const parsedData = [];

        for (const key in data) {
          parsedData.push({
            id: key,
            username: data[key].username,
            volume: data[key].volume,
          });
        }
        setSales(parsedData);
      })
      .finally(() => setIsLoading(false));
  }, []); */

  if (error) {
    return <p>Falied to load!</p>;
  }

  if (!data && !sales.length) {
    return <p>Loading...</p>;
  }
  return (
    <ul>
      {sales.map((sale) => (
        <li key={sale.id}>
          {sale.username} - ${sale.volume}
        </li>
      ))}
    </ul>
  );
}

export const getStaticProps = async () => {
  const response = await fetch(
    "https://nextjs-course-e169d-default-rtdb.firebaseio.com/sales.json"
  );
  const data = await response.json();

  const parsedData = [];

  for (const key in data) {
    parsedData.push({
      id: key,
      username: data[key].username,
      volume: data[key].volume,
    });
  }
  return { props: { sales: parsedData }, revalidate: 10 };
};
