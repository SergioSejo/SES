import { FC, useContext, useEffect } from 'react';
import type { GetStaticProps } from 'next';
import { Layout } from '@/components/layouts';
import { StatisticsGrid } from '@/components/statistics';
import { statistics_mock } from '@/utils';
import { Statistic } from '@/interfaces/statistic';
import { UIContext } from '@/context/ui';


interface Props {
  statistics: Statistic[];
}

export const statisticsPage:FC<Props> = ({statistics}) => {

  const { changeTitle  } = useContext( UIContext );
  useEffect(() => {
		changeTitle('Estadísticas');
	}, []);

  return (
    <>
      <Layout title='Estadísticas'>
        <StatisticsGrid statistics={statistics}></StatisticsGrid>
      </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  return {
    props: {
      statistics: statistics_mock
    }
  }
}

export default statisticsPage;