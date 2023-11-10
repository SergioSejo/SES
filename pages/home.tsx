import { useContext, useEffect } from 'react';
import type { NextPage } from 'next';
import { Layout } from '../components/layouts';
import { UIContext } from '@/context/ui';
import { Box, Card, CardMedia, CardContent, Typography } from '@mui/material';
import { Swipeable } from '@/components/home';
import { InfoExtra } from '@/components/home/InfoExtra';

const HomePage: NextPage= () => {
  const { changeTitle  } = useContext( UIContext );
  useEffect(() => {
		changeTitle('Inicio');
	}, []);
  return (
    <Layout title='Inicio'>
      <Box sx={{ width: '100%', textAlign:'center' }}>
        <Card sx={{ display: 'inline-block', margin: '10px' }}>
          <CardMedia
            component="img"
            height="250"
            src="/static/img/logo.jpg"
            alt="Partidos"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Partidos
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Añadir partidos a la base 
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ display: 'inline-block', margin: '10px' }}>
          <Swipeable></Swipeable>
        </Card>
        <Box sx={{backgroundColor:'#121212'}}>
          <Typography gutterBottom variant="h5">
            ¿Sabías qué?
          </Typography>
          <InfoExtra></InfoExtra>
        </Box>
      </Box>
    </Layout>
  )
}

export default HomePage;
