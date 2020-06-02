export const state = () => ({
  audioPlaying: false,
  currentRoute: null
})

export const mutations = {
  toggleAudioPlaying (state) {
    state.audioPlaying = !state.audioPlaying
  },
  changeCurrentRoute (state, route) {
    state.currentRoute = route
  }
}
