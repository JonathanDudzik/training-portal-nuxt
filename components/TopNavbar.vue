<template>
  <nav class="navbar" role="top navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://www.nutritionnc.com/snp/index.htm" target="_blank" aria-label="return to beginning">
        <img src="#" alt="NC CACFP logo">
      </a>
      <div
        class="title is-size-7-mobile is-size-5 has-text-white navbar-item"
        @click="sideMenuHandler('course', course, key)"
      >
        How to Complete a Corrective Action Document
      </div>
    </div>
    <div class="navbar-menu is-paddingless is-active">
      <div class="navbar-end is-flex">
        <a
          href="#"
          target="_blank"
          aria-label="download PDF"
          class="navbar-item is-flex is-size-4"
        >
          <img
            class="my-icon-medium"
            src="#"
            alt="PDF Icon"
          >
          <p class="has-text-white is-block">Download PDF</p>
        </a>
        <a
          href="#"
          target="_blank"
          aria-label="download MP3"
          class="navbar-item is-flex is-size-4"
        >
          <img
            class="my-icon-medium"
            src="#"
            alt="Speaker Icon"
          >
          <p class="has-text-white">Download MP3</p>
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {

}
</script>
