import React from "react";
import PostContent from "../../components/Posts/post-detail/PostContent";
import { getPostData, getPostsFiles } from "../../lib/posts-util";
import Head from "next/head";

// slug !== ...slug
export default function PostDetailPage({ post }) {
  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.excerpt} />
      </Head>
      <PostContent post={post} />
    </>
  );
}

export const getStaticProps = (context) => {
  const {
    params: { slug },
  } = context;

  const post = getPostData(slug);

  return {
    props: {
      post,
    },
    revalidate: 600,
  };
};

export const getStaticPaths = () => {
  const postsFileNames = getPostsFiles();

  const slugs = postsFileNames.map((fileName) => ({
    params: { slug: fileName.replace(/\.md$/, "") },
  }));

  return {
    paths: slugs,
    fallback: false,
  };
};
