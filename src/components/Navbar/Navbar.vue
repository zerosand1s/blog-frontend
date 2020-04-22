<template>
  <div class="container">
    <div class="logo">
      <router-link to="/home">Blogs</router-link>
    </div>
    <div class="navbar">
      <ul class="nav-list">
        <li :class="[currentPath.includes('home') ? activeClass : '', 'nav-item']">
          <router-link to="/home">Home</router-link>
        </li>
        <li :class="[currentPath.includes('profile') ? activeClass : '', 'nav-item']">
          <router-link :to="{ name: 'profile', params: { username: username } }">Profile</router-link>
        </li>
        <li class="nav-item">
          <router-link to v-on:click.native="signout">Signout</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'navbar',
  data() {
    return {
      username: localStorage.getItem('username') || 'invalid',
      activeClass: 'active'
    };
  },
  computed: {
    currentPath() {
      return this.$route.path;
    }
  },
  methods: {
    signout() {
      localStorage.removeItem('token');
      this.$router.push('signin');
    }
  }
};
</script> 

<style lang="scss" scoped>
.container {
  width: 100%;
  display: grid;
  grid-template-columns: 30% auto;
  grid-template-rows: auto;
  grid-template-areas: 'logo links';
  background-color: $secondary;
  border-bottom: 0.1px solid $gray;
}

.logo {
  display: flex;
  flex-direction: row;
  grid-area: logo;
  font-size: 1.5rem;
  justify-content: center;
  align-items: center;

  a {
    color: $dark;
    text-decoration: none;
  }
}

.navbar {
  display: flex;
  flex-direction: row;
  grid-area: links;
  justify-content: flex-end;
  align-items: center;

  .nav-list {
    display: flex;
    flex-direction: row;
    margin-right: 5rem;
    list-style-type: none;
  }

  .nav-item {
    width: 5rem;
    padding: 0.5rem;
    margin: 0 1rem;
    text-align: center;

    a {
      color: $dark;
      text-decoration: none;
    }
  }

  .nav-item:hover {
    border-bottom: solid 2px $primary;
  }

  .active {
    border-bottom: solid 2px $primary;
  }
}
</style>