import '@/styles/globals.css'
import { CssBaseline, ThemeProvider } from '@mui/material'
import type { AppProps } from 'next/app'

import { mainTheme } from '../themes';
import { UIProvider } from '../context/ui';
import { SeasonProvider } from '../context/season';
import { StatisticProvider } from '../context/statistic';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UIProvider>
      <ThemeProvider theme={mainTheme}>
        <CssBaseline></CssBaseline>
        <SeasonProvider>
          <StatisticProvider>
            <Component {...pageProps} />
          </StatisticProvider>
        </SeasonProvider>
      </ThemeProvider>
    </UIProvider>
  )
}
