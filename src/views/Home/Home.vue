<template>
  <div class="container">
    <error-message v-if="showError" v-bind:message="errorMessage"></error-message>
    <navbar></navbar>
    <div class="home">
      <aside class="sidebar">
        <div class="tags">
          <h3>Things you are interested in</h3>
          <div class="tag" v-for="tag in tags" v-bind:key="tags.indexOf(tag)">#{{ tag }}</div>
        </div>
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
const userService = require('../../services/user.service');
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
    ErrorMessage
  },
  async created() {
    try {
      const token = localStorage.getItem('token');
      const tags = await userService.getUserTags(token);
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
  width: 100%;
  display: grid;
  padding-top: 1rem;
  grid-template-columns: 25% auto;
  grid-template-rows: auto;
  grid-template-areas: 'sidebar blog-list';
  grid-gap: 0 1.3rem;
}

.sidebar {
  grid-area: sidebar;
  margin-left: 5rem;
}

.blog-list {
  grid-area: blog-list;
  margin-right: 5rem;
}

.tags {
  width: 100%;

  .tag {
    width: fit-content;
    padding: 3px;
    margin: 8px 5px;
    border-radius: 5px;
  }

  .tag:hover {
    cursor: pointer;
  }
}
</style>
