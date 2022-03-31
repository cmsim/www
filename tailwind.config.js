module.exports = {
  mode: 'jit',
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      boxShadow: {
        menu: '0px 0px 15px rgba(101, 119, 134, .2), 0px 0px 3px 1px rgba(101, 119, 134, .15)' // 阴影 start 0px 0px 15px, 阴影 end 0px 0px 3px 1px
      },
      colors: {
        cang: {
          3: 'rgba(0, 0, 0, .03)', // feed hover 右侧 hover 灰
          10: 'rgba(249, 24, 128, .1)', // 喜欢 hover
          11: 'rgba(0, 186, 124, .1)', // 转发 hover
          30: 'rgba(29, 155, 240, .1)', // 主色 hover 评论 hover
          40: 'rgba(15, 20, 25, .1)', // 菜单 menu
          100: '#f7f9f9', // 背景 边框
          200: '#eff3f4', // 搜索框·背景
          300: '#fff', // 背景
          350: '#536471', // 辅助色 如 @英文名 时间
          400: '#86909c', // placeholder
          500: '#4e5969', // input 文字
          600: '#00ba7c', // 转发主色
          700: '#f91880', // 喜欢主色
          800: '#1d9bf0', // 主色 评论主色
          900: '#0f1419' // menu acitve 主要文字颜色
        },
        'cang-dark': {
          3: 'rgba(255, 255, 255, .03)', // feed hover 右侧 hover 灰
          15: 'rgba(136, 153, 166, .15)', // 阴影 end 0px 0px 3px 1px
          20: 'rgba(136, 153, 166, .2)', // 阴影 start 0px 0px 15px
          40: 'rgba(255, 255, 255, .1)', // 菜单 menu
          100: '#192734', // 背景 边框
          200: '#253341', // 搜索框·背景
          300: '#15202b', // 背景
          900: '#fff' // menu acitve 主要文字颜色
        }
      }
    }
  },
  plugins: []
}
