<template>
  <div class="navbar-container">
    <div class="navbar">
      <ul class="nav-list-left">
        <li :class="[currentPath.includes('home') ? activeClass : '', 'nav-item-left']">
          <router-link to="/home">Home</router-link>
        </li>
        <li :class="[currentPath.includes('profile') ? activeClass : '', 'nav-item-left']">
          <router-link to="/profile">Profile</router-link>
        </li>
        <li class="nav-item-left">
          <router-link to v-on:click.native="signout">Signout</router-link>
        </li>
      </ul>
      <ul class="nav-list-right">
        <li class="nav-item-right">
          <router-link to="/new-blog">
            <button class="btn-write-a-blog">Write a blog</button>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
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
@import url('Navbar.scss');
</style>