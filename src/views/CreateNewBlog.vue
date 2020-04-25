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
import blogService from '../services/blog.service';

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
.container {
  width: 80%;
  display: flex;
  padding: 15px;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  margin: auto;
  text-align: center;
  flex-direction: column;
  border-radius: 8px;
  box-shadow: 2px 2px 8px 5px #ebebff;
}

.input {
  position: relative;
  margin-bottom: 25px;
}

.input label {
  float: left;
  margin: 0 0 5px 5px;
}

.input input {
  width: 100%;
  height: 50px;
  font-weight: bold;
  border-radius: 8px;
  padding-left: 10px;
  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box; /* Firefox, other Gecko */
  box-sizing: border-box;
  border: solid 2px lightgray;
}

input:focus {
  outline: none;
  box-shadow: 2px 2px 8px 5px #ebebff;
}

#editor {
  height: 350px;
  border-radius: 8px;
  box-sizing: border-box;
  border: solid 2px lightgray;
}

.input-group {
  width: inherit;
  display: flex;
  flex-direction: row;
}

.input-group-left {
  width: 50%;
  display: flex;
  margin-right: 10px;
  align-items: flex-end;
  flex-direction: column;
}

.input-group-left .input {
  width: 30%;
}

.input-group-right {
  width: 50%;
  display: flex;
  margin-left: 10px;
  align-items: flex-start;
  flex-direction: column;
}

.input-group-right .input {
  width: 30%;
}

.input-group-left .input button {
  width: 100%;
  height: 50px;
  color: #ffffff;
  text-align: center;
  font-weight: bolder;
  text-transform: uppercase;
  border-radius: 8px;
  background-color: #1414ff;
}

.input-group-right .input button {
  width: 100%;
  height: 50px;
  color: #ffffff;
  text-align: center;
  font-weight: bolder;
  text-transform: uppercase;
  border-radius: 8px;
  background-color: #adadad;
}

.input button:hover {
  cursor: pointer;
}
</style>