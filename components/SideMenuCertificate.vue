<template>
  <div v-if="$store.state.scores.currentScore == $store.state.scores.possibleScore">
    <div v-for="(resource, key) in resources" :key="key">
      <p class="menu-label my-padding-2-top is-size-5">
        {{ resource.labelName }}
      </p>
      <ul v-for="(item, key) in resource.items" :key="key" class="menu-list" role="menu">
        <li><a :href="item.href" target="_blank" class="is-size-6" tabindex="0" role="menuitem">{{ item.listName }}</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  /* eslint vue/no-template-shadow: "off" */
  data: function() {
    return {
      resources: [
        {
          labelName: 'Certificate',
          labelId: 'certificate',
          items: [
            {
              listName: 'Download Certificate',
              listId: 'non-content',
              href: 'https://ncnutrition.adobeconnect.com/pxbf9fgxn1ud/'
            }
          ]
        }
      ]
    }
  }
}
</script>
