import { FC } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Typography } from '@mui/material';
import { TotalStatistics } from '@/interfaces/statistic';

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

interface Props {
  totalStatistics: TotalStatistics;
}

export const StatisticsTotal:FC<Props> = ({totalStatistics}) => {  
  return (
    <Box sx={{marginTop:'10px'}}>
      <Box sx={{display:'flex', backgroundColor:'#121212', justifyContent: 'center'}}>
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
              <StyledTableRow >
                  <StyledTableCell align="right">{totalStatistics.goals}</StyledTableCell>
                  <StyledTableCell align="right">{totalStatistics.assists}</StyledTableCell>
                  <StyledTableCell align="right">{totalStatistics.cards}</StyledTableCell>
                  <StyledTableCell align="right">{totalStatistics.pichichi}</StyledTableCell>
                  <StyledTableCell align="right">{totalStatistics.assistant}</StyledTableCell>
                  <StyledTableCell align="right">{totalStatistics.dirty}</StyledTableCell>
              </StyledTableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}