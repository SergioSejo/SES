import { useContext } from 'react';

import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

import { UIContext } from '../../context/ui';

export const Navbar = () => {

  const { openSideMenu, titlePage } = useContext( UIContext );

  return (
      <AppBar position='sticky'>
          <Toolbar>
              <IconButton 
                size='large'
                edge="start"
                onClick={ openSideMenu }
              >
                  <MenuOutlinedIcon />
              </IconButton>

              <Typography sx={{marginRight:'30%'}} variant='h6'>SES - {titlePage}</Typography>
          </Toolbar>
      </AppBar>
  )
};