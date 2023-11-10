import { FC } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { PlayerScore } from '@/interfaces/statistic';
import { Box } from '@mui/material';

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
  playerScore: PlayerScore[];
}
  

export const StatisticsSingle:FC<Props> = ({playerScore}) => {  
  return (
    <Box sx={{marginTop: '10px'}}>
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
            {playerScore.map((row, index) => (
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
    </Box>
  );
}
