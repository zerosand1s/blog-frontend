<template>
  <div class="container">
    <header>
      <h1>Sign Up</h1>
      <h3>Sign up now to expore blogs</h3>
    </header>
    <form @submit.prevent="register">
      <div class="input-group">
        <div class="input-group-left">
          <div class="input">
            <label for="firstName">First name</label>
            <input type="text" name="firstName" v-model="user.firstName" />
          </div>
        </div>
        <div class="input-group-right">
          <div class="input">
            <label for="lastName">Last name</label>
            <input type="text" name="lastName" v-model="user.lastName" />
          </div>
        </div>
      </div>
      <div class="input-group">
        <div class="input-group-left">
          <div class="input">
            <label for="email">Email</label>
            <input type="text" name="email" v-model="user.email" />
          </div>
        </div>
        <div class="input-group-right">
          <div class="input">
            <label for="username">Username</label>
            <input type="text" name="username" v-model="user.username" />
          </div>
        </div>
      </div>
      <div class="input-group">
        <div class="input-group-left">
          <div class="input">
            <label for="password">Password</label>
            <input type="password" name="password" v-model="user.password" />
          </div>
        </div>
        <div class="input-group-right">
          <div class="input">
            <label for="confirmPassword">Confirm password</label>
            <!-- eslint-disable-next-line prettier/prettier -->
            <input type="password" name="confirmPassword" v-model="user.confirmPassword" />
          </div>
        </div>
      </div>
      <div class="input">
        <button type="submit">Sign Up</button>
      </div>
    </form>
    <footer>
      <span>Already have an account?</span>
      &nbsp;&nbsp;&nbsp;
      <router-link to="/login">Login</router-link>
    </footer>
  </div>
</template>

<script>
const userService = require('../../services/user.service');
export default {
  data() {
    return {
      user: {
        firstName: '',
        lastName: '',
        email: '',
        username: '',
        password: '',
        confirmPassword: ''
      }
    };
  },
  methods: {
    async register() {
      try {
        await userService.register(this.user);
        this.$router.push('login');
      } catch (err) {
        console.log('ERROR:', err);
      }
    }
  }
};
</script>

<style lang="scss">
@import url('Signup.scss');
</style>
