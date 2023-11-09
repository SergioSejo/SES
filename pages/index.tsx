import type { NextPage } from 'next';

import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

import { Footer, MainFeaturedPost, FeaturedPost } from '@/components/presentation';

const mainFeaturedPost = {
  title: 'Bienvenido a las estadísticas de SAD EYES',
  description:
    "Aquí podrás ver todos los datos relevantes acerca del equipo más laureado de la liga de moratalaz durante los años 2016-2020.",
  image: '/static/img/firstTeam.jpg',
  imageText: 'Escudo del equipo',
  linkText: '¡Descúbrelo!',
};

const featuredPosts = [
  {
    title: 'Partidos',
    description: 'Como quedamos contra aquel equipo, quién metió gol en el último partido...¡todos los detalles!',
    image: '/static/img/matches.jpg',
    imageLabel: 'Partidos',
  },
  {
    title: 'Estadísticas',
    description: 'El pichichi de cada temporada, el más asistente, el más SUCIO...¡todos los datos!',
    image: '/static/img/statistics.jpg',
    imageLabel: 'Estadísticas',
  },
];

const IndexPage: NextPage= () => {
  return (
      <>
        <Container maxWidth="lg">
          <main>
            <MainFeaturedPost post={mainFeaturedPost} />
            <Grid container spacing={4}>
              {featuredPosts.map((post) => (
                <FeaturedPost key={post.title} post={post} />
              ))}
            </Grid>
          </main>
        </Container>
        <Footer
          description="Todos los derechos reservados"
        />
      </>
  )
}

export default IndexPage;
