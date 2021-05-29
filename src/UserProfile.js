import React from "react";

const UserProfile = ({ fetchData }) => {
  const data = fetchData.read();
  return (
    <>
      <h1>{data.name}</h1>
      <h2>{data.email}</h2>
    </>
  );
};

export { UserProfile };
