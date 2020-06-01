export const state = () => ({
  audioPlaying: false,
  currentRoute: null
  // sectionReference: 'content-one' // resolves to sectionId
})

export const mutations = {
  toggleAudioPlaying (state) {
    state.audioPlaying = !state.audioPlaying
  },
  changeSectionReference (state, section) {
    state.sectionReference = section
  },
  changeCurrentRoute (state, route) {
    state.currentRoute = route
  }
}
