import { Routes, Route } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import { Toaster } from 'react-hot-toast';

import { Navbar } from './components';

import { Home, JobSearch, EstimatedSalary } from './pages';

import './app.css';
import { Box } from '@mui/system';

export default function App() {
  return (
    <>
      <CssBaseline />
      <Navbar />

      <Box
        className='mainContainer'
        sx={{
          height: '100%',
          width: '100%',
          maxWidth: '1470px',
          margin: '0 auto',
          padding: '1.5%',
          backgroundColor: 'customColor.pageBG',
        }}
      >
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/job-search' element={<JobSearch />} />
          <Route exact path='/estimated-salary' element={<EstimatedSalary />} />
        </Routes>
      </Box>
      <Toaster />
    </>
  );
}
