import { FC } from 'react';
import { Seasons } from '@/components/season/Seasons';
import { MatchGrid } from '@/components/matches/MatchGrid';
import { Layout } from '@/components/layouts';

export const matchesPage:FC = () => {
  return (
    <>
      <Layout title='Partidos'>
        <Seasons></Seasons>
        <MatchGrid></MatchGrid>
      </Layout>
    </>
  );
};

export default matchesPage;