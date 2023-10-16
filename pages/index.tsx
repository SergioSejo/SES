import { Typography } from '@mui/material';
import type { NextPage } from 'next';
import { Layout } from '../components/layouts';
import { Statistics } from '@/components/statistics/Statistics';

const HomePage: NextPage= () => { 
  return (
    <Layout title='SES'>
      <Statistics></Statistics>
    </Layout>
  )
}

export default HomePage;
