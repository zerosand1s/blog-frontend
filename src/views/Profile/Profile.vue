<template>
  <div class="container">
    <navbar></navbar>
    <div class="profile">
      <error-message v-if="showError" v-bind:message="errorMessage"></error-message>
      <div class="user-details">
        <h1>{{ user.firstName }} {{ user.lastName }}</h1>
        <h4>@{{ user.username }}</h4>
        <div>{{ user.email }}</div>
      </div>
      <div class="user-blogs">
        <aside class="sidebar">
          <topics v-bind:tags="user.tags"></topics>
        </aside>
        <main class="blog-list">
          <blog-list v-bind:blogs="user.blogs"></blog-list>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
const userService = require('../../services/user.service');
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import Navbar from '../../components/Navbar/Navbar';
import Topics from '../../components/Topics';
import BlogList from '../../components/BlogList/BlogList';
export default {
  components: {
    Navbar,
    ErrorMessage,
    BlogList,
    Topics
  },
  data() {
    return {
      loading: true,
      user: {},
      showError: false,
      errorMessage: ''
    };
  },
  created() {
    this.getUserDetails();
  },
  methods: {
    async getUserDetails() {
      try {
        const token = localStorage.getItem('token');
        const username = localStorage.getItem('username');
        const tags = ['travel', 'sports', 'coding'];
        const user = await userService.getUserDetails(token, username);
        user.tags = tags;
        this.user = user;
        this.loading = false;
      } catch (err) {
        this.errorMessage = err.response.data.message;
        this.showError = true;
        setTimeout(() => {
          this.showError = false;
        }, 3000);
        this.$router.push('signup');
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.profile {
  display: grid;
  grid-template-columns: 25% auto;
  grid-template-rows: auto;
  grid-gap: 1rem;
  grid-template-areas: 'user-details user-details' 'user-blogs user-blogs';
  margin: 1rem 5rem;
}

.user-details {
  width: auto;
  // margin: 1rem 5rem;
  display: flex;
  flex-direction: column;
  padding: 0.8rem;
  text-align: center;
  grid-area: user-details;
  border: 0.5px solid $primary;
  border-radius: $default-border-radius;
}

.user-blogs {
  width: 100%;
  display: grid;
  grid-area: user-blogs;
  grid-template-columns: 25% auto;
  grid-template-rows: auto;
  grid-template-areas: 'sidebar blog-list';
  grid-gap: 0 1rem;
}

.sidebar {
  width: 100%;
  grid-area: sidebar;
}

.blog-list {
  width: 100%;
  grid-area: blog-list;
}
</style>