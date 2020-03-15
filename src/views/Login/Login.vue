<template>
  <div class="container">
    <header>
      <h2>Login to explore blogs</h2>
    </header>
    <form action="#" method="post">
      <div class="input">
        <input type="text" name="username" />
      </div>
      <div class="input">
        <input type="text" name="password" />
      </div>
      <div class="input">
        <button type="submit">Login</button>
      </div>
    </form>
    <footer>
      <span>Do not have an account yet?</span>
      &nbsp;&nbsp;&nbsp;
      <router-link to="/register">Register</router-link>
    </footer>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import url("Login.scss");
</style>
