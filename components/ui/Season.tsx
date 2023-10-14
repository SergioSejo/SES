import React from 'react'

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';

export const Season = () => {
    const seasons = [
        {
            num: 1
        },
        {
            num: 2
        },
        {
            num: 3
        },
        {
            num: 4
        }
    ];

    
  return (
    <Container maxWidth="sm" className='seasonContents'>
        {
            seasons.map( (season, index) => (
                <Box key={index} sx={{ bgcolor: '#1A2027', height: '20vh' }}>
                    <Typography variant='h3'>Temporada {season.num}</Typography>
                </Box>
            ))
        }
      </Container>
  )
}
