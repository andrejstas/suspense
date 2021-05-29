import { Suspense, useState, useEffect } from "react";

import { UserProfile } from "./UserProfile";
import { fetchUserProfile } from "./fetchUserProfile";

const SuspensefulUserProfile = ({ userId }) => {
  const [data, setData] = useState({});
  useEffect(() => {
    fetchUserProfile(userId).then((profile) => setData(profile));
  }, [userId, setData]);

  return (
    <Suspense>
      <UserProfile data={data} />
    </Suspense>
  );
};

export { SuspensefulUserProfile };
