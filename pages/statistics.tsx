import { useContext, useEffect } from 'react';
import { Layout } from '@/components/layouts';
import { StatisticsGrid } from '@/components/statistics';
import { UIContext } from '@/context/ui';


export const statisticsPage = () => {

  const { changeTitle  } = useContext( UIContext );
  
  useEffect(() => {
		changeTitle('Estadísticas');
	}, []);

  return (
    <>
      <Layout title='Estadísticas'>
        <StatisticsGrid></StatisticsGrid>
      </Layout>
    </>
  );
};

export default statisticsPage;