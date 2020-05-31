export const state = () => ({
  audioPlaying: false,
  sectionReference: 'content-one' // resolves to sectionId
})

export const mutations = {
  toggleAudioPlaying (state) {
    state.audioPlaying = !state.audioPlaying
  }
}
