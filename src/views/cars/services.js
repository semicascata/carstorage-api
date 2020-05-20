import axios from 'axios'
import URL from '../../http/url'

class CarsService {
  // Render All Cars
  getCars() {
    return axios.get(`${URL}/carros`)
    .then(res => {
      return res.data
    })
  }

  // Render Single Car
  getCar(id) {
    return axios.get(`${URL}/carros/${id}`)
    .then(res => {
      return res.data
    })
  }
}

export default new CarsService()
