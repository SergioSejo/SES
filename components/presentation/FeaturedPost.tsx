import * as React from 'react';
import { useRouter } from 'next/router';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Link from '@mui/material/Link';

interface FeaturedPostProps {
  post: {
    title: string;
    description: string;
    image: string;
    imageLabel: string;
  };
}

export function FeaturedPost(props: FeaturedPostProps) {
  const { post } = props;
  const router = useRouter();

  const onClick = (event: React.MouseEvent) => {
    const destiny = post.title == 'partidos' ? 'matches' : 'statistics';
    router.push(`/${destiny}`);
  }

  return (
    <Card sx={{ minWidth:'490px', display: 'flex', margin:'10px 5px 0px 5px' }}>
      <CardContent sx={{ flex: 1 }}>
        <Typography variant="subtitle1" paragraph>
        {post.description}
        </Typography>
        <Link
          component="button"
          variant="body2"
          onClick={onClick}
        >
          Ver {post.title}
      </Link>
      </CardContent>
      <CardMedia
        component="img"
        sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
        image={post.image}
        alt={post.imageLabel}
      />
    </Card>
  );
}