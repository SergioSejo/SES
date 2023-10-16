import '@/styles/globals.css'
import { CssBaseline, ThemeProvider } from '@mui/material'
import type { AppProps } from 'next/app'

import { mainTheme } from '../themes';
import { UIProvider } from '../context/ui';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UIProvider>
      <ThemeProvider theme={mainTheme}>
        <CssBaseline></CssBaseline>
      <Component {...pageProps} />
      </ThemeProvider>
    </UIProvider>
  )
}
