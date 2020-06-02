<template>
  <div>
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
          labelName: 'Resources',
          labelId: 'files',
          items: [
            {
              listName: 'NC CACFP Home Page',
              listId: 'non-content',
              href: 'https://www.nutritionnc.com/snp/index.htm'
            },
            {
              listName: '7 CFR PART 226.6',
              listId: 'non-content',
              href: 'https://www.ecfr.gov/cgi-bin/text-idx?SID=9c3a6681dbf6aada3632967c4bfeb030&mc=true&node=pt7.4.226&rgn=div5#se7.4.226_16'
            },
            {
              listName: 'Corrective Action Document',
              listId: 'non-content',
              href: 'https://www.nutritionnc.com/snp/pdf/cacfp/forms/CAD-Form-10-20.docx'
            },
            {
              listName: 'Corrective Action Document Checklist',
              listId: 'non-content',
              href: 'https://www.nutritionnc.com/snp/pdf/cacfp/forms/CAD-InstitutionChecklist-1019.docx'
            }
          ]
        }
      ]
    }
  }
}
</script>
