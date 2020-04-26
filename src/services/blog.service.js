const axios = require('axios');

const createBlog = async (blog) => {
  const token = localStorage.getItem('token');
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

const getMyBlogs = async () => {
  const token = localStorage.getItem('token');
  const options = {
    method: 'GET',
    url: 'http://localhost:5000/blogs/my-blogs',
    headers: {
      Authorization: token
    }
  };

  const response = await axios(options);
  return response.data.data.blogs;
};

module.exports = {
  createBlog,
  getMyBlogs
};
