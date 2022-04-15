import HttpReq from './fetch'

const Http = new HttpReq()
export async function getFetch<R, P = {}>(url: string, params?: any) {
  return Http.postFetch<R, P>(url, params, 'GET')
}
export async function postFetch<R, P = {}>(url: string, params?: any) {
  return Http.postFetch<R, P>(url, params, 'POST')
}

export const formatPic = (url: string, width = 2560, height = 1440) => {
  /**
   * https://cn.bing.com/th?id=OHR.Malaga_ZH-CN9644862917_UHD.jpg&w=2880&h=1620
   * https://cn.bing.com/th?id=OHR.Malaga_ZH-CN9644862917_UHD.jpg&w=2560&h=1440
   * https://cn.bing.com/th?id=OHR.Malaga_ZH-CN9644862917_UHD.jpg&w=1920&h=1080
   */
  if (!url) return ''
  const r = url?.split('_1920')
  return `https://cn.bing.com${r[0]}${`_UHD.jpg&w=${width}&h=${height}`}`
}
