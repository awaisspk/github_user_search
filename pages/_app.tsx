import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import React from 'react'
import { globalStyles } from '../styles/global'
import { DarkTheme } from '@stitchesConfig'
import { ThemeProvider } from 'next-themes'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5000,
    },
  },
})

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  globalStyles()

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider
        disableTransitionOnChange
        attribute="class"
        defaultTheme="system"
        value={{ light: 'light', dark: DarkTheme.className }}
      >
        <Component {...pageProps} />
      </ThemeProvider>
    </QueryClientProvider>
  )
}
export default MyApp
