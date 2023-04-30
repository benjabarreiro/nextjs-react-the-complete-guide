import React from "react";
import path from "path";
import fs from "fs/promises";
import Link from "next/link";

export default function ProductDetailPage({ product }) {
  if (!product) {
    return <p>Loading...</p>;
  }

  const { title, description } = product;
  return (
    <>
      <Link href="/">Go Home</Link>
      <h1>{title}</h1>
      <p>{description}</p>
    </>
  );
}

const getData = async () => {
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  const { products } = JSON.parse(jsonData);

  return products;
};

export const getStaticProps = async (context) => {
  const {
    params: { id },
  } = context;

  const products = await getData();

  const product = products.find((product) => product.id === id);

  let notFound = false;

  if (!product) {
    notFound = true;
  }

  return {
    props: {
      product,
    },
    notFound,
  };
};

export const getStaticPaths = async () => {
  const products = await getData();

  const ids = products.map((product) => ({ params: { id: product.id } }));

  return {
    paths: ids,
    fallback: true, // if true we decide which pages to pre render. But values not listed in paths are valid params. We need a fallback if product is loading
    // fallback: 'blocking' next waits to page to render to show it, not loading fallback needed
  };
};
