<template>
  <div class="container">
    <navbar></navbar>
    <div class="profile">
      <error-message v-if="showError" v-bind:message="errorMessage"></error-message>
      <div class="user-details">
        <h1>{{ user.firstName }} {{ user.lastName }}</h1>
        <h4>@{{ user.username }}</h4>
        <div>{{ user.email }}</div>
      </div>
      <div class="user-blogs">
        <aside class="sidebar">
          <topics v-bind:showTagsFollowing="true"></topics>
        </aside>
        <main class="blog-list">
          <blog-list v-bind:blogs="blogs"></blog-list>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ErrorMessage from '../components/ErrorMessage';
import Navbar from '../components/Navbar';
import Topics from '../components/Topics';
import BlogList from '../components/BlogList';
export default {
  components: {
    Navbar,
    ErrorMessage,
    BlogList,
    Topics
  },
  data() {
    return {
      loading: true,      
      showError: false,
      errorMessage: ''
    };
  },
  created() {
    this.$store.dispatch('setUserBlogs');    
  },
  computed: {
    ...mapGetters({
      user: 'getUser',
      blogs: 'getUserBlogs'    
    })
  }
};
</script>

<style lang="scss" scoped>
.profile {
  display: grid;
  grid-template-columns: 25% auto;
  grid-template-rows: auto;
  grid-gap: 1rem;
  grid-template-areas: 'user-details user-details' 'user-blogs user-blogs';
  margin: 1rem 5rem;
}

.user-details {
  width: auto;
  // margin: 1rem 5rem;
  display: flex;
  flex-direction: column;
  padding: 0.8rem;
  text-align: center;
  grid-area: user-details;
  border: 0.5px solid $primary;
  border-radius: $default-border-radius;
}

.user-blogs {
  width: 100%;
  display: grid;
  grid-area: user-blogs;
  grid-template-columns: 25% auto;
  grid-template-rows: auto;
  grid-template-areas: 'sidebar blog-list';
  grid-gap: 0 1rem;
}

.sidebar {
  width: 100%;
  grid-area: sidebar;
}

.blog-list {
  width: 100%;
  grid-area: blog-list;
}
</style>