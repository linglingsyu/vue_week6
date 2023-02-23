import axios from 'axios'

const config = {
  baseURL: import.meta.env.VITE_API,
  headers: { 'Content-Type': 'application/json' }
}

const api_path = import.meta.env.VITE_APIPATH

const API = axios.create(config)

// 此處的instance為我們create的實體
API.interceptors.request.use(
  function (config) {
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,
      '$1'
    )
    // Do something before request is sent
    if (token) {
      config.headers.Authorization = token
    }
    return config
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  }
)

export { API, api_path }
