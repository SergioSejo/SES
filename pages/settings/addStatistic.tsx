import React from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { Layout } from '@/components/layouts';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const AddStatisticPage: NextPage = () => {

  const router = useRouter();
  const onClick = () => {
    router.push('/settings');    
  }

  return (
    <Layout title='Añadir estadísticas'>
        <Box sx={{ width: '100%' }}>
          <Box sx={{textAlign:'left'}}>
            <Button onClick={ onClick } variant="contained" color='secondary' startIcon={<ArrowBackIcon />}>Volver</Button>
          </Box>
          ADD STATISTICS
        </Box>
    </Layout>
  )
}

export default AddStatisticPage;
