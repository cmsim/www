import qs from 'query-string'
const prefix = process.env.NODE_ENV === 'development' ? 'http://127.0.0.1:7001/api/' : 'https://d.vv.chat/api/'

/**
 *  get请求url 参数
 * @param {*} path
 * @param {*} query
 */
export function getQueryPath(path = '', query = {}) {
  const search = qs.stringify(query)
  if (search.length) {
    return `${path}?${search}`
  }
  return path
}

export const request = (url: string, method = 'GET', data?: any) => {
  const token = localStorage.getItem('token')
  const opts: any = {
    method,
    timeout: 5000,
    headers: {
      'Content-Type': method == 'POST' ? 'application/json; charset=utf-8' : 'application/x-www-form-urlencoded;charset=utf-8',
      Authorization: `Bearer ${token}`
    }
  }
  if (method == 'POST') {
    opts.body = JSON.stringify(data)
  }
  if (method === 'GET' && data) {
    url = getQueryPath(url, data)
  }
  return fetch(`${prefix}${url}`, opts).then(res => res.json())
}
