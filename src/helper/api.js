import axios from 'axios'

const config = {
  baseURL: 'https://vue3-course-api.hexschool.io/v2/',
  headers: {}
}

const token = document.cookie.replace(
  /(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,
  '$1'
)

if (token) {
  config.headers.Authorization = token
}

const api_path = 'elsasyu'

const API = axios.create(config)
export { API, api_path }
