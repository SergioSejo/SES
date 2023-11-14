import { FC, useContext } from 'react';
import Box from '@mui/material/Box';
import { Seasons } from '../season';
import { StatisticsSingle } from '@/components/statistics';
import { StatisticsTotal } from '@/components/statistics';

import { SeasonContext } from '../../context/season';
import { StatisticContext } from '@/context/statistic';



export const StatisticsGrid:FC = () => {

  const { seasonActive } = useContext( SeasonContext );
  const { statistics } = useContext( StatisticContext );

  return (
    <>
      <Box sx={{ paddingTop: '10px', width: '100%', textAlign:'center' }}>
        <Seasons title='Estadísticas de la '></Seasons>
        {
          statistics.map((statistic, index) => (
            statistic.season == seasonActive 
            ? <><StatisticsSingle key={statistic._id} playerScore={statistic.single}></StatisticsSingle> <StatisticsTotal key={`${statistic._id}-${index}`} totalStatistics={statistic.total}></StatisticsTotal> </> 
            : <></>
          ))
        }
      </Box>
    </>
  )
}
