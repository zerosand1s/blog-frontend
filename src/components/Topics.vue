<template>
  <div class="container">
    <div class="tags">
      <h3>Topics you are interested in</h3>
      <div
        class="tag"
        v-for="tag in tags"
        v-bind:key="tags.indexOf(tag)"
      >#&nbsp;&nbsp;&nbsp;{{ tag }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'topics',
  props: ['tags']
};
</script> 

<style lang="scss" scoped>
.container {
  width: 100%;
  padding: 0.5rem;
  border: 0.5px solid $primary;
  border-radius: $default-border-radius;
}

.tags {
  .tag {
    padding: 0.5rem;
    margin: 0.5rem 0;
  }

  .tag:hover {
    font-weight: bold;
    color: $secondary;
    cursor: pointer;
    background-color: yellowgreen;
  }
}
</style>