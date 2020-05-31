<template>
  <div>
    <!-- begin behavioral component -->
    <ManageMedia>
      <audio id="audio" src="#" />
    </ManageMedia>
    <!-- end behavioral component -->
    <div class="column is-10">
      <div class="columns">
        <div class="column is-7">
          <div class="content is-medium has-text-grey-dark">
            <h1>Welcome</h1>
            <p>I am glad you were able to join me for today’s training. I am Jonathan Dudzik, and I am an Administrative Officer with the CACFP Nutrition Policy and Training Team. I will be your learning facilitator for today’s session entitled: How to Complete a Corrective Action Document.</p>
            <p>Let’s get started. </p>
            <h1>Learning Objectives</h1>
            <p>Let’s look at the learning outcomes of today’s training. By the end of this training you should be able to:</p>
            <ol>
              <li>Explain what a Corrective Action Document is</li>
              <li>State why a Corrective Action Document is necessary</li>
              <li>Identify components of a Corrective Action Document</li>
              <li>And answer key questions for completing a Corrective Action Document</li>
            </ol>
            <h1>What is a Corrective Action Document?</h1>
            <p>Well, a Corrective Action Document is a written document that explains how an institution will fully and permanently correct a program violation that comes out of a compliance finding.</p>
            <h1>Why Complete a Corrective Action Document?</h1>
            <p>Institutions complete a Corrective Action Document because:</p>
            <ul>
              <li>It is required by Federal Regulation -7 CFR 226.6 (c)</li>
              <li>And to describe how they will correct program violations</li>
            </ul>
          </div>
        </div>
        <div class="column is-5">
          <aside>
            <div class="content is-medium box">
              <h1>How to navigate this course</h1>
              <p>Use the menu to navigate to the various sections of this training.</p>
              <p>There are three knowledge checks in this trianing. Once all three are complete, the <strong>certificate</strong> will appear in the menu under Recources.</p>
              <p>The <strong>Play Audio</strong> button at the bottom of the menu toggles the audio for this training on and off.</p>
              <p>The <strong>Download PDF</strong> button along the top of your screen will download a PDF version of this training.</p>
              <p>The <strong>Download MP3</strong> button along the top of your screen will download an audio only MP3 version of this training.</p>
            </div>
            <figure class="image my-padding-2-top">
              <img src="#" alt="State Seal">
            </figure>
            <!-- begin behavioral component -->
            <ManageScore>
              <template v-slot:default="slotProps">
                <div class="box">
                  <h1>Test your Knowledge</h1>
                  <p>Given the above examples of program violations, how many seperate Corrective Action Documents would be needed?</p>
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
  }
}
</script>
