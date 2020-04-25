<template>
  <div class="error-message-container">
    <div class="error-message">{{ message }}</div>
  </div>
</template>

<script>
export default {
  name: 'error-message',
  props: ['message']
};
</script>

<style lang="scss" scoped>
.error-message-container {
  width: 22%;
  height: 8%;
  display: flex;
  // align-items: center;
  justify-content: center;
  position: absolute;
  top: 2%;
  right: 2%;
  color: #000000;
  border-radius: 8px;
  background-color: #ffcccb;
  box-shadow: 2px 2px 8px 5px #ffcccb;
  z-index: 1000;
}

.error-message {
  display: flex;
  margin: auto;
  text-align: center;
}
</style>
