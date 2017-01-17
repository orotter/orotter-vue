import axios from 'axios'
import { camelCase, snakeCase } from 'lodash'

const API_SERVER_HOST = 'http://128.199.191.99'

function transform (fn) {
  return function transformInner (data) {
    if (data === null || typeof data !== 'object') return data

    const res = Array.isArray(data) ? [] : {}
    Object.keys(data).forEach(key => {
      res[fn(key)] = transformInner(data[key])
    })
    return res
  }
}

export default axios.create({
  baseURL: API_SERVER_HOST,
  withCredentials: true,
  transformRequest: [transform(snakeCase)].concat(axios.defaults.transformRequest),
  transformResponse: axios.defaults.transformResponse.concat(transform(camelCase))
})
