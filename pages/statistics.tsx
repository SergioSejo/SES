import { FC } from 'react';
import { StatisticsSingle } from '@/components/statistics/StatisticsSingle';
import { StatisticsTotal } from '@/components/statistics/StatisticsTotal';
import { Layout } from '@/components/layouts';

export const statisticsPage:FC = () => {
  return (
    <>
      <Layout title='Estadísticas'>
        <StatisticsSingle></StatisticsSingle>
        <StatisticsTotal></StatisticsTotal>
      </Layout>
    </>
  );
};

export default statisticsPage;