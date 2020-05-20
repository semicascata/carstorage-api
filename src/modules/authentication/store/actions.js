import AuthService from '../services'

export default {
  ActionLogin({ commit }, user) {
    return AuthService.login(user)
      .then(res => {
        if (res.response && res.response.status === 401) {
          throw res
        }

          const logged = {
          status: 200,
          resUser: res.data.nome
        }
        commit('loginSuccess', res.data)
        return logged
      })
      // Here we treat the request errors
      .catch(err => {
        if (err.response) {
          const errors = {
            status: err.response.status,
            errMessage: err.response.data.error
          }
          commit('loginFailure')
          return errors
        }
      })
  }
}
