<template>
  <div class="has-navbar-fixed-top">
    <noscript>
      <div class="content is-large my-padding-2-top">
      <h3 class="has-text-dark">It appears that Javascript is not enabled on your browser.</h3>
      <p>This site uses scripts for the interactive quiz at the end and will not work without scripts.</p>
      </div>
    </noscript>
    <InternetExplorer />
    <TopNavbar />
    <div class="section">
      <div class="columns min-height-full">
        <nuxt />
        <div class="column is-2 is-inline-block side-menu">
          <nav role="menu" class="menu" aria-label="section navigation">
            <!-- Side menu content -->
            <!-- Side menu resources -->
            <!-- Side menu certificate -->
            <!-- audio slider -->
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InternetExplorer from '~/components/InternetExplorer.vue'
import TopNavbar from '~/components/TopNavbar.vue'

export default {
  components: {
    TopNavbar,
    InternetExplorer
  }
}
</script>

<style>
.min-height-full {
  min-height: 90vh;
}
</style>
