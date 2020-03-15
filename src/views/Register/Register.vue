<template>
  <div class="container">
    <header>
      <h2>Register to explore blogs</h2>
    </header>
    <form @submit.prevent="register">
      <div class="input">
        <label for="firstName">First Name</label>
        <input type="text" name="firstName" v-model="user.firstName" />
      </div>
      <div class="input">
        <label for="lastName">Last Name</label>
        <input type="text" name="lastName" v-model="user.lastName" />
      </div>
      <div class="input">
        <label for="email">Email</label>
        <input type="text" name="email" v-model="user.email" />
      </div>
      <div class="input">
        <label for="username">Username</label>
        <input type="text" name="username" v-model="user.username" />
      </div>
      <div class="input">
        <label for="password">Password</label>
        <input type="password" name="password" v-model="user.password" />
      </div>
      <div class="input">
        <label for="confirmPassword">Confirm Password</label>
        <input type="password" name="confirmPassword" v-model="user.confirmPassword" />
      </div>
      <div class="input">
        <button type="submit">Register</button>
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
const userService = require("../../services/user.service");
export default {
  data() {
    return {
      user: {
        firstName: "",
        lastName: "",
        email: "",
        username: "",
        password: "",
        confirmPassword: ""
      }
    };
  },
  methods: {
    async register() {
      try {
        await userService.register(this.user);
        this.$router.push("Login");
      } catch (err) {
        console.log("ERROR:", err);
      }
    }
  }
};
</script>

<style lang="scss">
@import url("Register.scss");
</style>
