export const state = () => ({})

export const getters = {
  currentSectionIndex: (state) => {
    const sectionsArray = state.sections.allSections
    const sectionRef = state.environment.currentRoute
    const newArray = []

    for (let i = 0; i < sectionsArray.length; i++) {
      newArray.push(sectionsArray[i].itemRoute)
    }

    return newArray.findIndex(item => item === sectionRef)
  },
  currentSectionObject: (state, getters) => {
    const sectionsArray = state.sections.allSections
    const currentSectionIndex = getters.currentSectionIndex
    return sectionsArray[currentSectionIndex]
  },
  nextSectionOject: (state, getters) => {
    const sectionsArray = state.sections.allSections
    const currentSectionIndex = getters.currentSectionIndex
    const nextSectionIndex = currentSectionIndex + 1
    const nextSectionObject = sectionsArray[nextSectionIndex]

    if (nextSectionObject) {
      return nextSectionObject
    } else {
      // if no next section return null
      return null
    }
  },
  prevSectionOject: (state, getters) => {
    const sectionsArray = state.sections.allSections
    const currentSectionIndex = getters.currentSectionIndex
    const prevSectionIndex = currentSectionIndex - 1
    const prevSectionObject = sectionsArray[prevSectionIndex]

    if (prevSectionObject) {
      return prevSectionObject
    } else {
      // if no next section return null
      return null
    }
  }
}
