<template>
  <div class="blog-list-item-container">
    <div class="blog-list-item">
      <div class="blog-list-item-top">
        <div class="title">
          <h2>{{ blog.title }}</h2>
        </div>
        <div class="author">
          <h5>@&nbsp;&nbsp;{{ blog.author.username }}</h5>
        </div>
      </div>
      <div class="blog-list-item-bottom">
        <div class="day">{{ blog.date }}</div>
        <div class="likes">
          <i class="fas fa-heart"></i>
          {{ blog.likes }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'blog-list-item',
  props: ['blog']
};
</script> 

<style lang="scss" scoped>
@import url('BlogListItem.scss');
</style>