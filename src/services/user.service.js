const axios = require("axios");

const register = async user => {
  return axios.post("localhost:5000/users/register", user);
};

module.exports = {
  register
};
