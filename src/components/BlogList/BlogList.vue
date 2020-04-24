<template>
  <div class="container">
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
.container {
  width: 100%;
  display: flex;
}

.blog-list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 0;
}
</style>