import { useState, FC } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import { TextField } from '@mui/material';
import { PlayerList } from '@/interfaces';

interface Props {
  title: String;
  score: PlayerList[];
  setScore: Function;
  setComments: Function;
}


export const AddScore:FC<Props> = ({ title, score, setScore, setComments }) => {
  
  const handleScoreChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>, i: number) => { 
    const field = e.target.name; 
    const newScore = [...score]; 
    switch (field) {
      case "name":
        newScore[i].name = e.target.value;
        break;
      case "score":
        newScore[i].score = Number(e.target.value);
        break;
      default:
        break;
    }
    setScore(newScore); 
  };

  const handleAddScore = () => {
    setScore([...score, {"name": "", "score": 0}]);
  }

  const handleDeleteScore = (i: number) => { 
    const newScore = [...score]; 
    newScore.splice(i, 1); 
    setScore(newScore); 
  };

  const commentsChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => { 
    let valor = e.target.value;
    setComments(valor);
  }; 


  return (
    <>
      <Box sx={{display: 'inline-table', width:'33%'}}>
        {
          score.map((g, index) => (
            <Box key={index} sx={{position: 'relative', marginTop:'10px'}} className='rowAddPlayer'>
              <TextField className='playerInput' name='name' onChange={(e) => handleScoreChange(e, index)}  key={`player${index}`} id={`player${index}`} type='text' label="Jugador" variant="outlined" />
              <TextField className='scoreInput' name='score' onChange={(e) => handleScoreChange(e, index)} key={`score${index}`} id={`score${index}`} type='number' label="Goles" variant="outlined" />
              <Button key={index} className='vertical-center deleteButton' onClick={() => handleDeleteScore(index)} variant="contained" color='primary' startIcon={<DeleteIcon />}></Button>
            </Box>
          ))
        }
        {score.length > 0 ? <TextField onChange={commentsChange} sx={{marginTop:'20px', margin:'5px', maxWidth: '500px'}} fullWidth multiline label='Comentarios' /> : <></>}
        <Button sx={{marginTop:'10px'}} onClick={ handleAddScore } variant="contained" color='primary' startIcon={<AddCircleIcon />}>Añadir {title}</Button>
      </Box>
    </>
  )
}
