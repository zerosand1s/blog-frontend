const axios = require("axios");

const register = async user => {
  console.log(user);
  return axios.post("http://localhost:5000/users/register", user);
};

module.exports = {
  register
};
