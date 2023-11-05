import React from 'react';
import { GetStaticProps, NextPage, GetStaticPaths } from 'next';
import Box from '@mui/material/Box';
import { Layout } from '@/components/layouts';
import { MatchContent } from '@/components/matches';
import { Match } from '@/interfaces';
import { getMatchInfo, codes_mock } from '../../utils';

interface Props {
  match: Match;
}

const MatchPage: NextPage<Props> = ({ match }) => {
  return (
    <Layout title={`Temporada ${match.season} - Partido ${match.number}`}>
        <Box sx={{ width: '100%' }}>
        <MatchContent match={match}></MatchContent>
        </Box>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {

  const codes = codes_mock.map( code => ({
    params: { code }
  }));
  return {
    paths: codes,
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {

  const { code } = params as { code: string };

  const match = await getMatchInfo(code);

  if ( !match ) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return {
    props: {
      match
    },
    revalidate: 86400, // 60 * 60 * 24,
  }
}

export default MatchPage;