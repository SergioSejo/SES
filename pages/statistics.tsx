import { FC, useContext, useEffect } from 'react';
import { Layout } from '@/components/layouts';
import { StatisticsGrid } from '@/components/statistics';
import { UIContext } from '@/context/ui';
import { GetStaticProps } from 'next';
import { getAllStatistics } from '@/utils/statisticsFunctions';
import { Statistic } from '@/interfaces';

interface Props {
  statistics: Statistic[];
}

export const StatisticsPage:FC<Props> = ({statistics}) => {

  const { changeTitle  } = useContext( UIContext );
  
  useEffect(() => {
		changeTitle('Estadísticas');
	},[]);

  return (
    <>
      <Layout title='Estadísticas'>
        <StatisticsGrid statistics={statistics}></StatisticsGrid>
      </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {

  const data:Statistic[] = await getAllStatistics();
  return {
    props: {
      statistics: data
    }
  }
}

export default StatisticsPage;