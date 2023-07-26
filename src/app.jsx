import { Routes, Route } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import { Toaster } from 'react-hot-toast';

import { Navbar } from './components';

import { Home, JobSearch, EstimatedSalary, JobDetailPage } from './pages';

import './app.css';

export default function App() {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/job-search' element={<JobSearch />} />
        <Route exact path='/job-detail' element={<JobDetailPage />} />
        <Route exact path='/estimated-salary' element={<EstimatedSalary />} />
      </Routes>
      <Toaster />
    </>
  );
}
