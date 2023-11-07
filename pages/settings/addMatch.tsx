import React from 'react';
import { NextPage } from 'next';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { Layout } from '@/components/layouts';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';
import { TextField } from '@mui/material';
import { Seasons } from '@/components/season';

const AddMatchPage: NextPage = () => {

  const router = useRouter();
  const [goalsScore, setGoalsScore] = useState([{}]);

  const handleSingleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>, i: number) => { 
    const field = e.target.name; 
    const newGoals = [...goalsScore]; 
    let finalValue: String | Number = e.target.value;
    if(field!="name"){
      finalValue = Number(e.target.value);
    }
    newGoals[i][field] = finalValue;
    setGoalsScore(newGoals); 
  }; 

  const handleAddGoals = () => {
    setGoalsScore([...goalsScore, {"name": "", "score": 0}]);
  }

  const handleDeleteGoal = (i: number) => { 
    const newSingles = [...goalsScore]; 
    newSingles.splice(i, 1); 
    setGoalsScore(newSingles); 
  }; 

  /*const handleAddAssists = () => {
    setMatch([...match, {name: "", goals: 0, assists: 0, cards: 0}]);
  }

  const handleAddCards = () => {
    setMatch([...match, {name: "", goals: 0, assists: 0, cards: 0}]);
  }*/

  const onClick = () => {
    router.push('/settings');    
  }

  const save = () => {
    alert("hola");
  }

  return (
    <Layout title='Añadir partido'>
        <Box sx={{ width: '100%' }}>
          <Box sx={{textAlign:'left'}}>
            <Button onClick={ onClick } variant="contained" color='secondary' startIcon={<ArrowBackIcon />}>Volver</Button>
          </Box>
          <Seasons title='Seleccione la'></Seasons>
          <Box sx={{ width: '100%', textAlign:'center', padding:'15px' }}>
            <Box sx={{position: 'relative', marginTop:'10px'}} className='rowAddPlayer'>
              <TextField name='number' type='number' label="Número" variant="outlined" />
              <TextField name='team1' type='text' label="Local" variant="outlined" />
              <TextField name='goalsTeam1' type='number' label="Goles" variant="outlined" />
              <TextField name='team2' type='text' label="Visitante" variant="outlined" />
              <TextField name='goalsTeam2' type='number' label="Goles" variant="outlined" />
              <TextField name='date' type='date' variant="outlined" />
              {
                goalsScore.map((g, index) => (
                  <Box key={index} sx={{position: 'relative', marginTop:'10px'}} className='rowAddPlayer'>
                    <TextField name='name' onChange={(e) => handleSingleChange(e, index)}  key={`player${index}`} id={`player${index}`} type='text' label="Jugador" variant="outlined" />
                    <TextField name='goals' onChange={(e) => handleSingleChange(e, index)} key={`goals${index}`} id={`goals${index}`} type='number' label="Goles" variant="outlined" />
                    <Button key={index} className='vertical-center' onClick={() => handleDeleteGoal(index)} variant="contained" color='secondary' startIcon={<DeleteIcon />}></Button>
                  </Box>
                ))
              }
            </Box>            
          </Box>
          <Box sx={{marginTop:'10px', textAlign:'center'}}>
            <Button sx={{marginRight:'10px'}} onClick={ handleAddGoals } variant="contained" color='secondary' startIcon={<AddCircleIcon />}>Añadir Goles</Button>
            <Button onClick={ save } variant="contained" color='primary' startIcon={<SaveIcon />}>Guardar</Button>
          </Box>
        </Box>
    </Layout>
  )
}

export default AddMatchPage;
