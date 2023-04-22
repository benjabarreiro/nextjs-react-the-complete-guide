import { useRouter } from "next/router";
import React from "react";

export default function ClientProjectPage() {
  const {
    push,
    query: { clientId },
  } = useRouter();
  const loadProjectHandlerA = () => push(`/clients/${clientId}/projecta`);
  const loadProjectHandlerB = () =>
    push({
      pathname: "/clients/[clientId]/[clientProjectId]",
      query: { clientId, clientProjectId: "projecta" },
    });
  return (
    <div>
      <h1>The Projects of a Given Client</h1>
      <button onClick={loadProjectHandlerA}>Load Project A</button>
      <button onClick={loadProjectHandlerB}>Load Project A</button>
    </div>
  );
}
