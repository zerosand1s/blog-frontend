<template>
  <div class="home-container">
    <Navbar></Navbar>
    <div class="child-container">
      <div class="col-left">
        <BlogList v-bind:blogs="blogs"></BlogList>
      </div>
      <div class="col-right"></div>
    </div>
  </div>
</template>

<script>
import Navbar from '../../components/Navbar/Navbar';
import BlogList from '../../components/BlogList/BlogList';

export default {
  name: 'Home',
  data() {
    return {
      blogs: [
        {
          title:
            "This is my first blog and I'm writing about my experience as professional biker",
          author: 'r.cali',
          likes: 10,
          tags: ['first'],
          date: '2 Apr'
        },
        {
          title: 'I travelled in India this winter',
          author: 'r.cali',
          likes: 26,
          tags: ['travel'],
          date: '8 Apr'
        },
        {
          title: 'How to work with Vue.js components',
          author: 'r.cali',
          likes: 55,
          tags: ['coding', 'programming'],
          date: '10 Apr'
        }
      ]
    };
  },
  components: {
    Navbar,
    BlogList
  }
};
</script>

<style lang="scss" scoped>
@import url('Home.scss');
</style>
