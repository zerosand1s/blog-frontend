<template>
  <div class="container">
    <form @submit.prevent="create">
      <div class="input">
        <input type="text" name="title" v-model="blog.title" placeholder="Title" />
      </div>
      <div class="input">
        <vue-editor id="editor" v-model="blog.body" placeholder="Blog content"></vue-editor>
      </div>
      <div class="input">
        <input type="text" name="tags" v-model="blog.tags" placeholder="Tags" />
      </div>
      <div class="input-group">
        <div class="input-group-left">
          <div class="input">
            <button type="submit">Post</button>
          </div>
        </div>
        <div class="input-group-right">
          <div class="input">
            <button type="button">Cancel</button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { VueEditor } from 'vue2-editor';
import blogService from '../../services/blog.service';

export default {
  name: 'create-new-blog',
  components: {
    VueEditor
  },
  data() {
    return {
      blog: {
        title: '',
        body: '',
        tags: ''
      }
    };
  },
  methods: {
    async create() {
      try {
        const token = localStorage.getItem('token');
        this.blog.tags = this.blog.tags.split(',');
        await blogService.createBlog(this.blog, token);
        this.$router.push('home');
      } catch (err) {
        console.log('Error: ', err);
      }
    }
  }
};
</script> 

<style lang="scss" scoped>
@import url('CreateNewBlog.scss');
</style>