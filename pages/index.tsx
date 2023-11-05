import type { NextPage } from 'next';
import { useRouter } from 'next/router';

import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

import { Footer, MainFeaturedPost, FeaturedPost } from '@/components/presentation';
import { Button } from '@mui/material';

const mainFeaturedPost = {
  title: 'Bienvenido a las estadísticas de SAD EYES',
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: 'https://source.unsplash.com/random?wallpapers',
  imageText: 'main image description',
  linkText: 'Continue reading…',
};

const featuredPosts = [
  {
    title: 'Featured post',
    date: 'Nov 12',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random?wallpapers',
    imageLabel: 'Image Text',
  },
  {
    title: 'Post title',
    date: 'Nov 11',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random?wallpapers',
    imageLabel: 'Image Text',
  },
];

const IndexPage: NextPage= () => {

  const router = useRouter();

  const onClick = () => {
    router.push('/home');    
  }
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
          <Button onClick={ onClick } variant="contained" color='secondary'>Entrar</Button>
        </Container>
        <Footer
          title=""
          description="Todos los derechos reservados"
        />
      </>
  )
}

export default IndexPage;
