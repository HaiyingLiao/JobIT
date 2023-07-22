// import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { CssBaseline } from '@mui/material';

import { Navbar } from './components';

import { Home, JobSearch, EstimatedSalary } from './pages';

import './app.css';
import { Box } from '@mui/system';

export default function App() {
  return (
    <>
      <Box
        className='mainContainer'
        sx={{ display: 'flex', height: '100%', backgroundColor: '#f9fafc' }}
      >
        <CssBaseline />
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/job-search' element={<JobSearch />} />
          <Route exact path='/estimated-salary' element={<EstimatedSalary />} />
        </Routes>
      </Box>
    </>
  );
}
