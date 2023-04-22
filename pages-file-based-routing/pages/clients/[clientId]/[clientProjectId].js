import { useRouter } from "next/router";
import React from "react";

export default function ClientProjectPage() {
  const {
    query: { clientProjectId, clientId },
  } = useRouter();
  return (
    <div>
      <h1>
        The Project Page {clientProjectId} for a Selected Client {clientId}
      </h1>
    </div>
  );
}
