<template>
  <div class="container">
    <div class="blog-list-item" v-on:click="showBlogDetails(blog.title)">
      <div class="blog-list-item-top">
        <div class="title">
          <h2>{{ blog.title }}</h2>
        </div>
        <div class="author">
          <h5>{{ blog.author.username }}</h5>
        </div>
      </div>
      <div class="blog-list-item-bottom">
        <!-- <div class="day">{{ blog.date }}</div> -->
        <i class="fas fa-heart"></i>
        <div class="likes">{{ blog.likes }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'blog-list-item',
  props: ['blog'],
  methods: {
    showBlogDetails(title) {
      title = title.split(' ').join('-');
      this.$router.push({ name: 'blog-details', params: { title } });
    }
  }
};
</script> 

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  cursor: pointer;
  border: 0.5px solid $gray;
  border-radius: $default-border-radius;
}

.container + .container {
  margin: 0.8rem 0;
}

.blog-list-item {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0.5rem;

  .blog-list-item-top {
    margin-bottom: 1rem;

    .title h2 {
      margin: 0 0 0.3rem 0;
    }

    .author h5 {
      margin: 0 0 0.3rem 0;
      // font-style: italic;
    }
  }

  .blog-list-item-bottom {
    display: flex;
    flex-direction: row;
    margin-top: 1rem;
    justify-content: flex-start;
    align-items: center;

    .fas {
      margin-right: 0.3rem;
      color: #ff0000;
      -webkit-text-stroke-width: 1px;
      -webkit-text-stroke-color: black;
    }

    .likes {
      margin-left: 0.3rem;
      font-size: 18px;
    }
  }
}
</style>