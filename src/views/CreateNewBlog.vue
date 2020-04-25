<template>
  <div class="cnb-container">
    <navbar></navbar>
    <div class="new-blog-form">
      <form @submit.prevent="create">
        <div class="input">
          <input
            class="input-field"
            type="text"
            name="title"
            v-model="blog.title"
            placeholder="Title"
          />
        </div>
        <div class="input">
          <vue-editor id="editor" v-model="blog.body" placeholder="Write your thoughts"></vue-editor>
        </div>
        <div class="input">
          <input class="input-field" type="text" name="tags" v-model="blog.tags" placeholder="Tags" />
        </div>
        <div class="buttons">
          <div class="input">
            <button class="btn btn--primary" type="submit">Post</button>
          </div>
          <div class="input">
            <button class="btn btn--gray" type="button">Cancel</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { VueEditor } from 'vue2-editor';
import Navbar from '../components/Navbar';
import blogService from '../services/blog.service';

export default {
  name: 'create-new-blog',
  components: {
    VueEditor,
    Navbar
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
.new-blog-form {
  width: auto;
  margin: 1rem 5rem;
}

.input {
  margin-bottom: 25px;
}

// .input .quillWrapper .ql-toolbar {
//   border-radius: $default-border-radius !important;
// }

// .input .quillWrapper .ql-container .ql-editor {
//   min-height: 30rem !important;
// }

.buttons {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;

  button {
    width: 100% !important;
  }
}
</style>