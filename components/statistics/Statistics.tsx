import * as React from 'react';
import { Seasons } from '../season/Seasons';
import { StatisticsSingle } from './StatisticsSingle';
import { StatisticsTotal } from './StatisticsTotal';

export const Statistics = () => {  
    return (
      <>
        <Seasons></Seasons>
        <StatisticsSingle></StatisticsSingle>
        <StatisticsTotal></StatisticsTotal>
      </>
      );
}
