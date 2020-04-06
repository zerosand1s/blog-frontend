<template>
  <div class="blog-list-container">
    <div class="blog-list">
      <BlogListItem v-for="blog in blogs" v-bind:key="blogs.indexOf(blog)" v-bind:blog="blog"></BlogListItem>
    </div>
  </div>
</template>

<script>
import BlogListItem from '../BlogListItem/BlogListItem';
export default {
  name: 'BlogList',
  components: {
    BlogListItem
  },
  props: ['blogs']
};
</script> 

<style lang="scss" scoped>
@import url('BlogList.scss');
</style>