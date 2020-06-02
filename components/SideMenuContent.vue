<template>
  <div>
    <p class="menu-label is-size-5 my-padding-2-top">
      Content
    </p>
    <div v-for="(element, key) in sections" :key="key">
      <ul class="menu-list" role="menu">
        <li>
          <a
            @click="navigate(element.itemRoute);"
            :id="element.itemId"
            ref="item"
            class="is-size-6"
            tabindex="0"
            role="menuitem"
          >
            {{ key + 1 }}. {{ element.itemName }}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      sections: this.$store.state.sections.allSections
    }
  },
  watch: {
    '$store.state.environment.currentRoute' () {
      this.changeView()
    }
  },
  mounted () {
    this.changeView()
  },
  computed: {
    currentSectionObject () {
      return this.$store.getters.currentSectionObject
    }
  },
  methods: {
    changeView () {
      // array of all menu item elements
      const elements = this.$refs.item
      // object of current section
      const current = this.currentSectionObject
      // element in list that matches id in current section object
      const currentElement = elements.find(el => el.id === current.itemId)
      // remove the "is-active" class from each element in the list
      elements.forEach(function (el) { el.removeAttribute('class', 'is-active') })
      // add the is-active class to the current element
      currentElement.setAttribute('class', 'is-active')
    },
    navigate (element) {
      // element is undefined on navigation where sidemenu is not clicked
      if (element) {
        this.$router.push(element)
      }
    }
  }
}
</script>
