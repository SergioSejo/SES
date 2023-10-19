import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export const Match = () => {
  return (
    <Card sx={{minHeight: 500}}>
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            Artilleros VS Sad Eyes
            </Typography>
            <Typography variant="body2" color="text.secondary">
            02/10/2016
            </Typography>
        </CardContent>
    </Card>
  )
}
