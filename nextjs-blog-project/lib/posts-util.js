import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

export const getPostsFiles = () => fs.readdirSync(postsDirectory);

export function getPostData(postIdentifier) {
  const slug = postIdentifier.replace(/\.md$/, "");
  const filePath = path.join(postsDirectory, `${slug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  return {
    slug,
    ...data,
    content,
  };
}
export function getAllPosts() {
  const postsFiles = getPostsFiles();

  const posts = postsFiles.map((postFile) => getPostData(postFile));

  const sortedPosts = posts.sort((postA, postB) =>
    postA.date > postB.date ? -1 : 1
  );

  return sortedPosts;
}

export function getFeaturedPosts() {
  const allPosts = getAllPosts();

  const featuredPosts = allPosts.filter((post) => post.isFeatured);

  return featuredPosts;
}
