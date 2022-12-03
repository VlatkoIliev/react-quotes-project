import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

interface Quote {
  anime: string;
  character: string;
  quote: string;
}

interface Quotes {
  quotes: Quote[];
}

const QuotesTable = ({ quotes }: Quotes) => {
  return (
    <div>
      <Table sx={{ width: 800 }} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>Anime</TableCell>
            <TableCell align='right'>Character</TableCell>
            <TableCell align='right'>Quote</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {quotes?.map((item, index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component='th' scope='row'>
                {item.anime}
              </TableCell>

              <TableCell align='right'>{item.character}</TableCell>
              <TableCell align='right'>{item.quote}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default QuotesTable;
