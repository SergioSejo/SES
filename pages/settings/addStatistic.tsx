import React from 'react';
import { useState } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { Layout } from '@/components/layouts';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import { TextField } from '@mui/material';
import { Seasons } from '@/components/season';

const AddStatisticPage: NextPage = () => {

  const [addPlayers, setAddPlayers] = useState([0]);
  const router = useRouter();

  const onClick = () => {
    router.push('/settings');    
  }

  const addPlayer = () => {
    if(addPlayers.length > 0){
      let maxNum = Math.max(...addPlayers);
      setAddPlayers([...addPlayers, maxNum + 1]);
    }else{
      setAddPlayers([0]);
    }
    
  }

  const removePLayer = () => {
    const result = addPlayers.filter((num) => num != (addPlayers.length - 1) );
    setAddPlayers([...result]); 
  }

  return (
    <Layout title='Añadir estadísticas'>
        <Box sx={{ width: '100%' }}>
          <Box sx={{textAlign:'left'}}>
            <Button onClick={ onClick } variant="contained" color='secondary' startIcon={<ArrowBackIcon />}>Volver</Button>
          </Box>
          <Seasons title='Seleccione la'></Seasons>
          <Box sx={{ width: '100%', textAlign:'center', padding:'15px' }}>
            {
              addPlayers.map((player) => (
                <Box key={player} sx={{position: 'relative', marginTop:'10px'}} className='rowAddPlayer'>
                  <TextField key={`player${player}`} id="player" label="Jugador" variant="outlined" />
                  <TextField key={`goals${player}`} id="goals" label="Goles" variant="outlined" />
                  <TextField key={`assists${player}`} id="assists" label="Asistencias" variant="outlined" />
                  <TextField key={`cards${player}`} id="cards" label="Tarjetas" variant="outlined" />
                  <Button key={player} className='vertical-center' onClick={ removePLayer } variant="contained" color='secondary' startIcon={<DeleteIcon />}>Eliminar</Button>
                </Box>
              ))
            }
            
          </Box>
          <Box sx={{marginTop:'10px', textAlign:'center'}}>
              <Button onClick={ addPlayer } variant="contained" color='secondary' startIcon={<AddCircleIcon />}>Añadir jugador</Button>
            </Box>
        </Box>
    </Layout>
  )
}

export default AddStatisticPage;
