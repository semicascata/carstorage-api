import NavbarService from '../services'

export default {
  ActionGetUser({ commit }) {
    try {
      return NavbarService.getUser()
        .then(res => {
          commit('setUser', res.data)
          return Promise.resolve(res.data)
        })
    } catch (err) {
      commit('setUserFailed')
      return Promise.reject(err)
    }
  },

  ActionLogout() {
    return NavbarService.logout()
  }
}
