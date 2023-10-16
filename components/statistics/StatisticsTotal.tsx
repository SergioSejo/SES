import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Typography } from '@mui/material';

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
  
  const rowsTotal = [
    createDataTotal(95, 68, 7,'Javier Palomo', 'Enrique Sánchez', 'Javier Palomo / Héctor'),
  ];

export const StatisticsTotal = () => {  
    return (
      <>
        <Box sx={{display:'flex', justifyContent: 'center'}}>
          <Typography variant="h3">
              Estadísticas totales
          </Typography>
        </Box>
        <TableContainer component={Paper}>
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
      </>
      );
}
