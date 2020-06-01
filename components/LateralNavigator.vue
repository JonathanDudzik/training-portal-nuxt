<template>
  <div class="section">
    <div class="level">
      <div class="level-item" />
      <button
        v-if="nextModuleId"
        class="button is-large level-item ie-support"
        @click="navigateNext()"
      >
        Continue to next section &#62;
      </button>
      <div class="level-item" />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    currentSectionIndex () {
      const sectionsArray = this.$store.state.sections.allSections
      const sectionRef = this.$store.state.environment.sectionReference
      const newArray = []

      for (let i = 0; i < sectionsArray.length; i++) {
        newArray.push(sectionsArray[i].listId)
      }

      function isSelected(element) {
        return element === sectionRef
      }

      return newArray.findIndex(isSelected)

      // no ie11 support
      // return newArray.findIndex(item => item == this.passedSectionRef)
    },

    nextModuleId () {
      const sectionsArray = this.$store.state.sections.allSections
      const currentModuleIndex = this.currentSectionIndex
      const nextModuleIndex = this.currentSectionIndex + 1
      const currentModuleReference = sectionsArray[currentModuleIndex]
      const nextModuleReference = sectionsArray[nextModuleIndex]

      if (nextModuleReference) {
        return nextModuleReference
      } else {
        // if no next section, return current section id
        return currentModuleReference
      }
    }
  },
  methods: {
    navigateNext () {
      console.log(this.$store.getters.currentSection)
      // programmatically change the current sectionReference
      // this.$store.commit('environment/changeSectionReference', this.nextModuleId.listId)

      // programmatically navigate THERE ARE ISSUE HERE
      // this.$router.push(this.nextModuleId.listRoute)

      // scroll to top of new section
      // gsap.to(window, 0.5, {scrollTo: 0})
    }
  }
}
</script>
