import React from 'react';
import { NextPage, GetStaticPaths, GetServerSideProps } from 'next';
import Box from '@mui/material/Box';
import { Layout } from '@/components/layouts';
import { MatchContent } from '@/components/matches';
import { Match } from '@/interfaces';
import { codes_mock } from '@/utils';
import { dbMatches } from '../../database';

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

/*export const getStaticPaths: GetStaticPaths = async (ctx) => {

  const codes = codes_mock.map( code => ({
    params: { code }
  }));
  return {
    paths: codes,
    fallback: 'blocking'
  }
}*/

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    
  const { code } = params as { code: string };
  
  const match = await dbMatches.getMatchByCode( code );

  if ( !match ) {
      return {
          redirect: {
              destination: '/',
              permanent: false,
          }
      }
  }
  return {
      props: {
        match
      }
  }
}

export default MatchPage;