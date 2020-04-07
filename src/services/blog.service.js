const axios = require('axios');

const createBlog = async (blog, token) => {
  const options = {
    method: 'POST',
    url: 'http://localhost:5000/blogs/new-blog',
    headers: {
      Authorization: token
    },
    data: blog
  };

  return axios(options);
};

module.exports = {
  createBlog
};
