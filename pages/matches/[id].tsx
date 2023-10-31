import React from 'react';
import Box from '@mui/material/Box';
import { Layout } from '@/components/layouts';
import { Match } from '@/components/matches/Match';

const MatchContent = () => {
  return (
    <Layout title='Partidos'>
        <Box sx={{ width: '100%' }}>
        <Match></Match>
        </Box>
    </Layout>
  )
}

export default MatchContent;