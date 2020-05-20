import axios from 'axios'
import router from '../router'
import IntercepServices from './services'

export default function interceptorSetup() {
  // Request
  axios.interceptors.request.use(req => {

    const token = localStorage.getItem('token')
    if (token) {
      req.headers.common['Authorization'] = `Bearer ${token}`
    }

    // console.log(req.headers)
    
    // Edit request config
    return req

  }, err => {
    return Promise.reject(err)
  })

  // Response
  axios.interceptors.response.use(res => {
    console.log(`Endpoint: ${res.config.url}`)

    // Edit request config
    return res
  }, err => {

    const errStatus = err.response.status

    if(errStatus === 403) {
      IntercepServices.logout()
      router.push('/login')
    }

    return err
  })
}
