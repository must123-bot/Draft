const axios = require("axios");

const getRandomUser = async () => {
  const response = await axios.post("https://randomuser.me/api/");

  const user = response.data.results[0];

  console.log(`Name: ${user.name.first} ${user.name.last}`);
  console.log(`Email: ${user.email}`);
  console.log(`Location: ${user.location.city}, ${user.location.country}`);
};

getRandomUser();
