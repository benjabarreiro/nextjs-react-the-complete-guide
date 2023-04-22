import { useRouter } from "next/router";
import React from "react";

export default function BlogPostsPage() {
  const {
    query: { slug },
  } = useRouter();
  return (
    <div>
      <h1>The Blog Posts</h1>
    </div>
  );
}
