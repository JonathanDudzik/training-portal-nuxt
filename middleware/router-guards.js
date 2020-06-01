export default function ({store, route, redirect}) {
  store.commit('environment/changeCurrentRoute', route.fullPath)
}
