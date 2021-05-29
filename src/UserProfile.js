import React from "react";

const UserProfile = ({ data }) => (
  <>
    <h1>{data.name}</h1>
    <h2>{data.email}</h2>
  </>
);

export { UserProfile };
