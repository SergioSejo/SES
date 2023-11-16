import React from 'react';
import { useState, FC, useContext } from 'react';
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
import PhotoIcon from '@mui/icons-material/Photo';
import { Match, PlayerList } from '@/interfaces';
import Modal from '@mui/material/Modal';
import { MatchImages } from './MatchImages';
import { SeasonContext } from '../../context/season';

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

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export const MatchContent:FC<Props> = ({match}) => {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [value, setValue] = useState(0);
  const router = useRouter();
  const { seasonActive } = useContext( SeasonContext );

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const onClick = () => {
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
          {match.local} ({match.goalsLocal}) VS {match.visitor} ({match.goalsVisitor})
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
          <TextField sx={{alignContent:'center'}} fullWidth multiline disabled value={match.goalsComments} />
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
      {match.season == "1" && (match.number =='1' || match.number =='2' || match.number =='3' || match.number =='5')
        ?
        <Box sx={{textAlign:'center'}}>
          <Button onClick={ handleOpen } variant="contained" color='secondary' startIcon={<PhotoIcon />}>Ver fotos</Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <MatchImages number={match.number}></MatchImages>
            </Box> 
            
          </Modal>
        </Box>
        : <></> 
      }
    </Card>
  )
}
