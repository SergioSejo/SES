import { FC, useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Layout } from '@/components/layouts';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { UIContext } from '@/context/ui';


export const settingsPage:FC = () => {

  const { changeTitle  } = useContext( UIContext );
  const router = useRouter();
  const onClick = (event: React.MouseEvent) => {
    const button = event.target as HTMLInputElement;
    if(button.textContent?.includes('Partidos')){
      router.push(`/settings/addMatch`);
      changeTitle('Ajustes - Añadir partido');
    }else{
      router.push(`/settings/addStatistic`);
      changeTitle('Ajustes - Añadir estadísticas');
    }
  }

  useEffect(() => {
		changeTitle('Ajustes');
	}, []);

  return (
    <>
      <Layout title='Ajustes'>
        <Box sx={{ width: '100%', textAlign:'center' }}>
          <Card sx={{ display: 'inline-block', margin: '10px' }}>
            <CardActionArea sx={{ minHeight: 200}} onClick={onClick}>
              <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                  Partidos
                  </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card sx={{ display: 'inline-block', margin: '10px' }}>
            <CardActionArea sx={{ minHeight: 200}} onClick={onClick}>
              <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                  Estadísticas
                  </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Box>
      </Layout>
    </>
  );
};

export default settingsPage;