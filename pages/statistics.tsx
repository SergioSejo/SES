import { FC, useContext, useEffect } from 'react';
import { Layout } from '@/components/layouts';
import { StatisticsGrid } from '@/components/statistics';
import { UIContext } from '@/context/ui';
import { GetStaticProps } from 'next';
import { getAllStatistics } from '@/utils/statisticsFunctions';
import { Statistic } from '@/interfaces';
import { statistics_mock } from '@/utils';

interface Props {
  statistics: Statistic[];
}

const StatisticsPage:FC<Props> = ({statistics}) => {

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

  //const data:Statistic[] = await getAllStatistics();
  return {
    props: {
      statistics: statistics_mock
    }
  }
}

export default StatisticsPage;