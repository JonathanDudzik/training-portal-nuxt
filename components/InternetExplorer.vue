<template>
  <h2 class="ie-warning content is-large">
    <strong>Internet Explorer detected.</strong>
    <br>For the best experience, please use a modern browser such as Edge, Chrome, or Firefox.
  </h2>
</template>

<style scoped>
.ie-warning {
  display: inline-block;
  margin: 3rem;
}

@supports(display: grid) {
  .ie-warning {
      display: none;
  }
}
</style>
