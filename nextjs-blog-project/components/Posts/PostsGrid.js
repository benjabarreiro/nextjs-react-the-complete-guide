import React from "react";
import PostItem from "./PostItem";
import classes from "./PostsGrid.module.css";

export default function PostsGrid({ posts }) {
  return (
    <ul className={classes.grid}>
      {posts.map((post) => (
        <PostItem {...post} key={post.slug} />
      ))}
    </ul>
  );
}
