import { FC } from 'react';
import { Seasons } from '@/components/season/Seasons';
import { StatisticsSingle } from '@/components/statistics/StatisticsSingle';
import { StatisticsTotal } from '@/components/statistics/StatisticsTotal';

export const statisticsPage:FC = () => {
  return (
    <>
        <Seasons></Seasons>
        <StatisticsSingle></StatisticsSingle>
        <StatisticsTotal></StatisticsTotal>
    </>
  );
};

export default statisticsPage;