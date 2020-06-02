export const state = () => ({
  currentScore: 0,
  incorrectAnswers: 0,
  possibleScore: 10
})

export const mutations = {
  manageScore (state, number) {
    if (number >= 1) {
      state.currentScore += number
    } else {
      state.incorrectAnswers += 1
    }
  }
}
