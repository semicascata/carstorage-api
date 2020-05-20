import axios from 'axios'
import URL from '../../../http/url'

class NavbarService {
  getUser() {
    return axios.get(`${URL}/users/info`)
    .then(res => {
      return res
    })
  }

  logout() {
    localStorage.removeItem('token')
    return console.log('User logged out')
  }
}

export default new NavbarService
