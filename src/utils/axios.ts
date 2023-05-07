import axios from 'axios'

/**
 * 创建axios实例
 */
const axiosInstance = axios.create({
  timeout: 15000
})

/**
 * 请求拦截
 */
axiosInstance.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return error
  }
)

/**
 * 响应拦截
 */
axiosInstance.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    return error
  }
)

export default axiosInstance
export const request = axiosInstance.request
