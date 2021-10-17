import axios from 'axios'
import qs from 'qs'

export const getBaseUrl = (mode) => {
  switch (mode) {
    case 'production':
      return 'https://pokeapi.co/api/v2/'
    default:
      return 'https://pokeapi.co/api/v2/' || 'http://localhost:8000/'
  }
}

export const API_DOMAIN = getBaseUrl(process.env.VUE_APP_MODE)

const HTTP = {
  request (method, url, data, headers = {}) {
    // perform axios request
    return axios.request({
      url,
      data: qs.stringify(data),
      method,
      headers: Object.assign(
        {
          'Content-Type': 'application/x-www-form-urlencoded',
          Accept: 'application/json'
        },
        headers
      )
    })
  },
  requestPost (method, url, data, headers = {}) {
    // perform axios request
    return axios.request({
      url,
      data,
      method,
      headers: Object.assign(
        {
          'Content-Type': 'application/json'
        },
        headers
      )
    })
  },
  requestUpload (method, url, data) {
    return axios.request({
      url,
      data,
      method,
      headers: Object.assign(
        {
          'Content-Type': 'multipart/form-data'
        }
      )
    })
  },
  requestDownload (method, url, responseType) {
    // perform axios request
    return axios.request({
      url,
      method,
      headers: Object.assign(
        {
          'Content-Type': 'application/x-www-form-urlencoded',
          'X-Requested-With': 'XMLHttpRequest'
        }
      ),
      responseType
    })
  },
  get (url, data, headers = {}) {
    return this.request('get', `${url}`, data, headers)
  },
  getDownload (url, responseType) {
    return this.requestDownload('get', `${url}`, responseType)
  },
  post (url, data, headers = {}) {
    return this.request('post', `${url}`, data, headers)
  },
  put (url, data, headers = {}) {
    return this.request('put', `${url}`, data, headers)
  },
  postReq (url, data, headers = {}) {
    return this.requestPost('post', `${url}`, data, headers)
  },
  postUpload (url, data) {
    return this.requestUpload('post', `${url}`, data)
  },
  putUpload (url, data) {
    return this.requestUpload('put', `${url}`, data)
  },
  patch (url, data, headers = {}) {
    return this.request('patch', `${url}`, data, headers)
  },
  delete (url, data, headers = {}) {
    return this.request('delete', `${url}`, data, headers)
  }
  // init () {
  //   axios.defaults.baseURL = API_DOMAIN

  //   // Intercept the request to make sure the token is injected into the header.
  //   axios.interceptors.request.use((config) => {
  //     const token = cookieServices.getAccessToken()
  //     if (!isEmpty(token)) {
  //       config.headers.Authorization = `Bearer ${token}`
  //     }

  //     return config
  //   })

  //   // Intercept the response and…
  //   axios.interceptors.response.use(
  //     (response) => {
  //       return response
  //     },
  //     (error) => {
  //       // if you does not have refresh - token api
  //       if (error.response.status === 401) {
  //         cookieServices.clearCookie()
  //         router.push({ name: 'root' })
  //         return new Promise((resolve, reject) => {
  //           reject(error)
  //         })
  //       }

  //       // Return any error which is not due to authentication back to the calling service
  //       if (error.response.status !== 401) {
  //         return new Promise((resolve, reject) => {
  //           reject(error)
  //         })
  //       }

  //       // Logout user if token refresh didn't work or user is disabled
  //       if (error.config.url === '/refresh-token' || error.response.message === 'The refresh token is invalid.') {
  //         cookieServices.clearCookie()
  //         router.push({ name: 'root' })
  //         return new Promise((resolve, reject) => {
  //           reject(error)
  //         })
  //       }

  //       // Try request again with new token
  //       return cookieServices.getNewToken()
  //         .then((token) => {
  //           if (helper.hasErrorProperty(token.data)) {
  //             cookieServices.clearCookie()
  //             router.push({ name: 'root' })
  //             return new Promise((resolve, reject) => {
  //               reject(token)
  //             })
  //           }
  //           // New request with new token
  //           const config = error.config
  //           config.headers.Authorization = `Bearer ${token}`

  //           return new Promise((resolve, reject) => {
  //             axios.request(config).then(response => {
  //               resolve(response)
  //             }).catch((error) => {
  //               reject(error)
  //             })
  //           })
  //         })
  //         .catch((error) => {
  //           if (helper.hasErrorProperty(error.data)) {
  //             cookieServices.clearCookie()
  //             router.push({ name: 'root' })
  //             return new Promise((resolve, reject) => {
  //               reject(error)
  //             })
  //           }
  //           Promise.reject(error)
  //         })
  //     }
  //   )
  // }
}

export default HTTP
