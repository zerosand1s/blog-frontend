<template>
  <div class="container">
    <error-message v-if="showError" v-bind:message="errorMessage"></error-message>
    <div class="signin-form">
      <header>
        <h3>Sign in to explore blogs</h3>
      </header>
      <form @submit.prevent="signin">
        <div class="input">
          <input
            class="input-field"
            type="text"
            name="username"
            placeholder="Username"
            v-model="credentials.username"
          />
        </div>
        <div class="input">
          <input
            class="input-field"
            type="password"
            name="password"
            placeholder="Password"
            v-model="credentials.password"
          />
        </div>
        <div class="input">
          <button class="btn btn--dark" type="submit">Sign in</button>
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
    async signin() {
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
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.signin-form {
  width: 30%;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
  border-radius: $default-border-radius;
  box-shadow: 2px 2px 8px 5px #ebebff;

  header {
    margin-bottom: 1rem;
  }

  .input {
    margin-bottom: 25px;
  }
}

@media (max-width: 375px) {
  .signin-form {
    width: 90%;
    padding: 1rem;
  }

  .btn {
    width: 45%;
  }
}
</style>
