import { useRouter } from "next/router";
import React from "react";

export default function PortfolioProjectPage() {
  const {
    query: { projectId },
  } = useRouter();
  return (
    <div>
      <h1>The Portfolio Project Page {projectId}</h1>
    </div>
  );
}
