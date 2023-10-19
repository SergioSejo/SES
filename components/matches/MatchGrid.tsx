import React from 'react';
import Box from '@mui/material/Box';
import { MatchCard } from './MatchCard';
import { Match } from './Match';
import { Seasons } from '../season/Seasons';

export const MatchGrid = () => {
  const limit:Array<number> = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18];
  return (
    <>
      <Seasons title='Partidos'></Seasons>
      <Box sx={{ width: '100%', textAlign:'center' }}>
        {
          /*limit.map((row, index) => (
            <MatchCard key={index}></MatchCard>
          ))*/
        }
        <Match></Match>
        
      </Box>
    </>
  )
}
