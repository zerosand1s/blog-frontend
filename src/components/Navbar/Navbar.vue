<template>
  <div class="navbar-container">
    <div class="navbar">
      <ul class="nav-list">
        <li :class="[currentPath.includes('home') ? activeClass : '', 'nav-item']">
          <router-link to="/home">Home</router-link>
        </li>
        <li :class="[currentPath.includes('profile') ? activeClass : '', 'nav-item']">
          <router-link to="/profile">Profile</router-link>
        </li>
        <li :class="[currentPath.includes('signout') ? activeClass : '', 'nav-item']">
          <router-link to="/signout">Signout</router-link>
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
  }
};
</script> 

<style lang="scss" scoped>
@import url('Navbar.scss');
</style>