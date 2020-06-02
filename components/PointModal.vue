<template>
  <div v-if="showModal" class="modal-background" style="position: fixed; z-index: 300;">
    <div class="section" style="margin: 3rem 0;">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-half">
            <div class="box has-text-centered content">
              <h1 v-if="correctAnswer">
                That's correct!
              </h1>
              <h1 v-if="incorrectAnswer">
                Sorry, that is not Correct.
              </h1>
            </div>
          </div>
        </div>
        <div class="columns is-centered">
          <div class="column is-3">
            <div class="box has-text-centered" style="height: 100%;">
              <h1 class="is-size-3-mobile is-size-1">
                {{ $store.state.scores.currentScore }}
              </h1>
              <h2 class="is-size-5-mobile is-size-3">
                Points <br> Earned
              </h2>
            </div>
          </div>
          <div class="column is-3">
            <div class="box has-text-centered" style="height: 100%;">
              <h1 class="is-size-3-mobile is-size-1">
                {{ $store.state.scores.possibleScore }}
              </h1>
              <h2 class="is-size-5-mobile is-size-3">
                Points <br> Possible
              </h2>
            </div>
          </div>
        </div>
        <div v-if="certReady" class="columns is-centered">
          <div class="column is-half">
            <div class="box has-text-centered content">
              <p>*Your certificate is ready in the navigation menu</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <button class="button is-large my-modal-btn" aria-label="close" @click="closeModal()">
      CLOSE
    </button>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      showModal: false,
      correctAnswer: null,
      incorrectAnswer: null,
      certReady: null
    }
  },
  watch: {
    // a change in currentScore means question was answered correctly (see addPoint func)
    '$store.state.scores.currentScore': {
      handler: function() {
        this.incorrectAnswer = null
        this.correctAnswer = true
        if (this.$store.state.scores.currentScore >= this.$store.state.scores.possibleScore) {
          this.certReady = true
        }
        this.showModal = true
      }
    },
    // a change in incorrectAnswers means question was not answered correctly (see addPoint func)
    '$store.state.scores.incorrectAnswers': {
      handler: function() {
        this.correctAnswer = null
        this.incorrectAnswer = true
        this.showModal = true
      }
    }
  },
  methods: {
    closeModal: function () {
      // on close return data back to default
      this.incorrectAnswer = null
      this.correctAnswer = null
      this.showModal = false
    }
  }
}
</script>
