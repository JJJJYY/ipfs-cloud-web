import axios from 'axios'

// create an axios instance
axios.defaults.withCredentials = true

const service = axios.create({
  baseURL: process.env.VUE_APP_URL,
  timeout: 5000,
})

// request interceptor
service.interceptors.request.use(
  config => {
    config.headers.Accept = 'application/json'
    config.headers['Content-Type'] = 'application/json'

    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = token
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// response interceptor
// code 200(正常) | 400(请求错误) | 401(未授权访问)
service.interceptors.response.use(response => {
  const data = response.data || {}

  if (data.code == 403) {  // eslint-disable-line
    return Promise.reject(new Error('请先登录！').message)
  } else if (data.code != 200) { // eslint-disable-line
    return Promise.reject(data.msg)
  }
  console.log(response.data)
  return response.data || {}
}, error => {
  return Promise.reject(error.message || '')
})

export default service
