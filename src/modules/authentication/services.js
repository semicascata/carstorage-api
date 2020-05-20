import axios from 'axios'
import URL from '../../http/url'

class AuthService {
  // Login handler
  login(user) {
    return axios.post(`${URL}/login`, {
      username: user.username,
      password: user.password
    })
    // Here, we treat only the Response
    .then(res => {
      if(res.data !== undefined) {
        // Set token to Local Storage
        const token = res.data.token
        localStorage.setItem('token', token)
      }
      return res
    })
  }
}

export default new AuthService()
