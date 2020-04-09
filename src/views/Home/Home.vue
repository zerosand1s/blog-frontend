<template>
  <div class="body">
    <error-message v-if="showError" v-bind:message="errorMessage"></error-message>
    <div class="home-container">
      <navbar></navbar>
      <div class="child-container" v-if="tags.length">
        <div class="col-left">
          <blog-list v-bind:blogs="blogs"></blog-list>
        </div>
        <div class="col-right">
          <div class="all-tags">
            <h3>Things you are interested in</h3>
            <div
              class="tag"
              v-for="tag in tags"
              v-bind:key="tags.indexOf(tag)"
              v-bind:tag="tag"
            >#{{ tag }}</div>
          </div>
        </div>
      </div>
      <div class="empty" v-if="!tags.length">
        <h3>
          Looks like it's all empty here.
          Please follow things that you are interested in.
        </h3>
      </div>
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
@import url('Home.scss');
</style>
