import React from 'react'
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { Box, Typography } from '@mui/material';

export const Seasons = () => {

    const handleChange = (event: SelectChangeEvent) => {
        console.log("HOLA MUNDO");
      };
    return (
        <Box>
            <Box sx={{display:'flex', justifyContent: 'center'}}>
            <Typography variant="h2">
                Estadísticas de la
            </Typography>
                <Select
                    value={"2"}
                    onChange={handleChange}
                >
                    <MenuItem value={1}>Temporada 1</MenuItem>
                    <MenuItem value={2}>Temporada 2</MenuItem>
                    <MenuItem value={3}>Temporada 3</MenuItem>
                    <MenuItem value={4}>Temporada 4</MenuItem>
                </Select>
            </Box>
        </Box>
        
    )
}