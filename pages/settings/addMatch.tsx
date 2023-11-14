import React from 'react';
import { NextPage } from 'next';
import { useState, useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Layout } from '@/components/layouts';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SaveIcon from '@mui/icons-material/Save';
import { TextField } from '@mui/material';
import { Seasons } from '@/components/season';
import { AddScore } from '@/components/settings';
import { SeasonContext } from '@/context/season';
import { UIContext } from '@/context/ui';

const AddMatchPage: NextPage = () => {

  const { changeTitle  } = useContext( UIContext );
  const router = useRouter();
  const { seasonActive } = useContext( SeasonContext );
  const [num, setNum] = useState(1);
  const [local, setLocal] = useState('');
  const [goalsLocal, setGoalsLocal] = useState(0);
  const [visitor, setVisitor] = useState('');
  const [goalsVisitor, setGoalsVisitor] = useState(0);
  const [date, setDate] = useState('');
  const [goalsComments, setGoalsComments] = useState('');
  const [assistsComments, setAssistsComments] = useState('');
  const [cardComments, setCardComments] = useState('');
  const [goalsScore, setGoalsScore] = useState([]);
  const [assistsScore, setAssistsScore] = useState([]);
  const [cardsScore, setCardsScore] = useState([]);

  const onClick = () => {
    changeTitle('Ajustes');
    router.push('/settings');    
  }

  useEffect(() => {
		changeTitle('Ajustes - Añadir partido');
	},[]);

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    let compare = e.target.name;
    let valor = e.target.value;
    switch (compare) {
      case 'number':
        setNum(Number(valor)) 
        break;
      case 'local':
        setLocal(valor)
        break;
      case 'goalsLocal':
        setGoalsLocal(Number(valor))
          break;
      case 'visitor':
        setVisitor(valor)
          break;
      case 'goalsVisitor':
        setGoalsVisitor(Number(valor))
          break;
      case 'date':
        setDate(valor.split("-").reverse().join("-"))
          break;
      default:
        break;
    }
  }

  const save = () => {
    const final = buildCollection();
    console.log(final);
  }

  const buildCollection = () => {
    let final = {
      "code": `${seasonActive}-${num}`,
      "season": `${seasonActive}`,
      "number": `${num}`,
      "local": `${local}`,
      "visitor": `${visitor}`,
      "goalsLocal": goalsLocal,
      "goalsVisitor": goalsVisitor,
      "date": date,
      "goalScorers": goalsScore,
      "goalsComments": goalsComments,
      "assistants": assistsScore,
      "assistantsComments": assistsComments,
      "cards": cardsScore,
      "cardsComments": cardComments
    }
    return final;
  }

  return (
    <Layout title='Añadir partido'>
        <Box sx={{ backgroundColor:'#121212', width: '100%', minHeight:'600px' }}>
          <Box sx={{textAlign:'left'}}>
            <Button onClick={ onClick } variant="contained" color='secondary' startIcon={<ArrowBackIcon />}>Volver</Button>
          </Box>
          <Seasons title='Seleccione la'></Seasons>
          <Box sx={{ width: '100%', textAlign:'center', padding:'15px' }}>
            <Box sx={{position: 'relative', marginTop:'10px'}} className='rowAddPlayer'>
              <TextField onChange={onChange} className='scoreInput' name='number' type='number' label="Número" variant="outlined" />
              <TextField onChange={onChange} name='local' type='text' label="Local" variant="outlined" />
              <TextField onChange={onChange} className='scoreInput' name='goalsLocal' type='number' label="Goles" variant="outlined" />
              <TextField onChange={onChange} name='visitor' type='text' label="Visitante" variant="outlined" />
              <TextField onChange={onChange} className='scoreInput' name='goalsVisitor' type='number' label="Goles" variant="outlined" />
              <TextField onChange={onChange} name='date' type='date' variant="outlined" />
              <Box sx={{position: 'relative', marginTop:'10px'}}>
                <AddScore title='Goles' score={goalsScore} setScore={setGoalsScore} setComments={setGoalsComments}></AddScore>               
                <AddScore title='Asistencias' score={assistsScore} setScore={setAssistsScore} setComments={setAssistsComments}></AddScore>               
                <AddScore title='Tarjetas' score={cardsScore} setScore={setCardsScore} setComments={setCardComments}></AddScore>               
              </Box>
            </Box>            
          </Box>
          <Box sx={{marginTop:'10px', textAlign:'center'}}>
            <Button onClick={ save } variant="contained" color='primary' startIcon={<SaveIcon />}>Guardar</Button>
          </Box>
        </Box>
    </Layout>
  )
}

export default AddMatchPage;
