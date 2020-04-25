<template>
  <div class="container">
    <navbar></navbar>
    <div class="home">
      <error-message v-if="showError" v-bind:message="errorMessage"></error-message>
      <aside class="sidebar">
        <topics v-bind:tags="tags"></topics>
      </aside>
      <main class="blog-list">
        <blog-list v-bind:blogs="blogs"></blog-list>
      </main>
    </div>
  </div>
</template>

<script>
import Navbar from '../../components/Navbar/Navbar';
import BlogList from '../../components/BlogList/BlogList';
import Topics from '../../components/Topics';
// const userService = require('../../services/user.service');
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';

export default {
  name: 'Home',
  data() {
    return {
      blogs: [
        {
          title:
            "This is my first blog and I'm writing about my experience as professional biker",
          author: { username: 'r.cali' },
          likes: 10,
          tags: ['first'],
          date: '2 Apr'
        },
        {
          title: 'I travelled in India this winter',
          author: { username: 'r.cali' },
          likes: 26,
          tags: ['travel'],
          date: '8 Apr'
        },
        {
          title: 'How to work with Vue.js components',
          author: { username: 'r.cali' },
          likes: 55,
          tags: ['coding', 'programming'],
          date: '10 Apr'
        }
      ],
      tags: [],
      showError: false,
      errorMessage: ''
    };
  },
  components: {
    Navbar,
    BlogList,
    Topics,
    ErrorMessage
  },
  async created() {
    try {
      // const token = localStorage.getItem('token');
      // const tags = await userService.getUserTags(token);
      const tags = ['travel', 'sports', 'coding'];
      this.tags = tags;
    } catch (err) {
      this.errorMessage = err.response.data.message;
      this.showError = true;
      setTimeout(() => {
        this.showError = false;
      }, 3000);
      this.$router.push('signin');
    }
  }
};
</script>

<style lang="scss" scoped>
.home {
  width: auto;
  display: grid;
  margin: 1rem 5rem;
  grid-template-columns: 25% auto;
  grid-template-rows: auto;
  grid-template-areas: 'sidebar blog-list';
  grid-gap: 0 1rem;
}

.sidebar {
  grid-area: sidebar;
}

.blog-list {
  grid-area: blog-list;
}
</style>
