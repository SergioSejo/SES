import type { NextPage } from 'next';
import { useRouter } from 'next/router';

import Button from '@mui/material/Button';

const IndexPage: NextPage= () => {

  const router = useRouter();

  const onClick = () => {
    router.push('/home');    
  }
  return (
      <>
        <Button onClick={ onClick } variant="contained" color='secondary'>Entrar</Button>
      </>
  )
}

export default IndexPage;
