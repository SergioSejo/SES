import { Typography } from '@mui/material';
import type { NextPage } from 'next';
import { Layout } from '../components/layouts';

const HomePage: NextPage= () => { 
  return (
    <Layout title='Home - SES'>
      <Typography variant='h1' color='primary'>SOMOS LOS PUTOS SAD EYES</Typography>
    </Layout>
  )
}

export default HomePage;