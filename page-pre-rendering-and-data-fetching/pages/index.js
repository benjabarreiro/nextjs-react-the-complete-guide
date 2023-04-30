import path from "path";
import fs from "fs/promises";
import Link from "next/link";

function HomePage({ products }) {
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <Link href={`/${product.id}`}>{product.title}</Link>
        </li>
      ))}
    </ul>
  );
}

export const getStaticProps = async (context) => {
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  const { products } = data;

  // redirect to specific page
  if (!data) {
    return {
      redirect: {
        destination: "/no-data",
      },
    };
  }

  // show 404 page
  if (!products.length) {
    return { notFound: true };
  }

  return {
    props: {
      products,
    },
    revalidate: 60, // re generate page on request every 60 seconds
  };
};

export default HomePage;
