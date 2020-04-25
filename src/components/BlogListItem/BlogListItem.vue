<template>
  <div class="container">
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
.container {
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  cursor: pointer;
}

.container + .container {
  margin: 1.2rem 0;
}

.blog-list-item {
  width: 100%;
  display: flex;
  flex-direction: column;

  .blog-list-item-top {
    margin-bottom: 1rem;

    .title h2 {
      margin: 0 0 1px 0;
    }

    .author h5 {
      margin: -1px 0 0 0;
      font-style: italic;
    }
  }

  .blog-list-item-bottom {
    margin-top: 1rem;

    .day {
      margin-bottom: 5px;
    }

    .tags {
      background-color: yellow;
    }

    .likes .fas {
      color: #ff0000;
      -webkit-text-stroke-width: 1px;
      -webkit-text-stroke-color: black;
    }
  }
}
</style>