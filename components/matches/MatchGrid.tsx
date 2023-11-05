import { FC, useContext } from 'react';
import Box from '@mui/material/Box';
import { MatchCard } from './';
import { Seasons } from '../season';
import { Match } from '@/interfaces';

import { SeasonContext } from '../../context/season';

interface Props {
  matches: Match[];
}

export const MatchGrid:FC<Props> = ({matches}) => {

  const { seasonActive } = useContext( SeasonContext );

  return (
    <>
      <Seasons title='Partidos'></Seasons>
      <Box sx={{ width: '100%', textAlign:'center' }}>
        {
          matches.map((match, index) => (
             match.season == seasonActive ? <MatchCard key={index} match={match}></MatchCard> : <></>
          ))
        }
      </Box>
    </>
  )
}
