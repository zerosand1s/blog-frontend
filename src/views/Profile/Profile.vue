<template>
  <div class="body">
    <error-message v-if="showError" v-bind:message="errorMessage"></error-message>
    <navbar></navbar>
    <div class="profile-container">
      <div class="user-details">
        <h1>{{ user.firstName }} {{ user.lastName }}</h1>
        <h4>@{{ user.username }}</h4>
        <div>{{ user.email }}</div>
      </div>
      <div class="user-blog-list">
        <blog-list v-bind:blogs="user.blogs"></blog-list>
      </div>
    </div>
  </div>
</template>

<script>
const userService = require('../../services/user.service');
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import Navbar from '../../components/Navbar/Navbar';
import BlogList from '../../components/BlogList/BlogList';
export default {
  components: {
    Navbar,
    ErrorMessage,
    BlogList
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
        const user = await userService.getUserDetails(token, username);
        this.user = user;
        console.log(this.user);
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
@import url('Profile.scss');
</style>