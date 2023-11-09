import React, { FC, useContext } from 'react';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { Box, Typography } from '@mui/material';

import { SeasonContext } from '../../context/season';
import {  seasons_mock } from '@/utils'

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
                <Typography sx={{marginRight: '10px'}} variant="h4">
                    { title }
                </Typography>
                <Select
                    sx={{maxHeight:'40px'}}
                    value={seasonActive}
                    onChange={handleChange}
                >
                    {
                    seasons_mock.map((season) => (
                        <MenuItem key={season} value={season}>Temporada {season}</MenuItem>
                    ))
                    }
                </Select>
            </Box>
        </Box>
        
    )
}
