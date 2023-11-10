import { FeaturedPost, MainFeaturedPost } from '@/components/presentation';
import { Box } from '@mui/material';
import type { NextPage } from 'next';

const featuredPosts = [
  {
    title: 'partidos',
    description: 'Como quedamos contra aquel equipo, quién metió gol en el último partido...¡todos los detalles!',
    image: '/static/img/matches.jpg',
    imageLabel: 'Partidos',
  },
  {
    title: 'estadísticas',
    description: 'El pichichi de cada temporada, el más asistente, el más SUCIO...¡todos los datos!',
    image: '/static/img/statistics.jpg',
    imageLabel: 'Estadísticas',
  },
];

const IndexPage: NextPage= () => {

  return (
    <Box sx={{ width: '100%', textAlign:'center', marginTop:'20px', position:'relative' }}>
      <MainFeaturedPost></MainFeaturedPost>
      <Box sx={{ maxWidth: '1000px', display:'flex', margin:'0px auto' }}>
        {featuredPosts.map((post, index) => (
          <FeaturedPost key={index} post={post} />
        ))}
      </Box>
    </Box>
  )
}

export default IndexPage;
