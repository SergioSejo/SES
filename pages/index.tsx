import { Typography } from '@mui/material';
import type { NextPage } from 'next';
import { Layout } from '../components/layouts';
import { Season } from '@/components/ui';
import { Statistics } from '@/components/ui/Statistics';

const HomePage: NextPage= () => { 
  return (
    <Layout title='SES'>
      <Statistics></Statistics>
    </Layout>
  )
}

export default HomePage;
