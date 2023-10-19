import { FC } from 'react';
import { MatchGrid } from '@/components/matches/MatchGrid';
import { Layout } from '@/components/layouts';

export const matchesPage:FC = () => {
  return (
    <>
      <Layout title='Partidos'>
        <MatchGrid></MatchGrid>
      </Layout>
    </>
  );
};

export default matchesPage;