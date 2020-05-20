export default {
  setUser(state, user) {
    state.loggedUser = user
  },

  setUserFailed(state) {
    state.initState.status.loggedIn = false
    state.user = null
  }
}
