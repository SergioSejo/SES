import React, { FC, useContext } from 'react';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { Box, Typography } from '@mui/material';

import { SeasonContext } from '../../context/season';

interface Props {
    title?: string;
}

export const Seasons:FC<Props> = ({ title }) => {

    const { seasonActive, changeSeason } = useContext( SeasonContext );

    const handleChange = (event: SelectChangeEvent) => {
        changeSeason(event.target.value);
    };

    return (
        <Box>
            <Box sx={{display:'flex', justifyContent: 'center'}}>
                <Typography variant="h2">
                    { title } de la
                </Typography>
                <Select
                    value={seasonActive}
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
