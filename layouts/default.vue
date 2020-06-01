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
        <nuxt /> <!-- individual pages -->
        <div class="column is-2 is-inline-block side-menu">
          <nav role="menu" class="menu" aria-label="section navigation">
            <!-- <SideMenuContent /> -->
            <!-- Side menu resources -->
            <!-- Side menu certificate -->
            <!-- audio slider -->
          </nav>
        </div>
      </div>
    </div>
    <LateralNavigator />
  </div>
</template>

<script>
import InternetExplorer from '~/components/InternetExplorer.vue'
import TopNavbar from '~/components/TopNavbar.vue'
// import SideMenuContent from '~/components/SideMenuContent.vue'
import LateralNavigator from '~/components/LateralNavigator.vue'

export default {
  components: {
    LateralNavigator,
    // SideMenuContent,
    TopNavbar,
    InternetExplorer
  }
}
</script>

<style>
.navbar {
  /* background-color: #092940; */
  background-color: #092940;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
}

.navbar-end {
  background-color: #092940;
}

.navbar-item img {
  max-height: 3rem;
}

a.navbar-item:focus, a.navbar-item:focus-within, a.navbar-item:hover, a.navbar-item.is-active, .navbar-link:focus, .navbar-link:focus-within, .navbar-link:hover, .navbar-link.is-active {
  background-color: hsl(0, 0%, 48%);
}

.menu-list a.is-active {
  background-color: hsl(0, 0%, 71%);
  color: black;
}

.menu-list a:hover {
  background-color: #397aac;
  color: white;
}

.button {
  background-color: #397aac;
  color: hsl(0, 0%, 100%);
}

.button:hover {
  background-color: #092940;
  color: hsl(0, 0%, 100%);
}

.notification {
  background-color: #397aac;
}

/* my utility styles */

.my-shadow-small {
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
}

.my-marg-vertical-1 {
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
}

.my-pad-vertical-1 {
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
}

.my-pad-horizontal-1 {
  padding-left: 1rem;
  padding-right: 1rem;
}

.my-pad-small {
  padding: 0.5rem;
}

.my-padding-2-top {
  padding-top: 2rem;
}

.my-padding-3-top {
  padding-top: 5rem;
}

.min-height-full {
  min-height: 90vh;
}

.my-background-image {
  background-image: url("~assets/images/bg_poly-accent-blue.jpg");
}

.bottom-bordered {
  border-bottom: solid 1px;
}

.top-bordered {
  border-top: solid 1px;
}

.my-icon-medium {
  width: 70px;
  /* padding: 1rem; */
}

.my-modal-btn {
  position: fixed;
  top: 5%;
  right: 5%;
}

.side-menu {
  height: 100%;
  margin-top: 0.75rem;
  margin-bottom: 1rem;
  background-color: #ecf0f3;
  border-radius: 3px;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
}

/* SLIDER SELECTORS */
.slider {
  box-sizing: content-box;
  position: relative;
  width: 60px;
  height: 26px;
  border-radius: 25px;
  border: 1.5px solid;
  background-color: transparent;
  cursor: pointer;
  z-index: 1;
}

.slider-title {
  height: 2rem;
  padding-right: 1rem;
}

.slider__fill {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 25px;
  background-color: #092940;
  z-index: 2;
}

.slider__label {
  position: absolute;
  top: 0;
  left: 45%;
  color: white;
  line-height: 26px;
  z-index: 3;
}

.slider__knob {
  position: relative;
  top: 0;
  left: -12%;
  width: 26px;
  height: 27px;
  border-radius: 100%;
  background-color: grey;
  z-index: 4;
}
</style>
