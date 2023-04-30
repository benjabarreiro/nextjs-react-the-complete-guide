import React from "react";

export default function UserProfile({ username }) {
  return <h1>{username}</h1>;
}

export const getServerSideProps = async (context) => {
  const { params, req, res } = context;
  return {
    props: {
      username: "Benja",
    },
  };
};
