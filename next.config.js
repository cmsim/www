/** @type {import('next').NextConfig} */
module.exports = {
  future: {
    webpack5: true
  },
  reactStrictMode: true,
  images: {
    loader: 'imgix',
    path: 'https://cms-1251036128.cos.ap-shanghai.myqcloud.com'
  }
}
