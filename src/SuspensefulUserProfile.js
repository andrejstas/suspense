import { Suspense } from "react";

import { UserProfile } from "./UserProfile";

const SuspensefulUserProfile = ({ fetchData }) => (
  <Suspense fallback={<h1>Loading user data...</h1>}>
    <UserProfile fetchData={fetchData} />
  </Suspense>
);

export { SuspensefulUserProfile };
