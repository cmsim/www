import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { SWRConfig } from 'swr'
import Meta from '@/components/meta'
import '@/styles/globals.css'
import { getFetch } from '@/utils'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute='class' defaultTheme='light' disableTransitionOnChange>
      <Meta />
      <SWRConfig
        value={{
          fetcher: (url, data) => {
            return getFetch(url, data)
          }
        }}>
        <Component {...pageProps} />
      </SWRConfig>
    </ThemeProvider>
  )
}

export default MyApp
