import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

function Copyright() {
  return (
    <Typography variant="body2" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/SergioSejo/SES">
        Sad Eyes Statistics
      </Link>{' '}
      {new Date().getFullYear()}
    </Typography>
  );
}

interface FooterProps {
  description: string;
}

export function Footer(props: FooterProps) {
  const { description } = props;

  return (
    <Box component="footer" sx={{ bgcolor: '#121212', color:'#fff', py: 6 }}>
      <Container maxWidth="lg">
        <Typography variant="body2" align="center">
          {description}
        </Typography>
        <Copyright />
      </Container>
    </Box>
  );
}