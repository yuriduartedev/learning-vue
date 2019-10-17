import axios from 'axios'

const success = res => res
const error = err => {
  if(401 === err.response.status) {
    alert('Sua sessão expirou! Por favor faça login novamente!')
    window.location = '/'
  } else {
    return Promise.reject(err)
  }
}

axios.interceptors.response.use(success, error)