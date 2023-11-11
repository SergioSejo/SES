import * as React from 'react';
import { useRouter } from 'next/router';
import Box from '@mui/material/Box';
import { Card, CardContent, CardMedia, Link, Typography } from '@mui/material';

const mainFeaturedPost = {
  title: 'Bienvenido a SES',
  description:
    "Aquí podrás ver todos los datos relevantes acerca del equipo más laureado y reconocido de la liga de fútbol 7 de Moratalaz durante los años 2016-2020.",
  image: '/static/img/firstTeam.jpg',
  logo: '/static/img/logo.jpg',
  imageText: 'Equipo',
  linkText: '¡Descúbrelo!',
};

export function MainFeaturedPost() {
  
  const router = useRouter();

  const onClick = (event: React.MouseEvent) => {
    router.push('/home');
  }

  return (
    <Box sx={{ maxWidth: '1000px', margin:'0px auto' }}>
      <Card sx={{display:'flex', maxHeight:'500px'}}>
        <CardContent sx={{ minWidth:'200px', flex: 1 }}>
          <CardMedia
            component="img"
            sx={{ height: 200, width: 160 }}
            image={mainFeaturedPost.logo}
            alt='Escudo'
          />
          <Typography variant="subtitle1" paragraph>
          {mainFeaturedPost.title}
          </Typography>
          <Typography variant="subtitle1" paragraph>
          {mainFeaturedPost.description}
          </Typography>
          <Link
            component="button"
            variant="body2"
            onClick={onClick}
          >
            ¡Descúbrelo!
          </Link>
        </CardContent>
        <CardMedia
          component="img"
          sx={{ height: 500, width: 1000, display: { xs: 'none', sm: 'block' } }}
          image={mainFeaturedPost.image}
          alt={mainFeaturedPost.imageText}
        />
      </Card>
    </Box>
  );
}