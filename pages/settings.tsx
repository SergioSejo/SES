import { FC } from 'react';
import { useRouter } from 'next/router';
import { Layout } from '@/components/layouts';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


export const settingsPage:FC = () => {

  const router = useRouter();
  const onClick = (event: React.MouseEvent) => {
    const button = event.target as HTMLInputElement;
    if(button.textContent?.includes('Partidos')){
      router.push(`/settings/addMatch`);
    }else{
      router.push(`/settings/addStatistic`);
    }
  }

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