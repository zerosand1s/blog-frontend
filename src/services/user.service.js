const axios = require('axios');

const register = (user) => {
  return axios.post('http://localhost:5000/users/register', user);
};

const getUserTags = async (token) => {
  const options = {
    method: 'GET',
    url: 'http://localhost:5000/users/tags/my-tags',
    headers: {
      Authorization: token
    }
  };

  const response = await axios(options);
  return response.data.data.tags;
};

module.exports = {
  register,
  getUserTags
};
