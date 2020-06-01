<template>
  <div>
    <p class="menu-label is-size-5 my-padding-2-top">
      Content
    </p>
    <div v-for="(content, key) in contents" :key="key">
      <ul class="menu-list" role="menu">
        <li @click="sideMenuHandler(content.listId)">
          <nuxt-link
            :id="content.listId"
            ref="item"
            :to="content.listRoute"
            class="is-size-6"
            tabindex="0"
            role="menuitem"
          >
            {{ key }}. {{ content.listName }}
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      contents: this.$store.state.sections.all
    }
  },
  watch: {
    '$store.state.environment.sectionReference' () {
      this.sectionSelectorHandler()
    }
  },
  mounted () {
    return this.sectionSelectorHandler()
  },
  methods: {
    sideMenuHandler (section) {
      this.$store.commit('environment/changeSectionReference', section)
    },
    sectionSelectorHandler () {
      // array of all menu item elements
      const elements = this.$refs.item
      // the current selected section
      const sectionRef = this.$store.state.environment.sectionReference
      // object of nuxt-link that has the matching id of current route
      const selectedElement = elements.find(el => el.$el.id === sectionRef)
      // remove the "is-active" class from each element
      elements.forEach(function (el) { el.$el.removeAttribute('class', 'is-active') })
      // add the is-active class to the value that is selected
      selectedElement.$el.setAttribute('class', 'is-active')
    }
  }
}
</script>
