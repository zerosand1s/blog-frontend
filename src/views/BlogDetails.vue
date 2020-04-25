<template>
  <div class="bd-container">
    <navbar></navbar>
    <div class="blog-details">
      <header class="header">
        <h2>This is title</h2>
        <h5>r.cali | 10 Apr 2020</h5>
      </header>
      <main>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          <br />
          <br />
          <br />Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
      </main>
      <footer class="footer">
        <i class="fas fa-heart fa-lg"></i>
      </footer>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar';
export default {
  name: 'blog-details',
  components: {
    Navbar
  }
};
</script>

<style lang="scss" scoped>
.blog-details {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 1rem auto;
  max-width: 80ch;
  // background-color: yellow;
}

.header {
  h2,
  h5 {
    margin: 0 0 0.5rem 0;
  }
}

.footer {
  margin-top: 1rem;

  .fas {
    margin-right: 0.3rem;
    color: #ffffff;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: black;

    &:hover {
      cursor: pointer;
    }
  }
}
</style>