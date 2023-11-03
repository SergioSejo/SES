import React from 'react';
import { useState, FC } from 'react';
import { useRouter } from 'next/router';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TextField from '@mui/material/TextField';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Match, PlayerList } from '@/interfaces';

interface Props {
  match: Match;
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Box sx={{border:'solid', borderRadius:'5px', borderColor:'#19857b', padding:'10px'}}>{children}</Box>
        </Box>
      )}
    </div>
  );
}

export const MatchContent:FC<Props> = ({match}) => {

  const [value, setValue] = useState(0);
  const router = useRouter();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const onClick = (event: React.MouseEvent<HTMLElement>) => {
    router.push('/matches');    
  }

  const scores = (playerList: PlayerList[]) => {
    let scores = "";
    if(playerList.length > 0)
    playerList.map( player => scores+=`${player.name} (${player.score}) `);
    else
      scores = "Nada que mostrar";
    return scores;
  }

  return (
    <Card sx={{minHeight: 500}}>
      <Box sx={{textAlign:'left'}}>
        <Button onClick={ onClick } variant="contained" color='secondary' startIcon={<ArrowBackIcon />}>Volver</Button>
      </Box>
      <CardContent>
        <Box sx={{textAlign:'center'}}>
          <Typography gutterBottom variant="h3" component="div">
          Temporada {match.season} - Partido {match.number}
          </Typography>
          <Typography color='#a5d6a7' gutterBottom variant="h4" component="div">
          {match.team1} ({match.goalsTeam1}) VS {match.team2} ({match.goalsTeam2})
          </Typography>
 
        </Box>
        <Box>
          <Tabs value={value} onChange={handleChange} indicatorColor='secondary' textColor='secondary' centered>
            <Tab label="Goles" />
            <Tab label="Asistencias" />
            <Tab label="Tarjetas" />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <Typography align='center' gutterBottom variant="h6" component="div">
          {scores(match.goalScorers)}
          </Typography>
          <TextField fullWidth multiline disabled value={match.goalsComments} />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <Typography align='center' gutterBottom variant="h6" component="div">
          {scores(match.assistants)}
          </Typography>
          <TextField fullWidth multiline disabled value={match.assistantsComments} />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <Typography align='center' gutterBottom variant="h6" component="div">
          {scores(match.cards)}
          </Typography>
          <TextField fullWidth multiline disabled value={match.cardsComments} />
        </CustomTabPanel>
      </CardContent>
    </Card>
  )
}
