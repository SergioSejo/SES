import React from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { Layout } from '@/components/layouts';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const AddMatchPage: NextPage = () => {

  const router = useRouter();
  const onClick = () => {
    router.push('/settings');    
  }

  return (
    <Layout title='Añadir partido'>
        <Box sx={{ width: '100%' }}>
          <Box sx={{textAlign:'left'}}>
            <Button onClick={ onClick } variant="contained" color='secondary' startIcon={<ArrowBackIcon />}>Volver</Button>
          </Box>
          ADD MATCH
        </Box>
    </Layout>
  )
}

export default AddMatchPage;
