import type { NextPage } from 'next';
import { Layout } from '../components/layouts';
import { Home } from '@/components/ui/Home';

const HomePage: NextPage= () => { 
  return (
    <Layout title='SES'>
      <Home></Home>
    </Layout>
  )
}

export default HomePage;
