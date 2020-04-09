<template>
  <div class="blog-list-container">
    <div class="blog-list">
      <blog-list-item v-for="blog in blogs" v-bind:key="blogs.indexOf(blog)" v-bind:blog="blog"></blog-list-item>
    </div>
  </div>
</template>

<script>
import BlogListItem from '../BlogListItem/BlogListItem';
export default {
  name: 'blog-list',
  components: {
    BlogListItem
  },
  props: ['blogs']
};
</script> 

<style lang="scss" scoped>
@import url('BlogList.scss');
</style>