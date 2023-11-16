import { FC, useContext, useEffect } from 'react';
import type { GetStaticProps } from 'next';
import { MatchGrid } from '@/components/matches';
import { Layout } from '@/components/layouts';
import { Match } from '@/interfaces';
import { UIContext } from '@/context/ui';
import { getAllMatches } from '@/utils/matchesFunctions';
import { matchesApi } from '@/apis';
import { matches_mock } from '@/utils';

interface Props {
  matches: Match[];
}

const MatchesPage:FC<Props> = ({matches}) => {

  const { changeTitle } = useContext( UIContext );
  useEffect(() => {
		changeTitle('Partidos');
	},[]);

  return (
    <>
      <Layout title='Partidos'>
        <MatchGrid matches={matches}></MatchGrid>
      </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {

  //const { data } = await matchesApi.get<Match[]>('');

  //const data:Match[] = await getAllMatches();
  return {
    props: {
      matches: matches_mock
    }
  }
}

export default MatchesPage;