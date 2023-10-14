import { useContext } from 'react';
import { Box, Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';


import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import SettingsIcon from '@mui/icons-material/Settings';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

import { UIContext } from '../../context/ui';

const menuItems: string[] = ['Temporadas','Estadísticas','Ajustes','Salir']


export const Sidebar = () => {

    const { sidemenuOpen, closeSideMenu  } = useContext( UIContext );


    return (
        <Drawer
            anchor="left"
            open={ sidemenuOpen }
            onClose={ closeSideMenu }
        >
            <Box sx={{ width: 250 }}>

                <Box sx={{ padding:'5px 10px' }}>
                    <Typography variant="h4">Menú</Typography>
                </Box>

                <List>
                    {
                        menuItems.map( (text, index) => (
                            <ListItem button key={ text }>
                                <ListItemIcon>
                                    { index == 0 ? <SportsSoccerIcon />: index == 1 ? <AnalyticsIcon />: index == 2 ? <SettingsIcon /> : <ExitToAppIcon />  }
                                </ListItemIcon>
                                <ListItemText primary={ text } />
                            </ListItem>
                        ))
                    }
                </List>
            </Box>
            
        </Drawer>
    )
};