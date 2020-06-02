<template>
  <div class="section">
    <div class="level">
      <div class="level-item" />
      <button
        v-if="nextSectionObject"
        class="button is-large level-item ie-support"
        @click="navigate('next')"
      >
        {{ nextSectionObject.itemName }}
      </button>
      <button
        v-if="prevSectionObject"
        class="button is-large level-item ie-support"
        @click="navigate('prev')"
      >
        {{ prevSectionObject.itemName }}
      </button>
      <div class="level-item" />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    currentSectionIndex () {
      return this.$store.getters.currentSectionIndex
    },
    nextSectionObject () {
      return this.$store.getters.nextSectionOject
    },
    prevSectionObject () {
      return this.$store.getters.prevSectionOject
    }
  },
  methods: {
    navigate (direction) {
      // programmatically navigate
      if (direction === 'next') {
        this.$router.push(this.nextSectionObject.itemRoute)
      } else if (direction === 'prev') {
        this.$router.push(this.prevSectionObject.itemRoute)
      }
    }
  }
}
</script>
