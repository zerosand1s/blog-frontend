const axios = require('axios');

const getAllTags = async () => {
  const token = localStorage.getItem('token');
  const options = {
    method: 'GET',
    url: 'http://localhost:5000/tags/all-tags',
    headers: {
      Authorization: token
    }
  };

  const response = await axios(options);
  return response.data.data.tags;
};

const getUserTags = async () => {
  const token = localStorage.getItem('token');
  const options = {
    method: 'GET',
    url: 'http://localhost:5000/tags/my-tags',
    headers: {
      Authorization: token
    }
  };

  const response = await axios(options);
  return response.data.data.tags;
};

const follow = async (id) => {
  const token = localStorage.getItem('token');
  const options = {
    method: 'POST',
    url: 'http://localhost:5000/tags/follow',
    headers: {
      Authorization: token
    },
    data: {
      id
    }
  };

  return axios(options);
};

module.exports = {
  getAllTags,
  getUserTags,
  follow
};
