import Link from "next/link";
import React from "react";

export default function ClientsPage() {
  const clients = [
    {
      id: "max",
      name: "Max",
    },
    {
      id: "manu",
      name: "Manu",
    },
    {
      id: "benja",
      name: "Benja",
    },
  ];
  return (
    <div>
      <h1>The Clients Page</h1>
      <ul>
        string href
        {clients.map(({ id, name }) => (
          <li key={id}>
            <Link href={`/clients/${id}`}>{name}</Link>
          </li>
        ))}
        object href
        {clients.map(({ id, name }) => (
          <li key={id}>
            <Link
              href={{
                pathname: "/clients/[id]",
                query: { id },
              }}
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
