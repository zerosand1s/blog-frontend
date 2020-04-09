<template>
  <div class="base">
    <error-message v-if="showError" v-bind:message="errorMessage"></error-message>
    <div class="container">
      <header>
        <h1>Sign In</h1>
        <h3>Sign in to explore blogs</h3>
      </header>
      <form @submit.prevent="login">
        <div class="input">
          <label for="username">Username</label>
          <input type="text" name="username" v-model="credentials.username" />
        </div>
        <div class="input">
          <label for="password">Password</label>
          <input type="password" name="password" v-model="credentials.password" />
        </div>
        <div class="input">
          <button type="submit">Sign in</button>
        </div>
      </form>
      <footer>
        <span>Do not have an account yet?</span>
        &nbsp;&nbsp;&nbsp;
        <router-link to="/signup">Sign up</router-link>
      </footer>
    </div>
  </div>
</template>

<script>
const authService = require('../../services/auth.service');
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
export default {
  components: {
    ErrorMessage
  },
  data() {
    return {
      credentials: {
        username: '',
        password: ''
      },
      showError: false,
      errorMessage: ''
    };
  },
  methods: {
    async login() {
      try {
        const res = await authService.login(this.credentials);
        localStorage.setItem('token', res.data.data.token);
        localStorage.setItem('username', res.data.data.username);
        this.$router.push('home');
      } catch (err) {
        this.errorMessage = err.response.data.message;
        this.showError = true;
        setTimeout(() => {
          this.showError = false;
        }, 3000);
        this.$router.push('signin');
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import url('Signin.scss');
</style>
