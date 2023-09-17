import axios from 'axios'

const instance = axios.create({
  baseURL: '',
  timeout: 5000
})

instance.interceptors.request.use(
  config => {
    if (config.method === 'post') {
      config.headers['Content-Type'] = 'application/json'
    }
    
    return config
  },
  error => {
    console.log('eerrr', error)
    return Promise.reject(error)
  }
)

// http response 拦截器
instance.interceptors.response.use(
  response => {
    // 处理返回逻辑
    return response.data.data
  },
  error => {
    return Promise.reject(error)
  }
)

/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */

export function get(url: string, params = {}) {
  return new Promise((resolve, reject) => {
    instance
      .get(url, {
        params
      })
      .then(data => {
        resolve(data)
      })
      .catch(err => {
        console.log('eerrr', err)
        reject(err)
      })
  })
}

/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function post(url: string, data = {}) {
  return new Promise((resolve, reject) => {
    instance.post(url, data).then(
      data => {
        resolve(data)
      },
      err => {
        console.log('#####')
        reject(err)
      }
    )
  })
}

/**
 * 封装patch请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function patch(url: string, data = {}) {
  return new Promise((resolve, reject) => {
    instance.patch(url, data).then(
      data => {
        resolve(data)
      },
      err => {
        reject(err)
      }
    )
  })
}

/**
 * 封装put请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function put(url: string, data = {}) {
  return new Promise((resolve, reject) => {
    instance.put(url, data).then(
      data => {
        resolve(data)
      },
      err => {
        reject(err)
      }
    )
  })
}
