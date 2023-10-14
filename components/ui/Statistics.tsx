import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

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

function createDataTotal(
    goalsTotal: number,
    assistsTotal: number,
    cardsTotal: number,
    pichichi: string,
    assistant: string,
    dirty: string
  ) {
    return { goalsTotal, assistsTotal, cardsTotal, pichichi, assistant, dirty };
  }

  const rows = [
    createData('Sergio Jiménez', 9, 2, 0),
    createData('Javier Palomo', 17, 7, 2),
    createData('Enrique Sánchez', 13, 13, 0),
    createData('Adrián Díaz', 7, 6, 1),
  ];
  
  const rowsTotal = [
    createDataTotal(95, 68, 7,'Javier Palomo', 'Enrique Sánchez', 'Javier Palomo / Héctor'),
  ];

export const Statistics = () => {
    return (
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
          <hr></hr>
          <hr></hr>
          <hr></hr>
          <Table sx={{ minWidth: 650 }}>
            <TableHead>
              <TableRow>
                <StyledTableCell align="right">Goles totales</StyledTableCell>
                <StyledTableCell align="right">Asistencias totales</StyledTableCell>
                <StyledTableCell align="right">Tarjetas totales</StyledTableCell>
                <StyledTableCell align="right">Pichichi</StyledTableCell>
                <StyledTableCell align="right">Asistente</StyledTableCell>
                <StyledTableCell align="right">Sucio</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rowsTotal.map((rowTotal, index) => (
                <StyledTableRow key={index}>
                    <StyledTableCell align="right">{rowTotal.goalsTotal}</StyledTableCell>
                    <StyledTableCell align="right">{rowTotal.assistsTotal}</StyledTableCell>
                    <StyledTableCell align="right">{rowTotal.cardsTotal}</StyledTableCell>
                    <StyledTableCell align="right">{rowTotal.pichichi}</StyledTableCell>
                    <StyledTableCell align="right">{rowTotal.assistant}</StyledTableCell>
                    <StyledTableCell align="right">{rowTotal.dirty}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      );
}
