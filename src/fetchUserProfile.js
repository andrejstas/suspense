const data = {
  1: {
    name: "John",
    email: "Smith",
  },
  2: {
    name: "Emily",
    email: "Watson",
  },
  3: {
    name: "Bill",
    email: "Jordan",
  },
};

const fetchUserProfile = (userId) => {
  console.log("userId", userId);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data[userId]);
    }, 2000);
  });
};

function wrapPromise(promise) {
  let status = "pending";
  let result;
  let suspender = promise.then(
    (r) => {
      status = "success";
      result = r;
    },
    (e) => {
      status = "error";
      result = e;
    }
  );
  return {
    read() {
      if (status === "pending") {
        throw suspender;
      } else if (status === "error") {
        throw result;
      } else if (status === "success") {
        return result;
      }
    },
  };
}

const fetchUserProfileWithStatus = (userId) => {
  const data = fetchUserProfile(userId);
  return wrapPromise(data);
};

export { fetchUserProfileWithStatus };
