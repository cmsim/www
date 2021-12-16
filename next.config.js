/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

module.exports = withPWA({
  pwa: {
    dest: 'public',
    runtimeCaching,
    disable: process.env.NODE_ENV === 'development'
  },
  future: {
    webpack5: true
  },
  reactStrictMode: true,
  images: {
    loader: 'imgix',
    path: 'https://cms-1251036128.cos.ap-shanghai.myqcloud.com'
  }
})
