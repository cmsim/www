import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { SWRConfig } from 'swr'
import Meta from '@/components/meta'
import '../styles/globals.css'
import qs from 'query-string'

function MyApp({ Component, pageProps }: AppProps) {
  const prefix = 'http://127.0.0.1:7001/api/'
  return (
    <ThemeProvider attribute='class' defaultTheme='light' disableTransitionOnChange>
      <Meta />
      <SWRConfig
        value={{
          fetcher: (resource, init) => {
            return fetch(`${prefix}${resource}?${qs.stringify(init)}`).then(res => res.json())
          }
        }}>
        <Component {...pageProps} />
      </SWRConfig>
    </ThemeProvider>
  )
}

export default MyApp
