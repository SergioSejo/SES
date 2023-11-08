import { useContext, useEffect } from 'react';
import type { NextPage } from 'next';
import { Layout } from '../components/layouts';
import { Home } from '@/components/ui/Home';
import { UIContext } from '@/context/ui';

const HomePage: NextPage= () => {
  const { changeTitle  } = useContext( UIContext );
  useEffect(() => {
		changeTitle('Inicio');
	}, []);
  return (
    <Layout title='SES'>
      <Home></Home>
    </Layout>
  )
}

export default HomePage;
