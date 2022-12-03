import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Quote } from './interfaces/Quote';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import QuotesList from './pages/QuotesList';
import RandomQuote from './pages/RandomQuote';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<QuotesList />} />
        <Route path='/random-quote' element={<RandomQuote />} />
      </Routes>
    </>
  );
}

export default App;
