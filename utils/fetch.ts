import qs from 'query-string'
const prefix = process.env.NODE_ENV === 'development' ? 'http://127.0.0.1:7001/api/' : 'https://d.vv.chat/api/'
/**
 * @description: 枚举出请求数据格式类型
 * @param {type} 枚举类型
 * @return:
 */
enum ContentType {
  json = 'application/json;charset=UTF-8',
  form = 'application/x-www-form-urlencoded; charset=UTF-8'
}

interface IHttp {
  postFetch<R, P = {}>(url: string, params?: P): Promise<R>
}
export default class HttpRequests implements IHttp {
  /**
   *  get请求url 参数
   * @param {*} path
   * @param {*} query
   */
  public getQueryPath = (path = '', query = {}) => {
    const search = qs.stringify(query)
    if (search.length) {
      return `${path}?${search}`
    }
    return path
  }
  public async postFetch<R, P = {}>(url: string, params?: P, method?: 'GET' | 'POST'): Promise<R> {
    const token = localStorage.getItem('token')
    let options: RequestInit = {
      method,
      headers: {
        'Content-Type': method === 'GET' ? ContentType.json : ContentType.form,
        Authorization: `Bearer ${token}`
      }
    }
    if (method == 'POST') {
      options.body = JSON.stringify(params)
    }
    if (method === 'GET' && params) {
      url = this.getQueryPath(url, params)
    }
    return await fetch(`${prefix}${url}`, options)
      .then<R>(response => {
        // response.code：是与服务器端约定code：200表示请求成功，非200表示请求失败，message：请求失败内容
        if (response) {
          return response.json()
        } else {
          // 非 200，错误处理
          return response
        }
      })
      .catch<R>(error => {
        // alert("当前网络不可用，请检查网络设置！");
        return error
      })
  }
}
