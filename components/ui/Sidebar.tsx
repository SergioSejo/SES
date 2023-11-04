import { useContext } from 'react';
import { useRouter } from 'next/router';
import { Box, Drawer, List, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';

import HomeIcon from '@mui/icons-material/Home';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import SettingsIcon from '@mui/icons-material/Settings';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

import { UIContext } from '../../context/ui';

const menuItems: string[] = ['Inicio','Partidos','Estadísticas','Ajustes','Salir']


export const Sidebar = () => {

    const { sidemenuOpen, closeSideMenu  } = useContext( UIContext );
    const router = useRouter();

    const onClick = (event: React.MouseEvent<HTMLElement>) => {
        const button = event.target as HTMLInputElement;
        let buttonText = button.innerText;
        let destiny = '';
        switch (buttonText) {
            case 'Inicio':
                destiny = '/home';
                break;
            case 'Partidos':
                destiny = '/matches';
                break;
            case 'Estadísticas':
                destiny = '/statistics';
                break;        
            default:
                break;
        }
        if(destiny != '') {
            router.push(`${ destiny }`);
            closeSideMenu();
        }
        
    }

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
                            <ListItemButton key={ text } onClick={ onClick }>
                                <ListItemIcon>
                                    { index == 0 ? <HomeIcon /> : index == 1 ? <SportsSoccerIcon />: index == 2 ? <AnalyticsIcon />: index == 3 ? <SettingsIcon /> : <ExitToAppIcon />  }
                                </ListItemIcon>
                                <ListItemText primary={ text } />
                            </ListItemButton>
                        ))
                    }
                </List>
            </Box>
            
        </Drawer>
    )
};