import { FC, useContext } from 'react';
import Box from '@mui/material/Box';
import { Seasons } from '../season';
import { StatisticsSingle } from '@/components/statistics';
import { StatisticsTotal } from '@/components/statistics';

import { SeasonContext } from '../../context/season';
import { Statistic } from '@/interfaces/statistic';

interface Props {
  statistics: Statistic[];
}

export const StatisticsGrid:FC<Props> = ({statistics}) => {

  const { seasonActive } = useContext( SeasonContext );

  return (
    <>
      <Box sx={{ paddingTop: '10px', width: '100%', textAlign:'center' }}>
        <Seasons title='Estadísticas de la '></Seasons>
        {
          statistics.map((statistic) => (
            statistic.season == seasonActive 
            ? <><StatisticsSingle playerScore={statistic.single}></StatisticsSingle> <StatisticsTotal totalStatistics={statistic.total}></StatisticsTotal> </> 
            : <></>
          ))
        }
      </Box>
    </>
  )
}
