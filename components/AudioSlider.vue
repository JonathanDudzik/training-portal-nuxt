<template>
  <div class="columns is-desktop is-vcentered my-marg-vertical-1 my-pad-vertical-1 top-bordered">
    <div class="column">
      <p>Play Audio</p>
    </div>
    <div class="column">
      <button class="slider" @click="sliderHandler()">
        <div id="audio-slider-fill" class="slider__fill" />
        <p id="audio-slider-label" class="slider__label text text_uppercase">
          off
        </p>
        <div id="audio-slider-knob" class="slider__knob" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  watch: {
    '$store.state.environment.audioPlaying' () {
      // this.sliderAnimation()
    }
  },
  methods: {
    sliderHandler () {
      this.$store.commit('environment/toggleAudioPlaying')
    }

    // sliderAnimation: function () {
    //   TweenLite.defaultEase = Linear.easeNone
    //   var fill = '#audio-slider-fill'
    //   var label = '#audio-slider-label'
    //   var knob = '#audio-slider-knob'

    //   var timeline = new TimelineMax({})

    //   if(this.passedState == true) {
    //     timeline.set(label, {text: "on", x: '-7px'}, 0.2)
    //     timeline.to(knob, 0.2, {left: '68%'}, 0.2)
    //     timeline.to(fill, 0.1, {backgroundColor: '#337AB7'}, 0.3)
    //   }
    //   if(this.passedState == false) {
    //     timeline.to(fill, 0.2, {backgroundColor: '#092940'}, 0.2)
    //     timeline.set(label, {text: "off", x: '0px'}, 0.2)
    //     timeline.to(knob, 0.2, {left: '-13%'}, 0.2)
    //   }
    // }
  }
}
</script>
