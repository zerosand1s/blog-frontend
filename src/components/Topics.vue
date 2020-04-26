<template>
  <div class="container">
    <div class="tags" v-if="showTagsFollowing">
      <h3>Topics you are interested in</h3>
      <div v-if="tagsUserFollowing.length">
        <div
          class="tag"
          v-for="tag in tagsUserFollowing"
          v-bind:key="tagsUserFollowing.indexOf(tag)"
        >#&nbsp;&nbsp;&nbsp;{{ tag.name }}</div>
      </div>
      <div class="tag" v-else>You do not follow any topics yet</div>
    </div>
    <div class="tags" v-else>
      <h3>Topics you may find interesting</h3>
      <div v-if="tagsSuggested.length">
        <div class="tag" v-for="tag in tagsSuggested" v-bind:key="tagsSuggested.indexOf(tag)">
          <span>#&nbsp;&nbsp;&nbsp;{{ tag.name }}</span>
          <span>
            <button class="btn--small btn--primary" v-on:click="followTag(tag._id)">Follow</button>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'topics',
  props: ['showTagsFollowing'],
  computed: {
    ...mapGetters({      
      tagsUserFollowing: 'getTagsUserFollowing',
      tagsSuggested: 'getTagsSuggested'
    })
  },
  methods: {
    followTag(id) {
      this.$store.dispatch('followTag', id);
    }
  }
};
</script> 

<style lang="scss" scoped>
.container {
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  border: 0.5px solid $gray;
  border-radius: $default-border-radius;
}

.tags {
  h3 {
    margin: 0.5rem;
  }

  .tag {
    padding: 0.5rem;
    margin: 0.3rem 0;

    &:hover {
      font-weight: bold;
      color: $secondary;
      cursor: pointer;
      background-color: $gray;
      border-radius: $default-border-radius;
    }

    span:nth-child(2) {
      float: right;
    }
  }
}
</style>