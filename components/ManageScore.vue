<template>
  <div>
    <slot :method="manageScore" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      count: 3
    }
  },
  methods: {
    manageScore (number) {
      this.$store.commit('scores/manageScore', number)
    }
  }
}
</script>
