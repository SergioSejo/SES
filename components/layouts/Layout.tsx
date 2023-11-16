import { FC, PropsWithChildren } from 'react';
import Head from 'next/head';
import { Box } from '@mui/material';
import { Navbar, Sidebar } from '../ui';


interface Props {
    title?: string;
}

export const Layout:FC<PropsWithChildren<Props>> = ({ title = 'SES', children }) => {
  return (
      <Box sx={{ height:'100%', flexFlow: 1 }}>
        <Head>
            <title>{ title }</title>
            <meta name="author" content="Sergio Jiménez Yébenes" />
            <meta name="keywords" content={ `Sad eyes, soccer, match, statistic, matches, statistics`} />
        </Head>

        <Navbar />
        <Sidebar />

        <Box sx={{ padding: '10px 20px'  }}>
            { children }
        </Box>
      </Box>
  )
};