import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { FC } from 'react';

interface Props{
    number: string;
}

export const MatchImages:FC<Props> = ({number}) => {

    const limit:number = number == '1' ? 17 : number == '2' ? 21 : number == '3' ? 2 : number == '5' ? 4 : 0
    const arrayLimit: Number[] = Array.from({length: limit}, (_, i) => i + 1)

    return (
        <ImageList sx={{ width: 700, height: 550 }} cols={3} rowHeight={164}>
            {arrayLimit.map((item) => (
            <ImageListItem key={`${item}`}>
                <img
                srcSet={`/static/img/matches/${number}/${item}.JPG?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                src={`/static/img/matches/${number}/${item}.JPG?w=164&h=164&fit=crop&auto=format`}
                loading="lazy"
                />
            </ImageListItem>
            ))}
        </ImageList>
    );
}