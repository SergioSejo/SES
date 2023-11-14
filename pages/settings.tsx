import { FC, useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Layout } from '@/components/layouts';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardMedia } from '@mui/material';
import { UIContext } from '@/context/ui';

export const SettingsPage:FC = () => {

  const { changeTitle  } = useContext( UIContext );
  const router = useRouter();
  const onClick = (event: React.MouseEvent) => {
    const button = event.target as HTMLInputElement;
    if(button.alt?.includes('Partidos')){
      router.push(`/settings/addMatch`);
      changeTitle('Ajustes - Añadir partido');
    }else{
      router.push(`/settings/addStatistic`);
      changeTitle('Ajustes - Añadir estadísticas');
    }
  }

  useEffect(() => {
		changeTitle('Ajustes');
	},[]);

  return (
    <>
      <Layout title='Ajustes'>
        <Box sx={{ width: '100%', textAlign:'center' }}>
          <Card sx={{ display: 'inline-block', margin: '10px' }}>
            <CardActionArea sx={{ minHeight: 250}} onClick={onClick}>
              <CardMedia
                component="img"
                height="400"
                src="/static/img/matches.jpg"
                alt="Partidos"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Partidos
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Añadir partidos a la base de datos: temporada, equipo local, visitante, goles, fecha...
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card sx={{ display: 'inline-block', margin: '10px' }}>
            <CardActionArea sx={{ minHeight: 250}} onClick={onClick}>
              <CardMedia
                component="img"
                height="400"
                src="/static/img/statistics.jpg"
                alt="Estadísticas"
              />
              <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                  Estadísticas
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  Añadir Estadísticas a la base de datos: goles totales, asistencias, tarjetas...
                  </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Box>
      </Layout>
    </>
  );
};

export default SettingsPage;