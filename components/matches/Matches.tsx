import React from 'react';
import { Seasons } from '../season/Seasons';
import { MatchGrid } from './MatchGrid';

export const Matches = () => {
  return (
    <>
        <Seasons></Seasons>
        <MatchGrid></MatchGrid>
    </>
  )
}
