import { useContext, useEffect } from 'react';
import type { NextPage } from 'next';
import { Layout } from '../components/layouts';
import { UIContext } from '@/context/ui';
import { Box, Card, CardMedia, Typography } from '@mui/material';
import { InfoGrid } from '@/components/home/InfoGrid';

const HomePage: NextPage= () => {
  const { changeTitle  } = useContext( UIContext );
  useEffect(() => {
		changeTitle('Inicio');
	},[]);
  return (
    <Layout title='Inicio'>
      <Box sx={{ width: '100%', textAlign:'center' }}>
        <Card sx={{ display: 'inline-block', margin: '10px' }}>
          <CardMedia
            component="img"
            height="350"
            src="/static/img/general/logo.jpg"
            alt="Partidos"
          />
        </Card>
        <Box sx={{width:'80%', margin: '0px auto', backgroundColor:'#121212'}}>
          <Typography gutterBottom variant="h5">
            ¿Sabías qué?
          </Typography>
          <InfoGrid></InfoGrid>
        </Box>
      </Box>
    </Layout>
  )
}

export default HomePage;