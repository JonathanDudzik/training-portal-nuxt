export const state = () => ({})

export const getters = {
  currentSection: (state) => {
    return 'return ' + state.sections.allSections[0].listId + ' filtered by the current route, ' + state.environment.currentRoute
  }
}
