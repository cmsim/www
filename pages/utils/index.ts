import HttpReq from './fetch'

const Http = new HttpReq()
export async function getFetch<R, P = {}>(url: string, params?: any) {
  return Http.postFetch<R, P>(url, params, 'GET')
}
export async function postFetch<R, P = {}>(url: string, params?: any) {
  return Http.postFetch<R, P>(url, params, 'POST')
}
