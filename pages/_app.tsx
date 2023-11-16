import '@/styles/globals.css'
import { CssBaseline, ThemeProvider } from '@mui/material'
import type { AppProps } from 'next/app'

import { mainTheme } from '../themes';
import { UIProvider } from '../context/ui';
import { SeasonProvider } from '../context/season';
import { StatisticProvider } from '../context/statistic';
import { MatchProvider } from '../context/match';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UIProvider>
      <ThemeProvider theme={mainTheme}>
        <CssBaseline></CssBaseline>
        <SeasonProvider>
          <MatchProvider>
            <StatisticProvider>
              <Component {...pageProps} />
            </StatisticProvider>
          </MatchProvider>
        </SeasonProvider>
      </ThemeProvider>
    </UIProvider>
  )
}
