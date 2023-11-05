import { FC } from 'react';
import type { GetStaticProps } from 'next';
import { MatchGrid } from '@/components/matches';
import { Layout } from '@/components/layouts';
import { Match } from '@/interfaces';
import { matches_mock } from '@/utils'

interface Props {
  matches: Match[];
}

export const matchesPage:FC<Props> = ({matches}) => {
  return (
    <>
      <Layout title='Partidos'>
        <MatchGrid matches={matches}></MatchGrid>
      </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  return {
    props: {
      matches: matches_mock
    }
  }
}

export default matchesPage;