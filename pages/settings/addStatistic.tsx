import React from 'react';
import { useState, useContext, useEffect } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { Layout } from '@/components/layouts';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import SaveIcon from '@mui/icons-material/Save';
import DeleteIcon from '@mui/icons-material/Delete';
import { TextField } from '@mui/material';
import { Seasons } from '@/components/season';
import { SeasonContext } from '@/context/season';
import { UIContext } from '@/context/ui';

const AddStatisticPage: NextPage = () => {

  const { changeTitle  } = useContext( UIContext );
  const { seasonActive } = useContext( SeasonContext );
  const [singles, setSingles] = useState([{name: "", goals: 0, assists: 0, cards: 0}]);
  const router = useRouter();

  const onClick = () => {
    changeTitle('Ajustes');
    router.push('/settings');  
  }

  useEffect(() => {
		changeTitle('Ajustes - Añadir estadísticas');
	}, []);

  const handleSingleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>, i: number) => { 
    const field = e.target.name; 
    const newSingles = [...singles]; 
    let finalValue: String | Number = e.target.value;
    if(field!="name"){
      finalValue = Number(e.target.value);
    }
    newSingles[i][field] = finalValue;
    setSingles(newSingles); 
  }; 

  const handleAddSingle = () => {
    setSingles([...singles, {name: "", goals: 0, assists: 0, cards: 0}]);
  }

  const handleDeleteSingle = (i: number) => { 
    const newSingles = [...singles]; 
    newSingles.splice(i, 1); 
    setSingles(newSingles); 
  }; 

  const save = () => {
    buildCollection();
  }

  const buildCollection = () => {
    let final = {
      "season": seasonActive,
      "single": singles,
      "total": buildTotal()
    }
    console.log('final: ', final);
  }

  const buildTotal = () => {
    let goals = 0;
    let assists = 0;
    let cards = 0;
    let pichichi = buildPlayersTotals(0);
    let assistant = buildPlayersTotals(1);
    let dirty = buildPlayersTotals(2);
    singles.map(sg => {
      goals=sg.goals + goals;
      assists+=sg.assists;
      cards+=sg.cards;
    });
    const total = {goals,assists,cards,pichichi,assistant,dirty}
    return total;
  }

  const buildPlayersTotals = (type: number) => {
    let total = '';
    let maxScore = type == 0 ? Math.max(...singles.map(o => o.goals)) : type == 1 ? Math.max(...singles.map(o => o.assists)) : Math.max(...singles.map(o => o.cards));
    let totals = type == 0 ? singles.filter(x => x.goals == maxScore) : type == 0 ? singles.filter(x => x.assists == maxScore) : singles.filter(x => x.cards == maxScore);
    totals.map(t => {
      if(total == ''){
        total = t.name
      }else{
        total += ' - ' + t.name
      }
    });
    return total;
  }

  return (
    <Layout title='Añadir estadísticas'>
        <Box sx={{ backgroundColor:'#121212', width: '100%', minHeight:'600px' }}>
          <Box sx={{textAlign:'left'}}>
            <Button onClick={ onClick } variant="contained" color='secondary' startIcon={<ArrowBackIcon />}>Volver</Button>
          </Box>
          <Seasons title='Seleccione la'></Seasons>
          <Box sx={{ width: '100%', textAlign:'center', padding:'15px' }}>
            {
              singles.map((sg, index) => (
                <Box key={index} sx={{position: 'relative', marginTop:'10px'}} className='rowAddPlayer'>
                  <TextField name='name' onChange={(e) => handleSingleChange(e, index)}  key={`player${index}`} id={`player${index}`} type='text' label="Jugador" variant="outlined" />
                  <TextField name='goals' onChange={(e) => handleSingleChange(e, index)} key={`goals${index}`} id={`goals${index}`} type='number' label="Goles" variant="outlined" />
                  <TextField name='assists' onChange={(e) => handleSingleChange(e, index)} key={`assists${index}`} id={`assists${index}`} type='number' label="Asistencias" variant="outlined" />
                  <TextField name='cards' onChange={(e) => handleSingleChange(e, index)} key={`cards${index}`} id={`cards${index}`} type='number' label="Tarjetas" variant="outlined" />
                  <Button key={index} className='vertical-center deleteButton' onClick={() => handleDeleteSingle(index)} variant="contained" color='secondary' startIcon={<DeleteIcon />}></Button>
                </Box>
              ))
            }
          </Box>
          <Box sx={{marginTop:'10px', textAlign:'center'}}>
            <Button sx={{marginRight:'10px'}} onClick={ handleAddSingle } variant="contained" color='secondary' startIcon={<AddCircleIcon />}>Añadir jugador</Button>
            <Button onClick={ save } variant="contained" color='primary' startIcon={<SaveIcon />}>Guardar</Button>
          </Box>
        </Box>
    </Layout>
  )
}

export default AddStatisticPage;
