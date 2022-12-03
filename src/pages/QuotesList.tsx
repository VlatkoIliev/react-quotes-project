import { useEffect, useState } from 'react';
import { Quote } from '../interfaces/Quote';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import Loader from '../components/Loader';
import Error from '../components/Error';
import { useFetch } from '../hooks/useFetch';

const QuotesPage = styled.div`
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TableHeadName = styled.p`
  font-size: 20px;
  font-weight: 600;
`;

const QuotesList = () => {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const { loading, error, data } = useFetch('/quotes');

  useEffect(() => {
    if (data) {
      setQuotes(data);
    } else {
      setQuotes([]);
    }
  }, [data]);

  if (loading) return <Loader />;
  if (error) return <Error />;

  return (
    <QuotesPage>
      <Link to={'/random-quote'} className='btn btn--get-random'>
        Get random quote
      </Link>
      <Table sx={{ width: 800 }} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>
              <TableHeadName>Anime</TableHeadName>
            </TableCell>
            <TableCell align='left'>
              <TableHeadName>Character</TableHeadName>
            </TableCell>
            <TableCell align='left'>
              <TableHeadName>Quote</TableHeadName>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {quotes?.map((item, index) => {
            return (
              <TableRow
                key={index}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component='th' scope='row'>
                  {item.anime}
                </TableCell>

                <TableCell align='left'>{item.character}</TableCell>
                <TableCell align='left'>{item.quote}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </QuotesPage>
  );
};

export default QuotesList;
