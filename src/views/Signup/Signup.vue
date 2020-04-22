<template>
  <div class="contanier">
    <error-message v-if="showError" v-bind:message="errorMessage"></error-message>
    <div class="signup-form">
      <header>
        <h3>Sign up now to expore blogs</h3>
      </header>
      <form @submit.prevent="register">
        <div class="input">
          <input
            class="input-field"
            type="text"
            name="firstName"
            v-model="user.firstName"
            placeholder="First name"
          />
        </div>
        <div class="input">
          <input
            class="input-field"
            type="text"
            name="lastName"
            v-model="user.lastName"
            placeholder="Last name"
          />
        </div>
        <div class="input">
          <input
            class="input-field"
            type="text"
            name="email"
            v-model="user.email"
            placeholder="Email"
          />
        </div>
        <div class="input">
          <input
            class="input-field"
            type="text"
            name="username"
            v-model="user.username"
            placeholder="Username"
          />
        </div>
        <div class="input">
          <input
            class="input-field"
            type="password"
            name="password"
            v-model="user.password"
            placeholder="Password"
          />
        </div>
        <div class="input">
          <input
            class="input-field"
            type="password"
            name="confirmPassword"
            v-model="user.confirmPassword"
            placeholder="Confirm password"
          />
        </div>
        <div class="input">
          <button class="btn btn--dark" type="submit">Sign Up</button>
        </div>
      </form>
      <footer>
        <span>Already have an account?</span>
        &nbsp;&nbsp;&nbsp;
        <router-link to="/signin">Sign in</router-link>
      </footer>
    </div>
  </div>
</template>

<script>
const userService = require('../../services/user.service');
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
export default {
  components: {
    ErrorMessage
  },
  data() {
    return {
      user: {
        firstName: '',
        lastName: '',
        email: '',
        username: '',
        password: '',
        confirmPassword: ''
      },
      showError: false,
      errorMessage: ''
    };
  },
  methods: {
    async register() {
      try {
        await userService.register(this.user);
        this.$router.push('signin');
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
.signup-form {
  width: 30%;
  display: flex;
  padding: 1rem;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
  flex-direction: column;
  border-radius: $default-border-radius;
  box-shadow: 2px 2px 8px 5px #ebebff;
}

header {
  margin-bottom: 1rem;
}

.input {
  margin-bottom: 25px;
}

// .input-group {
//   width: inherit;
//   display: flex;
//   flex-direction: row;
// }

// .input-group-left {
//   width: 50%;
//   display: flex;
//   margin-right: 10px;
//   flex-direction: column;
// }

// .input-group-right {
//   width: 50%;
//   display: flex;
//   margin-left: 10px;
//   flex-direction: column;
// }

@media (max-width: 375px) {
  .signup-form {
    width: 90%;
    padding: 1rem;
  }

  // .input-group {
  //   flex-direction: column;
  // }

  // .input-group-left {
  //   width: 100%;
  //   margin-right: 0;
  // }

  // .input-group-right {
  //   width: 100%;
  //   margin-left: 0;
  // }

  .btn {
    width: 45%;
  }
}
</style>
