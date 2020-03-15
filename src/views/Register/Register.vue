<template>
  <div class="container">
    <header>
      <h2>Register to explore blogs</h2>
    </header>
    <form action="#" method="post">
      <div class="input">
        <label for="firstName">First Name</label>
        <input type="text" name="firstName" />
      </div>
      <div class="input">
        <label for="lastName">Last Name</label>
        <input type="text" name="lastName" />
      </div>
      <div class="input">
        <label for="email">Email</label>
        <input type="text" name="email" />
      </div>
      <div class="input">
        <label for="username">Username</label>
        <input type="text" name="username" />
      </div>
      <div class="input">
        <label for="password">Password</label>
        <input type="password" name="password" />
      </div>
      <div class="input">
        <label for="confirmPassword">Confirm Password</label>
        <input type="password" name="confirmPassword" />
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
export default {};
</script>

<style lang="scss">
@import url("Register.scss");
</style>
