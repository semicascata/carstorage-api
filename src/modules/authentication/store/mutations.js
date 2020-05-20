export default {
  loginSuccess(state, user) {
    state.initState.status.loggedIn = true
    state.user = user
  },

  loginFailure(state) {
    state.initState.status.loggedIn = false
    state.user = null
  }
}
