import { FC } from 'react';
import type { GetStaticProps } from 'next';
import { Layout } from '@/components/layouts';
import { StatisticsGrid } from '@/components/statistics/StatisticsGrid';
import { statistics_mock } from '@/utils';
import { Statistic } from '@/interfaces/statistic';


interface Props {
  statistics: Statistic[];
}

export const statisticsPage:FC<Props> = ({statistics}) => {
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