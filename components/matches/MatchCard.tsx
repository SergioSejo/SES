import { FC } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Match } from '@/interfaces';
import { useRouter } from 'next/router';

interface Props {
  match: Match;
}

export const MatchCard:FC<Props> = ({match}) => {
  const router = useRouter();
  const onClick = () => {
    router.push(`/matches/${match.code}`);
  }

  return (
    <Card sx={{ minHeight: 200, maxWidth: 350, display: 'inline-block', margin: '10px' }}>
        <CardActionArea sx={{ minHeight: 200}} onClick={onClick}>
            <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                {match.local} VS {match.visitor}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                {match.date}
                </Typography>
            </CardContent>
        </CardActionArea>
    </Card>
  )
}
