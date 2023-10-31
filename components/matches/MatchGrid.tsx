import { FC } from 'react';
import Box from '@mui/material/Box';
import { MatchCard } from './MatchCard';
import { Seasons } from '../season/Seasons';
import { Match } from '@/interfaces';

interface Props {
  matches: Match[];
}

export const MatchGrid:FC<Props> = ({matches}) => {
  return (
    <>
      <Seasons title='Partidos'></Seasons>
      <Box sx={{ width: '100%', textAlign:'center' }}>
        {
          matches.map((match, index) => (
            <MatchCard key={index} match={match}></MatchCard>
          ))
        }
      </Box>
    </>
  )
}
