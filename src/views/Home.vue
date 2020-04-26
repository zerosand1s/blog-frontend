<template>
  <div class="container">
    <navbar></navbar>
    <div class="home">
      <error-message v-if="showError" v-bind:message="errorMessage"></error-message>
      <aside class="sidebar">
        <router-link to="/new-blog">
          <button class="btn btn--green btn--create--blog">Write a blog</button>
        </router-link>
        <topics v-bind:showTagsFollowing="true"></topics>
        <topics v-bind:showTagsFollowing="false"></topics>
      </aside>
      <main class="blog-list">
        <blog-list v-bind:blogs="blogs"></blog-list>
      </main>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Navbar from '../components/Navbar';
import BlogList from '../components/BlogList';
import Topics from '../components/Topics';
import ErrorMessage from '../components/ErrorMessage';

export default {
  name: 'Home',
  data() {
    return {      
      showError: false,
      errorMessage: ''
    };
  },
  components: {
    Navbar,
    BlogList,
    Topics,
    ErrorMessage
  },
  created() {
    this.$store.dispatch('setUserFollowingTags');
    this.$store.dispatch('setSuggestedTags');
  },
  computed: {
    ...mapGetters({
      blogs: 'getBlogs'
    })
  }
};
</script>

<style lang="scss" scoped>
.home {
  width: auto;
  display: grid;
  margin: 1rem 5rem;
  grid-template-columns: 25% auto;
  grid-template-rows: auto;
  grid-template-areas: 'sidebar blog-list';
  grid-gap: 0 1rem;
}

.sidebar {
  grid-area: sidebar;

  .btn--create--blog {
    width: 100%;
    margin-bottom: 0.5rem;
  }
}

.blog-list {
  grid-area: blog-list;
}
</style>
