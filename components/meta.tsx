import Head from 'next/head'

const Meta = () => (
  <Head>
    <meta charSet='utf-8' />
    <title>藏网阁</title>
    <meta
      name='description'
      content='藏网阁是一个可以收藏网络上任意内容的网站'
    />
    <meta name='keyword' content='藏,藏书,藏动漫,藏网站,藏网阁' />
    <meta name='mobile-web-app-capable' content='yes' />
    <meta name='apple-mobile-web-app-capable' content='yes' />
    <meta
      name='apple-mobile-web-app-status-bar-style'
      content='black-translucent'
    />
    <meta name='apple-mobile-web-app-title' content='藏' />
    <meta name='application-name' content='藏' />
    <meta
      name='theme-color'
      content='#f4f4f5'
      media='(prefers-color-scheme: light)'
    />
    <meta
      name='theme-color'
      content='#18181b'
      media='(prefers-color-scheme: dark)'
    />
    <meta
      name='viewport'
      content='width=device-width, initial-scale=1, user-scalable=0, viewport-fit=cover'
    />
    <link rel='apple-touch-icon' href='/icons/favicon.png' />
    <link rel='icon' type='image/png' href='/icons/favicon.png' />
    <link rel='manifest' href='/manifest.json' />
  </Head>
)

export default Meta
