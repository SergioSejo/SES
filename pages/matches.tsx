import { FC } from 'react';
import { Seasons } from '@/components/season/Seasons';
import { MatchGrid } from '@/components/matches/MatchGrid';

export const matchesPage:FC = () => {
  return (
    <>
        <Seasons></Seasons>
        <MatchGrid></MatchGrid>
    </>
  );
};

export default matchesPage;