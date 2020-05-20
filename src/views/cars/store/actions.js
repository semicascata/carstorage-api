import CarsService from '../services'

export default {
  ActionGetCars({ commit }) {
    return CarsService.getCars()
    .then(res => {
      // console.log(res)
      commit('setCars', res)
    })
  },

  ActionGetCar({ commit }, id) {
    return CarsService.getCar(id)
    .then(res => {
      // console.log(res)
      commit('setCar', res)
    })
  }
}
