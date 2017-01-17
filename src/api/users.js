import axios from './instance'

export function login(username, password) {
  return axios.post('api/v1/u/login', { username, password })
}

export function logout() {
  return axios.get('api/v1/u/logout')
}

export function signup(username, name, image, password) {
  return axios.post('api/v1/u/signup', { username, name, image, password })
}
