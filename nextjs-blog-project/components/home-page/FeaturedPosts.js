import React from "react";
import classes from "./FeaturedPosts.module.css";
import PostsGrid from "../Posts/PostsGrid";

export default function FeaturedPosts({ posts }) {
  return (
    <section className={classes.latest}>
      <h2>Featured Posts</h2>
      <PostsGrid posts={posts} />
    </section>
  );
}
