import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Seasons } from '../season/Seasons';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
}));

function createData(
  name: string,
  goals: number,
  assists: number,
  cards: number,
) {
  return { name, goals, assists, cards };
}

const rows = [
  createData('Sergio Jiménez', 9, 2, 0),
  createData('Javier Palomo', 17, 7, 2),
  createData('Enrique Sánchez', 13, 13, 0),
  createData('Adrián Díaz', 7, 6, 1),
];
  

export const StatisticsSingle = () => {  
    return (
      <>
        <Seasons title='Estadísticas'></Seasons>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }}>
            <TableHead>
              <TableRow>
                <StyledTableCell>Jugador</StyledTableCell>
                <StyledTableCell align="right">Goles</StyledTableCell>
                <StyledTableCell align="right">Asistencias</StyledTableCell>
                <StyledTableCell align="right">Tarjetas</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => (
                <StyledTableRow key={index}>
                    <StyledTableCell component="th" scope="row">
                    {row.name}
                    </StyledTableCell>
                    <StyledTableCell align="right">{row.goals}</StyledTableCell>
                    <StyledTableCell align="right">{row.assists}</StyledTableCell>
                    <StyledTableCell align="right">{row.cards}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </>
      );
}
