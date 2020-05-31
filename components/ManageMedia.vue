<template>
  <div>
    <slot />
  </div>
</template>

<script>
export default {
  data () {
    return {
      currentAudioObject: null
    }
  },
  watch: {
    // this watcher is for the slider event
    '$store.state.environment.audioPlaying': {
      handler () {
        this.manageMedia()
      }
    }
  },
  mounted () {
    this.manageMedia()
  },
  methods: {
    manageMedia () {
      // manage pausing media
      if (this.currentAudioObject) {
        this.currentAudioObject.pause()
        this.currentAudioObject = null
      }
      // manage playing media
      if (this.$store.state.environment.audioPlaying === true) {
        if (document.getElementById('audio')) {
          const audio = document.getElementById('audio')
          this.currentAudioObject = audio
          this.currentAudioObject.play()
        }
      }
    }
  }
}
</script>
