import axios from './instance'

export function tweets() {
  return axios.get('/api/v1/t')
}

export function postTweet(text) {
  return axios.post('/api/v1/t/create', { text })
}
