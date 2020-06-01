<template>
  <div>
    <!-- begin behavioral component -->
    <ManageMedia>
      <audio id="audio" src="@/assets/audio/2.mp3" />
    </ManageMedia>
    <!-- end behavioral component -->
    <div class="column is-10">
      <div class="columns">
        <div class="column is-7">
          <div class="content is-medium has-text-grey-dark">
            <h1>Regulatons!</h1>
            <p>Let’s get started.</p>
          </div>
        </div>
        <div class="column is-5">
          <aside>
            <div class="content is-medium box">
              <h1>How to navigate this course</h1>
              <p>Use the menu to navigate to the various sections of this training.</p>
            </div>
            <figure class="image my-padding-2-top">
              <img src="#" alt="State Seal">
            </figure>
            <button class="button" @click="playAudio">
              AUDIO
            </button>
            <!-- begin behavioral component -->
            <ManageScore>
              <template v-slot:default="slotProps">
                <div class="box">
                  <h1>Test your Knowledge</h1>
                  <div class="level">
                    <button style="margin: 0 2rem;" class="button is-large level-item" @click="slotProps.method(0)">
                      1
                    </button>
                    <button style="margin: 0 2rem;" class="button is-large level-item" @click.once="slotProps.method(10)">
                      3
                    </button>
                    <button style="margin: 0 2rem;" class="button is-large level-item" @click="slotProps.method(0)">
                      6
                    </button>
                  </div>
                </div>
              </template>
            </ManageScore>
            <!-- end behavioral component -->
          </aside>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ManageMedia from '~/components/ManageMedia.vue'
import ManageScore from '~/components/ManageScore.vue'

export default {
  components: {
    ManageScore,
    ManageMedia
  },
  methods: {
    playAudio () {
      this.$store.commit('environment/toggleAudioPlaying')
    }
  }
}
</script>
