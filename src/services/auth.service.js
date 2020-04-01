const axios = require("axios");

const login = async credentials => {
  return axios.post("http://localhost:5000/auth/login", credentials);
};

module.exports = {
  login
};
