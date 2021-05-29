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

const fetchUserProfile = (userId) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data[userId]);
    }, 3000);
  });

export { fetchUserProfile };
